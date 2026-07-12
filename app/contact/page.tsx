export default function ContactPage() {
  return (
    <main style={{ maxWidth: "600px", margin: "60px auto", padding: "0 16px" }}>
      <p style={{ color: "#2563EB", fontWeight: "600", fontSize: "14px", marginBottom: "8px" }}>Get In Touch</p>
      <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "12px", color: "#111827" }}>Request a Free Audit</h1>
      <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.7", marginBottom: "40px" }}>
        I review your Google Ads account and send you a prioritized fix list. No fluff, no sales pitch.
      </p>
      <form action="https://formspree.io/f/mbdnrnql" method="POST" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Your Name</label>
          <input type="text" name="name" required style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Work Email</label>
          <input type="email" name="email" required style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Monthly Ad Spend (USD)</label>
          <select name="spend" style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }}>
            <option>Under $5,000</option>
            <option>$5,000 - $20,000</option>
            <option>$20,000 - $50,000</option>
            <option>Over $50,000</option>
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>What is your main problem?</label>
          <textarea name="message" rows={4} required style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box", resize: "vertical" }} />
        </div>
        <button type="submit" style={{ backgroundColor: "#2563EB", color: "#ffffff", padding: "12px 28px", borderRadius: "6px", border: "none", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}>
          Request Free Audit
        </button>
      </form>
    </main>
  );
}
