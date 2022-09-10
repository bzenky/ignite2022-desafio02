import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import {
  AddCartBtn,
  BuyActionWrapper,
  BuyContainer,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeType,
  Price,
  ProductMinusAmountButton,
  ProductAmountInput,
  ProductAmountWrapper,
  Tag,
  ProductPlusAmountButton,
  StyledMinus,
  StyledPlus
} from "./styles";

export interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
  quantity?: number
}

export interface CoffeeProps {
  coffee: ProductProps
}

export function CoffeeCard({coffee}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addProductCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity(state => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity(state => state - 1)
  }

  function handleAddToCart() {
    const productToAdd = {
      ...coffee,
      quantity
    }

    addProductCart(productToAdd)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.image} alt="" width="120" height="120" />

      <Tag>tradicional</Tag>

      <CoffeeType>{coffee.name}</CoffeeType>

      <CoffeeDescription>
        {coffee.description}
      </CoffeeDescription>

      <BuyContainer>
        <Price>R$<span>{formatPrice(coffee.price)}</span></Price>

        <BuyActionWrapper>
          <ProductAmountWrapper>
            <ProductMinusAmountButton disabled={quantity <= 1} onClick={handleDecreaseQuantity}>
              <StyledMinus weight="bold" />
            </ProductMinusAmountButton>

            <ProductAmountInput min="1" max="10" id={coffee.id.toString()} name={coffee.id.toString()} value={quantity} readOnly />

            <ProductPlusAmountButton onClick={handleIncreaseQuantity}>
              <StyledPlus weight="bold" />
            </ProductPlusAmountButton>
          </ProductAmountWrapper>

          <AddCartBtn onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color="white" weight="fill" />
          </AddCartBtn>
        </BuyActionWrapper>

      </BuyContainer>
    </CoffeeCardContainer>
  )
}