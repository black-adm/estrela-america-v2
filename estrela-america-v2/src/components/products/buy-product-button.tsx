import { Product } from '@/types/product'
import { LogoWhatsapp } from '../logo-whatsapp'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { ProductQuickView } from './product-quick-view'

interface BuyProductButtonProps {
  onClick: () => void
  selectedProduct: Product
}

export function BuyProductButton({
  onClick,
  selectedProduct,
}: BuyProductButtonProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={onClick}
            className="inline-flex items-center gap-1 w-full text-black bg-gradient-to-r from-primary-orange to-orange-400 hover:bg-gradient-to-b hover:from-primary-green hover:to-green-400"
          >
            Comprar
            <LogoWhatsapp className="size-5" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <ProductQuickView selectedProduct={selectedProduct} />
        </DialogContent>
      </Dialog>
    </>
  )
}
