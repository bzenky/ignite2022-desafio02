import styled from "styled-components";

interface CheckoutResumeSpanProps {
  size: string
  bold?: boolean
  colorDarker?: boolean
}

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