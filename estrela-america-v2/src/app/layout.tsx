import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import './assets/css/globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Estrela América - Artigos e brindes para presentes',
  description: 'Encontre produtos exclusivos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  )
}
