// src/components/ShaderScene.js
"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { WaveShader } from "./WaveShader";

function ShaderPlane() {
  const mat = useRef();
  const { size } = useThree();

  useEffect(() => {
    const u = mat.current.uniforms;
    u.iResolution.value.set(size.width, size.height, 1);

    const move = (e) => {
      // Flip y-axis for shader coordinates
      u.iMouse.value.set(e.clientX, size.height - e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [size]);

  useFrame((state) => {
    mat.current.uniforms.iTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={mat} args={[WaveShader]} transparent />
    </mesh>
  );
}

export default function ShaderScene() {
  return (
    <Canvas
      orthographic
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ width: "100vw", height: "100vh", display: "block" }}
    >
      <ShaderPlane />
    </Canvas>
  );
}