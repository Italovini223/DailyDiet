import { TextInputProps } from 'react-native'

import { Container, Label, InputComponent } from "./styles";

type Props = TextInputProps & {
  labelText: string
}

export function Input({ labelText, ...rest }:Props) {
  return (
    <Container>
      <Label >{labelText}</Label>
      <InputComponent
        {...rest}
      />
    </Container>
  )
}