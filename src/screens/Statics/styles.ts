import styled, { css } from 'styled-components/native'

export type StyleStaticsProps = {
  DietUpToDate: boolean
}

export const Container = styled.View<StyleStaticsProps>`
  flex: 1;

  padding-top: 20px;

  background-color: ${({theme, DietUpToDate}) => DietUpToDate ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  padding: 33px 24px;


  align-items: center;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ContentTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-bottom: 23px;
`;

export const SnackStaticsContainer = styled.View`
  width: 100%;

  justify-content: space-between;

  flex-direction: row;
  align-items: center;

`


