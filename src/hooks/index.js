import { useState, useEffect, useRef, useCallback } from "react";
import { DARK, LIGHT } from "../data/theme";
import { NAV_LINKS } from "../data/portfolioData";

/* ─── useTheme ──────────────────────────────────────────────────── */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") !== "light";
    } catch {
      return true;
    }
  });

  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d;
      try {
        localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  }, []);

  return [dark, toggle, dark ? DARK : LIGHT];
}

/* ─── useScrollSpy ──────────────────────────────────────────────── */
export function useScrollSpy() {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY + 120;
      let current = "About";
      for (const id of NAV_LINKS) {
        const el = document.getElementById(id.toLowerCase());
        if (el && el.offsetTop <= scrolled) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}

/* ─── useScrollProgress ─────────────────────────────────────────── */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return progress;
}

/* ─── useIntersect ──────────────────────────────────────────────── */
export function useIntersect(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ─── useTyping ─────────────────────────────────────────────────── */
export function useTyping(words, speed = 80, pause = 2000) {
  const [text, setText]         = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setText(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}
