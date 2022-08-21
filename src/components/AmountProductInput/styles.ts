import { Minus, Plus } from "phosphor-react"
import styled from "styled-components"

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