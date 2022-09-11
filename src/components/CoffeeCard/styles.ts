import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 256px;
  height: 310px;
  padding: 20px;
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px 36px; 

  img {
    margin-top: -45px;
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  margin: 12px auto 16px;
  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;
`

export const CoffeeType = styled.h3`
  font-size: 1.25rem;
  font-family: 'Baloo 2', cursive;
  color: ${({ theme }) => theme['gray-700']};
  font-weight: 700;
`

export const CoffeeDescription = styled.span`
  margin: 8px auto 32px;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-500']};
`

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px;
`

export const Price = styled.span`
  color: ${({ theme }) => theme['gray-600']};
  font-size: 0.875rem;
  font-weight: 400;

  span {
    margin-left: 4px;
    font-size: 1.5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
  }
`

export const BuyActionWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const ProductAmountWrapper = styled.div`
  position: relative;
`

export const ProductAmountInput = styled.input`
  padding: 8px;
  width: 72px;
  height: 38px;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['gray-300']};
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-800']};
  text-align: center;
`

export const BaseProductAmountButton = styled.button`
  position: absolute;
  top: 50%;
  padding: 8px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const ProductMinusAmountButton = styled(BaseProductAmountButton)`
  left: 0px;
`
export const ProductPlusAmountButton = styled(BaseProductAmountButton)`
  right: 0px;
`

export const StyledMinus = styled(Minus)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme['purple-400']};

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme['purple-700']};
  }
`

export const StyledPlus = styled(Plus)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme['purple-400']};

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme['purple-700']};
  }
`

export const AddCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme['purple-700']};
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['purple-400']};
  }
`