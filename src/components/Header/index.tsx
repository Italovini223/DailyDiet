import { Container, Logo, UserImage, UserImageContent } from "./styles";

import LogoImg from '@assets/Logo.png'

export function Header(){
  return (
    <Container>
      <Logo source={LogoImg}/>

      <UserImageContent>
        <UserImage source={{uri: 'https://github.com/italovini223.png'}}/>
      </UserImageContent>
    </Container>
  )
}