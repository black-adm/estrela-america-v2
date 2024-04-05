import { TextQuote } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

import Link from 'next/link'

const categoriesAside = [
  {
    name: 'Beleza',
    url: '/produtos/categoria/beleza',
  },
  {
    name: 'Brindes',
    url: '/produtos/categoria/brindes',
  },
  {
    name: 'Bolsas e mochilas',
    url: '/produtos/categoria/bolsas-e-mochilas',
  },
  {
    name: 'Canecas e garrafas',
    url: '/produtos/categoria/canecas-e-garrafas',
  },
  {
    name: 'Casa e cozinha',
    url: '/produtos/categoria/casa-e-cozinha',
  },
  {
    name: 'Papelaria',
    url: '/produtos/categoria/papelaria',
  },
  {
    name: 'Relógios',
    url: '/produtos/categoria/relogios',
  },
  {
    name: 'Tecnologia',
    url: '/produtos/categoria/tecnologia',
  },
  {
    name: 'Utilidades',
    url: '/produtos/categoria/utilidades',
  },
]

export function ProductCategoryAside() {
  return (
    <aside className="w-72 h-auto px-5">
      <ScrollArea className="h-full w-full border-r">
        <div className="p-4">
          <h4 className="pb-7 inline-flex items-center gap-2 text-sm font-medium leading-none">
            <TextQuote className="size-4" />
            Categorias
          </h4>
          {categoriesAside.map((category) => (
            <>
              <div className="text-sm" key={category.name}>
                <Link
                  href={category.url}
                  className="text-muted-foreground hover:text-light-blue"
                >
                  {category.name}
                </Link>
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
