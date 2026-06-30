 

function Tag({ children, accent }) {
  return (
    <span style={{
      display: "inline-block",
      background: accent ? "rgba(56,189,248,0.12)" : "rgba(255,255,255,0.06)",
      color: accent ? "#38bdf8" : "rgba(226,232,240,0.7)",
      border: `1px solid ${accent ? "rgba(56,189,248,0.25)" : "rgba(255,255,255,0.08)"}`,
      borderRadius: 4, fontSize: 11, padding: "2px 8px",
      fontFamily: "'Space Mono', monospace", letterSpacing: "0.04em",
    }}>{children}</span>
  );
}
export default Tag;