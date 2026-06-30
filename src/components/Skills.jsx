import data from "../utils/Data.js";
import SectionLabel from "./SectionLabel.jsx";
import Tag from "./Tag.jsx";
function Skills() {
  const colors = { Languages: "#38bdf8", Frontend: "#a78bfa", Backend: "#34d399", Database: "#fb923c", Security: "#f472b6", "Tools & Cloud": "#facc15" };
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>Technical Skills</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {Object.entries(data.skills).map(([cat, items]) => (
          <div key={cat} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12, padding: "20px 22px",
            borderTop: `3px solid ${colors[cat] || "#38bdf8"}`,
          }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: colors[cat] || "#38bdf8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>{cat}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {items.map(s => <Tag key={s}>{s}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;