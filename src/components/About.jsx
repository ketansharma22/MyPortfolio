import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle, GradientBtn } from "./UI";

export default function About({ T }) {
  const [ref, vis] = useIntersect();

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg2 }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* ── Profile Image Column ── */}
          <div className={vis ? "visible-left" : ""} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "min(360px, 100%)" }}>
              {/* Glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: 28,
                  background: T.grad,
                  opacity: 0.15,
                  filter: "blur(32px)",
                }}
              />
              {/* Gradient border */}
              <div
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: 26,
                  background: T.grad,
                  padding: 2,
                  zIndex: 1,
                }}
              >
                <div style={{ borderRadius: 24, background: T.bg2, height: "100%" }} />
              </div>

              {/* Profile card */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  aspectRatio: "4 / 4.5",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${T.surface2} 0%, ${T.surface} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: T.grad,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 42,
                      color: "#fff",
                      boxShadow: `0 0 40px ${T.accent}44`,
                    }}
                  >
                    KS
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: T.text,
                    }}
                  >
                    Ketan Sharma
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 13,
                      color: T.accent,
                      marginTop: 4,
                    }}
                  >
                    Full Stack Developer
                  </div>
                </div>
              </div>

              {/* Floating stack badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  zIndex: 3,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: 14,
                  padding: "10px 16px",
                  backdropFilter: "blur(12px)",
                  boxShadow: T.shadow,
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: T.text3,
                  }}
                >
                  Current Stack
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: T.accent,
                    marginTop: 2,
                  }}
                >
                  Next js + TypeScript
                </div>
              </div>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div className={vis ? "visible-right" : ""}>
            <SectionLabel T={T}>// About Me</SectionLabel>
            <SectionTitle T={T}>
              Turning ideas into
              <br />
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
                digital reality
              </span>
            </SectionTitle>

            <p style={{ color: T.text2, lineHeight: 1.85, marginBottom: 20, fontSize: 16 }}>
              With over <strong style={{ color: T.text }}>1.5 years of experience</strong> building
              production-grade web applications, I specialize in crafting high-performance,
              scalable systems that bridge great engineering with great design.
            </p>
            <p style={{ color: T.text2, lineHeight: 1.85, marginBottom: 32, fontSize: 16 }}>
              I've worked across startups and enterprise teams — leading architecture decisions,
              shipping products used by millions, and mentoring engineers. My philosophy: write
              code that's not just functional, but{" "}
              <strong style={{ color: T.text }}>maintainable, tested, and delightful</strong> to
              work with.
            </p>

            {/* Quick facts grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 32,
              }}
            >
              {[
                { label: "Location",   val: "Bangalore, India" },
                { label: "Experience", val: "1.5 Years" },
                { label: "Freelance",  val: "Available" },
                { label: "Education",  val: "B.Tech CS" },
              ].map((f) => (
                <div
                  key={f.label}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: T.glass,
                    border: `1px solid ${T.border}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: T.text3,
                      fontFamily: "'DM Mono', monospace",
                      marginBottom: 4,
                    }}
                  >
                    {f.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: T.text }}>{f.val}</div>
                </div>
              ))}
            </div>

            <GradientBtn
              T={T}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Work Together →
            </GradientBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
