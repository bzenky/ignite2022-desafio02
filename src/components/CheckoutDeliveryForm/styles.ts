import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: 'full' | 'small' | 'default'
}

export const DeliveryFormWrapper = styled.div`
  width: 640px;
  padding: 40px;
  margin: 15px 0 12px;
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

export const CheckoutResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`