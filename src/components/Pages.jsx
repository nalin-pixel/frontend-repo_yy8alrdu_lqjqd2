import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import Section from './Section'

export const HomePage = () => (
  <>
    <Hero />
    <Section id="projects" title="Selected Work" subtitle="A snapshot of recent builds blending aesthetics and performance.">
      <Projects />
    </Section>
    <About />
    <Section id="contact" title="Let’s work together" subtitle="Have a project in mind? I’d love to hear about it.">
      <form className="grid md:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
        <input className="bg-black/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
        <input className="bg-black/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email address" />
        <button className="bg-white text-black font-semibold rounded-md px-4 py-3 hover:bg-white/90 transition">Send</button>
        <textarea className="md:col-span-3 bg-black/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" rows="4" placeholder="Tell me about your project" />
      </form>
    </Section>
  </>
)

export const ProjectsPage = () => (
  <>
    <Section id="projects-page" title="Projects" subtitle="Hand-picked case studies and UI experiments.">
      <Projects />
    </Section>
  </>
)

export const AboutPage = () => (
  <>
    <About />
  </>
)

export const ContactPage = () => (
  <>
    <Section id="contact" title="Let’s work together" subtitle="Have a project in mind? I’d love to hear about it.">
      <form className="grid md:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
        <input className="bg-black/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
        <input className="bg-black/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email address" />
        <button className="bg-white text-black font-semibold rounded-md px-4 py-3 hover:bg-white/90 transition">Send</button>
        <textarea className="md:col-span-3 bg-black/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" rows="4" placeholder="Tell me about your project" />
      </form>
    </Section>
  </>
)
