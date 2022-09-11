import { Trash } from "phosphor-react";
import { AmountProductInput } from "../../components/AmountProductInput";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import {
  CheckoutItem,
  CheckoutItemButtons,
  CheckoutItemPrice,
  CheckoutItemSeparator,
  CheckoutItemTitle,
  CheckoutItemTitleAmountWrapper,
  CheckoutRemoveItemButton
} from "./styles";

export function CheckoutProductItem() {
  const { cartItems } = useCart()

  return (
    <>
      {cartItems.map(cartItem => {
        return (
          <>
            <CheckoutItem>
              <img src={cartItem.image} alt="" width="64" height="64" />
              <CheckoutItemTitleAmountWrapper>
                <CheckoutItemTitle>
                  {cartItem.name}
                </CheckoutItemTitle>
                <CheckoutItemButtons>
                  <AmountProductInput />
                  <CheckoutRemoveItemButton>
                    <Trash size={16} color="#8047F8" />
                    Remover
                  </CheckoutRemoveItemButton>
                </CheckoutItemButtons>
              </CheckoutItemTitleAmountWrapper>
              <CheckoutItemPrice>
                R$ {formatPrice(cartItem.price)}
              </CheckoutItemPrice>
            </CheckoutItem>
            <CheckoutItemSeparator />
          </>
        )
      })}
    </>
  )
}