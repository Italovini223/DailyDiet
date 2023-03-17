import { TouchableOpacityProps } from 'react-native'

import {SnackTypesProps, Container, SnackTime, SnackTitleArea, SnackTitle, SnackType, Line} from './styles'

type Props = SnackTypesProps & TouchableOpacityProps & {
  title: string
  time: string
}

export function Snack({ isInsideDiet, time, title, ...rest}:Props){
  return (
    <Container {...rest}>
      <SnackTime>
        {time}
      </SnackTime>
      <Line />
      <SnackTitleArea>
        <SnackTitle>
          {title}
        </SnackTitle>
      </SnackTitleArea>

      <SnackType isInsideDiet={isInsideDiet}/>
    </Container>
  )
}