import { useContext } from "react";
import { CheckoutContext } from "../contexts/CheckoutContext";

export function useCart() {
  const context = useContext(CheckoutContext)
  return context
}