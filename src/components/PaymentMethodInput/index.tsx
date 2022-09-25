import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import {
  ContentContainer,
  PaymentMethodButton,
} from "./styles";

interface PaymentMethodInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ icon, label, id, ...props }, ref) => {
  return (
    <PaymentMethodButton>
      <input id={id} type='radio' {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodButton>
  )
})