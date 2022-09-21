import { useCart } from "../../hooks/useCart";
import { CoffeeProps } from "../CoffeeCard";
import {
  BuyActionWrapper,
  ProductAmountInput,
  ProductAmountWrapper,
  ProductMinusAmountButton,
  ProductPlusAmountButton,
  StyledMinus,
  StyledPlus
} from "./styles";

export function AmountProductInput({ coffee }: CoffeeProps) {
  const { increaseQuantityProductCart, decreaseQuantityProductCart } = useCart()

  return (
    <BuyActionWrapper>
      <ProductAmountWrapper>
        <ProductMinusAmountButton disabled={coffee.quantity === 1} onClick={() => decreaseQuantityProductCart(coffee)}>
          <StyledMinus weight="bold" />
        </ProductMinusAmountButton>

        <ProductAmountInput min="1" max="10" value={coffee.quantity} readOnly />

        <ProductPlusAmountButton onClick={() => increaseQuantityProductCart(coffee)}>
          <StyledPlus weight="bold" />
        </ProductPlusAmountButton>
      </ProductAmountWrapper>
    </BuyActionWrapper>
  )
}