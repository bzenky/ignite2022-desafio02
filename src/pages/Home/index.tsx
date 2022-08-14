import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import coffeeDeliverySplash from '../../assets/coffeeDeliverySplash.png';
import { CoffeeCard } from '../../components/CoffeeCard';
import { Benefit, BenefitContainer, BenefitIconWrapper, BenefitsContainer, HomeContainer, MenuContainer, MenuItems, MenuTitle, SplashContainer, SubTitle, Title, TitleContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <SplashContainer>
        <TitleContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver a qualquer hora</SubTitle>

          <BenefitsContainer>
            <BenefitContainer>
              <Benefit>
                <BenefitIconWrapper backgroundColor='#C47F17'>
                  <ShoppingCart size={16} weight="fill" color="white" />
                </BenefitIconWrapper>
                Compra simples e segura
              </Benefit>

              <Benefit>
                <BenefitIconWrapper backgroundColor='#DBAC2C'>
                  <Timer size={16} weight="fill" color="white" />
                </BenefitIconWrapper>
                Entrega rápida e rastreada
              </Benefit>
            </BenefitContainer>

            <BenefitContainer>
              <Benefit>
                <BenefitIconWrapper backgroundColor='#574F4D'>
                  <Package size={16} weight="fill" color="white" />
                </BenefitIconWrapper>
                Embalagem mantém o café intacto
              </Benefit>
              <Benefit>
                <BenefitIconWrapper backgroundColor='#8047F8'>
                  <Coffee size={16} weight="fill" color="white" />
                </BenefitIconWrapper>
                O café chega fresquinho até você
              </Benefit>
            </BenefitContainer>
          </BenefitsContainer>
        </TitleContainer>

        <img src={coffeeDeliverySplash} alt="" />
      </SplashContainer>

      <MenuContainer>
        <MenuTitle>
          Nossos cafés
        </MenuTitle>

        <MenuItems>
          <CoffeeCard />
        </MenuItems>
      </MenuContainer>
    </HomeContainer>
  )
}