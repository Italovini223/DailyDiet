import styled, { css } from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  height: 90px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  position: relative;
`;

export const HederDescription = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const ArrowButton = styled(TouchableOpacity)`
  position: absolute;

  background-color: transparent;
  border: none;

  left: 24px;
`;

export const ArrowIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_700,
}))``;


