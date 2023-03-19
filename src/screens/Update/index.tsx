import { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { snackGetByNameAndDate } from '@storage/snacks/snackGetByNameAndDate'
import { snackUpdateByNameAndDate } from '@storage/snacks/snackUpdateByNameAndDate'

import { ButtonContainer, ButtonOptionsLabel, Container, Content,  MultiComponentsContainer} from './styles'

import { Button } from '@components/Button'
import { ButtonOption } from '@components/ButtonOption'
import { Input } from '@components/Input'
import { TextHeader } from '@components/TextHeader'

type RouteParams = {
  name: string
  date: string
}

export function Update(){
  const [isButtonSimActive, setIsButtonSimActive] = useState(false)
  const [isButtonNaoActive, setIsButtonNaoActive] = useState(false)

  const [oldName, setOldName] = useState('')
  const [oldDate, setOldDate] = useState('')

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')



  const navigation = useNavigation()
  const route = useRoute()

  async function handleUpdateSnack(){
    try {
      const newSnack = {
        name,
        description,
        date,
        time,
        isInsideDiet : isButtonSimActive ? true : false
      }
  
      await snackUpdateByNameAndDate({
        oldName,
        oldDate,
        newSnack
      }) 

      navigation.navigate('afterCreate', {snackStatus : newSnack.isInsideDiet})
    } catch (error) {

    }
  }

  async function fetSnack(){
    const { name, date} = route.params as RouteParams

    const data = await snackGetByNameAndDate(name, date)

    const [snack] = data

    setOldName(snack.name)
    setDate(snack.date)

    setName(snack.name)
    setDescription(snack.description)
    setDate(snack.date)
    setTime(snack.time)

    snack.isInsideDiet ? setIsButtonSimActive(true) : setIsButtonNaoActive(true)
  }

  useEffect(() => {
    fetSnack()
  }, [])

  return(
    <Container>
      <TextHeader 
        text="Editar refeição"
        onPress={() => navigation.goBack()}
      />

      <Content>
        <Input 
          labelText="Nome"
          onChangeText={setName}
          value={name}
        />

        <Input 
          type="TextArea"
          labelText="Descrição" 
          multiline
          numberOfLines={5}
          onChangeText={setDescription}
          value={description}
        />

        <MultiComponentsContainer>
          <Input 
            labelText="Data"
            size="SHORT"
            onChangeText={setDate}
            value={date}
          />

          <Input 
            labelText="Hora"
            size="SHORT"
            onChangeText={setTime}
            value={time}
          />
        </MultiComponentsContainer>

        <ButtonOptionsLabel>
            Está dentro da dieta?
        </ButtonOptionsLabel>

        <MultiComponentsContainer>


          <ButtonOption 
            text="Sim"
            isActive={isButtonSimActive}
            onPress={() => {
              setIsButtonSimActive(!isButtonSimActive)
              setIsButtonNaoActive(false)
            }}
          />

          <ButtonOption 
            text="Não" 
            isActive={isButtonNaoActive} 
            onPress={() => {
              setIsButtonNaoActive(!isButtonNaoActive)
              setIsButtonSimActive(false)
            }}
          />
        </MultiComponentsContainer>
        
        <ButtonContainer>
          <Button 
            title="Salvar alterações"
            onPress={handleUpdateSnack}
          />
        </ButtonContainer>

      </Content>
    </Container>
  )
}