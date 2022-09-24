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
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { useEffect } from "react";

interface LocationType {
  state: OrderData
}

export function CheckoutDone() {

  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

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
                Entrega em <strong>{state.rua}, {state.numero}</strong>
              </CheckoutOrderSpan>
              <CheckoutOrderSpan>
                {state.bairro} - {state.cidade} - {state.uf}
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