const products = [
  {
    id: 1,
    name: 'Garrafas térmicas',
    href: '#',
    imageSrc: '/garrafas.png',
    imageAlt: "Garrafas",
    price: 'R$ 35,00',
    color: 'Preto, Branco, Prata',
  },
  {
    id: 2,
    name: 'Canetas coloridas',
    href: '#',
    imageSrc: '/canetas.png',
    imageAlt: "Canetas",
    price: 'R$ 8,99',
    color: 'Azul, Vermelho, Verde',
  },
  {
    id: 3,
    name: 'Tenis casual',
    href: '#',
    imageSrc: 'tenis.png',
    imageAlt: "Tenis",
    price: 'R$ 136,72',
    color: 'Azul Claro',
  },
  {
    id: 4,
    name: 'Potes variados',
    href: '#',
    imageSrc: '/potes.png',
    imageAlt: "Potes",
    price: 'R$ 44,63',
    color: 'Amarelo, Roxo, Laranja',
  },
]

export function ListProducts() {
  return (
   <div className="mt-16 bg-gradient-to-br from-[#132c59] to-slate-950">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-orange">
          Mais bem avaliados
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-orange-400">{product.color}</p>
                </div>
                <p className="text-sm font-medium sm:text-lg text-white">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
