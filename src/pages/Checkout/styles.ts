import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CheckoutResumeSpanProps {
  size: string
  bold?: boolean
  colorDarker?: boolean
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: 'full' | 'small' | 'default'
}

export const CheckoutContainer = styled.div`
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

export const DeliveryFormWrapper = styled.div`
  width: 640px;
  padding: 40px;
  margin: 15px 0 12px;
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px;
`

export const PaymentMethodWrapper = styled.div`
  width: 640px;
  padding: 40px;
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px;
`

export const FormInput = styled.input<FormInputProps>`
  width: ${({ width }) => width === 'full' ? '100%' : width === 'default' ? '200px' : '60px'};
  padding: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-200']};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['gray-600']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
    font-size: 0.875rem;
  }

  &:active,
  &:focus {
    outline: 1px solid ${({ theme }) => theme['yellow-700']};
  }
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`

export const FormInputRowWrapper = styled.div`
  display: flex;
  gap: 12px;
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

export const PaymentMethodContentWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  margin-top: 32px;
`

export const PaymentMethodButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 16px;
  width: 178px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-300']};
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['gray-600']};
  border: 0;
  cursor: pointer;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-700']};
  }
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

export const CheckoutResumeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &+div {
    margin-top: 12px;
  }
`

export const CheckoutResumeText = styled.div<CheckoutResumeSpanProps>`
  font-weight: ${({ bold }) => bold ? '700' : '400'};
  font-size: ${({ size }) => size}rem;
  color: ${({ colorDarker, theme }) => colorDarker ? theme['gray-700'] : theme['gray-600']};
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
`