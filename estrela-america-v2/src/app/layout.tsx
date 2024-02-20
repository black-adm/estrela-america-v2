import type { Metadata } from 'next'
import './assets/css/globals.css'
import { Ubuntu } from 'next/font/google'

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
      <body>{children}</body>
    </html>
  )
}
