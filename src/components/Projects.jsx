  import { useState } from "react";
import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle, GradientBtn } from "./UI";
import { PROJECTS, PROJECT_FILTERS } from "../data/portfolioData";

/* ─── ProjectModal ──────────────────────────────────────────────── */
function ProjectModal({ proj, T, onClose }) {
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        style={{
          background: T.surface,
          borderRadius: 24,
          border: `1px solid ${T.border}`,
          maxWidth: 640,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          animation: "scaleIn 0.3s ease",
          boxShadow: `0 0 60px rgba(0,0,0,0.5), 0 0 40px ${proj.color}22`,
        }}
      >
        {/* Image header */}
        <div
          style={{
            position: "relative",
            height: 240,
            overflow: "hidden",
            borderRadius: "24px 24px 0 0",
          }}
        >
          <img
            src={proj.img}
            alt={proj.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to bottom, transparent 30%, ${T.surface})`,
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,80,80,0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.5)"; }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "0 28px 28px" }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              color: T.text,
              marginBottom: 12,
            }}
          >
            {proj.title}
          </h2>
          <p style={{ color: T.text2, lineHeight: 1.8, marginBottom: 20 }}>{proj.desc}</p>

          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 12,
                color: T.text3,
                fontFamily: "'DM Mono', monospace",
                marginBottom: 8,
              }}
            >
              TECH STACK
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {proj.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontFamily: "'DM Mono', monospace",
                    background: `${proj.color}18`,
                    color: proj.color,
                    border: `1px solid ${proj.color}35`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
          <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
  <GradientBtn T={T} style={{ width: "100%", textAlign: "center" }}>
    🌐 Live Demo
  </GradientBtn>
</a>
<a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
  <GradientBtn T={T} outline style={{ width: "100%", textAlign: "center" }}>
    ⬡ GitHub
  </GradientBtn>
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ProjectCard ───────────────────────────────────────────────── */
function ProjectCard({ proj, T, i, vis, onOpen }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={vis ? "visible-scale" : ""}
      style={{ animationDelay: `${i * 0.1}s` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          background: T.surface,
          height: "100%",
          display: "flex",          
          flexDirection: "column",
          border: `1px solid ${hover ? proj.color + "55" : T.border}`,
          transition: "all 0.35s ease",
          boxShadow: hover
            ? `0 0 32px ${proj.color}22, 0 16px 48px rgba(0,0,0,0.3)`
            : T.shadow,
          transform: hover ? "translateY(-8px) scale(1.01)" : "none",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", height: 200 }}>
          <img
            src={proj.img}
            alt={proj.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hover ? "scale(1.08)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hover
                ? `linear-gradient(to bottom, transparent 20%, ${T.surface}ee)`
                : `linear-gradient(to bottom, transparent 40%, ${T.surface})`,
              transition: "all 0.3s",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: "4px 12px",
              borderRadius: 100,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              fontSize: 12,
              color: "#fff",
              fontFamily: "'DM Mono', monospace",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {proj.category}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 20,
              color: T.text,
              marginBottom: 10,
            }}
          >
            {proj.title}
          </h3>
          <p style={{ color: T.text2, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
            {proj.desc}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {proj.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "3px 10px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontFamily: "'DM Mono', monospace",
                  background: `${proj.color}15`,
                  color: proj.color,
                  border: `1px solid ${proj.color}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
            <button
              onClick={() => onOpen(proj)}
              style={{
                flex: 1,
                padding: "9px 0",
                borderRadius: 10,
                background: T.grad,
                color: "#fff",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s",
                fontFamily: "'Manrope', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 16px ${proj.color}44`;
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              View Details
            </button>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                padding: "9px 14px",
                borderRadius: 10,
                background: T.glass,
                color: T.text2,
                fontWeight: 600,
                fontSize: 13,
                border: `1px solid ${T.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.accent;
                e.currentTarget.style.color = T.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.color = T.text2;
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Projects Section ──────────────────────────────────────────── */
export default function Projects({ T }) {
  const [ref, vis]   = useIntersect();
  const [filter, setFilter] = useState("all");
  const [modal, setModal]   = useState(null);

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg2 }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div className={vis ? "visible" : ""} style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel T={T}>// Projects</SectionLabel>
          <SectionTitle T={T} center>
            Featured{" "}
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
              Work
            </span>
          </SectionTitle>
          <p style={{ color: T.text2, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            A selection of projects that showcase my range — from complex APIs to polished UIs.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 14,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                transition: "all 0.25s",
                background: filter === f.id ? T.grad : T.glass,
                color: filter === f.id ? "#fff" : T.text2,
                border: `1px solid ${filter === f.id ? "transparent" : T.border}`,
                boxShadow: filter === f.id ? "0 4px 20px rgba(0,191,255,0.25)" : "none",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {filtered.map((proj, i) => (
            <ProjectCard
              key={proj.id}
              proj={proj}
              T={T}
              i={i}
              vis={vis}
              onOpen={setModal}
            />
          ))}
        </div>
      </div>

      {modal && <ProjectModal proj={modal} T={T} onClose={() => setModal(null)} />}
    </section>
  );
}
