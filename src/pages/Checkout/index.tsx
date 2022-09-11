import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutProductItem } from "../../components/CheckoutProductItem";
import {
  CheckoutConfirmButton,
  CheckoutContainer,
  CheckoutItemsWrapper,
  CheckoutResumeRow,
  CheckoutResumeText,
  DeliveryFormWrapper,
  FormContentSubtitle,
  FormContentTitle,
  FormContentTitleWrapper,
  FormInput,
  FormInputContainer,
  FormInputRowWrapper,
  FormTextTitle,
  OrderDeliveryPaymentWrapper,
  OrderResumeCompleteWrapper,
  OrderResumeWrapper,
  PaymentMethodButton,
  PaymentMethodContentWrapper,
  PaymentMethodWrapper,
  WrapperTitle
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderDeliveryPaymentWrapper>
        <WrapperTitle>
          Complete seu pedido
        </WrapperTitle>
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

        <PaymentMethodWrapper>
          <FormContentTitleWrapper>
            <CurrencyDollar size={22} color="#8047F8" />
            <FormTextTitle>
              <FormContentTitle>
                Pagamento
              </FormContentTitle>
              <FormContentSubtitle>
                O pagamento é feito na entrega. Escolha  a forma que deseja pagar.
              </FormContentSubtitle>
            </FormTextTitle>
          </FormContentTitleWrapper>

          <PaymentMethodContentWrapper>
            <PaymentMethodButton>
              <CreditCard size={16} color="#8047F8" />
              Cartão de Crédito
            </PaymentMethodButton>

            <PaymentMethodButton>
              <Bank size={16} color="#8047F8" />
              Cartão de Débito
            </PaymentMethodButton>

            <PaymentMethodButton>
              <Money size={16} color="#8047F8" />
              Dinheiro
            </PaymentMethodButton>
          </PaymentMethodContentWrapper>
        </PaymentMethodWrapper>
      </OrderDeliveryPaymentWrapper>

      <OrderResumeCompleteWrapper>
        <WrapperTitle>
          Cafés selecionados
        </WrapperTitle>
        <OrderResumeWrapper>
          <CheckoutItemsWrapper>
            <CheckoutProductItem />
          </CheckoutItemsWrapper>
          <CheckoutResumeRow>
            <CheckoutResumeText size="0.875">Total de itens</CheckoutResumeText>
            <CheckoutResumeText size="1">R$ 19,90</CheckoutResumeText>
          </CheckoutResumeRow>
          <CheckoutResumeRow>
            <CheckoutResumeText size="0.875">Entrega</CheckoutResumeText>
            <CheckoutResumeText size="1">R$ 1,90</CheckoutResumeText>
          </CheckoutResumeRow>
          <CheckoutResumeRow>
            <CheckoutResumeText size="1.25" bold colorDarker>Total</CheckoutResumeText>
            <CheckoutResumeText size="1.25" bold colorDarker>R$ 21,80</CheckoutResumeText>
          </CheckoutResumeRow>
          <CheckoutConfirmButton>
            Confirmar pedido
          </CheckoutConfirmButton>
        </OrderResumeWrapper>

      </OrderResumeCompleteWrapper>
    </CheckoutContainer >
  )
}