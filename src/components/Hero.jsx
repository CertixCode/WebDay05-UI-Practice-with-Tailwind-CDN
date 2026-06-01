import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gray-200 py-16 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 max-w-xl flex flex-col items-center md:items-start text-center md:text-left py-8 px-4">
          <h1 className="font-bold text-slate-900 text-4xl md:text-5xl">Discover Modern</h1>
          <div className="mt-2 flex flex-col md:flex-row items-baseline gap-2 md:gap-4 text-2xl md:text-4xl lg:text-5xl">
            <h2 className="font-bold leading-tight">
              <span className="text-slate-900">Made</span>
              <span className="mx-2 md:mx-4 text-blue-700">Shopping</span>
              <span className="text-slate-900">Simple</span>
            </h2>
          </div>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">Explore premium products with modern design, fast delivery, and the best shopping experience.</p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
            <button className="rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-600">Shop Now</button>
            <button className="rounded-lg bg-transparent border border-blue-700 px-4 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100">Learn More</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <img
            className="w-full max-w-md rounded-md object-cover h-64 sm:h-80 md:h-96 border border-gray-300"
            src="https://imgs.search.brave.com/wz74i7B-hRMO5p4lT503UkvMrG9Jk1JLxDqwZLhVab0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM0LzgzLzE4/LzM2MF9GXzEzNDgz/MTg0MF9NeXNhQkVP/RFJId1hZV0M5U2VM/c3U3SDBEMTFrbW9M/eS5qcGc"
            alt="Shopping Image"
          />
        </div>
      </div>
    </section>
  )
}
