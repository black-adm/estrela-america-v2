import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

export function Cart() {
  return (
    <>
      <Link href="#" title="carrinho">
        <ShoppingCartIcon className="text-white size-5 lg:size-6 hover:fill-white" />
      </Link>
    </>
  )
}
