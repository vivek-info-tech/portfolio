import { useState } from "react";

function NavBar({ active }) {
  const [open, setOpen] = useState(false);
  const sections = ["about", "skills", "experience", "projects", "education", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(8,9,14,0.85)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 15, color: "#e2e8f0", letterSpacing: 1 }}>
          vivek-info-tech<span style={{ color: "#38bdf8" }}>.</span>dev
        </span>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 6 }} className="desk-nav">
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 12px", borderRadius: 6,
              fontFamily: "'Space Mono', monospace", fontSize: 12,
              color: active === s ? "#38bdf8" : "rgba(226,232,240,0.6)",
              textTransform: "uppercase", letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}>{s}</button>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)} className="ham-btn" style={{
          display: "none", background: "none", border: "none", cursor: "pointer", color: "#e2e8f0", fontSize: 22
        }}>☰</button>
      </div>
      {open && (
        <div style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px 24px 20px" }}>
          {sections.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{
              display: "block", width: "100%", textAlign: "left", background: "none", border: "none",
              cursor: "pointer", padding: "10px 0", fontFamily: "'Space Mono', monospace",
              fontSize: 13, color: "rgba(226,232,240,0.8)", textTransform: "uppercase", letterSpacing: "0.08em",
            }}>{s}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;