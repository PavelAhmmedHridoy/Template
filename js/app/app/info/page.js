"use client"

export default function Info() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">

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
              <li>Drizzle ORM with TypeScript</li>
              <li>Neon integration ready</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-bold">Project Structure</h2>
            <p className="text-slate-400">Here's the current structure of this template:</p>
            <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 whitespace-pre-line">
📁 my-next-app/
{"\n"}├─ 📁 database/
{"\n"}│  ├─ 📁 db/
{"\n"}│  │  ├─ 📄 drizzle.ts
{"\n"}│  │  └─ 📄 schema.ts
{"\n"}│  ├─ 📁 dbapp/
{"\n"}│  │  ├─ 📄 db.css
{"\n"}│  │  ├─ 📄 favicon.ico
{"\n"}│  │  ├─ 📄 layout.tsx
{"\n"}│  │  └─ 📄 userpagecontent.tsx
{"\n"}│  ├─ 📁 elements/
{"\n"}│  │  ├─ 📁 ui/
{"\n"}│  │  │  ├─ 📄 button.tsx
{"\n"}│  │  │  ├─ 📄 dialog.tsx
{"\n"}│  │  │  ├─ 📄 form.tsx
{"\n"}│  │  │  ├─ 📄 input.tsx
{"\n"}│  │  │  ├─ 📄 label.tsx
{"\n"}│  │  │  ├─ 📄 sonner.tsx
{"\n"}│  │  │  └─ 📄 table.tsx
{"\n"}│  │  └─ 📁 forms/
{"\n"}│  │     └─ 📄 user-form.tsx
{"\n"}│  │  └─ 📄 users-table.tsx
{"\n"}│  ├─ 📁 lib/
{"\n"}│  │  └─ 📄 utils.ts
{"\n"}│  ├─ 📁 migrations/
{"\n"}│  │  ├─ 📄 0000_dry_black_crow.sql
{"\n"}│  │  └─ 📁 meta/
{"\n"}│  │     ├─ 📄 0000_snapshot.json
{"\n"}│  │     └─ 📄 _journal.json
{"\n"}│  └─ 📁 server/
{"\n"}│     └─ 📄 users.ts
{"\n"}├─ 📁 node_modules/
{"\n"}├─ 📁 public/
{"\n"}│  ├─ 📄 file.svg
{"\n"}│  ├─ 📄 globe.svg
{"\n"}│  ├─ 📁 images/
{"\n"}│  │  ├─ 📄 nav-image.svg
{"\n"}│  │  └─ 📄 nextlogo.svg
{"\n"}│  ├─ 📄 next.svg
{"\n"}│  ├─ 📄 vercel.svg
{"\n"}│  └─ 📄 window.svg
{"\n"}├─ 📁 src/
{"\n"}│  └─ 📁 app/
{"\n"}│     ├─ 📁 about/
{"\n"}│     │  ├─ 📄 AboutCard.tsx
{"\n"}│     │  └─ 📄 page.tsx
{"\n"}│     ├─ 📁 components/
{"\n"}│     │  ├─ 📄 footer.tsx
{"\n"}│     │  ├─ 📄 navbar.tsx
{"\n"}│     │  └─ 📄 next-logo.tsx
{"\n"}│     ├─ 📁 info/
{"\n"}│     │  └─ 📄 page.tsx
{"\n"}│     ├─ 📄 globals.css
{"\n"}│     ├─ 📄 layout.tsx
{"\n"}│     └─ 📄 page.tsx
{"\n"}├─ 📄 package.json
{"\n"}├─ 📄 drizzle.config.ts
{"\n"}├─ 📄 pnpm-lock.yaml
{"\n"}├─ 📄 postcss.config.mjs
{"\n"}├─ 📄 eslint.config.mjs
{"\n"}├─ 📄 next-env.d.ts
{"\n"}├─ 📄 next.config.ts
{"\n"}├─ 📄 tsconfig.json
{"\n"}└─ 📄 vite.congig.ts
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-bold">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Frontend</h3>
                <ul className="space-y-1 text-slate-400 text-sm">
                  <li>Next.js 16+</li>
                  <li>React 19</li>
                  <li>TypeScript</li>
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
            <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 overflow-x-auto space-y-1">
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
            <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 overflow-x-auto space-y-1">
              <div>npx run generate</div>
              <div>npx drizzle-kit push</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-bold">What's New</h2>
            <h3 className="font-semibold text-white-400 mb-1"><code>Drizzle-Auto</code></h3>
            <h3 className="font-semibold text-white-400 mb-1"><code>Next-Auto-Build</code></h3>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-bold">Details</h2>

            <div className="space-y-4">
              <h3 className="font-semibold text-white-400"><code>Drizzle-Auto</code></h3>
              <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
                <li>Automatically detects schema changes in your database</li>
                <li>Generates migrations automatically</li>
                <li>Fallback to manual commands if needed</li>
                <li>Reduces the hassle of manually running Drizzle commands</li>
              </ul>

              <p className="text-slate-400 mt-2 font-semibold">📃 Install</p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 space-y-1">
                <div>npm install drizzle-auto</div>
                <div>pnpm add drizzle-auto</div>
                <div>yarn add drizzle-auto</div>
              </div>

              <p className="text-slate-400 mt-2 font-semibold">📃 Scripts </p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 whitespace-pre-line">
├─📄 package.json
{"{"}<br/>
&nbsp;&nbsp;"scripts": {"{"} <br/>
&nbsp;&nbsp;&nbsp;&nbsp;"tea": "drizzle-auto"<br/>
&nbsp;&nbsp;{"}"}<br/>
{"}"}
              </div>

              <p className="text-slate-400 mt-2">Or run directly using npx:</p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300">
                npx drizzle-auto
              </div>

              <p className="text-slate-400 mt-2 font-semibold">📃 Run</p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 space-y-1">
                <div>npm run tea</div>
                <div>pnpm run tea</div>
                <div>yarn run tea</div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="font-semibold text-white-400"><code>Next-Auto-Build</code></h3>
              <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
                <li>Automatically rebuilds your Next.js project when files change</li>
                <li>No manual <code>next build</code> needed</li>
                <li>Supports npm, pnpm, yarn & npx</li>
                <li>Perfect for development, CI, VPS, Docker, or mobile setups</li>
              </ul>

              <p className="text-slate-400 mt-2 font-semibold">📃 Install</p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 space-y-1">
                <div>npm install next-auto-build</div>
                <div>pnpm add next-auto-build</div>
                <div>yarn add next-auto-build</div>
              </div>

              <p className="text-slate-400 mt-2 font-semibold">📃 Scripts </p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 whitespace-pre-line">
├─📄 package.json
{"{"}<br/>
&nbsp;&nbsp;"scripts": {"{"} <br/>
&nbsp;&nbsp;&nbsp;&nbsp;"auto": "next-auto-build"<br/>
&nbsp;&nbsp;{"}"}<br/>
{"}"}
              </div>

              <p className="text-slate-400 mt-2">Or run directly using npx:</p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300">
                npx next-auto-build
              </div>

              <p className="text-slate-400 mt-2 font-semibold">📃 Run</p>
              <div className="bg-slate-950 rounded p-4 font-mono text-sm text-slate-300 space-y-1">
                <div>npm run auto</div>
                <div>pnpm run auto</div>
                <div>yarn run auto</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}