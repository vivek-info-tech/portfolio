import data from "../utils/Data.js";
import SectionLabel from "./SectionLabel.jsx";
import Tag from "./Tag.jsx";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>Projects</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {data.projects.map((p, i) => (
          <div key={i}  style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: "24px 26px", display: "flex", flexDirection: "column",
            transition: "border-color 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {p.highlight && (
              <div style={{ marginBottom: 12 }} >
                <span style={{
                  background: "rgba(56,189,248,0.12)", color: "#38bdf8",
                  border: "1px solid rgba(56,189,248,0.25)", borderRadius: 4,
                  fontSize: 10, padding: "3px 8px", fontFamily: "'Space Mono', monospace", letterSpacing: "0.06em",
                }}>★ {p.highlight}</span>
              </div> 
            )}
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "#e2e8f0", fontFamily: "'Inter', sans-serif", marginBottom: 10,  }}  className="group-hover:text-sky-400 transition-colors">{p.title}</h3>
            <p style={{ color: "rgba(226,232,240,0.55)", fontSize: 14, lineHeight: 1.7, fontFamily: "'Inter', sans-serif", flex: 1, margin: "0 0 16px" }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
              {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            {(p.github || p.live) && (
              <div className="flex gap-6 mt-auto pt-4 border-t border-white/5">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-sky-400 transition-colors">
                    <FaGithub size={14} /> GITHUB
                  </a>
                )}
                {p.live && p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-sky-400 transition-colors">
                    <ExternalLink size={14} /> LIVE DEMO
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
