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
