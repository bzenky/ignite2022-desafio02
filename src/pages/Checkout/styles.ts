import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 32px;
  max-width: 1120px;
  margin: 0 auto;
`

export const OrderDeliveryPaymentWrapper = styled.div``

export const OrderResumeCompleteWrapper = styled.div``

export const WrapperTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
`

export const PaymentMethodWrapper = styled.div`
  width: 640px;
  padding: 40px;
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px;
`

export const FormContentTitleWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const FormTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const FormContentTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-700']}
`

export const FormContentSubtitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-600']}
`

export const OrderResumeWrapper = styled.div`
  width: 448px;
  padding: 40px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px 44px;
`

export const CheckoutItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  overflow-y: auto;
`

export const CheckoutResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 8px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme['yellow-400']};
  color: ${({ theme }) => theme.white};
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-700']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`