import { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'



import { DietStatus, Container, Content, DateAndTime, DateAndTimeContainer, DateAndTimeLabel, DietStatusContainer, DietStatusLight, DietStatusText, SnackDescription, SnackTitle, ButtonsContainer } from './styles'

import { TextHeader } from '@components/TextHeader'
import { Button } from '@components/Button'



export function Details(){
  const [dietStatus, setDietStatus] = useState<DietStatus>('isInsideDiet')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {

  }, [])
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
          {name}
        </SnackTitle>

        <SnackDescription>
          {description}
        </SnackDescription>

        <DateAndTimeContainer>
          <DateAndTimeLabel>
            Data e hora
          </DateAndTimeLabel>

          <DateAndTime>
            {date} às {time}
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