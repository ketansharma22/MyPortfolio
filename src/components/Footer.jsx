import { NAV_LINKS, SOCIAL_LINKS } from "../data/portfolioData";

export default function Footer({ T }) {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: T.bg,
        borderTop: `1px solid ${T.border}`,
        padding: "64px max(24px, 5vw) 32px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Top grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 24,
                backgroundImage: T.grad,
WebkitBackgroundClip: "text",
backgroundClip: "text",
WebkitTextFillColor: "transparent",
color: "transparent",
display: "inline-block",
                marginBottom: 16,
              }}
            >
              KS
              <span
                style={{
                  WebkitTextFillColor: T.text3,
                  fontWeight: 300,
                  fontSize: 18,
                }}
              >
                .dev
              </span>
            </div>
            <p
              style={{
                color: T.text3,
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 280,
                marginBottom: 20,
              }}
            >
              Crafting exceptional digital experiences with clean code and modern design
              systems.
            </p>
            {/* Available badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 100,
                background: T.glass,
                border: `1px solid ${T.border}`,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 6px #22C55E",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: T.text3,
                }}
              >
                Open to work
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: T.text,
                marginBottom: 16,
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    style={{
                      fontSize: 14,
                      color: T.text3,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      fontFamily: "'Manrope', sans-serif",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = T.text3)}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: T.text,
                marginBottom: 16,
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Web Development", "API Development", "UI/UX Design", "Consulting"].map((l) => (
                <li key={l}>
                  <span style={{ fontSize: 14, color: T.text3 }}>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: T.text,
                marginBottom: 16,
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: T.glass,
                    border: `1px solid ${T.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: T.text2,
                    transition: "all 0.2s",
                    fontFamily: "'DM Mono', monospace",
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = T.grad;
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = T.glass;
                    e.currentTarget.style.color = T.text2;
                    e.currentTarget.style.borderColor = T.border;
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            paddingTop: 24,
            borderTop: `1px solid ${T.border}`,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: T.text3,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            © {year} Ketan Sharma. Crafted with ❤️ & ☕
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: T.grad,
              color: "#fff",
              border: "none",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(0,191,255,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,191,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,191,255,0.3)";
            }}
          >
            ↑
          </button>
        </div>
      </div>

      {/* Responsive footer grid */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
