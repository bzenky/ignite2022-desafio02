import styled from "styled-components"

export const ContentContainer = styled.div`
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

export const PaymentMethodButton = styled.div`
  input {
    visibility: hidden;
    appearance: none;

    & + label div {
      border: 1px solid transparent;
    }
  }

  input:checked + label div {
    border: 1px solid ${({ theme }) => theme['purple-700']};
    background: ${({ theme }) => theme['purple-100']};
  }
`