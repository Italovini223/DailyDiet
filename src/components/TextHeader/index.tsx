import { TouchableOpacityProps } from "react-native";

import { ArrowButton, ArrowIcon, Container, HederDescription } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
}

export function TextHeader({ text, ...rest}: Props){
  return (
    <Container>
      <ArrowButton
        {...rest}
      >
        <ArrowIcon />
      </ArrowButton>

      <HederDescription>
        {text}
      </HederDescription>
    </Container>
  )
}