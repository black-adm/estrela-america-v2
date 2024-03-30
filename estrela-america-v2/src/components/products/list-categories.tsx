import { Avatar, AvatarImage } from '../ui/avatar'
import { ProductContainerTitle } from './product-container-title'

const categories = [
  {
    id: 1,
    name: 'Beleza',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/008/550/443/original/3d-icon-cosmetic-luxurious-mascara-png.png',
  },
  {
    id: 2,
    name: 'Brindes',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/009/596/501/original/3d-illustration-of-gift-icon-png.png',
  },
  {
    id: 3,
    name: 'Casa e cozinha',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/028/574/472/non_2x/kitchen-3d-rendering-icon-illustration-free-png.png',
  },
  {
    id: 4,
    name: 'Papelaria',
    imageUrl: 'https://github.com/shadcn.png',
  },
  {
    id: 5,
    name: 'Relógios',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'Tecnologia',
    imageUrl: 'https://github.com/shadcn.png',
  },
  {
    id: 7,
    name: 'Utilidades',
    imageUrl: 'https://github.com/shadcn.png',
  },
]

export function ListCategories() {
  return (
    <>
      <div>
        <ProductContainerTitle
          title="Compre pela"
          titleStrong="categoria"
          navigate="#"
        />
      </div>

      <div className="pt-4 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="flex justify-start items-center gap-12">
          {categories.map((category) => (
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
    </>
  )
}
