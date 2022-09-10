import { createContext, ReactNode, useEffect, useState } from 'react'
import { ProductProps } from '../components/CoffeeCard'
import { produce } from 'immer'

interface CheckoutContextProviderProps {
  children: ReactNode
}

interface CheckoutContextProps {
  addProductCart: (product: CartItemsProps) => void
  cartItems: CartItemsProps[]
  cartLength: number
}

interface CartItemsProps extends ProductProps {
  quantity: number
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([])
  
  const cartLength = cartItems.length

  function addProductCart(product: CartItemsProps) {
    let productAlreadyInCart = cartItems.findIndex(cartItem => cartItem.id === product.id)

    const newCart = produce(cartItems, (draft) => {
      if(productAlreadyInCart < 0) {
        draft.push(product)
      } else {
        draft[productAlreadyInCart].quantity += product.quantity
      }
    })

    setCartItems(newCart)
  }
  
  return (
    <CheckoutContext.Provider value={{ cartItems, addProductCart, cartLength }}>
      {children}
    </CheckoutContext.Provider>
  )
}
