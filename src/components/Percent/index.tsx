import { TouchableOpacityProps } from 'react-native'

import { useTheme } from 'styled-components/native'

import { PercentProps, ArrowPosition, Container, PercentText, Description, ArrowButton, ArrowUpRightIcon, ArrowLeftIcon } from './styles'

type Props = PercentProps & {
  percent: number;
  onPressArrow: () => void;
  ArrowPosition?: ArrowPosition
}

export function Percent({ DietUpToDate, percent, onPressArrow, ArrowPosition= 'RIGHT' }: Props){
  const theme = useTheme()
  const { COLORS } = theme
  return (
    <Container
      DietUpToDate={DietUpToDate}
    > 
      <ArrowButton
        onPress={onPressArrow}
        position={ArrowPosition}
      >
        {
          ArrowPosition === 'RIGHT' ? 
          <ArrowUpRightIcon 
            color={DietUpToDate ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          />
          :
          <ArrowLeftIcon 
            color={DietUpToDate ? COLORS.GREEN_DARK : COLORS.RED_DARK}

          />
        }
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