import { Heart, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { Whatsapp } from '../logo-whatsapp'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

interface ProductProps {
  product: {
    name: string
    imageSrc: string
    imageAlt: string
    price: string
  }
  index: number
}

export function ProductCard({ product }: ProductProps) {
  const starsArray: number[] = randomStarsAvaliate()

  function randomStarsAvaliate(): number[] {
    return Array(5).fill(5)
  }

  return (
    <div className="p-1">
      <Card className="h-auto w-60 hover:border hover:border-primary-orange hover:opacity-80">
        <CardHeader>
          <div className="w-full overflow-hidden lg:aspect-none group-hover:opacity-75 h-40">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={600}
              height={600}
              className="h-28 w-28 p-5 object-contain object-center sm:w-52 sm:h-52 xl:h-full xl:w-full"
            />
          </div>
          <CardTitle className="font-medium">{product.name}</CardTitle>
          <CardDescription className="flex">
            {starsArray.map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-200 fill-primary-yellow"
              />
            ))}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex justify-start items-center">
            <div className="w-full flex flex-col items-baseline">
              <span className="text-xs text-green-400">- 10% off</span>
              <strong className="text-2xl font-extrabold">
                <span className="text-lg pr-1">R$</span>
                {product.price}
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
            <Button className="inline-flex items-center gap-1 w-full text-black bg-gradient-to-r from-primary-orange to-orange-400 hover:bg-gradient-to-b hover:from-primary-green hover:to-green-300">
              Comprar
              <Whatsapp />
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}
