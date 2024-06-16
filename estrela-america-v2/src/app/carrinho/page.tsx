import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ChevronLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const productList = [
  {
    id: 'fkdf83093039',
    nome: 'Porta objetos',
    imageSrc:
      'https://www.estrelaam.com.br/wp-content/uploads/2024/05/www.estrelaam.com.br-porta-joias-para-brinde-porta-joias-brinde.jpeg',
    imageAlt: 'Kit porta objetos',
    preco: 27,
    quantidade: 12,
  },
  {
    id: 'fkdf83093039',
    nome: 'Mochila preta reforçada',
    imageSrc:
      'https://images.tcdn.com.br/img/img_prod/886231/mochila_notebook_executiva_preta_seanite_5177_1_35f246a872a91716b01f1aee1fad94e4_20231002115324.jpg',
    imageAlt: 'Mochila',
    preco: 99,
    quantidade: 4,
  },
]

export default function CartPage() {
  return (
    <div className="h-full w-screen overflow-hidden">
      <div className="w-full max-w-6xl mx-auto p-10 lg:p-20">
        <h1 className="text-3xl font-extrabold pb-10">Meu carrinho</h1>
        <Separator />

        {productList.map((product) => (
          <>
            <Separator />
            <div
              key={product.id}
              className="my-12 w-full flex justify-between items-center px-8"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-36 lg:w-44">
                <Image
                  className="h-full w-full object-cover object-center"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex flex-col items-center space-y-4">
                <h4 className="text-xl font-medium text-primary-orange text-wrap">
                  {product.nome}
                </h4>

                <p className="text-muted-foreground text-2xl font-light">
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.preco)}
                </p>
                <p className="text-xl font-semibold">
                  <span className="text-muted-foreground text-lg font-light pr-4">
                    Quantidade
                  </span>{' '}
                  {product.quantidade}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Button type="button" className="hover:bg-primary-red">
                  Excluir
                </Button>
              </div>
            </div>
          </>
        ))}

        <div className="py-5 flex items-center justify-center gap-8 px-10">
          <Link href="/">
            <Button
              type="button"
              variant="secondary"
              className="text-primary-blue gap-3"
            >
              <ChevronLeftIcon className="size-5" />
              Voltar para o início
            </Button>
          </Link>

          <Button
            type="button"
            className="bg-transparent text-primary-orange border border-primary-orange hover:bg-primary-orange hover:text-white"
          >
            Finalizar meu pedido
          </Button>
        </div>
      </div>
    </div>
  )
}
