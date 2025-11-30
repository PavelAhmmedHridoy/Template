// This file is now a Server Component by default (assuming it's page.tsx)

import { NextLogo } from "./components/next-logo" // Assuming this is needed for the header
import UsersPageContent from "@db/dbapp/userpagecontent";



export default function Home() {
  // All state and effect logic is removed
  // Data fetching (if needed by UsersPageContent) should now happen either:
  // 1. Inside UsersPageContent (if it stays a Client Component)
  // 2. Here, in the Server Component, and passed as props (Recommended for App Router)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">

      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex items-center gap-3 md:gap-4">
          <NextLogo />
          <div className="flex-1 min-w-0">
            <h1 className="text-lg md:text-xl font-bold text-white">Next.js Template</h1>
            <p className="text-xs md:text-sm text-slate-400">With Neon & Drizzle ORM</p>
          </div>
        </div>
      </header>
      
      {/* The tab navigation logic has been removed since UsersPageContent 
        seems to focus only on Users. 
      */}

      <div className="max-w-6xl mx-auto"> 
        {/* Render the new component */}
        <UsersPageContent /> 
      </div>

    </main>
  )
}
