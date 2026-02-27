import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { COLOR_PALETTES } from "../data/theme";
import { useScrollSpy } from "../hooks";

/* PaletteRow */
function PaletteRow({ p, isActive, T, dark, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "9px 10px", borderRadius: 12, width: "100%", textAlign: "left",
        cursor: "pointer", transition: "all 0.2s",
        background: isActive
          ? `${p.colors.accent}18`
          : hover ? (dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)") : "transparent",
        border: `1px solid ${isActive ? p.colors.accent + "44" : "transparent"}`,
      }}
    >
      <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
        {p.preview.map((color, i) => (
          <div key={i} style={{
            width: i === 0 ? 16 : 9, height: 20, borderRadius: 4,
            background: color, border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0,
          }}/>
        ))}
      </div>
      <span style={{
        fontFamily: "'Manrope', sans-serif", fontSize: 13,
        fontWeight: isActive ? 700 : 500,
        color: isActive ? p.colors.accent : T.text,
        flex: 1,
      }}>
        {p.emoji} {p.label}
      </span>
      {isActive && <span style={{ color: p.colors.accent, fontSize: 13, fontWeight: 700 }}>✓</span>}
    </button>
  );
}

export default function Navbar({ T, dark, toggleTheme, paletteId, setPalette }) {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef                   = useRef(null);
  const active                      = useScrollSpy();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target))
        setPickerOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setPickerOpen(false);
  };

  const currentPalette = COLOR_PALETTES.find((p) => p.id === paletteId) || COLOR_PALETTES[0];
  const darkPalettes   = COLOR_PALETTES.filter((p) => p.dark);
  const lightPalettes  = COLOR_PALETTES.filter((p) => !p.dark);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? dark ? "rgba(13,13,13,0.92)" : "rgba(245,245,247,0.92)"
          : "transparent",
        backdropFilter:       scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        padding: "0 max(16px, 4vw)",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 60,
        }}>

          {/* Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20,
            backgroundImage: T.grad,
            WebkitBackgroundClip: "text", backgroundClip: "text",
            WebkitTextFillColor: "transparent", color: "transparent",
            display: "inline-block", cursor: "pointer", userSelect: "none", flexShrink: 0,
          }}>
            KS
            <span style={{ WebkitTextFillColor: T.text2, color: T.text2, fontWeight: 300, fontSize: 16 }}>
              .dev
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} style={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 13,
                color: active === link ? T.accent : T.text2,
                padding: "5px 12px", borderRadius: 8,
                background: active === link ? `${T.accent}15` : "transparent",
                transition: "all 0.2s ease", border: "none", cursor: "pointer", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { if (active !== link) { e.currentTarget.style.color = T.text; e.currentTarget.style.background = T.glass; }}}
              onMouseLeave={(e) => { if (active !== link) { e.currentTarget.style.color = T.text2; e.currentTarget.style.background = "transparent"; }}}
              >{link}</button>
            ))}
          </div>

          {/* Right Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

            {/* Palette Picker */}
            <div ref={pickerRef} style={{ position: "relative" }}>
              <div style={{ position: "relative", display: "inline-block" }}
                onMouseEnter={(e) => {
                  const tip = e.currentTarget.querySelector(".palette-tooltip");
                  if (tip) { tip.style.opacity = "1"; tip.style.transform = "translateX(-50%) translateY(-2px)"; }
                }}
                onMouseLeave={(e) => {
                  const tip = e.currentTarget.querySelector(".palette-tooltip");
                  if (tip) { tip.style.opacity = "0"; tip.style.transform = "translateX(-50%) translateY(0px)"; }
                }}
              >
                <button
                  onClick={() => setPickerOpen((o) => !o)}
                  aria-label="Change theme"
                  style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: `linear-gradient(135deg, ${currentPalette.colors.accent}, ${currentPalette.colors.accent2})`,
                    border: `2px solid ${pickerOpen ? T.accent : T.border}`,
                    cursor: "pointer", transition: "all 0.25s", display: "block",
                    boxShadow: pickerOpen ? `0 0 14px ${currentPalette.colors.accent}77` : "none",
                    transform: pickerOpen ? "scale(1.12)" : "scale(1)",
                  }}
                />
                <span className="palette-tooltip" style={{
                  position: "absolute", bottom: "calc(100% + 10px)", left: "50%",
                  transform: "translateX(-50%) translateY(0px)",
                  background: dark ? "#1A1A1A" : "#FFFFFF",
                  color: T.text2, fontSize: 11,
                  fontFamily: "'DM Mono', monospace",
                  whiteSpace: "nowrap", padding: "5px 10px", borderRadius: 8,
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  pointerEvents: "none", opacity: 0,
                  transition: "opacity 0s, transform 0s", zIndex: 9999,
                }}>
                  🎨 Play with themes
                </span>
              </div>

              {pickerOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 12px)", right: 0, zIndex: 2000,
                  background: dark ? "#1A1A1A" : "#FFFFFF",
                  border: `1px solid ${T.border}`,
                  borderRadius: 20, padding: 18, width: 240,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
                  animation: "fadeUp 0.18s ease",
                  maxHeight: "80vh", overflowY: "auto",
                }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: T.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                    🎨 Choose Theme
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.text3, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>🌙 Dark</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
                    {darkPalettes.map((p) => (
                      <PaletteRow key={p.id} p={p} isActive={p.id === paletteId} T={T} dark={dark} onClick={() => { setPalette(p.id); setPickerOpen(false); }} />
                    ))}
                  </div>
                  <div style={{ height: 1, background: T.border, marginBottom: 14 }} />
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.text3, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>☀️ Light</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {lightPalettes.map((p) => (
                      <PaletteRow key={p.id} p={p} isActive={p.id === paletteId} T={T} dark={dark} onClick={() => { setPalette(p.id); setPickerOpen(false); }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark/Light toggle */}
            <button onClick={toggleTheme} aria-label="Toggle dark/light mode" style={{
              width: 40, height: 22, borderRadius: 11,
              background: dark ? T.surface2 : "#E0E0E8",
              border: `1px solid ${T.border}`,
              position: "relative", transition: "all 0.3s",
              cursor: "pointer", flexShrink: 0,
            }}>
              <div style={{
                position: "absolute", top: 2,
                left: dark ? "auto" : 2, right: dark ? 2 : "auto",
                width: 16, height: 16, borderRadius: "50%",
                background: dark ? T.accent : "#888",
                transition: "all 0.3s",
                boxShadow: dark ? `0 0 8px ${T.accent}` : "none",
                fontSize: 9, lineHeight: "16px", textAlign: "center",
              }}>{dark ? "☽" : "☼"}</div>
            </button>

            {/* Hamburger mobile only */}
            <button className="mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{
              display: "flex", flexDirection: "column", gap: 4,
              width: 34, height: 34, alignItems: "center", justifyContent: "center",
              background: T.glass, border: `1px solid ${T.border}`,
              borderRadius: 8, cursor: "pointer", flexShrink: 0,
            }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  width: 16, height: 1.5, background: T.text, borderRadius: 1, transition: "all 0.3s",
                  transform: menuOpen ? (i===0 ? "rotate(45deg) translate(3px,3px)" : i===2 ? "rotate(-45deg) translate(3px,-3px)" : "scaleX(0)") : "none",
                  opacity: menuOpen && i===1 ? 0 : 1,
                }}/>
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: dark ? "rgba(13,13,13,0.97)" : "rgba(245,245,247,0.97)",
          backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 4, animation: "fadeIn 0.2s ease",
          overflowY: "auto", padding: "20px 0",
        }}>
          {NAV_LINKS.map((link, i) => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: "clamp(22px, 8vw, 36px)",
              color: active === link ? T.accent : T.text,
              background: "none", border: "none",
              padding: "8px 24px", transition: "color 0.2s",
              cursor: "pointer",
              animation: `fadeUp 0.4s ease ${i * 0.06}s both`,
            }}>{link}</button>
          ))}
          {/* Mobile palette dots */}
          <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", padding: "0 32px" }}>
            {COLOR_PALETTES.map((p) => (
              <button key={p.id} onClick={() => { setPalette(p.id); setMenuOpen(false); }} title={p.label} aria-label={p.label} style={{
                width: 30, height: 30, borderRadius: "50%",
                background: `linear-gradient(135deg, ${p.colors.accent}, ${p.colors.accent2})`,
                border: `2px solid ${p.id === paletteId ? "#fff" : "transparent"}`,
                cursor: "pointer",
                boxShadow: p.id === paletteId ? `0 0 10px ${p.colors.accent}` : "none",
                transition: "all 0.2s",
              }}/>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
