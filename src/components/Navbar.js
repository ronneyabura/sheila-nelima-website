import React, { useState, useEffect } from "react";

const styles = {
  nav: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.25rem 6vw",
    transition: "background 0.3s, border-color 0.3s",
  },
  navScrolled: {
    background: "rgba(13,13,13,0.92)",
    backdropFilter: "blur(14px)",
    borderBottom: "0.5px solid rgba(201,168,76,0.18)",
  },
  logo: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.35rem",
    letterSpacing: "0.04em",
    color: "var(--gold)",
  },
  links: {
    display: "flex",
    gap: "2.5rem",
    listStyle: "none",
  },
  link: {
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(247,245,240,0.65)",
    transition: "color 0.2s",
    cursor: "pointer",
  },
  cta: {
    fontFamily: "var(--font-body)",
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    background: "var(--gold)",
    color: "var(--black)",
    padding: "0.65rem 1.5rem",
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <span style={styles.logo}>SN Finance</span>
      <ul style={styles.links}>
        {["about", "services", "rates", "contact"].map((id) => (
          <li key={id}>
            <span
              style={styles.link}
              onClick={() => scrollTo(id)}
              onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(247,245,240,0.65)")}
            >
              {id}
            </span>
          </li>
        ))}
      </ul>
      <button
        style={styles.cta}
        onClick={() => scrollTo("contact")}
        onMouseEnter={(e) => (e.target.style.background = "var(--gold-light)")}
        onMouseLeave={(e) => (e.target.style.background = "var(--gold)")}
      >
        Book a Call
      </button>
    </nav>
  );
}
