import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-black/60 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 text-white/60 text-sm flex justify-between items-center">
          <p>© {new Date().getFullYear()} Your Name</p>
          <a href="/test" className="hover:text-white">System Test</a>
        </div>
      </footer>
    </div>
  )
}

export default App
