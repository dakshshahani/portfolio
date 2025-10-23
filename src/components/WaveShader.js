// src/components/WaveShader.js
import * as THREE from "three";

export const WaveShader = {
  uniforms: {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
    iMouse: { value: new THREE.Vector2() },
  },

  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
   uniform float iTime;
uniform vec3 iResolution;
uniform vec2 iMouse;
varying vec2 vUv;

void main() {
  // Center coordinates
  vec2 uv = (2.0 * vUv * iResolution.xy - iResolution.xy)
            / min(iResolution.x, iResolution.y);

  // Original distortion loop
  for (float i = 1.0; i < 10.0; i++) {
    uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
    uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
  }

  // B/W wave color
  vec3 color = vec3(0.1) / abs(sin(iTime - uv.y - uv.x));

  // Mouse position normalized to (-1, 1)
  vec2 m = (iMouse.xy / iResolution.xy) * 2.0 - 1.0;
  m.y *= -1.0;

  // Distance between current pixel and mouse
  float d = distance(uv, m);

  // Sharp circular mask around the mouse
  float mask = smoothstep(0.25, 0.24, d);

  // Important: use mask as alpha, not just multiplier
  gl_FragColor = vec4(color, mask);
}
  `,
};