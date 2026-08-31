import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  float noise1 = snoise(vec2(uv.x * 2.5 + uTime * 0.15, uv.y * 1.5 - uTime * 0.12)) * uAmplitude;
  float noise2 = snoise(vec2(uv.x * 1.8 - uTime * 0.08, uv.y * 2.2 + uTime * 0.18)) * uAmplitude;
  
  float combined = uv.y + noise1 * 0.35 + noise2 * 0.25;
  combined = clamp(combined, 0.0, 1.0);
  
  vec3 col = mix(uColorStops[0], uColorStops[1], smoothstep(0.0, 0.5, combined));
  col = mix(col, uColorStops[2], smoothstep(0.5, 1.0, combined));
  
  float alpha = smoothstep(0.9, 0.1, uv.y) * 0.45;
  fragColor = vec4(col, alpha * uBlend);
}
`;

export default function Aurora({
  colorStops = ['#6366f1', '#06b6d4', '#10b981'],
  amplitude = 1.0,
  blend = 0.6,
  timeScale = 0.5,
  className = ''
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let renderer;
    try {
      renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: false,
        antialias: true
      });
    } catch (e) {
      console.warn('WebGL not supported for Aurora:', e);
      return;
    }

    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);

    const parsedColors = colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: parsedColors.flat() },
        uResolution: { value: [container.offsetWidth || window.innerWidth, container.offsetHeight || window.innerHeight] },
        uBlend: { value: blend }
      },
      transparent: true
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      if (!container) return;
      const w = container.offsetWidth || window.innerWidth;
      const h = container.offsetHeight || window.innerHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    };

    window.addEventListener('resize', resize);
    resize();

    let animId;
    let lastTime = performance.now();
    let totalTime = 0;

    const update = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      totalTime += dt * timeScale;

      program.uniforms.uTime.value = totalTime;
      renderer.render({ scene: mesh });
      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      if (gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, [colorStops, amplitude, blend, timeScale]);

  return (
    <div
      ref={containerRef}
      className={`aurora-bg-container ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
