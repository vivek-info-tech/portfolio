import data from "../utils/Data.js";
import SectionLabel from "./SectionLabel.jsx";

function Education() {
  return (
    <section id="education" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>Education</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 52 }}>
        {data.education.map((e, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12, padding: "22px 24px",
          }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0", fontFamily: "'Inter', sans-serif", marginBottom: 6 }}>{e.degree}</div>
            <div style={{ fontSize: 13, color: "rgba(226,232,240,0.55)", fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>{e.institute}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(226,232,240,0.4)" }}>{e.period}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#38bdf8" }}>CGPA {e.cgpa}</span>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>Achievements & Certifications</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.achievements.map((a, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 16,
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 8, padding: "14px 20px",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8", flexShrink: 0 }} />
            <div style={{ fontWeight: 500, color: "#e2e8f0", fontSize: 14, fontFamily: "'Inter', sans-serif", flex: 1 }}>{a.label}</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "rgba(226,232,240,0.4)" }}>{a.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Education;