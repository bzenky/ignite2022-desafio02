import styled from "styled-components";

interface BenefitIconProps {
  backgroundColor: string
}

export const HomeContainer = styled.div``

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  line-height: 1.3;
  `

export const SplashContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 56px;
  padding: 6rem 0;
  z-index: 5;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme['gray-800']};
`

export const SubTitle = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 2rem;
`

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const BenefitIconWrapper = styled.div<BenefitIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

export const Benefit = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-600']};
`

export const MenuContainer = styled.div`
  padding-bottom: 3rem;
`

export const MenuTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
`

export const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`