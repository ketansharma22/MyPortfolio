import { useState } from "react";
import { useIntersect } from "../hooks";
import { SectionLabel, SectionTitle, GradientBtn } from "./UI";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/portfolioData";

export default function Contact({ T }) {
  const [ref, vis] = useIntersect();
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const validate = () => {
    const e = {};
    if (!form.name.trim())
      e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Valid email required";
    if (form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("sending");
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7b824592-0826-4b4e-91cb-a520a218594e",  // ← paste your key here
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
  
      const data = await res.json();
  
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "120px max(24px, 5vw)", background: T.bg2 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div className={vis ? "visible" : ""} style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel T={T}>// Get In Touch</SectionLabel>
          <SectionTitle T={T} center>
            Let's{" "}
            <span
              style={{
                backgroundImage: T.grad,
WebkitBackgroundClip: "text",
backgroundClip: "text",
WebkitTextFillColor: "transparent",
color: "transparent",
display: "inline-block",
              }}
            >
              Connect
            </span>
          </SectionTitle>
          <p style={{ color: T.text2, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* ── Left: contact info + socials ── */}
          <div className={vis ? "visible-left" : ""}>
            <div style={{ marginBottom: 32 }}>
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    padding: "16px 20px",
                    borderRadius: 16,
                    marginBottom: 12,
                    background: T.glass,
                    border: `1px solid ${T.border}`,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${T.accent}55`;
                    e.currentTarget.style.boxShadow = T.glow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = T.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        color: T.text3,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: 15, color: T.text, fontWeight: 500, marginTop: 2 }}>
                      {item.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div>
              <div
                style={{
                  fontSize: 13,
                  color: T.text3,
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: 16,
                }}
              >
                // Find me on
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: T.glass,
                      border: `1px solid ${T.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      color: T.text2,
                      transition: "all 0.25s",
                      fontFamily: "'DM Mono', monospace",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = T.grad;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.boxShadow = T.glow;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = T.glass;
                      e.currentTarget.style.color = T.text2;
                      e.currentTarget.style.borderColor = T.border;
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div className={vis ? "visible-right" : ""}>
            <div
              style={{
                padding: 36,
                borderRadius: 24,
                background: T.glass,
                border: `1px solid ${T.border}`,
                backdropFilter: "blur(12px)",
              }}
            >
              {status === "sent" ? (
                /* Success state */
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: T.text,
                      marginBottom: 8,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: T.text2 }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                    style={{
                      marginTop: 20,
                      padding: "10px 24px",
                      borderRadius: 10,
                      background: T.glass,
                      border: `1px solid ${T.border}`,
                      color: T.text2,
                      fontFamily: "'Manrope', sans-serif",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text2; }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                /* Form */
                <>
                  {[
                    { key: "name",  label: "Your Name",      type: "text",  ph: "Ketan Sharma" },
                    { key: "email", label: "Email Address",  type: "email", ph: "hello@example.com" },
                  ].map((field) => (
                    <div key={field.key} style={{ marginBottom: 20 }}>
                      <label
                        htmlFor={field.key}
                        style={{
                          fontSize: 13,
                          color: T.text2,
                          fontFamily: "'DM Mono', monospace",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.key}
                        type={field.type}
                        value={form[field.key]}
                        placeholder={field.ph}
                        onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: 12,
                          background: T.surface,
                          color: T.text,
                          fontSize: 15,
                          border: `1px solid ${errors[field.key] ? "#EF4444" : T.border}`,
                          outline: "none",
                          transition: "all 0.2s",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = T.accent;
                          e.target.style.boxShadow = T.glow;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors[field.key] ? "#EF4444" : T.border;
                          e.target.style.boxShadow = "none";
                        }}
                      />
                      {errors[field.key] && (
                        <div style={{ fontSize: 12, color: "#EF4444", marginTop: 6 }}>
                          {errors[field.key]}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: 13,
                        color: T.text2,
                        fontFamily: "'DM Mono', monospace",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      placeholder="Tell me about your project..."
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 12,
                        background: T.surface,
                        color: T.text,
                        fontSize: 15,
                        border: `1px solid ${errors.message ? "#EF4444" : T.border}`,
                        outline: "none",
                        resize: "vertical",
                        minHeight: 120,
                        transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = T.accent;
                        e.target.style.boxShadow = T.glow;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.message ? "#EF4444" : T.border;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.message && (
                      <div style={{ fontSize: 12, color: "#EF4444", marginTop: 6 }}>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <GradientBtn
                    T={T}
                    onClick={handleSubmit}
                    style={{
                      width: "100%",
                      textAlign: "center",
                      opacity: status === "sending" ? 0.7 : 1,
                    }}
                  >
                    {status === "sending" ? (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "#fff",
                            animation: "spin 0.7s linear infinite",
                            display: "inline-block",
                          }}
                        />
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </GradientBtn>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
