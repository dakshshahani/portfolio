"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

export function ShaderBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /** ---------- Renderer ---------- **/
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setClearColor(0x000000, 0); // transparent background
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const pr = window.devicePixelRatio;
    const w = window.innerWidth;
    const h = window.innerHeight;

    renderer.setSize(w * pr, h * pr, false);
    renderer.domElement.style.width = `${w}px`;
    renderer.domElement.style.height = `${h}px`;
    mount.appendChild(renderer.domElement);

    /** ---------- Scene + Camera ---------- **/
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    /** ---------- Uniforms ---------- **/
    const uniforms: Record<string, THREE.IUniform<any>> = {
      iTime: { value: 0.0 },
      iResolution: { value: new THREE.Vector3(w * pr, h * pr, 1.0) },
      iMouse: { value: new THREE.Vector2((w * pr) / 2, (h * pr) / 2) },
    };

    /** ---------- Fragment Shader ---------- **/
    const fragmentShader = `
      precision highp float;

      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec2 iMouse;

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        // Normalized coordinates
        vec2 uv =
            (10.0 * fragCoord - iResolution.xy) /
            min(iResolution.x, iResolution.y);

        // Swirl distortion loop
        for (float i = 1.0; i < 10.0; i++) {
          uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
          uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
        }

        // Swirl pattern intensity
        float v = abs(sin(iTime - uv.y - uv.x));

        // Black line generation (high contrast)
        float edge = smoothstep(0.0, 0.25, v);
        vec3 baseColor = vec3(edge); // white base, black ink swirls

        // Mouse feather mask
        float dist = distance(fragCoord.xy, iMouse.xy);
        float radius = 20.0;
        float feather = 200.0;
        float mask = 1.0 - smoothstep(radius, radius + feather, dist);

        // Combine: show lines only inside circular feather
        vec3 finalColor = mix(vec3(1.0), baseColor, mask);
        fragColor = vec4(finalColor, mask);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    /** ---------- Material ---------- **/
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      uniforms,
      transparent: true,
    });

    /** ---------- Mesh ---------- **/
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    /** ---------- Animation ---------- **/
    const start = performance.now();
    const animate = () => {
      uniforms.iTime.value = (performance.now() - start) / 1000;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    /** ---------- Mouse move ---------- **/
    const handleMouse = (e: MouseEvent) => {
      const x = e.clientX * pr;
      const y = (h - e.clientY) * pr; // flip Y for OpenGL space
      uniforms.iMouse.value.set(x, y);
    };
    window.addEventListener("mousemove", handleMouse);

    /** ---------- Resize ---------- **/
    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      const newPR = window.devicePixelRatio;

      renderer.setSize(newW * newPR, newH * newPR, false);
      renderer.domElement.style.width = `${newW}px`;
      renderer.domElement.style.height = `${newH}px`;

      uniforms.iResolution.value.set(newW * newPR, newH * newPR, 1.0);
    };
    window.addEventListener("resize", handleResize);

    /** ---------- Cleanup ---------- **/
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}