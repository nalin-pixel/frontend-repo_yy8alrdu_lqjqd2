import React, { useState } from 'react'
import Background3D from './Background3D'

// Simple robot avatar using SVG; click to reveal a bio card
const RobotAvatar = ({ onClick }) => (
  <button onClick={onClick} aria-label="Show about details" className="relative mx-auto block">
    <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-xl">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="40" y="60" width="120" height="90" rx="14" fill="url(#g1)" opacity="0.9" />
      <rect x="80" y="30" width="40" height="20" rx="6" fill="#a78bfa" />
      <circle cx="75" cy="100" r="12" fill="#0ea5e9" />
      <circle cx="125" cy="100" r="12" fill="#0ea5e9" />
      <rect x="70" y="128" width="60" height="10" rx="5" fill="#111827" opacity="0.9" />
      <line x1="20" y1="100" x2="40" y2="100" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="100" x2="180" y2="100" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
    </svg>
  </button>
)

const About = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="relative py-24">
      <Background3D darkness={0.85} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">About Me</h2>
          <p className="text-white/80 mb-8">Human-centered engineer focused on performance, polish, and immersive interfaces.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
            <p>
              I turn complex ideas into elegant, fast, and accessible products. My work blends strong visual design with robust engineering.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-1">
              <li>Front-end: React, TypeScript, Tailwind, Framer Motion</li>
              <li>Back-end: FastAPI, Node, PostgreSQL/MongoDB</li>
              <li>Tooling: CI/CD, testing, performance profiling</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-white/60">Experience</p>
                <p className="text-white font-semibold">5+ years</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-white/60">Projects shipped</p>
                <p className="text-white font-semibold">30+ web apps</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <RobotAvatar onClick={() => setOpen(true)} />
            <p className="text-white/70 mt-3 text-sm">Click the robot to view profile</p>

            {open && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-full w-full md:w-3/4 bg-black/80 backdrop-blur border border-white/10 rounded-2xl p-6 text-white shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white/60">Profile</p>
                    <h3 className="text-xl font-semibold">Your Name</h3>
                    <p className="text-white/80 mt-2 text-sm">
                      Designer-engineer building immersive, performant products. Focused on clarity, empathy, and craft.
                    </p>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">✕</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
