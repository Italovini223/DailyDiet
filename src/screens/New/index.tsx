import { Input } from "@components/Input";
import { TextHeader } from "@components/TextHeader";
import { Container, Content } from "./styles";

export function New(){
  return(
    <Container>
      <TextHeader 
        text="Nova refeição"
      />

      <Content>
        <Input 
          labelText="Nome"
        />

        
      </Content>
    </Container>
  )
}