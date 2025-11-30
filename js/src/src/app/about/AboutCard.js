"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle, FaEnvelope } from "react-icons/fa";

export default function AboutCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 15;
    const y = ((e.clientY - top) / height - 0.5) * 15;
    setTilt({ x, y });

    const glowX = ((e.clientX - left) / width) * 100;
    const glowY = ((e.clientY - top) / height) * 100;
    setGlowPos({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="relative group w-full max-w-lg sm:max-w-md md:max-w-lg perspective"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow layer */}
        <div
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99,102,241,0.25), transparent 80%)`,
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none blur-3xl transition-all duration-300"
        />

        {/* Card */}
        <div
          style={{
            transform: `rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
          className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-3xl"
        >
          {/* Header */}
          <div className="h-28 sm:h-24 md:h-32 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950"></div>

          {/* Body */}
          <div className="px-6 pb-6 flex flex-col">
            {/* Avatar */}
            <div className="w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32 mx-auto flex items-center justify-center -mt-12 sm:-mt-10 md:-mt-16">
              <div className="w-full h-full bg-slate-900 rounded-full border-4 border-slate-800 shadow-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <FaUserCircle className="w-full h-full text-slate-500" />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-xl md:text-3xl font-bold text-white text-center mt-4">
              Pavel Ahmmed Hridoy
            </h1>
            <p className="text-slate-400 text-center mt-2 text-sm sm:text-xs md:text-base">
              Frontend Developer
            </p>

            {/* Socials */}
            <div className="flex justify-center gap-4 sm:gap-3 md:gap-6 mt-6">
              {[
                { icon: FaGithub, href: "https://github.com/PavelAhmmedHridoy077" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/pavel-ahmmed-hridoy-3396b9374" },
                { icon: FaEnvelope, href: "mailto:ahmmedhridoypavel@gmail.com" },
                { icon: FaGlobe, href: "https://pavel-ahmmed-hridoy.vercel.app/" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="text-slate-400 hover:text-white transition-transform transform hover:scale-125 hover:-translate-y-1"
                  >
                    <Icon className="sm:w-5 sm:h-5 md:w-6 md:h-6" size={24} />
                  </Link>
                );
              })}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6 sm:mt-4 md:mt-8">
              <Link
                href="https://pavel-ahmmed-hridoy.vercel.app/"
                target="_blank"
                className="px-6 sm:px-4 md:px-8 py-2 sm:py-1.5 md:py-3 rounded-full font-semibold bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 text-white shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-125 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
