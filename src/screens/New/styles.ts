import styled from 'styled-components/native'

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

  align-items: center;


  background: ${({theme}) => theme.COLORS.WHITE};
`;