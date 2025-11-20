import React from 'react'
import Spline from '@splinetool/react-spline'

const Background3D = ({ sceneUrl = 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      {/* Soft gradient overlay to improve text contrast without blocking Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
    </div>
  )
}

export default Background3D
