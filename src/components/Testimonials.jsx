import { useState, useEffect } from "react";
import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle } from "./UI";
import { TESTIMONIALS } from "../data/portfolioData";

export default function Testimonials({ T }) {
  const [ref, vis] = useIntersect();
  const [idx, setIdx] = useState(0);

  const go = (dir) => setIdx((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div className={vis ? "visible" : ""} style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel T={T}>// Client Love</SectionLabel>
          <SectionTitle T={T} center>
            What People{" "}
            <span
              style={{
                backgroundImage: T.grad,
WebkitBackgroundClip: "text",
backgroundClip: "text",
WebkitTextFillColor: "transparent",
color: "transparent",
display: "inline-block",
              }}
            >
              Say
            </span>
          </SectionTitle>
        </div>

        {/* Active testimonial card */}
        <div
          className={vis ? "visible-scale" : ""}
          style={{
            padding: 48,
            borderRadius: 28,
            background: T.glass,
            border: `1px solid ${T.border}`,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 0 60px rgba(0,191,255,0.06)`,
            marginBottom: 32,
          }}
        >
          {/* Decorative quote mark */}
          <div
            style={{
              position: "absolute",
              top: -10,
              left: 32,
              fontSize: 120,
              lineHeight: 1,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              background: T.grad,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0.12,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            "
          </div>

          {/* Stars */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
            {[...Array(t.rating)].map((_, i) => (
              <span key={i} style={{ color: "#F59E0B", fontSize: 18 }}>★</span>
            ))}
          </div>

          {/* Quote text */}
          <p
            style={{
              color: T.text,
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.85,
              fontStyle: "italic",
              marginBottom: 32,
              position: "relative",
              zIndex: 1,
              fontWeight: 300,
            }}
          >
            "{t.text}"
          </p>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: T.grad,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {t.avatar}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: T.text,
                }}
              >
                {t.name}
              </div>
              <div style={{ fontSize: 13, color: T.text3, marginTop: 2 }}>{t.role}</div>
            </div>
          </div>
        </div>

        {/* Prev / Dots / Next */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: T.glass,
              border: `1px solid ${T.border}`,
              color: T.text2,
              fontSize: 18,
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text2; }}
          >
            ←
          </button>

          <div style={{ display: "flex", gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === idx ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === idx ? T.accent : T.text3,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: i === idx ? `0 0 8px ${T.accent}` : "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: T.glass,
              border: `1px solid ${T.border}`,
              color: T.text2,
              fontSize: 18,
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text2; }}
          >
            →
          </button>
        </div>

        {/* Avatar strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          {TESTIMONIALS.map((tm, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Select ${tm.name}`}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                opacity: i === idx ? 1 : 0.4,
                transition: "opacity 0.3s",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: i === idx ? T.grad : T.surface2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  color: i === idx ? "#fff" : T.text3,
                  border: `2px solid ${i === idx ? T.accent : "transparent"}`,
                  boxShadow: i === idx ? T.glow : "none",
                }}
              >
                {tm.avatar}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
