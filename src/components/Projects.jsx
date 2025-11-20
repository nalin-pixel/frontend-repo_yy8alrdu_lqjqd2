import React from 'react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    tags: ['React', 'Spline', 'Framer Motion'],
    desc: 'A cinematic hero with interactive 3D scene and buttery-smooth transitions.'
  },
  {
    title: 'AI Chat Experience',
    tags: ['FastAPI', 'React', 'Tailwind'],
    desc: 'Conversational interface with real-time suggestions and persistence.'
  },
  {
    title: 'E‑commerce UI Kit',
    tags: ['Design System', 'Accessibility', 'Animations'],
    desc: 'Highly-polished, accessible components with delightful micro‑interactions.'
  }
]

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-3xl group-hover:opacity-100 opacity-0 transition" />
          <h3 className="text-white font-semibold text-xl">{p.title}</h3>
          <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
