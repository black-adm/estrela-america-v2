import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const colletionsCards = [
  {
    id: '1',
    name: 'Verão',
    imageSrc:
      'https://images.unsplash.com/photo-1685227550896-fe7a0a0025d7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Moda Verão',
  },
  {
    id: '2',
    name: 'Inverno',
    imageSrc:
      'https://images.unsplash.com/photo-1484688493527-670f98f9b195?q=80&w=1694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Moda inverno',
  },
  {
    id: '3',
    name: 'Outono',
    imageSrc:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Moda Outono',
  },
]

export default function ColletionsPage() {
  return (
    <div className="py-24 w-screen h-full">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <h1 className="text-3xl font-bold">Novidades para todas estações</h1>
        <p className="pt-2 text-wrap text-muted-foreground text-lg font-light">
          Fique por dentro de nossas novidades para este mês. Produtos de muita
          qualidade com descontos exclusivos.
        </p>

        <div className="w-full pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {colletionsCards.map((item) => (
            <Card key={item.id} className="border-none shadow-none">
              <CardContent className="p-1 bg-gray-50 rounded-lg">
                <Image
                  className="h-full w-full object-cover object-center rounded-md"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={2000}
                  height={2000}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-16"></div>
      </div>
    </div>
  )
}
