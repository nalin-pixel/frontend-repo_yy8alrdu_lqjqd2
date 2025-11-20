import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      <main className="relative">
        <Hero />

        <Section id="projects" title="Selected Work" subtitle="A snapshot of recent builds blending aesthetics and performance.">
          <Projects />
        </Section>

        <Section id="about" title="About Me" subtitle="Blending engineering and design to craft memorable interfaces.">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
              <p>
                I specialize in building fast, responsive web apps with immersive motion and 3D scenes. I love turning complex ideas into clean, elegant products.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-1">
                <li>React, TypeScript, Tailwind, Framer Motion</li>
                <li>FastAPI, Node, and cloud-native backends</li>
                <li>Design systems and accessibility-first UI</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
              <p className="mb-2 font-semibold text-white">Highlights</p>
              <div className="space-y-2 text-sm">
                <p>• 5+ years crafting polished digital experiences</p>
                <p>• Led design/dev on multiple high-impact launches</p>
                <p>• Passion for performance, UX, and micro‑interactions</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Let’s work together" subtitle="Have a project in mind? I’d love to hear about it.">
          <form className="grid md:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <input className="bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
            <input className="bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email address" />
            <button className="bg-white text-black font-semibold rounded-md px-4 py-3 hover:bg-white/90 transition">Send</button>
            <textarea className="md:col-span-3 bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" rows="4" placeholder="Tell me about your project" />
          </form>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 text-white/60 text-sm flex justify-between items-center">
          <p>© {new Date().getFullYear()} Your Name</p>
          <a href="/test" className="hover:text-white">System Test</a>
        </div>
      </footer>
    </div>
  )
}

export default App
