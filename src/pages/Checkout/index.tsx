import { CurrencyDollar } from "phosphor-react";
import { CheckoutDeliveryForm } from "../../components/CheckoutDeliveryForm";
import { CheckoutProductItem } from "../../components/CheckoutProductItem";
import { ProductProps } from "../../components/CoffeeCard";
import { useCart } from "../../hooks/useCart";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import {
  CheckoutConfirmButton,
  CheckoutContainer,
  CheckoutItemsWrapper,
  FormContentSubtitle,
  FormContentTitle,
  FormContentTitleWrapper,
  FormTextTitle,
  OrderDeliveryPaymentWrapper,
  OrderResumeCompleteWrapper,
  OrderResumeWrapper,
  PaymentMethodWrapper,
  WrapperTitle
} from "./styles";
import { useNavigate } from "react-router-dom";
import { CheckoutResume } from "../../components/CheckoutResume";
import { PaymentMethods } from "../../components/PaymentMethods";

enum PaymentMethodsProps {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const confirmOrderFormValidationSchema = zod.object({
  zip: zod.string().min(1, 'Informe o CEP'),
  adress: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  adressComplement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.nativeEnum(PaymentMethodsProps, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    }
  })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { cartItems, cleanCart } = useCart()

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
            <PaymentMethods />
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
            <CheckoutResume />
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