import styled from "styled-components";

export const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
`

export const CheckoutItemTitleAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CheckoutItemTitle = styled.span`
  color: ${({ theme }) => theme['gray-700']};
  font-size: 1rem;
`

export const CheckoutItemPrice = styled.span`
  color: ${({ theme }) => theme['gray-600']};
  font-size: 1rem;
  font-weight: 700;
`

export const CheckoutItemButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const CheckoutRemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background-color: ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['gray-600']};
  font-size: 0.75rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const CheckoutItemSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: ${({ theme }) => theme['gray-300']}
`

export const CheckoutResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`