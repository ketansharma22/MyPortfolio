import { useState, useEffect } from "react";

import "./styles/global.css";

import { useTheme } from "./hooks";

import Preloader      from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import CursorTrail    from "./components/CursorTrail";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Experience     from "./components/Experience";
// import Services    from "./components/Services"; // hidden for now
import Testimonials   from "./components/Testimonials";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [dark, toggleTheme, T, paletteId, setPalette] = useTheme();

  useEffect(() => {
    document.body.style.background = T.bg;
    document.body.style.color      = T.text;
    document.body.style.transition = "background 0.3s ease, color 0.3s ease";
  }, [T]);

  if (!loaded) return <Preloader onDone={() => setLoaded(true)} />;

  return (
    <>
      <ScrollProgress T={T} />
      <CursorTrail T={T} />
      <Navbar
        T={T}
        dark={dark}
        toggleTheme={toggleTheme}
        paletteId={paletteId}
        setPalette={setPalette}
      />
      <main>
        <Hero         T={T} />
        <About        T={T} />
        <Skills       T={T} />
        <Projects     T={T} />
        <Experience   T={T} />
        {/* <Services T={T} /> hidden for now */}
        <Testimonials T={T} />
        <Contact      T={T} />
      </main>
      <Footer T={T} />
    </>
  );
}
