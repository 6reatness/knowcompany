import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <header className="p-6 border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Know Company</h1>
        <div className="space-x-4">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow">Start Free Trial</button>
          <button className="text-blue-700 border border-blue-700 px-4 py-2 rounded-xl">Pricing</button>
        </div>
      </header>

      <section className="text-center py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-semibold mb-4">Because what you don’t know can hurt your business.</h2>
        <p className="text-lg mb-6">Smart, simple bookkeeping built for real business owners. No jargon. No surprises. Just clarity.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow">Start Free Trial</button>
          <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl">Watch How It Works</button>
        </div>
      </section>

      <!-- TRUNCATED FOR BREVITY: this should include the rest of the content from your canvas -->

      <footer className="text-center p-6 border-t mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Know Company. All rights reserved.
      </footer>
    </div>
  );
}
