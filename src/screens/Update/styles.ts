import styled, { css } from 'styled-components/native'

type Components = 'Inptus' | 'Buttons'

type MultiComponentsContainerStyleProps = {
  componenteType: Components
}

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_300};
`

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 40px 24px 0;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  position: relative;

  background: ${({theme}) => theme.COLORS.WHITE};
`;

export const MultiComponentsContainer = styled.View<MultiComponentsContainerStyleProps>`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ componenteType }) => componenteType === 'Buttons' && css`
    margin-bottom: 80px;
  `}
`;  


export const ButtonOptionsLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  
`;
