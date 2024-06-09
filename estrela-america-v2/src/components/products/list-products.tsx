'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { ProductService } from '@/services/product-service'
import { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { ProductCard } from './product-card'
import { ProductContainerTitle } from './product-container-title'

export function ListProducts() {
  const { data, isFetching, error } = useQuery({
    queryKey: ['product'],
    queryFn: async () => await ProductService.getAll(),
  })

  if (!isFetching && error) {
    toast.error('Erro ao buscar produtos! Tente novamente.')
  }

  return (
    <div className="py-10">
      <ProductContainerTitle
        title="Produtos com melhores"
        titleStrong="avaliações"
        navigate="#"
      />

      <Carousel className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        <CarouselContent className="grid grid-cols-4">
          {data ? (
            data.map((product: Product) => (
              <CarouselItem key={product.id}>
                <ProductCard product={product} />
              </CarouselItem>
            ))
          ) : (
            <div className="py-5 flex justify-center items-center">
              <h4>Nenhum produto cadastrado.</h4>
            </div>
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden previous sm:flex sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white text-primary-blue" />
        <CarouselNext className="hidden next sm:flex sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white text-primary-blue" />
      </Carousel>
    </div>
  )
}
