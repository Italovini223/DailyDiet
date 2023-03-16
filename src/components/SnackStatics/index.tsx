import { SnackStaticsStyleProps, Container, SnackStaticsNumber, SnackStaticsDescription } from './styles'

type Props = SnackStaticsStyleProps & {
  number: number;
  description: string;
}

export function SnackStatics({ DietStatus, marginRight = false, description, number }: Props){
  return (
    <Container
      DietStatus={DietStatus}
      marginRight={marginRight}
    >
      <SnackStaticsNumber>{number}</SnackStaticsNumber>
      <SnackStaticsDescription>{description}</SnackStaticsDescription>
    </Container>
  )
}