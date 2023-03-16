import styled, {css} from 'styled-components/native'

import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

import { TouchableOpacity } from 'react-native'

export type ArrowPosition = 'LEFT' | 'RIGHT'

type ArrowPositonProps = {
  position: ArrowPosition
}

export type PercentProps = {
  DietUpToDate: boolean
}

export const Container = styled.View<PercentProps>`
  width: 100%;
  height: 102px;

  justify-content: center;
  align-items: center;

  position: relative;

  margin-bottom: 40px;

  background-color: ${({theme, DietUpToDate}) => DietUpToDate ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const PercentText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const ArrowButton = styled(TouchableOpacity)<ArrowPositonProps>`
  position: absolute;


  background-color: transparent;
  border: none;

  ${({ position }) => position === 'LEFT' ? css`
    top: 0;
    left: 24px;
  `: 
  css`
    top: 8px;
    right: 8px;
  `
  };
`;


export const ArrowUpRightIcon = styled(ArrowUpRight).attrs({
  size: 24
})``;

export const ArrowLeftIcon = styled(ArrowLeft).attrs({
  size: 24
})``;