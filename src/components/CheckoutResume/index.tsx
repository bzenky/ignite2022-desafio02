import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import {
  CheckoutResumeRow,
  CheckoutResumeText,
} from "./styles";

export function CheckoutResume() {
  const { cartItems, cartProductsTotalPrice } = useCart()
  const shippingTaxes = cartItems.length > 0 ? 1.9 : 0
  const cartItemsTotalPrice = cartProductsTotalPrice + shippingTaxes

  return (
    <>
      <CheckoutResumeRow>
        <CheckoutResumeText size="0.875">Total de itens</CheckoutResumeText>
        <CheckoutResumeText size="1">R$ {formatPrice(cartProductsTotalPrice)}</CheckoutResumeText>
      </CheckoutResumeRow>
      <CheckoutResumeRow>
        <CheckoutResumeText size="0.875">Entrega</CheckoutResumeText>
        <CheckoutResumeText size="1">R$ {formatPrice(shippingTaxes)}</CheckoutResumeText>
      </CheckoutResumeRow>
      <CheckoutResumeRow>
        <CheckoutResumeText size="1.25" bold colorDarker>Total</CheckoutResumeText>
        <CheckoutResumeText size="1.25" bold colorDarker>R$ {formatPrice(cartItemsTotalPrice)}</CheckoutResumeText>
      </CheckoutResumeRow>
    </>
  )
}