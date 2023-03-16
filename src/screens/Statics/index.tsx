import { GeneralStatics } from '@components/GeneralStatics'
import { Percent } from '@components/Percent'
import { SnackStatics } from '@components/SnackStatics'
import { Container, Content, ContentTitle, SnackStaticsContainer } from './styles'




export function Statics(){
  const percent = 51.25
  return (
    <Container
      DietUpToDate={percent > 50}
    >

      <Percent 
        DietUpToDate={percent > 50}
        onPressArrow={() => { }}
        percent={percent}
        position='LEFT'
      />

      <Content>
        <ContentTitle>
          Estatísticas gerais
        </ContentTitle>

        <GeneralStatics 
          number={22}
          description="melhor sequência de pratos dentro da dieta"
        />

        <GeneralStatics 
          number={109}
          description="refeições registradas"
        />

        <SnackStaticsContainer>
          <SnackStatics 
            number={99}
            description="refeições dentro da dieta"
            DietStatus='INSIDE'
            
          />

          <SnackStatics 
            number={10}
            description="refeições fora da dieta"
            DietStatus='OUT'
          />
        </SnackStaticsContainer>
      </Content>
      
    </Container>
  )
}