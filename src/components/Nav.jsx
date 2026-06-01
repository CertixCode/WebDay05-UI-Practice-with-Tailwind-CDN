import React, { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-blue-700 text-white">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-lg font-bold">MyShop</p>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          <a className="transition hover:text-white" href="#home">Home</a>
          <a className="transition hover:text-white" href="#products">Products</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </div>

        {/* mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg className={`w-6 h-6 transition-transform ${open ? 'transform rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-blue-600 bg-blue-700`}
        onClick={() => setOpen(false)}>
        <div className="px-4 py-3 flex flex-col gap-2 text-white/90">
          <a className="block px-2 py-2 rounded hover:bg-blue-600" href="#home">Home</a>
          <a className="block px-2 py-2 rounded hover:bg-blue-600" href="#products">Products</a>
          <a className="block px-2 py-2 rounded hover:bg-blue-600" href="#contact">Contact</a>
        </div>
      </div>
    </header>
  )
}
