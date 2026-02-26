import { useState, useEffect } from "react";

// Styles
import "./styles/global.css";

// Hooks
import { useTheme } from "./hooks";

// Components
import Preloader     from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Projects      from "./components/Projects";
import Experience    from "./components/Experience";
import Services      from "./components/Services";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

export default function App() {
  const [loaded, setLoaded]        = useState(false);
  const [dark, toggleTheme, T]     = useTheme();

  // Sync body background + text color with active theme
  useEffect(() => {
    document.body.style.background  = T.bg;
    document.body.style.color       = T.text;
    document.body.style.transition  = "background 0.3s ease, color 0.3s ease";
  }, [T]);

  // Show preloader on first mount
  if (!loaded) {
    return <Preloader onDone={() => setLoaded(true)} />;
  }

  return (
    <>
      {/* Global scroll progress bar at top */}
      <ScrollProgress T={T} />

      {/* Sticky navigation */}
      <Navbar T={T} dark={dark} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main>
        <Hero         T={T} />
        <About        T={T} />
        <Skills       T={T} />
        <Projects     T={T} />
        <Experience   T={T} />
        <Services     T={T} />
        <Contact      T={T} />
      </main>

      <Footer T={T} />
    </>
  );
}
