import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "0.5px solid var(--border)",
        padding: "2.5rem 6vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--gold)",
          letterSpacing: "0.04em",
        }}
      >
        SN Finance
      </span>

      <p
        style={{
          fontSize: "0.78rem",
          color: "var(--muted)",
          fontWeight: 300,
        }}
      >
        © {year} Sheila Nelima Finance Consultancy. All rights reserved.
      </p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {["LinkedIn", "Email", "WhatsApp"].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
