import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
  padding: 24px;
`;

export const ButtonArea = styled.View`
  justify-content: left;
  flex: 1;
  margin-bottom: 100px;
`

export const ButtonLabel = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-bottom: 8px;
`;

export const HeaderList = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
  margin-bottom: 8px;
`;

export const ListContent = styled.View`
  margin-bottom: 20px;
`;

