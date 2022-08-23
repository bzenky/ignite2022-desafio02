import { ShoppingCartSimple } from "phosphor-react";
import { formatPrice } from "../../utils/formatPrice";
import { productsList } from "../../utils/productsList";
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

interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

export function CoffeeCard() {
  return (
    <>
      {productsList.map((product: ProductProps) => {
        return (
          <CoffeeCardContainer key={product.id}>
            <img src={product.image} alt="" width="120" height="120" />

            <Tag>tradicional</Tag>

            <CoffeeType>{product.name}</CoffeeType>

            <CoffeeDescription>
              {product.description}
            </CoffeeDescription>

            <BuyContainer>
              <Price>R$<span>{formatPrice(product.price)}</span></Price>

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

                <AddCartBtn>
                  <ShoppingCartSimple size={22} color="white" weight="fill" />
                </AddCartBtn>
              </BuyActionWrapper>

            </BuyContainer>
          </CoffeeCardContainer>
        )
      }, [])}
    </>
  )
}