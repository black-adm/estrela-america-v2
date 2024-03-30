import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ProductContainerTitle } from './product-container-title'

const callouts = [
  {
    name: 'Camisetas estampadas',
    description: 'Produtos com estampas a pronta entrega e sobre encomenda.',
    imageSrc: '/camisetas.jpg',
    imageAlt: 'Produtos personalizados',
  },
  {
    name: 'Regatas variadas',
    description:
      'Mais variados preços e tecidos para todas as estações do ano.',
    imageSrc: '/regatas.jpg',
    imageAlt: 'Produtos personalizados',
  },
  {
    name: 'Produtos personalizados',
    description:
      'Use sua criatividade e encomende produtos personalizados de qualidade.',
    imageSrc: '/camisas.jpg',
    imageAlt: 'Produtos personalizados',
  },
]

export function ListCollections() {
  return (
    <div className="py-5">
      <ProductContainerTitle
        title="Conheça as nossas"
        titleStrong="coleções"
        navigate="#"
      />
      <div className="pt-5 mx-auto max-w-6xl px-4 sm:mt-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6">
          {callouts.map((callout) => (
            <Card key={callout.name}>
              <Image
                src={callout.imageSrc}
                alt={callout.imageAlt}
                width={479}
                height={340}
                className="h-28 w-full rounded-t-lg object-cover object-center"
              />
              <CardHeader>
                <CardTitle className="text-primary-orange">
                  {callout.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-black">{callout.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
