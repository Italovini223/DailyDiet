import styled, { css } from 'styled-components/native'

type DietStatus = 'INSIDE' | 'OUT'

export type SnackStaticsStyleProps = {
  DietStatus: DietStatus,
  marginRight?: boolean
}

export const Container = styled.View<SnackStaticsStyleProps>`
  width: 150px;
  height: 107px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme, DietStatus }) => DietStatus === 'INSIDE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  margin-right: ${({ marginRight }) => marginRight ? '12px' : '0'};
`;

export const SnackStaticsNumber = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const SnackStaticsDescription = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  text-align: center;
`