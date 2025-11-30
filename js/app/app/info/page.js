"use client"

export default function Info() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Info This Template</h1>
              <p className="text-xl text-slate-400">
                A minimal, production-ready template for developers building full-stack applications with modern tools.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
              <h2 className="text-2xl font-bold">Why This Template?</h2>
              <p className="text-slate-400">
                Building a new project shouldn't require dealing with complex setup and configuration. This Template
                provides everything you need to get started in seconds.
              </p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li>Zero configuration setup</li>
                <li>Dark theme optimized for developers</li>
                <li>Mock data for instant feedback</li>
                <li>Fully responsive design</li>
                <li>Drizzle ORM with Javascript</li>
                <li>Neon integration ready</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
              <h2 className="text-2xl font-bold">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Frontend</h3>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li>Next.js 16+</li>
                    <li>React 19</li>
                    <li>Javascript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Backend</h3>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li>Drizzle ORM</li>
                    <li>PostgreSQL</li>
                    <li>Neon</li>
                    <li>API Routes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
              <h2 className="text-2xl font-bold">Getting Started</h2>
              <p className="text-slate-400">
                Clone this template, install dependencies, and start building. All files are pre-configured with
                sensible defaults and examples.
              </p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                <div>npm install</div>
                <div>npm run dev</div>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
              <h2 className="text-2xl font-bold">Run Drizzle</h2>
              <p className="text-slate-400">
                Clone this template, install dependencies, and start building. All files are pre-configured with
                sensible defaults and examples.
              </p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                <div>npx run generate</div>
                <div>npx drizzle-kit push</div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  )
}
