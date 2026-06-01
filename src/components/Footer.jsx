import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-white/90">&copy; 2026 MyShop. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <a className="transition hover:text-white" href="#">Privacy Policy</a>
          <a className="transition hover:text-white" href="#">Terms</a>
          <a className="transition hover:text-white" href="#">Support</a>
        </div>
      </div>
    </footer>
  )
}
