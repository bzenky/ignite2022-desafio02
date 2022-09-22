import { MapPinLine } from "phosphor-react";

import {
  DeliveryFormWrapper,
  FormContentSubtitle,
  FormContentTitle,
  FormContentTitleWrapper,
  FormInput,
  FormInputContainer,
  FormInputRowWrapper,
  FormTextTitle,
} from "./styles";

export function CheckoutDeliveryForm() {
  return (
    <DeliveryFormWrapper>
      <FormContentTitleWrapper>
        <MapPinLine size={22} color="#C47F17" />
        <FormTextTitle>
          <FormContentTitle>
            Endereço de Entrega
          </FormContentTitle>
          <FormContentSubtitle>
            Informe o seu endereço onde deseja receber seu pedido
          </FormContentSubtitle>
        </FormTextTitle>
      </FormContentTitleWrapper>
      <FormInputContainer>
        <FormInput placeholder="CEP" width="default" />
        <FormInput placeholder="Rua" width="full" />
        <FormInputRowWrapper>
          <FormInput placeholder="Número" width="default" />
          <FormInput placeholder="Complemento" width="full" />
        </FormInputRowWrapper>
        <FormInputRowWrapper>
          <FormInput placeholder="Bairro" width="default" />
          <FormInput placeholder="Cidade" width="full" />
          <FormInput placeholder="UF" width="small" />
        </FormInputRowWrapper>
      </FormInputContainer>
    </DeliveryFormWrapper>
  )
}