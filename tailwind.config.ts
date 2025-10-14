import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  // enable dark‑mode via the `class` on <html>
  darkMode: "class",

  // tell Tailwind where to look for class names
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      // font stacks
      fontFamily: {
        sans: [
          "system-ui",
          "ui-sans-serif",
          "Helvetica Neue",
          "Arial",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          "ui-monospace",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          ...defaultTheme.fontFamily.mono,
        ],
        // example for custom fonts exposed by next/font
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },

      // shadcn / design‑token color bindings
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },

      // rounded‑corner tokens
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // animations used by shadcn components (accordion/dropdown etc.)
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // plugins for shadcn/ui & animation utilities
  plugins: [require("tailwindcss-animate")],
};

export default config;