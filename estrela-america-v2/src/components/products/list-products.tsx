'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Garrafas térmicas',
    href: '#',
    imageSrc: '/garrafas.png',
    imageAlt: 'Garrafas',
    price: '35,00',
  },
  {
    id: 2,
    name: 'Canetas coloridas',
    href: '#',
    imageSrc: '/canetas.png',
    imageAlt: 'Canetas',
    price: '8,99',
  },
  {
    id: 3,
    name: 'Tênis casual',
    href: '#',
    imageSrc: '/tenis.png',
    imageAlt: 'Tênis',
    price: '136,72',
  },
  {
    id: 4,
    name: 'Potes variados',
    href: '#',
    imageSrc: '/potes.png',
    imageAlt: 'Potes',
    price: '44,63',
  },
]

export function ListProducts() {
  const starsArray: number[] = randomStarsAvaliate()

  function randomStarsAvaliate(): number[] {
    const array: number[] = []
    for (let i = 0; i < 5; i++) array.push(Math.floor(Math.random() * 5) + 1)

    return array
  }

  return (
    <div className="my-16">
      <Carousel className="bg-white mx-auto py-10 max-w-2xl px-4 sm:px-6 lg:max-w-6xl lg:px-8 rounded-xl">
        <div className="flex items-center justify-between pb-4 lg:pb-8">
          <h2 className="text-2xl font-bold tracking-tight text-primary-orange">
            Mais bem avaliados
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-primary-blue hover:underline hover:text-sky-400"
          >
            Ver mais
          </Link>
        </div>

        <CarouselContent className="-ml-1 grid grid-cols-2 md:flex md:space-x-3 md:px-6 gap-4">
          {products.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-72 xl:h-80">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={600}
                    height={600}
                    className="h-28 w-28 object-contain object-center sm:w-52 sm:h-52 xl:h-full xl:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between md:px-8">
                  <div>
                    <h3 className="text-sm md:text-base text-slate-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <div className="mt-1 flex">
                      {starsArray[index] &&
                        Array.from({ length: starsArray[index] }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="text-black fill-primary-yellow"
                            />
                          ),
                        )}
                    </div>
                  </div>

                  <p className="text-sm font-medium sm:text-2xl sm:font-semibold text-black">
                    <span className="text-lg font-extrabold pr-2">R$</span>
                    {product.price}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden previous sm:flex sm:w-8 sm:h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 bg-white text-primary-blue" />
        <CarouselNext className="hidden next sm:flex sm:w-8 sm:h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 bg-white text-primary-blue" />
      </Carousel>
    </div>
  )
}
