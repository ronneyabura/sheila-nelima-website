import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "KES 15,000",
    period: "/month",
    tagline: "For micro-businesses & sole traders",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "KRA tax filing (1 type)",
      "Quarterly management report",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "KES 45,000",
    period: "/month",
    tagline: "For growing SMEs & startups",
    features: [
      "Everything in Starter",
      "Full payroll management",
      "All KRA tax compliance",
      "Monthly financial reports",
      "Cashflow forecasting",
      "Priority WhatsApp support",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Premium",
    price: "KES 100,000+",
    period: "/month",
    tagline: "For established businesses & NGOs",
    features: [
      "Everything in Growth",
      "Virtual CFO advisory",
      "Investor-ready financials",
      "Annual audit preparation",
      "Board reporting packs",
      "Dedicated account manager",
    ],
    cta: "Let's Talk",
    featured: false,
  },
];

export default function RateCard() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="rates"
      style={{ padding: "7rem 6vw", background: "var(--surface)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              marginBottom: "1rem",
            }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            Rate Card
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Transparent{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>pricing</em>
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              maxWidth: "460px",
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            All packages are customisable. Not sure which fits?{" "}
            <span
              onClick={scrollToContact}
              style={{
                color: "var(--gold)",
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "rgba(201,168,76,0.4)",
              }}
            >
              Book a free discovery call.
            </span>
          </p>
        </div>

        {/* Plans */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                background: plan.featured ? "var(--card-hover)" : "var(--card)",
                border: plan.featured
                  ? "1px solid var(--gold)"
                  : hoveredPlan === plan.name
                  ? "0.5px solid rgba(201,168,76,0.4)"
                  : "0.5px solid var(--border-subtle)",
                padding: "2.5rem",
                position: "relative",
                transition: "border-color 0.25s, transform 0.2s",
                transform:
                  plan.featured || hoveredPlan === plan.name
                    ? "translateY(-4px)"
                    : "none",
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "2rem",
                    background: "var(--gold)",
                    color: "var(--black)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.85rem",
                  }}
                >
                  Most Popular
                </div>
              )}

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                  color: plan.featured ? "var(--gold)" : "var(--white)",
                }}
              >
                {plan.name}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  marginBottom: "1.75rem",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                {plan.tagline}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                  marginBottom: "2rem",
                  paddingBottom: "1.75rem",
                  borderBottom: "0.5px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    fontWeight: 300,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.88rem",
                      color: "rgba(247,245,240,0.75)",
                      marginBottom: "0.75rem",
                      fontWeight: 300,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: plan.featured ? "var(--gold)" : "transparent",
                  color: plan.featured ? "var(--black)" : "var(--white)",
                  border: plan.featured ? "none" : "0.5px solid rgba(247,245,240,0.25)",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--gold)";
                  e.target.style.color = "var(--black)";
                  e.target.style.border = "none";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = plan.featured ? "var(--gold)" : "transparent";
                  e.target.style.color = plan.featured ? "var(--black)" : "var(--white)";
                  e.target.style.border = plan.featured
                    ? "none"
                    : "0.5px solid rgba(247,245,240,0.25)";
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            fontSize: "0.78rem",
            color: "var(--muted)",
            fontWeight: 300,
            letterSpacing: "0.03em",
          }}
        >
          All prices are exclusive of VAT. Custom project pricing available on request.
        </p>
      </div>
    </section>
  );
}
