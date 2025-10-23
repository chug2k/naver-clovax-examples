import ExampleCard from "@/components/ExampleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2 text-black">ClovaX API Cookbook</h1>
          <p className="text-lg text-black">
            Interactive examples showcasing Naver's ClovaX Chat Completions API
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-black">About This Cookbook</h2>
          <p className="text-black mb-4">
            This cookbook provides hands-on examples of working with Naver Cloud
            Platform's ClovaX API. Each example demonstrates different
            capabilities and use cases with working code you can explore and
            modify.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>Note:</strong> You'll need to configure your API keys in{" "}
              <code className="bg-blue-100 px-2 py-1 rounded">.env.local</code>{" "}
              before running these examples.
            </p>
          </div>
        </section>

        {/* Examples Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-black">Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExampleCard
              title="News Researcher"
              description="Demonstrates tool calling (function calling) with ClovaX. The AI uses NewsAPI to search for and summarize recent news articles based on user queries."
              href="/examples/news-researcher"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              }
            />

            <ExampleCard
              title="Receipt Analyzer"
              description="Demonstrates ClovaX Vision (HCX-005) for image analysis. Upload receipt images and extract information like items, prices, and totals using multimodal AI."
              href="/examples/receipt-analyzer"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            />

            <ExampleCard
              title="Lesson Plan"
              description="A comprehensive 90-minute workshop guide for teaching ClovaX API. Includes detailed timeline, teaching tips, and hands-on activities for both examples."
              href="/lesson-plan"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              }
            />

            {/* Placeholder for future examples */}
            <div className="border rounded-lg p-6 bg-gray-100 border-dashed border-gray-300">
              <div className="text-black">
                <h3 className="text-xl font-semibold mb-2">More Examples Coming Soon</h3>
                <p>Additional examples will be added to showcase more ClovaX capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mt-12 border-t pt-12">
          <h2 className="text-2xl font-semibold mb-4 text-black">Resources</h2>
          <ul className="space-y-2 text-blue-600">
            <li>
              <a
                href="https://api.ncloud-docs.com/docs/en/clovastudio-chatcompletionsv3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ClovaX Chat Completions V3 API Documentation →
              </a>
            </li>
            <li>
              <a
                href="https://www.ncloud.com/product/aiService/clovaStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Naver Cloud Platform - Clova Studio →
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
