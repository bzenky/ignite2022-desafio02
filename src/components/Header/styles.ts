import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background};
  position: sticky;
  top: 0;
  z-index: 10;
`

export const HeaderWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    >div {
      display: flex;
      gap: 12px;
    }
  }
`

export const LocationTag = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['purple-700']};
  background-color: ${({ theme }) => theme['purple-100']};
  border-radius: 6px;
`

export const CartButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme['yellow-100']};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
`

export const CartLength = styled.span`
  position: absolute;
  top: -50%;
  right: -50%;
  transform: translate(-50%, 50%);
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme['yellow-700']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.75rem;
`