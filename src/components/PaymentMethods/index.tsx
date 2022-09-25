import { Bank, CreditCard, Money } from "phosphor-react";
import {
  PaymentMethodButton,
  PaymentMethodContentWrapper,
} from "./styles";

export const paymentMethodsList = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} color="#8047F8" />
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} color="#8047F8" />
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} color="#8047F8" />
  },
}

export function PaymentMethods() {
  return (
    <PaymentMethodContentWrapper>
      {Object.entries(paymentMethodsList).map(([key, { label, icon }]) => (
        <PaymentMethodButton key={key}>
          {icon}
          {label}
        </PaymentMethodButton>
      ))}
    </PaymentMethodContentWrapper>
  )
}