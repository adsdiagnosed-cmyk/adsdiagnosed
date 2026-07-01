export const metadata = {
  title: "Why Is PMax Burning Your Budget on YouTube? (And How to Fix It)",
  description: "Performance Max spending too much on YouTube? Learn how to diagnose the issue and fix budget allocation with asset group strategy and placement exclusions.",
};

export default function PMaxYouTubePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Why Is PMax Burning Your Budget on YouTube? (And How to Fix It)
      </h1>
      <p className="mb-4">
        You log into Google Ads on a Monday morning, check your Performance Max campaign, and see it — YouTube impressions through the roof, cost per conversion doubled, and your Search budget starving.
      </p>
      <p className="mb-4">
        This is one of the most common PMax complaints. The good news: it is fixable. The bad news: Google does not make it easy.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Does PMax Love YouTube So Much?</h2>
      <p className="mb-4">
        PMax is designed to maximize conversions across all Google inventory. But the algorithm favors placements where it can spend fast and generate signals quickly. YouTube fits that perfectly.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Step 1: Diagnose the Problem</h2>
      <p className="mb-3">Before you make any changes, confirm YouTube is actually the issue.</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Check Asset Group Performance</h3>
      <p className="mb-4">
        Go to your PMax campaign, click Asset Groups, and check the channel breakdown. High cost on YouTube with low conversion rates is your signal.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Pull the Placement Report</h3>
      <p className="mb-4">
        In Google Ads, go to Reports, then Predefined Reports, then Placement. Filter by your PMax campaign. Sort by Cost. You will likely see youtube.com near the top.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">How to Fix It: 4 Practical Solutions</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">Fix 1: Remove or Replace Video Assets</h3>
      <p className="mb-4">
        If you remove video assets from your asset group, Google will stop serving on YouTube in theory. Go to Campaign Settings and turn off Asset Automation to prevent auto-generated videos.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Fix 2: Use Placement Exclusions</h3>
      <p className="mb-4">
        You can exclude YouTube at the account level. Go to Shared Library, then Placement Exclusion Lists, and add youtube.com. Apply this list to your PMax campaign.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Fix 3: Segment Asset Groups by Intent</h3>
      <p className="mb-4">
        Create separate asset groups — one with video assets for awareness, one without for conversion. This gives the algorithm clearer signals about where to spend.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Fix 4: Tighten Your Audience Signals</h3>
      <p className="mb-4">
        Add strong audience signals — customer match lists, website visitors, converters. The more specific your signals, the less the algorithm wanders into broad YouTube inventory.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Bottom Line</h2>
      <p className="mb-4">
        PMax defaulting to YouTube is not a bug — it is the algorithm doing what it is designed to do. Your job as the account manager is to give it better guardrails.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10">
        <h3 className="text-lg font-semibold mb-2">Is Your PMax Campaign Wasting Budget?</h3>
        <p className="mb-3">I offer a free Google Ads audit for qualifying accounts.</p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-5 py-2 rounded font-medium hover:bg-blue-700">
          Request Your Free Audit
        </a>
      </div>
    </article>
  );
}
