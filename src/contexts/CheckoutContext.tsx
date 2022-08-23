import { createContext, ReactNode } from 'react'

interface CheckoutContextProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({})

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  return (
    <CheckoutContext.Provider value={{}}>
      {children}
    </CheckoutContext.Provider>
  )
}
