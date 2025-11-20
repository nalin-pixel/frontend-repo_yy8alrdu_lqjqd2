import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg" />
          <span className="text-white font-semibold">My Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItem({ to: '/', label: 'Home' })}
          {navItem({ to: '/projects', label: 'Projects' })}
          {navItem({ to: '/about', label: 'About' })}
          {navItem({ to: '/contact', label: 'Contact' })}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex flex-col bg-white/5 rounded-lg p-2">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/projects', label: 'Projects' })}
            {navItem({ to: '/about', label: 'About' })}
            {navItem({ to: '/contact', label: 'Contact' })}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
