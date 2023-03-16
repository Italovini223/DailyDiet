import { TextInputProps } from 'react-native'

import { StyleTypeProps, StyleWidthInputProps, Container, Label, InputComponent } from "./styles";

type Props = TextInputProps & {
  labelText: string;
  type?: StyleTypeProps;
  size?: StyleWidthInputProps
}

export function Input({ labelText, type = 'Input', size = 'NORMAL', ...rest }:Props) {
  return (
    <Container
      type={type}
      size={size}
    >
      <Label >{labelText}</Label>
      <InputComponent
        {...rest}
      />
    </Container>
  )
}