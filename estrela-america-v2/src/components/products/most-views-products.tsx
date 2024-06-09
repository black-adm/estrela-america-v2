'use client'

import { ProductService } from '@/services/product-service'
import { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { ProductCard } from './product-card'
import { ProductContainerTitle } from './product-container-title'

export function MostViewsProducts() {
  const { data, isFetching, error } = useQuery({
    queryKey: ['most-view-products'],
    queryFn: async () => await ProductService.getAll(),
  })

  if (!isFetching && error) {
    toast.error('Erro ao buscar produtos! Tente novamente.')
  }

  return (
    <div className="py-8">
      <ProductContainerTitle
        title="Produtos mais"
        titleStrong="visualizados"
        navigate="#"
      />

      <main className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="grid grid-cols-4 gap-y-5">
          {data ? (
            data.map((product: Product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="py-5 flex justify-center items-center">
              <h4>Nenhum produto cadastrado.</h4>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
