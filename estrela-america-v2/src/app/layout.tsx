import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import { AppProvider } from './_app'
import './assets/css/globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Estrela América',
  description: 'Encontre produtos exclusivos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={ubuntu.className}>
      <AppProvider>{children}</AppProvider>
    </html>
  )
}
