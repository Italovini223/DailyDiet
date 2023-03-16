import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 89px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  margin-bottom: 12px;

  background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const StaticsNumber = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const StaticsDescription = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;