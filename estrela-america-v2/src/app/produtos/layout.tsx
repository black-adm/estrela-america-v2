import type { Metadata } from 'next'
import { ProductPage } from './page'

export const metadata: Metadata = {
  title: 'Estrela América - Categorias',
  description: 'Encontre produtos exclusivos',
}

export default function ProductPageLayout() {
  return <ProductPage />
}
