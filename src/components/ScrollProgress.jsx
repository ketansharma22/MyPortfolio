import { useScrollProgress } from "../hooks";

export default function ScrollProgress({ T }) {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
        height: 2,
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: T.grad,
          transition: "width 0.1s linear",
          boxShadow: `0 0 8px ${T.accent}`,
        }}
      />
    </div>
  );
}
