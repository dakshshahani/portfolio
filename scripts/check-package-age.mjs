// Min-age guard: fails `pnpm install`/`update`/`add` if any resolved package
// version was published less than MIN_PACKAGE_AGE_DAYS days ago (default 10).
//
// Usage / env:
//   MIN_PACKAGE_AGE_DAYS=10   quarantine window (0 disables the age check)
//   NPM_REGISTRY=...          override registry (default https://registry.npmjs.org)
//   SKIP_MIN_AGE_GUARD=1      bypass entirely (offline CI, deliberate installs)
//   CI=1 or VERCEL=1           skip automatically (frozen-lockfile installs never
//                              "update" anything, so the guard adds no protection)
//
// Cache: publish times persisted to .package-age-cache.json (gitignored) so
// repeat installs are fast and offline-capable. A name is re-fetched only when
// a newly resolved version isn't already in the cache.
"use strict";

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const MIN_AGE_DAYS = Number(process.env.MIN_PACKAGE_AGE_DAYS ?? 10);
const REGISTRY = (process.env.NPM_REGISTRY || "https://registry.npmjs.org").replace(/\/$/, "");
const CACHE_FILE = join(ROOT, ".package-age-cache.json");
const CONCURRENCY = 8;
const DAY_MS = 24 * 60 * 60 * 1000;

if (process.env.SKIP_MIN_AGE_GUARD === "1") process.exit(0);

// Frozen-lockfile installs (Vercel, GitHub Actions, etc.) can't silently update
// anything, so the quarantine guard is only meaningful on local machines.
if (process.env.CI === "1" || process.env.CI === "true" || process.env.VERCEL === "1") {
  process.exit(0);
}

const cache = loadCache();
let changed = false;

function loadCache() {
  try {
    return JSON.parse(readFileSync(CACHE_FILE, "utf8"));
  } catch {
    return {};
  }
}
function saveCache() {
  if (!changed) return;
  try {
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch (err) {
    console.warn(`[min-age] could not write cache: ${err.message}`);
  }
}

// Every resolved package version lives in pnpm-lock.yaml under `snapshots:`.
// Snapshot keys look like `@scope/name@1.2.3(...)` or `name@1.2.3(...)` — i.e.
// a single `@` separates the name from the version. Parsing the lockfile (rather
// than `pnpm list`) captures the full transitive tree offline and exactly as installed.
function collect() {
  let text;
  try {
    text = readFileSync(join(ROOT, "pnpm-lock.yaml"), "utf8");
  } catch {
    console.warn("[min-age] no pnpm-lock.yaml found; skipping guard.");
    process.exit(0);
  }

  const names = new Map(); // name -> Set(version)
  let inSnapshots = false;
  for (const raw of text.split("\n")) {
    if (!inSnapshots) {
      if (raw.trim() === "snapshots:") inSnapshots = true;
      continue;
    }
    const m = /^( {2,})(.+)$/.exec(raw); // leading spaces, then content
    if (!m) continue;
    const indent = m[1].length;
    if (indent < 2) {
      inSnapshots = false; // left the snapshots section
      continue;
    }
    if (indent !== 2) continue; // nested block (a snapshot's dependencies), ignore
    let key = m[2].trim();
    if (key.endsWith(":")) key = key.slice(0, -1).trim();
    if (
      (key.startsWith("'") && key.endsWith("'")) ||
      (key.startsWith('"') && key.endsWith('"'))
    ) {
      key = key.slice(1, -1);
    }
    const base = key.split("(")[0];
    const at = base.lastIndexOf("@");
    if (at <= 0) continue;
    const version = base.slice(at + 1);
    if (!/^\d/.test(version)) continue;
    const name = base.slice(0, at);
    if (!names.has(name)) names.set(name, new Set());
    names.get(name).add(version);
  }
  return names;
}

async function fetchTimeMap(name) {
  // Check cache first; refresh only if a needed version is missing.
  const needed = [...(names.get(name) ?? [])];
  const cached = cache[name];
  const missing = needed.some((v) => !cached || !cached[v]);
  if (!missing) return cached ?? {};

  const encoded = name.startsWith("@") ? name.replace("/", "%2F") : name;
  const res = await fetch(`${REGISTRY}/${encoded}`); // full metadata — includes the per-version `time` map
  if (res.status === 404) return null; // not on registry (private/git/workspace)
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${name}`);
  const meta = await res.json();
  const time = meta && typeof meta.time === "object" ? meta.time : {};
  cache[name] = time;
  changed = true;
  return time;
}

async function withConcurrency(items, fn) {
  let i = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      await fn(items[idx]);
    }
  });
  await Promise.all(workers);
}

const names = collect();
const allNames = [...names.keys()];
let fetchFailures = 0;
let fetched = 0;

await withConcurrency(allNames, async (name) => {
  try {
    await fetchTimeMap(name);
    fetched++;
  } catch (err) {
    fetchFailures++;
    if (process.env.DEBUG) console.warn(`[min-age] failed to fetch ${name}: ${err.message}`);
  }
});

// Offline/registry-down: don't brick installs over a transient network issue.
if (fetchFailures === allNames.length && fetched === 0) {
  console.warn("[min-age] could not reach registry; skipping guard (offline?).");
  process.exit(0);
}

saveCache();

const violations = [];
const unverifiable = [];
for (const [name, versions] of names) {
  const time = cache[name];
  for (const version of versions) {
    const pub = time && time[version];
    if (!pub) {
      unverifiable.push(`${name}@${version}`);
      continue;
    }
    const ageDays = (Date.now() - Date.parse(pub)) / DAY_MS;
    if (ageDays < MIN_AGE_DAYS) {
      violations.push({ name, version, ageDays });
    }
  }
}

if (violations.length > 0) {
  console.error(`\n[age-guard] ${violations.length} package(s) are under ${MIN_AGE_DAYS} days old:`);
  for (const v of violations.sort((a, b) => a.ageDays - b.ageDays)) {
    console.error(
      `  - ${v.name}@${v.version}  (${v.ageDays.toFixed(1)} days old)` +
        `  -> pin: pnpm add ${v.name}@${v.version}`
    );
  }
  console.error(
    `\nNothing was changed. To accept a fresh package anyway, re-run with SKIP_MIN_AGE_GUARD=1.`
  );
  process.exit(1);
}

if (unverifiable.length) {
  console.warn(`[min-age] ${unverifiable.length} package(s) not on the registry (private/git deps); skipped: e.g. ${unverifiable.slice(0, 3).join(", ")}`);
}

if (process.env.DEBUG) console.log(`[min-age] ok: all packages >= ${MIN_AGE_DAYS} days old (${fetched} registry fetch(es))`);