import { useState } from "react";

import { useNavigation } from '@react-navigation/native'

import { ButtonContainer, ButtonOptionsLabel, Container, Content,  MultiComponentsContainer} from "./styles";

import { Button } from "@components/Button";
import { ButtonOption } from "@components/ButtonOption";
import { Input } from "@components/Input";
import { TextHeader } from "@components/TextHeader";

export function New(){
  const [isButtonSimActive, setIsButtonSimActive] = useState(false)
  const [isButtonNaoActive, setIsButtonNaoActive] = useState(false)

  const navigation = useNavigation()

  function handleAddSnack() {
    navigation.navigate('afterCreate')
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
        />

        <Input 
          type="TextArea"
          labelText="Descrição" 
          multiline
          numberOfLines={5}
          style={{textAlignVertical: 'top'}}
        />

        <MultiComponentsContainer>
          <Input 
            labelText="Data"
            size="SHORT"
          />

          <Input 
            labelText="Hora"
            size="SHORT"
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