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
          {...register("zip")}
          error={errors.zip?.message}
        />
        <Input
          placeholder="Rua"
          width="full"
          {...register("adress")}
          error={errors.adress?.message}
        />
        <FormInputRowWrapper>
          <Input
            placeholder="Número"
            width="default"
            {...register("number")}
            error={errors.number?.message}
          />
          <Input
            placeholder="Complemento"
            width="full"
            {...register("adressComplement")}
            error={errors.adressComplement?.message}
          />
        </FormInputRowWrapper>
        <FormInputRowWrapper>
          <Input
            placeholder="Bairro"
            width="default"
            {...register("district")}
            error={errors.district?.message}
          />
          <Input
            placeholder="Cidade"
            width="full"
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            placeholder="UF"
            width="small"
            maxLength={2}
            {...register("uf")}
            error={errors.uf?.message}
          />
        </FormInputRowWrapper>
      </FormInputContainer>
    </DeliveryFormWrapper>
  )
}