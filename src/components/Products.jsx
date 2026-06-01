import React from 'react'
import ProductCard from './ProductCard'

const sample = [
  { id: 1, title: 'Product 1' },
  { id: 2, title: 'Product 2' },
  { id: 3, title: 'Product 3' },
]

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {sample.map((p) => (
          <ProductCard key={p.id} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  )
}
