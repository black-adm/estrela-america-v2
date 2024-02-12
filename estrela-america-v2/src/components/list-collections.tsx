const callouts = [
  {
    name: 'Camisetas estampadas',
    description: 'Produtos com estampas a pronta entrega e sobre encomenda.',
    imageSrc: '/camisetas.jpg',
    imageAlt: 'Produtos personalizados',
    href: '#',
  },
  {
    name: 'Regatas variadas',
    description: 'Mais variados preços e tecidos para a estação verão.',
    imageSrc: '/regatas.jpg',
    imageAlt: 'Produtos personalizados',
    href: '#',
  },
  {
    name: 'Produtos personalizados',
    description: 'Use sua criatividade e encomende produtos personalizados de qualidade.',
    imageSrc: '/camisas.jpg',
    imageAlt: 'Produtos personalizados',
    href: '#',
  },
]

export function ListCollections() {
  return (
      <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-orange">
            Conheça nossas coleções
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm sm:text-lg text-black">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-primary-blue">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
