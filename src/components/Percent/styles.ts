import styled, {css} from "styled-components/native";

export type PercentProps = {
  DietUpToDate: boolean
}

export const Container = styled.View<PercentProps>`
  width: 100%;
  height: 102px;

  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  background-color: ${({theme, DietUpToDate}) => DietUpToDate ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const PercentText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Description = styled.Text`
    ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_600};
    `}
`