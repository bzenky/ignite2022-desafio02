import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../Input/styles";
import { PaymentMethodInput } from "../PaymentMethodInput";
import {
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
  const { register, formState: { errors } } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <>
      <PaymentMethodContentWrapper>
        {Object.entries(paymentMethodsList).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={key}
            id={key}
            label={label}
            icon={icon}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </PaymentMethodContentWrapper>
      {paymentMethodError &&
        <div>
          <ErrorMessage>{paymentMethodError}</ErrorMessage></div>
      }
    </>
  )
}