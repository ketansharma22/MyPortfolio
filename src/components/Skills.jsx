import { useState, useEffect, useRef } from "react";
import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle } from "./UI";
import { SKILLS, ALL_SKILL_TAGS } from "../data/portfolioData";

/* ─── SkillCard ─────────────────────────────────────────────────── */
function SkillCard({ skill, T, i, vis }) {
  const [hover, setHover]       = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (vis) {
      setTimeout(() => setBarWidth(skill.level), 200 + i * 100);
    }
  }, [vis, skill.level, i]);

  return (
    <div
      className={vis ? "visible-scale" : ""}
      style={{ animationDelay: `${i * 0.08}s` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          padding: 24,
          borderRadius: 20,
          background: hover ? T.glassHover : T.glass,
          border: `1px solid ${hover ? T.borderHover : T.border}`,
          transition: "all 0.3s ease",
          boxShadow: hover ? T.glow : "none",
          transform: hover ? "translateY(-4px)" : "none",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: hover ? T.grad : T.surface2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            marginBottom: 16,
            transition: "all 0.3s",
            boxShadow: hover ? `0 4px 16px ${T.accent}44` : "none",
          }}
        >
          {skill.icon}
        </div>

        {/* Name + level */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: T.text,
            }}
          >
            {skill.name}
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 13,
              color: T.accent,
            }}
          >
            {skill.level}%
          </span>
        </div>

        {/* Animated progress bar */}
        <div
          style={{
            height: 4,
            borderRadius: 4,
            background: T.surface2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: 4,
              background: T.grad,
              width: `${barWidth}%`,
              transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: `0 0 8px ${T.accent}66`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Skills Section ─────────────────────────────────────────────── */
export default function Skills({ T }) {
  const [ref, vis]       = useIntersect();
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div className={vis ? "visible" : ""} style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel T={T}>// Tech Stack</SectionLabel>
          <SectionTitle T={T} center>
            My{" "}
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
              Expertise
            </span>
          </SectionTitle>
          <p style={{ color: T.text2, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Technologies I use to build fast, maintainable, production-ready systems.
          </p>
        </div>

        {/* Tab nav */}
        <div
          className={vis ? "visible" : ""}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          {Object.keys(SKILLS).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.25s",
                background: activeTab === tab ? T.grad : T.glass,
                color: activeTab === tab ? "#fff" : T.text2,
                border: `1px solid ${activeTab === tab ? "transparent" : T.border}`,
                boxShadow: activeTab === tab ? "0 4px 20px rgba(0,191,255,0.25)" : "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {SKILLS[activeTab].map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} T={T} i={i} vis={vis} />
          ))}
        </div>

        {/* Tag cloud */}
        <div
          className={vis ? "visible animate-in-delay-4" : ""}
          style={{
            marginTop: 48,
            padding: "28px 32px",
            borderRadius: 20,
            background: T.glass,
            border: `1px solid ${T.border}`,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {ALL_SKILL_TAGS.map((s) => (
            <span
              key={s}
              style={{
                padding: "5px 14px",
                borderRadius: 100,
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: T.text2,
                background: T.surface,
                border: `1px solid ${T.border}`,
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = T.accent;
                e.currentTarget.style.borderColor = `${T.accent}55`;
                e.currentTarget.style.boxShadow = `0 0 12px ${T.accent}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = T.text2;
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
