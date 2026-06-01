import React from 'react'

export default function ProductCard({ title = 'Product', description = 'This is a simple product description.' }) {
  return (
    <div className="rounded-md bg-white p-5 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200">
      <div className="flex h-48 items-center justify-center rounded-md bg-slate-200 text-lg font-medium text-slate-500">Image</div>
      <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      <button className="mt-6 w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-600">Buy Now</button>
    </div>
  )
}
