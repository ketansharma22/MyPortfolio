import { useState } from "react";
import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle } from "./UI";
import { SERVICES } from "../data/portfolioData";

/* ─── ServiceCard ────────────────────────────────────────────────── */
function ServiceCard({ svc, T, i, vis }) {
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
          padding: "32px 28px",
          borderRadius: 20,
          height: "100%",
          background: hover ? T.glassHover : T.glass,
          border: `1px solid ${hover ? svc.color + "55" : T.border}`,
          transition: "all 0.35s ease",
          boxShadow: hover ? `0 0 32px ${svc.color}18, 0 12px 40px rgba(0,0,0,0.2)` : "none",
          transform: hover ? "translateY(-8px)" : "none",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: hover ? T.grad : T.surface2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            marginBottom: 24,
            transition: "all 0.3s",
            boxShadow: hover ? `0 0 24px ${svc.color}44` : "none",
          }}
        >
          {svc.icon}
        </div>

        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 19,
            color: T.text,
            marginBottom: 12,
          }}
        >
          {svc.title}
        </h3>
        <p style={{ color: T.text2, fontSize: 14, lineHeight: 1.75 }}>{svc.desc}</p>

        {/* CTA arrow */}
        <div
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            color: hover ? svc.color : T.text3,
            transition: "color 0.3s",
          }}
        >
          Learn more{" "}
          <span
            style={{
              transition: "transform 0.3s",
              display: "inline-block",
              transform: hover ? "translateX(4px)" : "none",
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Services Section ───────────────────────────────────────────── */
export default function Services({ T }) {
  const [ref, vis] = useIntersect();

  return (
    <section
      id="services"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg2 }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div className={vis ? "visible" : ""} style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel T={T}>// What I Do</SectionLabel>
          <SectionTitle T={T} center>
            Services I{" "}
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
              Offer
            </span>
          </SectionTitle>
          <p style={{ color: T.text2, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            End-to-end development services — from initial architecture to production deployment.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} T={T} i={i} vis={vis} />
          ))}
        </div>
      </div>
    </section>
  );
}
