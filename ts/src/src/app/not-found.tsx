"use client"

import Link from "next/link"
import { NextLogo } from "./components/next-logo"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          {/* Animated Logo */}
          <div className="flex justify-center">
            <NextLogo />
          </div>

          {/* Error content */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Page Not Found</h2>
            <p className="text-sm md:text-base text-slate-400">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 space-y-3 backdrop-blur-sm">
            <p className="text-slate-400 text-xs md:text-sm">Here are some helpful links:</p>
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
              >
                <Home size={18} />
                Go to Home
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
              >
                About Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/info"
                className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
              >
                Info
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Error details */}
          <div className="text-center text-xs text-slate-500">
            <p>Error Code: 404 - Page Not Found</p>
          </div>
        </div>
      </main>
    </>
  )
}
