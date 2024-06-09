'use client'

import Link from 'next/link'

import { ProductService } from '@/services/product-service'
import { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'
import { ProductCard } from '../products/product-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

export function CategoryBreadcrumb() {
  const pathname = usePathname()
  const formattedPathName = pathname.split('/')[3].replace(/-/g, ' ')
  const category = formattedPathName

  const { data, isFetching, error } = useQuery({
    queryKey: ['product-by-category'],
    queryFn: async () => await ProductService.getByCategory(category),
  })

  if (!isFetching && error) {
    toast.info('Nenhum produto cadastrado para essa categoria.')
  }

  return (
    <div className="pt-4 w-full relative right-1/2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Página inicial</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/components">Produtos</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/components">Categorias</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {data ? (
        data.map((product: Product) => (
          <>
            <div key={product.id} className="py-7 flex flex-col gap-y-2">
              <h2 className="text-2xl font-medium">Categoria {category}</h2>
              <p className="text-sm text-muted-foreground">
                Exibindo todos os{' '}
                <strong className="text-black">67 resultados</strong>{' '}
                relacionados a esta categoria.
              </p>
            </div>

            <main className="w-full flex justify-center items-center">
              <ProductCard product={product} />
            </main>
          </>
        ))
      ) : (
        <div className="py-8">
          <p className="font-medium">
            Nenhum produto cadastrado para esta categoria.
          </p>
        </div>
      )}
    </div>
  )
}
