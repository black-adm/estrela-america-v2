'use client'

import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { usePathname } from 'next/navigation'

export function ProductCategoryBreadcrumb() {
  const pathname = usePathname()
  const getFormattedSlug = pathname.split('/')[3].replace(/-/g, ' ')
  const slug = getFormattedSlug

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

      <div className="py-7 flex flex-col gap-y-2">
        <h2 className="text-2xl font-medium">Categoria {slug}</h2>
        <p className="text-sm text-muted-foreground">
          Exibindo todos os{' '}
          <strong className="text-black">17 resultados</strong> relacionados a
          esta categoria.
        </p>
      </div>
    </div>
  )
}
