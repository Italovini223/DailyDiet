import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
  
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
`

export const Logo = styled.Image`

`

export const UserImageContent = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  align-items: center;

  border: 2px solid ${({theme}) => theme.COLORS.GRAY_700};
`

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
`