import {
  BuyActionWrapper,
  ProductAmountInput,
  ProductAmountWrapper,
  ProductMinusAmountButton,
  ProductPlusAmountButton,
  StyledMinus,
  StyledPlus
} from "./styles";

export function AmountProductInput() {
  return (
    <BuyActionWrapper>
      <ProductAmountWrapper>
        <ProductMinusAmountButton>
          <StyledMinus weight="bold" />
        </ProductMinusAmountButton>

        <ProductAmountInput min="1" max="10" defaultValue={1} readOnly />

        <ProductPlusAmountButton>
          <StyledPlus weight="bold" />
        </ProductPlusAmountButton>
      </ProductAmountWrapper>
    </BuyActionWrapper>
  )
}