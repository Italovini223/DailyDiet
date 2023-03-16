import { Container, StaticsDescription, StaticsNumber } from "./styles";

type Props = {
  number: number;
  description: string;
}

export function GeneralStatics({ description, number}: Props){
  return (
    <Container>
      <StaticsNumber>{number}</StaticsNumber>
      <StaticsDescription>{description}</StaticsDescription>
    </Container>
  )
}