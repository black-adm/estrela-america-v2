import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import type { Metadata } from 'next'
import ColletionsPage from './page'

export const metadata: Metadata = {
  title: 'Estrela América - Coleções',
  description: 'Coleções disponíveis nesta estação.',
}

export default function ColletionsPageLayout() {
  return (
    <>
      <Header />
      <ColletionsPage />
      <Footer />
    </>
  )
}
