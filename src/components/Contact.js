import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to your email service (Formspree, EmailJS, etc.)
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "var(--card)",
    border: "0.5px solid var(--border-subtle)",
    color: "var(--white)",
    padding: "0.9rem 1.1rem",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: 0,
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.72rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: "0.5rem",
    fontWeight: 500,
  };

  return (
    <section id="contact" style={{ padding: "7rem 6vw", background: "var(--black)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "5rem",
          alignItems: "start",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Left: Contact info */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            Contact
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Let's{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>start</em>
            <br />a conversation
          </h2>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Book a free 30-minute discovery call or send a message below. I typically respond
            within one business day.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { label: "Email", value: "snelima2019@gmail.com" },
              { label: "Phone / WhatsApp", value: "+254 741 377 062" },
              { label: "Location", value: "Nairobi, Kenya" },
              { label: "Hours", value: "Mon – Fri, 8am – 6pm EAT" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "0.95rem", color: "rgba(247,245,240,0.8)", fontWeight: 300 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div
          style={{
            background: "var(--card)",
            border: "0.5px solid var(--border)",
            padding: "3rem",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                Message Received
              </h3>
              <p style={{ color: "var(--muted)", fontWeight: 300, fontSize: "0.9rem" }}>
                Thank you for reaching out. Sheila will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Sheila Nelima"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="sheilanelima@gmail.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  >
                    <option value="">Select a service</option>
                    <option>Accounting & Bookkeeping</option>
                    <option>Tax Compliance</option>
                    <option>Financial Planning</option>
                    <option>Payroll Management</option>
                    <option>Business Advisory</option>
                    <option>Cashflow Management</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "1.75rem" }}>
                <label style={labelStyle}>Message *</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business and how I can help..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "var(--gold)",
                  color: "var(--black)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "var(--gold-light)")}
                onMouseLeave={(e) => (e.target.style.background = "var(--gold)")}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
