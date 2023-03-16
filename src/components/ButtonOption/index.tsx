import { TouchableOpacityProps } from 'react-native'
import { TextOptions, ButtonText, Container, StatusView } from './styles'

type Props = TouchableOpacityProps & {
  text: TextOptions,
  isActive: boolean
}

export function ButtonOption({text, isActive, ...rest}: Props){
  return (
    <Container 
      {...rest}
      status={text}
      isActive={isActive}
      >
      <StatusView 
        status={text}
      />

      <ButtonText>
        {text}
      </ButtonText>
    </Container>
  )
}