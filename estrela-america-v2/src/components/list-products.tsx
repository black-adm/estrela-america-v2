'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { MoveRight } from 'lucide-react'
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
    color: 'Preto, Branco, Prata',
  },
  {
    id: 2,
    name: 'Canetas coloridas',
    href: '#',
    imageSrc: '/canetas.png',
    imageAlt: 'Canetas',
    price: '8,99',
    color: 'Azul, Vermelho, Verde',
  },
  {
    id: 3,
    name: 'Tenis casual',
    href: '#',
    imageSrc: '/tenis.png',
    imageAlt: 'Tenis',
    price: '136,72',
    color: 'Azul Claro',
  },
  {
    id: 4,
    name: 'Potes variados',
    href: '#',
    imageSrc: '/potes.png',
    imageAlt: 'Potes',
    price: '44,63',
    color: 'Amarelo, Roxo, Laranja',
  },
]

export function ListProducts() {
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
            <MoveRight className="size-3.5" />
          </Link>
        </div>

        <CarouselContent className="-ml-1 grid grid-cols-2 md:flex md:space-x-3 md:px-6 gap-4">
          {products.map((product) => (
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
                    <p className="mt-1 text-xs text-primary-blue">
                      {product.color}
                    </p>
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
