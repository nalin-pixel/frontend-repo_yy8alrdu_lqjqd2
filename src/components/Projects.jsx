import React from 'react'

const projects = [
  {
    title: 'Neon Commerce',
    tags: ['React', 'Tailwind', 'Stripe'],
    desc: 'Modern shop with realtime cart, checkout, and product search.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Holo Chat',
    tags: ['FastAPI', 'WebSockets', 'Redis'],
    desc: 'Low-latency chat with typing indicators and message persistence.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1599303251114-207ca524718e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb2xvJTIwQ2hhdHxlbnwwfDB8fHwxNzYzNjI2ODM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Spline Showcase',
    tags: ['Spline', 'Framer Motion'],
    desc: 'Interactive 3D hero with parallax scroll-choreographed sections.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1704652000936-0e85169f62c2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGxpbmUlMjBTaG93Y2FzZXxlbnwwfDB8fHwxNzYzNjI2ODM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Analytics Pulse',
    tags: ['Next.js', 'Server Components'],
    desc: 'Live dashboards with streaming, dark mode, and saved views.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBQdWxzZXxlbnwwfDB8fHwxNzYzNjI2ODM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Design System X',
    tags: ['Accessibility', 'Storybook'],
    desc: 'Scalable component library with tokens and theming.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBTeXN0ZW0lMjBYfGVufDB8MHx8fDE3NjM2MjY4MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Edge Media',
    tags: ['Cloudflare', 'HLS'],
    desc: 'Ultra-fast media delivery with adaptive streaming.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  }
]

const Projects = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <a key={i} href={p.link} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10 backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-white font-semibold text-lg">{p.title}</h3>
            <p className="text-white/70 mt-1 text-sm">{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Projects
