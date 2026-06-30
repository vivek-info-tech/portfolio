
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "24px",
      textAlign: "center",
      fontFamily: "'Space Mono', monospace",
      fontSize: 12,
      color: "rgba(226,232,240,0.25)",
    }}>
      Built with React · {new Date().getFullYear()} · Vivek Kumar
    </footer>
  );
}

export default Footer;