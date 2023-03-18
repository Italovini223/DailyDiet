import { useEffect, useState } from "react";

import { useNavigation, useRoute } from '@react-navigation/native'

import { SnackCreatedStatus, Container, Content, ContentHeader, ContentHeaderText, ContentHeaderTitle, ContentImage, HighlightedText, ButtonContainer, ImageContainer } from "./styles";

import IsInsideDietImage from '@assets/IsInsideDiet.png'
import IsOutsideDietImage from '@assets/isOutsideDiet.png'
import { Button } from "@components/Button";

type RouteParam = {
  snackStatus: boolean
}

export function AfterCreate(){
  const [dietStatus, SetDietStatus] = useState<SnackCreatedStatus>('IsInsideDiet')

  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    const { snackStatus } = route.params as RouteParam

    if(snackStatus){
      SetDietStatus('IsInsideDiet')
    } else {
      SetDietStatus('isOutsideDiet')
    }
  }, [])

  return (
    <Container>
      <Content>
        <ContentHeader>
          <ContentHeaderTitle
            status={dietStatus}
          >
            {
              dietStatus === 'IsInsideDiet' ? 
              "Continue assim!"
              :
              "Que pena!"
            }
          </ContentHeaderTitle>
          
            {
              dietStatus === 'IsInsideDiet' ? 
              <ContentHeaderText>
                Você continua <HighlightedText>dentro da dieta</HighlightedText>. Muito bem!
              </ContentHeaderText>

              :
              <ContentHeaderText>
                Você <HighlightedText>saiu da dieta</HighlightedText> dessa vez, mas continue se esforçando e não desista!
              </ContentHeaderText>
            }
        </ContentHeader>

        <ImageContainer>
          <ContentImage 
            source={dietStatus ==='IsInsideDiet' ? IsInsideDietImage : IsOutsideDietImage}
          />
        </ImageContainer>

        <ButtonContainer>
          <Button 
            title="Ir para a página inicial"
            onPress={() => navigation.navigate('home')}
          />
        </ButtonContainer>
      </Content>
    </Container>
  )
}