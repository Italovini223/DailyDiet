import { MaterialIcons } from '@expo/vector-icons'
import styled, {css} from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

type ButtonTypeColorProps = 'PRIMARY' | 'SECONDARY'


export type ButtonProps = {
  typeColor?: ButtonTypeColorProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  
  min-height: 50px;
  max-height: 50px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 6px;

  background-color: ${({theme, typeColor}) => typeColor === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
  border: 1px solid ${({theme, typeColor}) => typeColor === 'SECONDARY' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
`;

export const Description = styled.Text<ButtonProps>`
  ${({theme, typeColor}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${typeColor === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(({theme, typeColor}) => ({
  size: 18,
  color: typeColor === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700
}))`
  margin-right: 12px;
`;