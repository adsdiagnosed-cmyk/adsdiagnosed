export default function Home() {
  return (
    <main>
      <style>{`
        .hero { background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%); padding: 80px 24px; }
        .container { max-width: 1024px; margin: 0 auto; }
        .hero h1 { font-size: 52px; font-weight: 800; line-height: 1.15; margin-bottom: 20px; color: #111827; }
        .hero p { font-size: 20px; color: #4b5563; line-height: 1.6; max-width: 600px; margin-bottom: 32px; }
        .btn { display: inline-block; background: #2563EB; color: #fff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; }
        .why { padding: 60px 24px; background: #fff; }
        .why h2 { font-size: 28px; font-weight: 700; margin-bottom: 36px; color: #111827; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .card { background: #f9fafb; border-radius: 10px; padding: 28px; }
        .card-icon { font-size: 28px; margin-bottom: 12px; }
        .card h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; color: #111827; }
        .card p { font-size: 14px; color: #6b7280; line-height: 1.6; }
        .articles { padding: 60px 24px; }
        .articles h2 { font-size: 28px; font-weight: 700; margin-bottom: 32px; color: #111827; }
        .article-card { border-left: 3px solid #2563EB; padding-left: 20px; margin-bottom: 36px; }
        .article-card span { font-size: 13px; color: #6b7280; font-weight: 500; }
        .article-card h3 { font-size: 20px; font-weight: 700; margin: 6px 0 8px; }
        .article-card h3 a { color: #111827; text-decoration: none; }
        .article-card p { color: #4b5563; font-size: 15px; line-height: 1.6; }
        .cta { background: #2563EB; padding: 60px 24px; text-align: center; }
        .cta h2 { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .cta p { color: #bfdbfe; font-size: 16px; margin-bottom: 28px; }
        .cta a { background: #fff; color: #2563EB; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 16px; }
        @media (max-width: 768px) {
          .hero h1 { font-size: 32px; }
          .hero p { font-size: 16px; }
          .cards { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="hero">
        <div className="container">
          <p style={{ color: "#2563EB", fontWeight: "600", fontSize: "14px", letterSpacing: "0.05em", marginBottom: "12px" }}>Google Ads Troubleshooting</p>
          <h1>Stop Guessing.<br />Fix Your Google Ads.</h1>
          <p>Practical fixes for PMax, Smart Bidding, and Search campaigns. Written by a practitioner with 5+ years managing Fortune 500 accounts.</p>
          <a href="/blog/pmax-youtube-spike" className="btn">Read Latest Article</a>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <h2>Why AdsDiagnosed?</h2>
          <div className="cards">
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3>Practitioner Written</h3>
              <p>Every article comes from real account experience — not recycled blog content or AI fluff.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔧</div>
              <h3>Actionable Fixes</h3>
              <p>Step by step instructions you can implement today. No theory, no vague advice.</p>
            </div>
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Data Driven</h3>
              <p>Backed by real campaign data from accounts spending $10K to $500K per month.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="article-card">
            <span>Performance Max</span>
            <h3><a href="/blog/pmax-youtube-spike">Why Is PMax Burning Your Budget on YouTube? (And How to Fix It)</a></h3>
            <p>Learn how to diagnose YouTube overspend in PMax and fix it with placement exclusions and asset group strategy.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Is Your Google Ads Account Wasting Budget?</h2>
          <p>Get a free account audit — I will tell you exactly what is wrong and how to fix it.</p>
          <a href="/contact">Request Free Audit</a>
        </div>
      </section>
    </main>
  );
}
