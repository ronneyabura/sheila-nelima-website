import React from "react";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "8rem 6vw 5rem",
        gap: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Left: Text */}
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
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "28px",
              height: "1px",
              background: "var(--gold)",
            }}
          />
          Finance Consultancy · Nairobi
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 5vw, 5.8rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
          }}
        >
          Financial
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Clarity.</em>
          <br />
          Strategic{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Growth.</em>
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--muted)",
            maxWidth: "440px",
            marginBottom: "2.5rem",
            fontWeight: 300,
            lineHeight: 1.85,
          }}
        >
          Helping SMEs, startups, and NGOs gain financial clarity, stay
          compliant, and scale with confidence. Expert advisory from Sheila
          Nelima, CPA.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "var(--black)",
              padding: "1rem 2rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--gold-light)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--gold)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Book a Consultation
          </button>
          <button
            onClick={() => scrollTo("services")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "transparent",
              color: "var(--white)",
              padding: "1rem 2rem",
              border: "1px solid rgba(247,245,240,0.2)",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "var(--gold)";
              e.target.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(247,245,240,0.2)";
              e.target.style.color = "var(--white)";
            }}
          >
            View Services
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "0.5px solid var(--border)",
          }}
        >
          {[
            { num: "10+", label: "Years Experience" },
            { num: "150+", label: "Clients Served" },
            { num: "98%", label: "Compliance Rate" },
          ].map(({ num, label }) => (
            <div key={label}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginTop: "0.3rem",
                  display: "block",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Portrait placeholder */}
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            aspectRatio: "3/4",
            background: "linear-gradient(145deg, var(--card) 0%, #252520 100%)",
            border: "0.5px solid var(--border)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.1)",
              border: "1.5px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "var(--gold)",
            }}
          >
            SN
          </div>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(247,245,240,0.3)",
            }}
          >
            Replace with your photo
          </p>

          {/* Gold badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-1.25rem",
              left: "-1.25rem",
              background: "var(--gold)",
              color: "var(--black)",
              padding: "1rem 1.25rem",
            }}
          >
            <strong
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 700,
                display: "block",
                lineHeight: 1,
              }}
            >
              CPA
            </strong>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Certified
            </span>
          </div>

          {/* Corner accent */}
          <div
            style={{
              position: "absolute",
              top: "-1.25rem",
              right: "-1.25rem",
              width: "60px",
              height: "60px",
              borderTop: "2px solid var(--gold)",
              borderRight: "2px solid var(--gold)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
