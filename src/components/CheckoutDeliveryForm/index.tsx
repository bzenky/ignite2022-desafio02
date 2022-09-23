import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Input } from "../Input";

import {
  DeliveryFormWrapper,
  FormContentSubtitle,
  FormContentTitle,
  FormContentTitleWrapper,
  FormInputContainer,
  FormInputRowWrapper,
  FormTextTitle,
} from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function CheckoutDeliveryForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

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
        <Input
          placeholder="CEP"
          width="default"
          {...register("cep")}
          error={errors.cep?.message}
        />
        <Input
          placeholder="Rua"
          width="full"
          {...register("rua")}
          error={errors.rua?.message}
        />
        <FormInputRowWrapper>
          <Input
            placeholder="Número"
            width="default"
            {...register("numero")}
            error={errors.numero?.message}
          />
          <Input placeholder="Complemento" width="full" />
        </FormInputRowWrapper>
        <FormInputRowWrapper>
          <Input
            placeholder="Bairro"
            width="default"
            {...register("bairro")}
            error={errors.bairro?.message}
          />
          <Input
            placeholder="Cidade"
            width="full"
            {...register("cidade")}
            error={errors.cidade?.message}
          />
          <Input
            placeholder="UF"
            width="small"
            {...register("uf")}
            error={errors.uf?.message}
          />
        </FormInputRowWrapper>
      </FormInputContainer>
    </DeliveryFormWrapper>
  )
}