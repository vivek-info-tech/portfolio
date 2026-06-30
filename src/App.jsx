 import { useState, useEffect, useRef } from "react";
 import NavBar from "./components/NavBar.jsx";
 import Hero from "./components/Hero.jsx";
 import Skills from "./components/Skills.jsx";
 import Experience from "./components/Experience.jsx";
 import Projects from "./components/Projects.jsx";
 import Education from "./components/Education.jsx";
 import Contact from "./components/Contact.jsx";
 import Footer from "./components/Footer.jsx";
 

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const active = useActiveSection();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #08090e; color: #e2e8f0; }
        html { scroll-behavior: smooth; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #08090e; }
        ::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.3); border-radius: 3px; }
        @media (max-width: 640px) {
          .desk-nav { display: none !important; }
          .ham-btn { display: block !important; }
        }
        a:hover { opacity: 0.8; }
      `}</style>
      <NavBar active={active} />
      <main>
        <Hero />
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

 
 // ── Active section tracker ───────────────────────────────────────────────────

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const ids = ["about", "skills", "experience", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}
