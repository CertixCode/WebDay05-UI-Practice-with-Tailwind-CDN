import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-slate-900 overflow-x-hidden">
      <Nav />
      <Hero />

      <main className="flex-1">
        <section id="home" className="mx-auto max-w-6xl px-4 pb-14 pt-14 text-center sm:px-6 lg:px-8 lg:pt-16">
          <h1 className="text-4xl font-semibold tracking-tight text-blue-600 sm:text-4xl">Welcome to My Tailwind Store</h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">Simple UI built with Tailwind CSS</p>
        </section>

        <Products />
      </main>

      <Footer />
    </div>
  )
}
