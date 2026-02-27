import { useState } from "react";
import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle } from "./UI";
import { EXPERIENCE } from "../data/portfolioData";

/* ─── ExperienceItem ─────────────────────────────────────────────── */
function ExperienceItem({ exp, T, i, vis }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={vis ? "visible" : ""}
      style={{ animationDelay: `${i * 0.15}s`, display: "flex", gap: 28 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Timeline node */}
      <div
        style={{
          flexShrink: 0,
          width: 64,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 4,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: T.grad,
            zIndex: 1,
            boxShadow: hover
              ? `0 0 0 6px ${exp.color}22, 0 0 20px ${exp.color}66`
              : `0 0 0 4px ${exp.color}18`,
            transition: "all 0.3s",
            animation: hover ? "nodeGlow 1.5s ease infinite" : "none",
          }}
        />
      </div>

      {/* Content card */}
      <div
        style={{
          flex: 1,
          padding: "22px 28px",
          borderRadius: 20,
          background: hover ? T.glassHover : T.glass,
          border: `1px solid ${hover ? exp.color + "55" : T.border}`,
          transition: "all 0.3s ease",
          boxShadow: hover ? `0 0 24px ${exp.color}18` : "none",
          transform: hover ? "translateX(4px)" : "none",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                color: T.text,
              }}
            >
              {exp.role}
            </h3>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                backgroundImage: T.grad,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                display: "inline-block",
                marginTop: 2,
              }}
            >
              {exp.company}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: T.text3,
                padding: "4px 10px",
                borderRadius: 6,
                background: T.surface2,
                border: `1px solid ${T.border}`,
              }}
            >
              {exp.duration}
            </div>
            <div style={{ fontSize: 12, color: T.text3, marginTop: 4 }}>{exp.location}</div>
          </div>
        </div>

        <ul style={{ listStyle: "none", marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          {exp.points.map((pt) => (
            <li key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span
                style={{
                  color: exp.color,
                  fontFamily: "'DM Mono', monospace",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                →
              </span>
              <span style={{ color: T.text2, fontSize: 14, lineHeight: 1.6 }}>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Experience Section ─────────────────────────────────────────── */
export default function Experience({ T }) {
  const [ref, vis] = useIntersect();

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div className={vis ? "visible" : ""} style={{ textAlign: "center", marginBottom: 72 }}>
          <SectionLabel T={T}>// Work History</SectionLabel>
          <SectionTitle T={T} center>
            Professional{" "}
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
              Experience
            </span>
          </SectionTitle>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 32,
              top: 0,
              bottom: 0,
              width: 1,
              background: `linear-gradient(to bottom, transparent, ${T.accent}88, ${T.accent2}88, transparent)`,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {EXPERIENCE.map((exp, i) => (
              <ExperienceItem key={exp.company} exp={exp} T={T} i={i} vis={vis} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
