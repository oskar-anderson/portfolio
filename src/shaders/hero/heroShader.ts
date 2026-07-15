import { gsap } from "gsap";
import { createShader, createProgram } from "../shaderHelpers";
import vertexSrc from "./vertex.glsl?raw";
import fragmentSrc from "./fragment.glsl?raw";

/**
 * Boots the hero WebGL background on the given canvas element.
 * No-op if the canvas or a WebGL context is unavailable.
 */
export function initHeroShader(canvasId = "hero-canvas") {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;
  const gl = canvas.getContext("webgl");
  if (!gl) return;

  const vs = createShader(gl, gl.VERTEX_SHADER, vertexSrc);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
  if (!vs || !fs) return;
  const program = createProgram(gl, vs, fs);
  if (!program) return;

  const loc = {
    position: gl.getAttribLocation(program, "position"),
    time: gl.getUniformLocation(program, "iTime"),
    resolution: gl.getUniformLocation(program, "iResolution"),
    mouse: gl.getUniformLocation(program, "iMouse"),
    zoomOffset: gl.getUniformLocation(program, "iZoomOffset"),
    initialXOffset: gl.getUniformLocation(program, "iInitialXOffset"),
    portfolioScrollPercentage: gl.getUniformLocation(program, "iPortfolioScrollPercentage"),
  };

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), gl.STATIC_DRAW);

  const resize = () => {
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  };
  resize();
  window.addEventListener("resize", resize);

  // Cursor effect: track pointer, ease the shader's iMouse toward it each frame.
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let mouseX = targetX;
  let mouseY = targetY;
  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  // Intro reveal, matching the reference (iInitialXOffset 1 -> 0).
  const intro = { value: 1 };
  gsap.to(intro, { value: 0, duration: 7, ease: "power3.out" });

  let time = 0;
  let then = Date.now();

  const render = () => {
    const now = Date.now();
    if (now - then > 1000 / 60) {
      resize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.useProgram(program);

      gl.enableVertexAttribArray(loc.position);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(loc.position, 2, gl.FLOAT, false, 0, 0);

      time++;
      gl.uniform1f(loc.time, time * 0.01);
      gl.uniform2f(loc.resolution, canvas.width, canvas.height);

      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;
      gl.uniform2f(loc.mouse, mouseX / canvas.width, mouseY / canvas.height);

      gl.uniform1f(loc.zoomOffset, 0);
      gl.uniform1f(loc.initialXOffset, intro.value);
      gl.uniform1f(loc.portfolioScrollPercentage, 0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      then = now - ((now - then) % (1000 / 60));
    }
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}
