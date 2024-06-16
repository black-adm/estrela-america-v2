import { CartContext } from '@/context/cart-context'
import { useContext } from 'react'

export const useCart = () => {
  return useContext(CartContext)
}
