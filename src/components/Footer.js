import React from "react";

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sheilla-nelima" },
  { label: "Email", href: "mailto:snelima2019@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/254741377062" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--surface)", borderTop: "0.5px solid var(--border)", padding: "2.5rem 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.04em" }}>
        SN Finance
      </span>
      <p style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: 300 }}>
        © {year} Sheila Nelima Finance Consultancy. All rights reserved.
      </p>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {footerLinks.map(({ label, href }) => (
          
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", transition: "color 0.2s", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
