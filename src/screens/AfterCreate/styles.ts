import styled, { css } from 'styled-components/native'

import { Image } from 'react-native'

export type SnackCreatedStatus = 'IsInsideDiet' | 'isOutsideDiet'

type AfterCreateStylesProps = {
  status: SnackCreatedStatus
}

export const Container = styled.View`
  flex: 1;

  padding: 0 32px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;


export const Content = styled.View`
  width: 100%;
  height: 50%;
`;

export const ContentHeader = styled.View`
  width: 100%;
  height: 81px;

  align-items: center;
  justify-content: center;
`;

export const ContentHeaderTitle = styled.Text<AfterCreateStylesProps>`
  ${({ status, theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${status === 'IsInsideDiet' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;

export const ContentHeaderText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
  margin-bottom: 32px;
`;

export const HighlightedText = styled.Text`
    ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 288px;
  margin-bottom: 32px;
  align-items: center;
`

export const ContentImage = styled(Image)`
  width: 224px;
  height: 288px;

`;

export const ButtonContainer = styled.View`
  width: 190px ;

  margin: 0 auto;
`;

