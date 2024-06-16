import { CartItem } from '@/types/cart'
import { Product } from '@/types/product'
import { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface CartContextValue {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateCartItemQuantity: (productId: string, quantity: number) => void
  cartTotal: number
  cartCount: number
}

export const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
})

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id,
    )

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex]
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      }

      const updatedCartItems = [...cartItems]
      updatedCartItems[existingCartItemIndex] = updatedCartItem
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: string) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== productId,
    )
    setCartItems(updatedCartItems)
  }

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    )

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex]
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      }

      const updatedCartItems = [...cartItems]
      updatedCartItems[existingCartItemIndex] = updatedCartItem
      setCartItems(updatedCartItems)
    }
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.preco * item.quantity,
    0,
  )

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
