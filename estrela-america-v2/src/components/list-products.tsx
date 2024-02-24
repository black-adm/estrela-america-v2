'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const products = [
  {
    id: 1,
    name: 'Garrafas térmicas',
    href: '#',
    imageSrc: '/garrafas.png',
    imageAlt: 'Garrafas',
    price: 'R$ 35,00',
    color: 'Preto, Branco, Prata',
  },
  {
    id: 2,
    name: 'Canetas coloridas',
    href: '#',
    imageSrc: '/canetas.png',
    imageAlt: 'Canetas',
    price: 'R$ 8,99',
    color: 'Azul, Vermelho, Verde',
  },
  {
    id: 3,
    name: 'Tenis casual',
    href: '#',
    imageSrc: 'tenis.png',
    imageAlt: 'Tenis',
    price: 'R$ 136,72',
    color: 'Azul Claro',
  },
  {
    id: 4,
    name: 'Potes variados',
    href: '#',
    imageSrc: '/potes.png',
    imageAlt: 'Potes',
    price: 'R$ 44,63',
    color: 'Amarelo, Roxo, Laranja',
  },
]

export function ListProducts() {
  return (
    <div className="my-16">
      <Carousel className="bg-white mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-12 rounded-xl">
        <h2 className="text-2xl pb-8 font-bold tracking-tight text-primary-orange">
          Mais bem avaliados
        </h2>

        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-48 object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-slate-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-primary-blue">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium sm:text-lg text-black">
                    {product.price}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="previous lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white text-primary-blue" />
        <CarouselNext className="next lg:w-12 lg:h:12  xl:w-16 xl:h-16 bg-white text-primary-blue" />
      </Carousel>
    </div>
  )
}
