import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { useScrollSpy } from "../hooks";

export default function Navbar({ T, dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled
            ? dark
              ? "rgba(13,13,13,0.88)"
              : "rgba(245,245,247,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
          padding: "0 max(24px, 5vw)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* ── Logo ── */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              backgroundImage: T.grad,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            KS
            <span
              style={{
                WebkitTextFillColor: T.text2,
                fontWeight: 300,
                fontSize: 18,
              }}
            >
              .dev
            </span>
          </div>

          {/* ── Desktop Nav ── */}
          <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: active === link ? T.accent : T.text2,
                  padding: "6px 14px",
                  borderRadius: 8,
                  background: active === link ? `${T.accent}15` : "transparent",
                  transition: "all 0.2s ease",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (active !== link) {
                    e.currentTarget.style.color = T.text;
                    e.currentTarget.style.background = T.glass;
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link) {
                    e.currentTarget.style.color = T.text2;
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* ── Right Controls ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                background: dark ? T.surface2 : "#E0E0E8",
                border: `1px solid ${T.border}`,
                position: "relative",
                transition: "all 0.3s",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 3,
                  left: dark ? "auto" : 3,
                  right: dark ? 3 : "auto",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: dark ? T.accent : "#888",
                  transition: "all 0.3s",
                  boxShadow: dark ? `0 0 8px ${T.accent}` : "none",
                  fontSize: 10,
                  lineHeight: "16px",
                  textAlign: "center",
                }}
              >
                {dark ? "☽" : "☼"}
              </div>
            </button>

            {/* Hamburger (mobile only) */}
            <button
              className="mobile-only"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                width: 36,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                background: T.glass,
                border: `1px solid ${T.border}`,
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 18,
                    height: 1.5,
                    background: T.text,
                    borderRadius: 1,
                    transition: "all 0.3s",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(4px, 4px)"
                        : i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "scaleX(0)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: dark ? "rgba(13,13,13,0.96)" : "rgba(245,245,247,0.96)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            animation: "fadeIn 0.2s ease",
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 32,
                color: active === link ? T.accent : T.text,
                background: "none",
                border: "none",
                padding: "8px 24px",
                transition: "color 0.2s",
                cursor: "pointer",
                animation: `fadeUp 0.4s ease ${i * 0.06}s both`,
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
