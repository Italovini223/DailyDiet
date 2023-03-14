import { PercentProps, Container, PercentText, Description } from "./styles";

type Props = PercentProps & {
  percent: string
}

export function Percent({ DietUpToDate, percent}: Props){
  return (
    <Container
      DietUpToDate={DietUpToDate}
    > 
      <PercentText>
        {percent}%
      </PercentText>
      <Description>
        das refeições dentro da dieta
      </Description>
    </Container>
  )
}