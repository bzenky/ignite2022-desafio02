import styled from "styled-components"

export const PaymentMethodContentWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  margin-top: 32px;
`

export const ErrorMessage = styled.span`
  display: block;
  color: ${({ theme }) => theme.error};
  font-size: 0.875rem;
`