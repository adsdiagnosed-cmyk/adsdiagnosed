export default function Home() {
  return (
    <main>
      <section style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%)", padding: "80px 16px" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <p style={{ color: "#2563EB", fontWeight: "600", fontSize: "14px", letterSpacing: "0.05em", marginBottom: "12px" }}>Google Ads Troubleshooting</p>
          <h1 style={{ fontSize: "48px", fontWeight: "800", lineHeight: "1.15", marginBottom: "20px", color: "#111827" }}>AdsDiagnosed</h1>
          <p style={{ fontSize: "20px", color: "#4b5563", lineHeight: "1.6", maxWidth: "560px", marginBottom: "32px" }}>
            Practical fixes for Google Ads problems. Written by a practitioner, for agency managers and in-house teams.
          </p>
          <a href="/blog/pmax-youtube-spike" style={{ display: "inline-block", backgroundColor: "#2563EB", color: "#ffffff", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
            Read Latest Article
          </a>
        </div>
      </section>
      <section style={{ maxWidth: "768px", margin: "60px auto", padding: "0 16px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "24px", color: "#111827" }}>Latest Articles</h2>
        <div style={{ borderLeft: "3px solid #2563EB", paddingLeft: "20px", marginBottom: "32px" }}>
          <span style={{ fontSize: "13px", color: "#6b7280", fontWeight: "500" }}>Performance Max</span>
          <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "6px 0 8px" }}>
            <a href="/blog/pmax-youtube-spike" style={{ color: "#111827", textDecoration: "none" }}>
              Why Is PMax Burning Your Budget on YouTube? (And How to Fix It)
            </a>
          </h3>
          <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: "1.6" }}>
            Learn how to diagnose YouTube overspend in PMax and fix it with placement exclusions and asset group strategy.
          </p>
        </div>
      </section>
    </main>
  );
}
