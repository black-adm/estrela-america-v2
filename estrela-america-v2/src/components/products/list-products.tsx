'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ChevronRight } from 'lucide-react'

import Link from 'next/link'
import { ProductCard } from './product-card'

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
]

export function ListProducts() {
  return (
    <div className="my-12">
      <div className="mx-auto max-w-6xl px-7 flex items-center justify-between pt-10 pb-4 lg:pb-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Produtos com melhores{' '}
          <strong className="text-primary-blue">avaliações</strong>
          <hr className="border-b-2 border-primary-blue w-56" />
        </h2>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-xs uppercase text-primary-blue hover:underline hover:text-sky-400"
        >
          Ver todos
          <ChevronRight />
        </Link>
      </div>

      <Carousel className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        <CarouselContent className="grid grid-cols-4">
          {products.map((product, index) => (
            <CarouselItem key={product.id}>
              <ProductCard product={product} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden previous sm:flex sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white text-primary-blue" />
        <CarouselNext className="hidden next sm:flex sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white text-primary-blue" />
      </Carousel>
    </div>
  )
}
