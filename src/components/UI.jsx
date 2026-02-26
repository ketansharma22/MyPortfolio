import { useState } from "react";

/* ─── SectionLabel ──────────────────────────────────────────────── */
export function SectionLabel({ children, T }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: T.accent,
          letterSpacing: 2,
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: T.border, maxWidth: 80 }} />
    </div>
  );
}

/* ─── SectionTitle ──────────────────────────────────────────────── */
export function SectionTitle({ children, T, center }) {
  return (
    <h2
      style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 800,
        lineHeight: 1.15,
        marginBottom: 16,
        textAlign: center ? "center" : undefined,
        color: T.text,
      }}
    >
      {children}
    </h2>
  );
}

/* ─── GradientBtn ───────────────────────────────────────────────── */
export function GradientBtn({ children, onClick, outline, T, style = {} }) {
  const [hover, setHover]     = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((rr) => rr.id !== id)), 600);
    onClick && onClick(e);
  };

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "13px 28px",
        borderRadius: 12,
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600,
        fontSize: 15,
        transition: "all 0.25s ease",
        cursor: "pointer",
        ...(outline
          ? {
              background: "transparent",
              color: T.accent,
              border: `1.5px solid ${T.accent}`,
              boxShadow: hover ? `0 0 20px ${T.accent}44` : "none",
              transform: hover ? "translateY(-2px)" : "none",
            }
          : {
              background: T.grad,
              color: "#fff",
              border: "none",
              boxShadow: hover
                ? "0 8px 32px rgba(0,191,255,0.35)"
                : "0 4px 16px rgba(0,191,255,0.18)",
              transform: hover ? "translateY(-2px)" : "none",
            }),
        ...style,
      }}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: 80,
            height: 80,
            left: r.x - 40,
            top: r.y - 40,
            background: "rgba(255,255,255,0.25)",
            animation: "ripple 0.6s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}
      {children}
    </button>
  );
}

/* ─── GlassCard ─────────────────────────────────────────────────── */
export function GlassCard({ children, T, style = {}, hoverStyle = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? T.glassHover : T.glass,
        border: `1px solid ${hovered ? T.borderHover : T.border}`,
        borderRadius: 20,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        boxShadow: hovered ? T.glow : "none",
        ...style,
        ...(hovered ? hoverStyle : {}),
      }}
    >
      {children}
    </div>
  );
}
