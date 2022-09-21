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
import { CoffeeProps } from '../CoffeeCard';

export function CheckoutProductItem({ coffee }: CoffeeProps) {
  const { removeProductCart } = useCart()
  const CoffeeItemTotalValue = coffee.price * coffee.quantity

  return (
    <>
      <CheckoutItem>
        <img src={coffee.image} alt="" width="64" height="64" />
        <CheckoutItemTitleAmountWrapper>
          <CheckoutItemTitle>
            {coffee.name}
          </CheckoutItemTitle>
          <CheckoutItemButtons>
            <AmountProductInput coffee={coffee} />
            <CheckoutRemoveItemButton onClick={() => removeProductCart(coffee)}>
              <Trash size={16} color="#8047F8" />
              Remover
            </CheckoutRemoveItemButton>
          </CheckoutItemButtons>
        </CheckoutItemTitleAmountWrapper>
        <CheckoutItemPrice>
          R$ {formatPrice(CoffeeItemTotalValue)}
        </CheckoutItemPrice>
      </CheckoutItem>
      <CheckoutItemSeparator />
    </>
  )
}