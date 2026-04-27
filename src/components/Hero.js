import React from "react";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 6vw 5rem",
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
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "700px" }}>
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
          <span style={{ display: "block", width: "28px", height: "1px", background: "var(--gold)" }} />
          Finance Consultancy · Nairobi
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 6.5rem)",
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
