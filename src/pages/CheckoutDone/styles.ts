import styled from "styled-components";

interface CheckoutIconDivProps {
  color: string
}

interface CheckoutOrderSpanProps {
  bold?: boolean
}

export const CheckoutDoneContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 80px;
  line-height: 1.3;
`

export const CheckoutTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme['yellow-700']};
  font-weight: 800;
`

export const CheckoutSubtitle = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const CheckoutDoneMain = styled.div`
  display: flex;
  gap: 102px;
  margin-top: 40px;
`

export const CheckoutOrderInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 526px;
  border-radius: 6px 36px;
  padding: 40px;
  background-color: ${({ theme }) => theme.background};
  background-clip: padding-box;
  border: 1px solid transparent;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1));
    z-index: -1;
  }
`

export const CheckoutOrderSpan = styled.span<CheckoutOrderSpanProps>`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-600']};
  font-weight: ${({ bold }) => bold ? 'bold' : '400'};
`

export const CheckoutOrderSpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutOrderInfoTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const CheckoutOrderIconWrapper = styled.div<CheckoutIconDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 32px;
  height: 32px;
  background-color: ${({ color }) => color};
  border-radius: 50%; 
`