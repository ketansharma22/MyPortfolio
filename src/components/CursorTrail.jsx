import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════
   CursorTrail — spawns small glowing particles that follow the mouse,
   colored using the active theme's accent + accent2 gradient.
   Only active on desktop (hidden on mobile/touch devices).
═══════════════════════════════════════════════════════════════════ */

const TRAIL_COUNT = 18;   // number of trail dots
const DOT_SIZE    = 10;   // max size in px (shrinks along trail)
const LIFETIME    = 600;  // ms each dot lives

export default function CursorTrail({ T }) {
  const containerRef = useRef(null);
  const mouseRef     = useRef({ x: -200, y: -200 });
  const dotsRef      = useRef([]);
  const rafRef       = useRef(null);
  const lastSpawn    = useRef(0);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    // Track mouse position
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Spawn a new trail dot
    const spawnDot = () => {
      const { x, y } = mouseRef.current;

      // Pick a color interpolated along the gradient
      const t       = Math.random();
      const color   = lerpColor(T.accent, T.accent2, t);
      const size    = DOT_SIZE * (0.4 + Math.random() * 0.6);
      const offsetX = (Math.random() - 0.5) * 6;
      const offsetY = (Math.random() - 0.5) * 6;

      const el = document.createElement("div");
      el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9990;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${x + offsetX}px;
        top:  ${y + offsetY}px;
        transform: translate(-50%, -50%);
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
        opacity: 0.85;
        transition: opacity ${LIFETIME}ms ease, transform ${LIFETIME}ms ease;
        will-change: opacity, transform;
      `;

      container.appendChild(el);

      // Store reference for cleanup
      const dot = { el, born: Date.now() };
      dotsRef.current.push(dot);

      // Trigger fade-out + drift on next frame
      requestAnimationFrame(() => {
        el.style.opacity   = "0";
        el.style.transform = `translate(-50%, -50%) scale(0.2)`;
      });

      // Remove from DOM after lifetime
      setTimeout(() => {
        el.remove();
        dotsRef.current = dotsRef.current.filter((d) => d !== dot);
      }, LIFETIME);
    };

    // Throttled spawn loop
    const loop = (now) => {
      if (now - lastSpawn.current > 30) { // spawn every ~30ms
        spawnDot();
        lastSpawn.current = now;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      // Clean up all dots
      dotsRef.current.forEach((d) => d.el.remove());
      dotsRef.current = [];
    };
  // Re-run when theme accent colors change
  }, [T.accent, T.accent2]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9990,
        overflow: "hidden",
      }}
    />
  );
}

/* ─── Helper: lerp between two hex colors ─────────────────────────── */
function lerpColor(hexA, hexB, t) {
  const parse = (hex) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  });

  const a = parse(hexA);
  const b = parse(hexB);

  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);

  return `rgb(${r}, ${g}, ${bl})`;
}
