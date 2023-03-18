import { useState } from "react";

import { useNavigation } from '@react-navigation/native'

import { snackCreate } from '@storage/snacks/snacksCreate'

import { ButtonContainer, ButtonOptionsLabel, Container, Content,  MultiComponentsContainer} from "./styles";

import { Button } from "@components/Button";
import { ButtonOption } from "@components/ButtonOption";
import { Input } from "@components/Input";
import { TextHeader } from "@components/TextHeader";

export function New(){
  const [isButtonSimActive, setIsButtonSimActive] = useState(false)
  const [isButtonNaoActive, setIsButtonNaoActive] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


  const navigation = useNavigation()

  async function handleAddSnack() {
    try {
      const snack = {
        name,
        description,
        date,
        time,
        isInsideDiet: isButtonSimActive ? true : false,
      }

      await snackCreate(snack)

      navigation.navigate('afterCreate', {snackStatus: snack.isInsideDiet})
    } catch (error) {

    }
  }

  return(
    <Container>
      <TextHeader 
        text="Nova refeição"
        onPress={() => navigation.navigate('home')}
      />

      <Content>
        <Input 
          labelText="Nome"
          value={name}
          onChangeText={setName}
        />

        <Input 
          type="TextArea"
          labelText="Descrição" 
          multiline
          numberOfLines={5}
          style={{textAlignVertical: 'top'}}
          value={description}
          onChangeText={setDescription}
        />

        <MultiComponentsContainer>
          <Input 
            labelText="Data"
            size="SHORT"
            value={date}
            onChangeText={setDate}
          />

          <Input 
            labelText="Hora"
            size="SHORT"
            value={time}
            onChangeText={setTime}
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
            title="Cadastrar refeição"
            onPress={handleAddSnack}
          />
        </ButtonContainer>

      </Content>
    </Container>
  )
}