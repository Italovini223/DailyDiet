import { useState } from "react";

import { SnackCreatedStatus, Container, Content, ContentHeader, ContentHeaderText, ContentHeaderTitle, ContentImage, HighlightedText, ButtonContainer, ImageContainer } from "./styles";

import IsInsideDietImage from '@assets/IsInsideDiet.png'
import IsOutsideDietImage from '@assets/isOutsideDiet.png'
import { Button } from "@components/Button";

export function AfterCreate(){
  const [dietStatus, SetDietStatus] = useState<SnackCreatedStatus>('IsInsideDiet')
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
          />
        </ButtonContainer>
      </Content>
    </Container>
  )
}