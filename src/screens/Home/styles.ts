import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
  padding: 24px;
`;

export const ButtonArea = styled.View`
  justify-content: left;
  margin-bottom: 64px;
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


