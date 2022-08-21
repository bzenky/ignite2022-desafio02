import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  CheckoutDoneContainer,
  CheckoutDoneMain,
  CheckoutOrderIconWrapper,
  CheckoutOrderInfoTypeWrapper,
  CheckoutOrderInfoWrapper,
  CheckoutOrderSpan,
  CheckoutOrderSpanWrapper,
  CheckoutSubtitle,
  CheckoutTitle
} from "./styles";

import checkoutDone from '../../assets/checkoutDone.svg'

export function CheckoutDone() {
  return (
    <CheckoutDoneContainer>
      <CheckoutTitle>Uhu! Pedido confirmado</CheckoutTitle>
      <CheckoutSubtitle>Agora é só aguardar que logo o chegará até você</CheckoutSubtitle>

      <CheckoutDoneMain>
        <CheckoutOrderInfoWrapper>
          <CheckoutOrderInfoTypeWrapper>
            <CheckoutOrderIconWrapper color="#8047F8">
              <MapPin size={16} color="white" weight="fill" />
            </CheckoutOrderIconWrapper>
            <CheckoutOrderSpanWrapper>
              <CheckoutOrderSpan>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </CheckoutOrderSpan>
              <CheckoutOrderSpan>
                Farrapos - Porto Alegre - RS
              </CheckoutOrderSpan>
            </CheckoutOrderSpanWrapper>
          </CheckoutOrderInfoTypeWrapper>

          <CheckoutOrderInfoTypeWrapper>
            <CheckoutOrderIconWrapper color="#DBAC2C">
              <Timer size={16} color="white" weight="fill" />
            </CheckoutOrderIconWrapper>
            <CheckoutOrderSpanWrapper>
              <CheckoutOrderSpan>Previsão de entrega</CheckoutOrderSpan>
              <CheckoutOrderSpan bold>20 min - 30 min</CheckoutOrderSpan>
            </CheckoutOrderSpanWrapper>
          </CheckoutOrderInfoTypeWrapper>

          <CheckoutOrderInfoTypeWrapper>
            <CheckoutOrderIconWrapper color="#C47F17">
              <CurrencyDollar size={16} color="white" weight="fill" />
            </CheckoutOrderIconWrapper>
            <CheckoutOrderSpanWrapper>
              <CheckoutOrderSpan>Pagamento na entrega</CheckoutOrderSpan>
              <CheckoutOrderSpan bold>Cartão de Crédito</CheckoutOrderSpan>
            </CheckoutOrderSpanWrapper>
          </CheckoutOrderInfoTypeWrapper>
        </CheckoutOrderInfoWrapper>
        <img src={checkoutDone} alt="Checkout Done Image" />
      </CheckoutDoneMain>
    </CheckoutDoneContainer>
  )
}