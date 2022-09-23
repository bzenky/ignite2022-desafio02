import { forwardRef, InputHTMLAttributes } from "react"
import { ErrorMessage, FormInput, InputWrapper } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <InputWrapper>
      <FormInput
        ref={ref}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
})