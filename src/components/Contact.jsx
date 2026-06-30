import { useState } from "react";
import data from "../utils/Data.js";
import SectionLabel from "./SectionLabel.jsx";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
    padding: "12px 16px", color: "#e2e8f0", fontSize: 14,
    fontFamily: "'Inter', sans-serif", outline: "none",
    transition: "border-color 0.2s",
  };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Vivek,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}\n\nRegards,\n${form.name}`
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "100px 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionLabel>Get In Touch</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 60, alignItems: "start" }}>

        {/* Left — info */}
        <div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, color: "#e2e8f0", margin: "0 0 16px", fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}>
            Let's build something together.
          </h2>
          <p style={{ color: "rgba(226,232,240,0.5)", fontSize: 15, lineHeight: 1.75, fontFamily: "'Inter', sans-serif", margin: "0 0 36px" }}>
            Open to full-time roles, freelance projects, and interesting collaborations. Fill in the form and it will open your mail client — or reach out directly.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "EMAIL", value: data.email, href: `mailto:${data.email}` },
              { label: "PHONE", value: data.phone, href: `tel:${data.phone}` },
              { label: "LOCATION", value: data.location, href: null },
              { label: "GITHUB", value: "github.com/vivek-info-tech", href: data.github },
              { label: "LINKEDIN", value: "linkedin.com/in/vivek-info-tech", href: data.linkedin },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.12em", minWidth: 80 }}>{item.label}</span>
                {item.href
                  ? <a href={item.href} target="_blank" rel="noreferrer" style={{ color: "rgba(226,232,240,0.7)", fontSize: 14, fontFamily: "'Inter', sans-serif", textDecoration: "none" }}>{item.value}</a>
                  : <span style={{ color: "rgba(226,232,240,0.7)", fontSize: 14, fontFamily: "'Inter', sans-serif" }}>{item.value}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.1em", marginBottom: 6 }}>YOUR NAME *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Vivek Kumar"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.1em", marginBottom: 6 }}>YOUR EMAIL *</label>
              <input name="email" value={form.email} onChange={handleChange} placeholder="vivek@company.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.1em", marginBottom: 6 }}>SUBJECT</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity "
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.1em", marginBottom: 6 }}>MESSAGE *</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Hello Vivek, I'd like to discuss..."
              rows={5}
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = "rgba(56,189,248,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
          <button onClick={handleSubmit} style={{
            padding: "13px 28px", borderRadius: 8, border: "none", cursor: "pointer",
            background: sent ? "rgba(52,211,153,0.15)" : "#38bdf8",
            color: sent ? "#34d399" : "#08090e",
            fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700,
            letterSpacing: "0.08em", transition: "all 0.25s",
            border: sent ? "1px solid rgba(52,211,153,0.4)" : "none",
          }}>
            {sent ? "✓ MAIL CLIENT OPENED" : "SEND MESSAGE →"}
          </button>
          <p style={{ fontSize: 12, color: "rgba(226,232,240,0.3)", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
            Clicking "Send message" opens your default mail client with the message pre-filled.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;