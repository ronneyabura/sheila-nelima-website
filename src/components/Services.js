import React, { useState } from "react";

const services = [
  {
    number: "01",
    title: "Accounting & Bookkeeping",
    description:
      "Full-cycle bookkeeping, ledger management, bank reconciliations, and monthly management accounts to keep your financials airtight.",
  },
  {
    number: "02",
    title: "Tax Compliance",
    description:
      "KRA iTax filing, VAT, PAYE, withholding tax, and corporate tax returns handled accurately and on time to avoid penalties.",
  },
  {
    number: "03",
    title: "Financial Planning & Analysis",
    description:
      "Budgeting, forecasting, variance analysis, and KPI dashboards that translate numbers into actionable business intelligence.",
  },
  {
    number: "04",
    title: "Payroll Management",
    description:
      "End-to-end payroll processing, NHIF & NSSF remittances, payslip generation, and statutory compliance for your team.",
  },
  {
    number: "05",
    title: "Business Advisory",
    description:
      "Strategic financial advice for growth decisions — from fundraising and investor readiness to restructuring and cost optimisation.",
  },
  {
    number: "06",
    title: "Cashflow Management",
    description:
      "Cashflow forecasting, working capital optimisation, and receivables management to ensure your business never runs dry.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{ padding: "7rem 6vw", background: "var(--black)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
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
                marginBottom: "1rem",
              }}
            >
              <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
              Services
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              What I{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>offer</em>
            </h2>
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              maxWidth: "320px",
              textAlign: "right",
              fontWeight: 300,
            }}
          >
            Comprehensive financial services tailored for Kenyan businesses at every stage.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "0.5px solid var(--border)",
          }}
        >
          {services.map((s) => (
            <div
              key={s.number}
              onMouseEnter={() => setHovered(s.number)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === s.number ? "var(--card-hover)" : "var(--card)",
                padding: "2.5rem",
                transition: "background 0.25s",
                cursor: "default",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "1.25rem",
                  opacity: 0.7,
                }}
              >
                {s.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: "0.85rem",
                  color: hovered === s.number ? "var(--gold)" : "var(--white)",
                  transition: "color 0.25s",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
