import data from "../utils/Data.js";
import SectionLabel from "./SectionLabel.jsx";
import Tag from "./Tag.jsx";

function Experience() {
  const exp = data.experience[0];
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>Experience</SectionLabel>
      <div style={{
        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16, padding: "32px 36px",
        borderLeft: "3px solid #38bdf8",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>{exp.role}</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#38bdf8", marginTop: 4 }}>
              {exp.org} · {exp.location}
            </div>
          </div>
          <Tag accent>{exp.period}</Tag>
        </div>
        <ul style={{ margin: "20px 0 0", padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 10 }}>
          {exp.points.map((p, i) => (
            <li key={i} style={{ color: "rgba(226,232,240,0.65)", fontSize: 14.5, lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;