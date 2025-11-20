import React from 'react'
import Background3D from './Background3D'
import { Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <Background3D />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Designer • Developer • Creator</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Crafting immersive, high-performance web experiences
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            I build modern, responsive interfaces powered by rich 3D interactions and thoughtful motion. Let’s bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 bg-white text-black rounded-md font-semibold hover:bg-white/90 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 bg-transparent border border-white/40 text-white rounded-md font-semibold hover:bg-white/10 transition">Get in Touch</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-4 py-3 bg-white/10 text-white rounded-md hover:bg-white/20 transition inline-flex items-center gap-2"><Github size={18}/> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-4 py-3 bg-white/10 text-white rounded-md hover:bg-white/20 transition inline-flex items-center gap-2"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
