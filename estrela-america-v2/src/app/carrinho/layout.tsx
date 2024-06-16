import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import type { Metadata } from 'next'
import CartPage from './page'

export const metadata: Metadata = {
  title: 'Estrela América - Carrinho',
  description: 'Meu carrinho',
}

export default function CartPageLayout() {
  return (
    <>
      <Header />
      <CartPage />
      <Footer />
    </>
  )
}
