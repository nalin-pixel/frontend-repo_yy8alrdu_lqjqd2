import React from 'react'
import Background3D from './Background3D'

const Section = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="relative py-24">
      <Background3D />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
          {subtitle && <p className="text-white/80 mb-10">{subtitle}</p>}
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
