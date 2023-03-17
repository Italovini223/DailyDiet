import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { DietStatus, Container, Content, DateAndTime, DateAndTimeContainer, DateAndTimeLabel, DietStatusContainer, DietStatusLight, DietStatusText, SnackDescription, SnackTitle, ButtonsContainer } from './styles'

import { TextHeader } from '@components/TextHeader'
import { Button } from '@components/Button'



export function Details(){
  const [dietStatus, setDietStatus] = useState<DietStatus>('isInsideDiet')

  const navigation = useNavigation()

  return (
    <Container
      dietStatus={dietStatus}
    >
      <TextHeader 
        text='Refeição'
        onPress={() => navigation.navigate('home')}
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
              onPress={() => navigation.navigate('update')}
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