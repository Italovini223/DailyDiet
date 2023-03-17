import { useState } from 'react'

import { DietStatus, Container, Content, DateAndTime, DateAndTimeContainer, DateAndTimeLabel, DietStatusContainer, DietStatusLight, DietStatusText, SnackDescription, SnackTitle, ButtonsContainer } from './styles'

import { TextHeader } from '@components/TextHeader'
import { Button } from '@components/Button'



export function Details(){
  const [dietStatus, setDietStatus] = useState<DietStatus>('isInsideDiet')

  return (
    <Container
      dietStatus={dietStatus}
    >
      <TextHeader 
        text='Refeição'
      />

      <Content>
        <SnackTitle>
          X-tudo
        </SnackTitle>

        <SnackDescription>
          Xis completo da lancheria do bairro
        </SnackDescription>

        <DateAndTimeContainer>
          <DateAndTimeLabel>
            Data e hora
          </DateAndTimeLabel>

          <DateAndTime>
            12/08/2022 às 20:00
          </DateAndTime>

        </DateAndTimeContainer>

        <DietStatusContainer>
          <DietStatusLight 
            dietStatus={dietStatus}
          />

          <DietStatusText>
            {
              dietStatus === 'isInsideDiet' ? "dentro da dieta" : "fora da dieta"
            }
          </DietStatusText>
        </DietStatusContainer>


        <ButtonsContainer>
            <Button 
              title='Editar refeição'
              icon='border-color'
            />

            <Button 
              title='Excluir refeição'
              typeColor='SECONDARY'
              icon='delete'
            />
        </ButtonsContainer>

      </Content>
    </Container>
  )
}