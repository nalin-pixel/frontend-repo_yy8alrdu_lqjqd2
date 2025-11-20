import React from 'react'
import Spline from '@splinetool/react-spline'

// More controllable background with stronger darkening and subtle vignette
const Background3D = ({ sceneUrl = 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode', darkness = 0.75 }) => {
  const opacity = Math.min(Math.max(darkness, 0), 1)
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      {/* Dark gradient overlay to ensure readable foreground content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(1200px 1200px at 50% 10%, rgba(0,0,0,${opacity * 0.4}) 0%, rgba(0,0,0,${opacity}) 70%)`
        }}
      />
      {/* Additional film layer for consistency across scenes */}
      <div className="pointer-events-none absolute inset-0 bg-black/30 mix-blend-multiply" />
    </div>
  )
}

export default Background3D
