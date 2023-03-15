import { TouchableOpacityProps } from 'react-native'

import { useTheme } from 'styled-components/native'

import { PercentProps, Container, PercentText, Description, ArrowButton, ArrowIcon } from './styles'

type Props = PercentProps & {
  percent: number,
  onPressArrow: () => void
}

export function Percent({ DietUpToDate, percent, onPressArrow }: Props){
  const theme = useTheme()
  const { COLORS } = theme
  return (
    <Container
      DietUpToDate={DietUpToDate}
    > 
      <ArrowButton
        onPress={onPressArrow}
      >
        <ArrowIcon 
          color={DietUpToDate === true ? COLORS.GREEN_DARK : COLORS.RED_DARK}
        />
      </ArrowButton>
      <PercentText>
        {String(percent).replace('.', ',').substr(0,5)}%
      </PercentText>
      <Description>
        das refeições dentro da dieta
      </Description>
    </Container>
  )
}