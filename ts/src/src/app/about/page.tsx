"use client";
import AboutCard from './AboutCard'
export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-6 flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">About Me</h1>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 py-12 flex justify-center">
          <AboutCard />
        </section>
      </main>
    </>
  );
}