'use client'

import { ProductCard } from './product-card'
import { ProductContainerTitle } from './product-container-title'

const products = [
  {
    id: 1,
    name: 'Garrafas térmicas',
    imageSrc: '/garrafas.png',
    imageAlt: 'Garrafas',
    price: '35,00',
  },
  {
    id: 2,
    name: 'Canetas coloridas',
    imageSrc: '/canetas.png',
    imageAlt: 'Canetas',
    price: '8,99',
  },
  {
    id: 3,
    name: 'Tênis casual',
    imageSrc: '/tenis.png',
    imageAlt: 'Tênis',
    price: '136,72',
  },
  {
    id: 4,
    name: 'Potes variados',
    imageSrc: '/potes.png',
    imageAlt: 'Potes',
    price: '44,63',
  },
  {
    id: 5,
    name: 'Garrafas térmicas',
    imageSrc: '/garrafas.png',
    imageAlt: 'Garrafas',
    price: '35,00',
  },
  {
    id: 6,
    name: 'Canetas coloridas',
    imageSrc: '/canetas.png',
    imageAlt: 'Canetas',
    price: '8,99',
  },
  {
    id: 7,
    name: 'Tênis casual',
    imageSrc: '/tenis.png',
    imageAlt: 'Tênis',
    price: '136,72',
  },
  {
    id: 8,
    name: 'Potes variados',
    imageSrc: '/potes.png',
    imageAlt: 'Potes',
    price: '44,63',
  },
]

export function MostViewsProducts() {
  return (
    <div className="py-8">
      <ProductContainerTitle
        title="Produtos mais"
        titleStrong="visualizados"
        navigate="#"
      />

      <main className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="grid grid-cols-4 gap-y-5">
          {products.map((product, index) => (
            <div key={product.id}>
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
