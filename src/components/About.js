import React from "react";

const pillars = [
  { icon: "◆", text: "ICPAK Registered – Kenya Certified Public Accountant" },
  { icon: "◆", text: "Specialist in SME, Startup & NGO financial management" },
  { icon: "◆", text: "KRA iTax, QuickBooks & Xero certified practitioner" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 6vw",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "5rem",
          alignItems: "start",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Left label column */}
        <div style={{ paddingTop: "0.5rem" }}>
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
            <span
              style={{ width: "24px", height: "1px", background: "var(--gold)" }}
            />
            About
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 3.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: "2rem",
            }}
          >
            Meet{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Sheila
            </em>
            <br />
            Nelima
          </h2>

          {/* Vertical gold rule */}
          <div
            style={{
              width: "1px",
              height: "80px",
              background: "linear-gradient(to bottom, var(--gold), transparent)",
              marginBottom: "2rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "var(--gold-light)",
              lineHeight: 1.6,
              maxWidth: "280px",
            }}
          >
            "Your numbers should tell a story of growth — let's write it
            together."
          </p>
        </div>

        {/* Right bio column */}
        <div>
          <p
            style={{
              color: "rgba(247,245,240,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              fontWeight: 300,
            }}
          >
            Sheila Nelima is a seasoned finance professional with over a decade
            of experience serving businesses across Kenya. She specialises in
            accounting, financial planning, and strategic advisory for SMEs,
            startups, and NGOs.
          </p>
          <p
            style={{
              color: "rgba(247,245,240,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            Her approach combines rigorous compliance with forward-thinking
            strategy — ensuring her clients not only meet regulatory
            requirements but build the financial foundations for sustainable,
            long-term growth.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderTop: "0.5px solid var(--border)",
              paddingTop: "2rem",
            }}
          >
            {pillars.map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "0.9rem",
                  color: "rgba(247,245,240,0.75)",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    fontSize: "0.5rem",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
