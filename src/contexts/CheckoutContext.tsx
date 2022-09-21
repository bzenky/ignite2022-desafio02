import { createContext, ReactNode, useEffect, useState } from 'react'
import { ProductProps } from '../components/CoffeeCard'
import { produce } from 'immer'

interface CheckoutContextProviderProps {
  children: ReactNode
}

interface CheckoutContextProps {
  addProductCart: (product: ProductProps) => void
  removeProductCart: (product: ProductProps) => void
  increaseQuantityProductCart: (product: ProductProps) => void
  decreaseQuantityProductCart: (product: ProductProps) => void
  cartItems: ProductProps[]
  cartLength: number
  cartProductsTotalPrice: number
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([])

  const cartLength = cartItems.length
  const cartProductsTotalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.quantity! * item.price)
  }, 0)

  function addProductCart(product: ProductProps) {
    let productAlreadyInCart = cartItems.findIndex(cartItem => cartItem.id === product.id)

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyInCart < 0) {
        draft.push(product)
      } else {
        draft[productAlreadyInCart].quantity! += product.quantity!
      }
    })

    setCartItems(newCart)
  }

  function removeProductCart(product: ProductProps) {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== product.id)
    setCartItems(updatedCart)
  }

  function increaseQuantityProductCart(product: ProductProps) {
    let productAlreadyInCart = cartItems.findIndex(cartItem => cartItem.id === product.id)

    const newCart = produce(cartItems, (draft) => {
      draft[productAlreadyInCart].quantity! += 1
    })

    setCartItems(newCart)
  }

  function decreaseQuantityProductCart(product: ProductProps) {
    let productAlreadyInCart = cartItems.findIndex(cartItem => cartItem.id === product.id)

    const newCart = produce(cartItems, (draft) => {
      if (draft[productAlreadyInCart].quantity! > 1) {
        draft[productAlreadyInCart].quantity! -= 1
      }
    })

    setCartItems(newCart)
  }

  return (
    <CheckoutContext.Provider
      value={{
        cartItems,
        cartLength,
        addProductCart,
        removeProductCart,
        increaseQuantityProductCart,
        decreaseQuantityProductCart,
        cartProductsTotalPrice
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
