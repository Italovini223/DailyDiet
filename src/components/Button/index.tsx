import { TouchableOpacityProps } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { ButtonProps, Container, Description, Icon } from "./styles";

type Props = ButtonProps & TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
}

export function Button({ typeColor = 'PRIMARY', title, icon, ...rest}: Props){
  return (
    <Container
      typeColor={typeColor}
      {...rest}
    >
      {
        icon && 
        <Icon
          name={icon}
          typeColor={typeColor}
        />
      }

      <Description
        typeColor={typeColor}
      >
        {title}
      </Description>
    </Container>
  )
}