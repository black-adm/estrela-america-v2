import type { Metadata } from 'next'
import ProductCategory from './page'

export const metadata: Metadata = {
  title: 'Estrela América - Categorias',
  description: 'Encontre produtos exclusivos',
}

export default function ProductCategoryLayout() {
  return <ProductCategory />
}
