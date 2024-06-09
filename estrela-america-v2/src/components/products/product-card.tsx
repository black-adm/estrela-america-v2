import Image from 'next/image'

import { Product } from '@/types/product'
import { Heart, ShoppingCart } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { BuyProductButton } from './buy-product-button'
import { ProductAvailable } from './product-available'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  function handleBuyProduct() {
    console.log('Produto selecionado:', product)
  }

  return (
    <div className="p-1">
      <Card className="h-auto w-60 hover:border hover:border-primary-orange hover:opacity-80">
        <CardHeader className="bg-white w-full rounded-t-xl p-1">
          <div className="w-full overflow-hidden lg:aspect-none h-40">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={600}
              height={600}
              className="h-28 w-28 p-5 object-contain object-center sm:w-52 sm:h-52 xl:h-full xl:w-full"
            />
          </div>
        </CardHeader>

        <div className="p-4 flex flex-col justify-center items-baseline">
          <CardTitle className="font-medium">{product.nome}</CardTitle>
          <CardDescription className="flex">
            <ProductAvailable />
          </CardDescription>
        </div>

        <CardContent>
          <div className="flex justify-start items-center">
            <div className="w-full flex flex-col items-baseline">
              <span className="text-xs text-green-400">- 10% off</span>
              <strong className="text-2xl font-extrabold">
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.preco)}
              </strong>
            </div>

            <div className="w-full flex items-end justify-end gap-2">
              <button title="favoritos">
                <Heart className="size-4 text-primary-red hover:fill-primary-red" />
              </button>
              <button title="carrinho">
                <ShoppingCart className="size-4 hover:fill-black" />
              </button>
            </div>
          </div>

          <CardFooter className="pt-5">
            <BuyProductButton
              onClick={handleBuyProduct}
              selectedProduct={product}
            />
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}
