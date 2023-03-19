import { useEffect, useState } from 'react'

import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

import { snackDeleteByNameAndId } from '@storage/snacks/snackDeleteByNameAndDate'


import { DietStatus, Container, Content, DateAndTime, DateAndTimeContainer, DateAndTimeLabel, DietStatusContainer, DietStatusLight, DietStatusText, SnackDescription, SnackTitle, ButtonsContainer } from './styles'

import { TextHeader } from '@components/TextHeader'
import { Button } from '@components/Button'
import { snackGetByNameAndDate } from '@storage/snacks/snackGetByNameAndDate'


type RouteParams = {
  name: string;
  date: string;
}

export function Details(){
  const [dietStatus, setDietStatus] = useState<DietStatus>('isInsideDiet')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const navigation = useNavigation()
  const route = useRoute()

  async function fetchSnack(){

    const { date, name } = route.params as RouteParams
    const data = await snackGetByNameAndDate(name, date)

    const [snack]= data

    setName(snack.name)
    setDescription(snack.description)
    setDate(snack.date)
    setTime(snack.time)

    if(snack.isInsideDiet) {
      setDietStatus('isInsideDiet')
    } else {
      setDietStatus('isOutsideDiet')
    }
    
  }

  async function deleteSnack() {
    await snackDeleteByNameAndId(name, date)

    navigation.navigate('home')
  }

  function handleSDeleteSnack() {
    Alert.alert("Excluir", "Deseja realmente excluir o registro da refeição?", [
      {
        text: "Cancelar",
        style: 'cancel'
      },
      {
        text: "Sim, excluir",
        onPress: () => deleteSnack()
      }
    ])
  }

  useEffect(() => {
    fetchSnack()
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
              onPress={() => navigation.navigate('update' , {name, date})}
            />

            <Button 
              title='Excluir refeição'
              typeColor='SECONDARY'
              icon='delete'
              onPress={handleSDeleteSnack}
            />
        </ButtonsContainer>

      </Content>
    </Container>
  )
}