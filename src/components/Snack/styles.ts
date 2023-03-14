import styled, { css } from 'styled-components/native'

export type SnackTypesProps = {
  isInsideDiet: boolean
}

export const Container = styled.View`
  flex: 1;
  
  min-height: 50px;
  max-height: 50px;

  flex-direction: row;

  align-items: center;

  border-radius: 6px;

  padding: 0 10px;


  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_200};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
`;

export const SnackTime = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-right: 12px;
`;

export const Line = styled.View`
  height: 50%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  margin-right: 12px;

`;

export const SnackTitleArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: -4px;
`

export const SnackTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};

`;

export const SnackType= styled.View<SnackTypesProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  background-color: ${({theme, isInsideDiet}) => isInsideDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`

