export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">AdsDiagnosed</h1>
      <p className="text-xl text-gray-600 mb-8">
        Practical Google Ads troubleshooting for agency managers and in-house teams.
      </p>
      <div className="border rounded-lg p-6 hover:shadow-md transition">
        <span className="text-sm text-gray-400">Performance Max</span>
        <h2 className="text-xl font-semibold mt-1 mb-2">
          <a href="/blog/pmax-youtube-spike" className="hover:text-blue-600">
            Why Is PMax Burning Your Budget on YouTube? (And How to Fix It)
          </a>
        </h2>
        <p className="text-gray-600">
          Learn how to diagnose YouTube overspend in PMax and fix it with placement exclusions and asset group strategy.
        </p>
      </div>
    </main>
  );
}
