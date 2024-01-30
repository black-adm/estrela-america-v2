import type { Metadata } from 'next'
import './assets/css/globals.css'
import localFont from 'next/font/local'

const icomoon = localFont({
  src: [{ path: './assets/fonts/icomoon.ttf' }],
  variable: '--font-icomoon',
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
    <html lang="pt-br" className={`${icomoon.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
