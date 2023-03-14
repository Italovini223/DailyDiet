import {SnackTypesProps, Container, SnackTime, SnackTitleArea, SnackTitle, SnackType, Line} from './styles'

type Props = SnackTypesProps & {
  title: string
  time: string
}

export function Snack({ isInsideDiet, time, title}:Props){
  return (
    <Container>
      <SnackTime>
        {time}
      </SnackTime>
      <Line />
      <SnackTitleArea>
        <SnackTitle>
          {title}
        </SnackTitle>
      </SnackTitleArea>

      <SnackType isInsideDiet={isInsideDiet}/>
    </Container>
  )
}