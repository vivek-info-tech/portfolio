import data from "../utils/Data.js";
function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#38bdf8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
    </div>
  );
}

export default SectionLabel;