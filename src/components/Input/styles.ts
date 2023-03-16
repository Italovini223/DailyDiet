import styled, { css } from 'styled-components/native'

import { TextInput } from 'react-native'

export const Container = styled.View`
  width: 100%;
 
  min-height: 48px;
  max-height: 48px;

  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};

`


export const InputComponent = styled(TextInput)`
  width: 100%;
  height: 100%;


  border-radius: 6px;
  padding: 16px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border: ${theme.COLORS.GRAY_300};
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_700};
  `}

`;