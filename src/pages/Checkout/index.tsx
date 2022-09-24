import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CheckoutDeliveryForm } from "../../components/CheckoutDeliveryForm";
import { CheckoutProductItem } from "../../components/CheckoutProductItem";
import { ProductProps } from "../../components/CoffeeCard";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import {
  CheckoutConfirmButton,
  CheckoutContainer,
  CheckoutItemsWrapper,
  CheckoutResumeRow,
  CheckoutResumeText,
  FormContentSubtitle,
  FormContentTitle,
  FormContentTitleWrapper,
  FormTextTitle,
  OrderDeliveryPaymentWrapper,
  OrderResumeCompleteWrapper,
  OrderResumeWrapper,
  PaymentMethodButton,
  PaymentMethodContentWrapper,
  PaymentMethodWrapper,
  WrapperTitle
} from "./styles";
import { useNavigate } from "react-router-dom";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado')
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { cartItems, cartProductsTotalPrice, cleanCart } = useCart()
  const shippingTaxes = cartItems.length > 0 ? 1.9 : 0
  const cartItemsTotalPrice = cartProductsTotalPrice + shippingTaxes

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/checkout-done', {
      state: data
    })

    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderDeliveryPaymentWrapper>
          <WrapperTitle>
            Complete seu pedido
          </WrapperTitle>
          <CheckoutDeliveryForm />
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
              {cartItems.map((coffee: ProductProps) => {
                return (
                  <CheckoutProductItem
                    key={coffee.id}
                    coffee={coffee}
                  />
                )
              })}
            </CheckoutItemsWrapper>
            <CheckoutResumeRow>
              <CheckoutResumeText size="0.875">Total de itens</CheckoutResumeText>
              <CheckoutResumeText size="1">R$ {formatPrice(cartProductsTotalPrice)}</CheckoutResumeText>
            </CheckoutResumeRow>
            <CheckoutResumeRow>
              <CheckoutResumeText size="0.875">Entrega</CheckoutResumeText>
              <CheckoutResumeText size="1">R$ {formatPrice(shippingTaxes)}</CheckoutResumeText>
            </CheckoutResumeRow>
            <CheckoutResumeRow>
              <CheckoutResumeText size="1.25" bold colorDarker>Total</CheckoutResumeText>
              <CheckoutResumeText size="1.25" bold colorDarker>R$ {formatPrice(cartItemsTotalPrice)}</CheckoutResumeText>
            </CheckoutResumeRow>
            <CheckoutConfirmButton
              type='submit'
              disabled={cartItems.length === 0}
            >
              Confirmar pedido
            </CheckoutConfirmButton>
          </OrderResumeWrapper>
        </OrderResumeCompleteWrapper>
      </CheckoutContainer >
    </FormProvider>
  )
}