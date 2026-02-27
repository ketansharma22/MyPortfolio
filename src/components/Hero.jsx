import { useTyping } from "../hooks";
import { GradientBtn } from "./UI";
import { HERO_TYPING_WORDS, HERO_STATS } from "../data/portfolioData";

export default function Hero({ T }) {
  const typed = useTyping(HERO_TYPING_WORDS, 85, 1800);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      padding: "0 max(20px, 5vw)",
      background: T.bg,
    }}>
      {/* Blobs */}
      {[
        { x: "-10%", y: "10%",  c1: `${T.accent}22`, c2: `${T.accent2}14`, size: 600, delay: "0s"   },
        { x: "70%",  y: "20%",  c1: `${T.accent2}18`,c2: `${T.accent}10`,  size: 500, delay: "-7s"  },
        { x: "20%",  y: "70%",  c1: `${T.accent}10`, c2: `${T.accent2}20`, size: 400, delay: "-14s" },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute", left: b.x, top: b.y,
          width: b.size, height: b.size,
          background: `radial-gradient(circle, ${b.c1} 0%, ${b.c2} 50%, transparent 70%)`,
          animation: `blob 18s ease-in-out ${b.delay} infinite`,
          filter: "blur(40px)", pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}/>
      ))}

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`,
        backgroundSize: "60px 60px", opacity: 0.4, pointerEvents: "none",
      }}/>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1280, margin: "0 auto", width: "100%",
        paddingTop: 80, paddingBottom: 48,
      }}>
        <div style={{ maxWidth: 800 }}>

          {/* Status badge */}
          <div className="animate-in" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderRadius: 100,
            background: T.glass, border: `1px solid ${T.border}`,
            marginBottom: 28,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22C55E", boxShadow: "0 0 8px #22C55E",
              animation: "pulse 2s ease infinite",
            }}/>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: T.text2 }}>
              Available for new projects
            </span>
          </div>

          {/* Heading */}
          <div className="animate-in animate-in-delay-1">
            <div style={{
              fontFamily: "'DM Mono', monospace", color: T.accent,
              fontSize: 14, marginBottom: 10, letterSpacing: 1,
            }}>
              &lt; Hello World /&gt;
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
              fontWeight: 800, lineHeight: 1.05,
              color: T.text, marginBottom: 8,
            }}>
              Hi, I'm{" "}
              <span style={{
                backgroundImage: T.grad,
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent", color: "transparent",
                display: "inline-block",
              }}>
                Ketan Sharma
              </span>
            </h1>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.2rem, 3.5vw, 2.8rem)",
              fontWeight: 700, color: T.text2, marginBottom: 20,
            }}>
              Full Stack Developer
            </h2>
          </div>

          {/* Typing */}
          <div className="animate-in animate-in-delay-2" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(13px, 2vw, 19px)",
            color: T.accent, marginBottom: 28, minHeight: 28,
          }}>
            &gt; {typed}
            <span style={{ animation: "cursorBlink 1s step-end infinite" }}>_</span>
          </div>

          {/* Description */}
          <p className="animate-in animate-in-delay-3" style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            color: T.text2, lineHeight: 1.75,
            maxWidth: 560, marginBottom: 36,
          }}>
            I craft exceptional digital experiences — from architecting scalable
            backends to building pixel-perfect UIs. Passionate about clean code,
            performance, and experiences that genuinely delight users.
          </p>

          {/* CTAs */}
          <div className="animate-in animate-in-delay-4" style={{
            display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48,
          }}>
            <GradientBtn T={T} onClick={() => scrollTo("projects")}>
              View Projects →
            </GradientBtn>
            <GradientBtn T={T} outline onClick={() => {
              const a = document.createElement("a");
              a.href = "/ketanCV.pdf";
              a.download = "ketanCV.pdf";
              a.click();
            }}>
              ↓ Download Resume
            </GradientBtn>
            <GradientBtn T={T} outline onClick={() => scrollTo("contact")}>
              Contact Me
            </GradientBtn>
          </div>

          {/* Stats */}
          <div className="animate-in animate-in-delay-5" style={{
            display: "flex", flexWrap: "wrap", gap: "20px 40px",
          }}>
            {HERO_STATS.map((stat) => (
              <div key={stat.l}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "clamp(1.3rem, 3vw, 2rem)",
                  backgroundImage: T.grad,
                  WebkitBackgroundClip: "text", backgroundClip: "text",
                  WebkitTextFillColor: "transparent", color: "transparent",
                  display: "inline-block",
                }}>
                  {stat.n}
                </div>
                <div style={{ fontSize: 12, color: T.text3, marginTop: 2 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small screens */}
      <div className="desktop-only" style={{
        position: "absolute", bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "float 2.5s ease infinite", opacity: 0.45,
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.text3, letterSpacing: 2 }}>
          SCROLL
        </span>
        <div style={{ width: 1, height: 40, background: `linear-gradient(${T.accent}, transparent)` }}/>
      </div>
    </section>
  );
}
