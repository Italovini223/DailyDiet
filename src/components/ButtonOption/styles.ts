import styled, { css } from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

export type TextOptions = 'Sim' | 'Não'

type ButtonColorStyleProps = {
  status: TextOptions;
  isActive?: boolean;
}



export const Container = styled(TouchableOpacity)<ButtonColorStyleProps>`
  width: 150px;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  border: 1px solid ${({theme, isActive, status}) => isActive ?  status === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK : theme.COLORS.GRAY_200};;

  background-color: ${({theme, isActive, status}) => isActive ?  status === 'Sim' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const StatusView = styled.View<ButtonColorStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  margin-right: 8px;

  background-color: ${({ status, theme}) => status === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;