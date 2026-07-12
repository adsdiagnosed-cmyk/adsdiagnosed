import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdsDiagnosed",
  description: "Practical Google Ads troubleshooting for agency managers and in-house teams.",
  verification: {
    google: "HbQ-QffnOHDVBVHZmFRAVqxWssgIYkidoYCFiAFNbso",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Georgia, serif", backgroundColor: "#f9fafb", color: "#111827", margin: 0 }}>
        <header style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#ffffff", padding: "16px 0" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="/" style={{ fontSize: "20px", fontWeight: "bold", color: "#2563EB", textDecoration: "none" }}>AdsDiagnosed</a>
            <nav style={{ display: "flex", gap: "24px" }}>
              <a href="/blog/pmax-youtube-spike" style={{ color: "#374151", textDecoration: "none", fontSize: "15px" }}>Blog</a>
              <a href="/contact" style={{ color: "#374151", textDecoration: "none", fontSize: "15px" }}>Contact</a>
            </nav>
          </div>
        </header>
        <div>{children}</div>
        <footer style={{ borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff", padding: "32px 0", marginTop: "60px" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 16px", textAlign: "center", color: "#6b7280", fontSize: "14px" }}>
            <p>© 2025 AdsDiagnosed. Built for Google Ads practitioners.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
