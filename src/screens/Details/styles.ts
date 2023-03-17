import styled, { css } from 'styled-components/native'

export type DietStatus = 'isInsideDiet' | 'isOutsideDiet'

type DetailsStyleProps = {
  dietStatus: DietStatus
}

export const Container = styled.View<DetailsStyleProps>`
  flex: 1;

  background-color: ${({ theme, dietStatus}) => dietStatus === 'isInsideDiet' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 0 24PX;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  position: relative;

  background-color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const SnackTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  margin: 40px 0 8px;
`;

export const SnackDescription = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-bottom: 24px;
`;

export const DateAndTimeContainer = styled.View`
  width: 100%;
  text-align: left;
`;

export const DateAndTimeLabel = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-bottom: 8px;
`;

export const DateAndTime = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const DietStatusContainer = styled.View`
  width: 127px;
  height: 34px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 15px;

  margin-top: 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const DietStatusLight = styled.View<DetailsStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 50%;
  margin-right: 8px;

  background-color: ${({ dietStatus, theme}) => dietStatus === 'isInsideDiet' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const DietStatusText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const ButtonsContainer = styled.View`
  width: 100%;

  position: absolute;
  bottom: 40px;
  left: 24px;

  gap: 9px;
`;