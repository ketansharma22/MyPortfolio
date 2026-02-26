import { useState, useEffect } from "react";

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit]         = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setExit(true);
        setTimeout(onDone, 500);
      }, 400);
    }
  }, [progress, onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0D0D0D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        opacity: exit ? 0 : 1,
        transform: exit ? "scale(1.02)" : "scale(1)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        pointerEvents: exit ? "none" : "all",
      }}
    >
      {/* Spinning logo mark */}
      <div style={{ position: "relative", width: 72, height: 72 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00BFFF, #8B5CF6)",
            animation: "spin 1.5s linear infinite",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 8,
            borderRadius: "50%",
            background: "#0D0D0D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            backgroundImage: "linear-gradient(135deg, #00BFFF, #8B5CF6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          KS
        </div>
      </div>

      {/* Status text */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "rgba(255,255,255,0.4)",
            fontSize: 13,
            marginBottom: 8,
          }}
        >
          Initializing portfolio...
        </div>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#00BFFF",
            fontSize: 13,
          }}
        >
          {Math.min(Math.round(progress), 100)}%
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 240,
          height: 2,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 2,
            background: "linear-gradient(90deg, #00BFFF, #8B5CF6)",
            width: `${Math.min(progress, 100)}%`,
            transition: "width 0.1s ease",
            boxShadow: "0 0 12px rgba(0,191,255,0.6)",
          }}
        />
      </div>
    </div>
  );
}
