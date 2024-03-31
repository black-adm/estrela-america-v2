import { Avatar, AvatarImage } from '../ui/avatar'
import { ProductContainerTitle } from './product-container-title'

const categoriesIcons = [
  {
    id: 1,
    name: 'Beleza',
    imageUrl: '/beleza.png',
  },
  {
    id: 2,
    name: 'Brindes',
    imageUrl: '/brindes.png',
  },
  {
    id: 3,
    name: 'Casa e cozinha',
    imageUrl: '/casa-cozinha.png',
  },
  {
    id: 4,
    name: 'Papelaria',
    imageUrl: '/papelaria.png',
  },
  {
    id: 5,
    name: 'Relógios',
    imageUrl: '/relogios.png',
  },
  {
    id: 6,
    name: 'Tecnologia',
    imageUrl: '/tecnologia.png',
  },
  {
    id: 7,
    name: 'Utilidades',
    imageUrl: '/utilidades.png',
  },
]

export function ListCategories() {
  return (
    <div className="py-8">
      <ProductContainerTitle
        title="Produtos por"
        titleStrong="categoria"
        navigate="/categorias"
      />

      <div className="pt-6 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="flex justify-start items-center gap-12">
          {categoriesIcons.map((category) => (
            <main
              key={category.id}
              className="flex flex-col space-y-2 items-center"
            >
              <Avatar className="bg-primary-silver h-24 w-24">
                <AvatarImage src={category.imageUrl} />
              </Avatar>
              <p className="text-sm font-medium text-muted-foreground">
                {category.name}
              </p>
            </main>
          ))}
        </div>
      </div>
    </div>
  )
}
