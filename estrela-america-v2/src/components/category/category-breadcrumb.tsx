'use client'

import Link from 'next/link'

import { CategoryService } from '@/services/category-service'
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

  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: ['categories', category],
    queryFn: async () => await CategoryService.getByName(category),
  })

  if (!isCategoryLoading && categoryError) {
    toast.error(`Ocorreu um erro ao buscar a categoria ${category}.`)
  }

  const categoryId =
    categoryData && categoryData.length > 0 ? categoryData[0].id : null
  console.log(categoryId)

  const {
    data: products,
    isFetching: isProductsFetching,
    error: productsError,
  } = useQuery({
    queryKey: ['product-by-category', categoryId],
    queryFn: async () => await ProductService.getByCategory(categoryId),
    enabled: !!categoryId,
  })

  if (!isProductsFetching && productsError) {
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

      <h2 className="pt-8 text-2xl font-medium">Categoria {category}</h2>
      {products ? (
        products.map((product: Product) => (
          <div key={product.id}>
            <div className="py-4 flex flex-col gap-y-2">
              <p className="text-sm text-muted-foreground">
                Exibindo todos os{' '}
                <strong className="text-black">
                  {categoryData.length} resultado(s)
                </strong>{' '}
                relacionados a esta categoria.
              </p>
            </div>

            <main className="w-full pt-12 flex items-center">
              <ProductCard product={product} />
            </main>
          </div>
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
