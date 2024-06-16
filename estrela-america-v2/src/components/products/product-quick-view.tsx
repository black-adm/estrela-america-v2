import Image from 'next/image'

import { Product } from '@/types/product'
import { Button } from '../ui/button'
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { ProductAvailable } from './product-available'

interface ProductQuickViewProps {
  selectedProduct: Product
}

export function ProductQuickView({ selectedProduct }: ProductQuickViewProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-6 sm:grid-cols-2 lg:gap-x-8">
      <section className="w-72 pb-4">
        <div className="aspect-h-3 aspect-w-2">
          <Image
            src={selectedProduct.imageSrc}
            alt={selectedProduct.imageAlt}
            className="object-contain object-center w-52 h-52"
            width={400}
            height={400}
          />
        </div>

        <div className="pt-3 col-span-3">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-black sm:pr-12">
              {selectedProduct.nome}
            </DialogTitle>
          </DialogHeader>

          <div>
            <h4 className="sr-only">Avaliações</h4>
            <div className="flex flex-col justify-center items-baseline space-y-3">
              <div className="flex items-center">
                <ProductAvailable />
              </div>
              <span className="flex items-center gap-2 text-2xl text-gray-900">
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(selectedProduct.preco)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1 h-full">
        <Image
          className="h-4 w-full lg:h-5 lg:w-auto"
          src="/logo.png"
          height={1330}
          width={10605}
          alt="logo"
        />

        <form className="py-12 pr-2 space-y-6">
          <div className="flex flex-col space-y-1.5">
            <Input id="fullName" placeholder="Nome completo" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Input id="email" type="email" placeholder="Seu e-mail" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Input id="phone" placeholder="Seu número whatsapp" />
          </div>
        </form>

        <DialogFooter className="col-span-2">
          <DialogClose asChild>
            <Button type="button">Voltar</Button>
          </DialogClose>
          <Button
            type="button"
            className="text-black bg-primary-orange hover:bg-orange-400 focus-visible:ring-0"
          >
            Comprar produto
          </Button>
        </DialogFooter>
      </div>
    </div>
  )
}
