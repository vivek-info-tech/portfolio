import data from "../utils/Data.js";

function OrbitGraphic() {
  return (
    <svg width="500" height="500" viewBox="0 0 500 500">
      {[80,140,200,260].map((r, i) => (
        <ellipse key={r} cx="250" cy="250" rx={r} ry={r * 0.38}
          fill="none" stroke="#38bdf8" strokeWidth="1"
          transform={`rotate(${i * 22} 250 250)`} />
      ))}
      {[80,140,200,260].map((r, i) => {
        const angle = (i * 82 * Math.PI) / 180;
        const rx = r, ry = r * 0.38;
        const rot = (i * 22 * Math.PI) / 180;
        const x = 250 + (rx * Math.cos(angle) * Math.cos(rot) - ry * Math.sin(angle) * Math.sin(rot));
        const y = 250 + (rx * Math.cos(angle) * Math.sin(rot) + ry * Math.sin(angle) * Math.cos(rot));
        return <circle key={r} cx={x} cy={y} r={5 - i * 0.5} fill="#38bdf8" />;
      })}
      <circle cx="250" cy="250" r="14" fill="#38bdf8" opacity="0.8" />
    </svg>
  );
}

export default OrbitGraphic;
