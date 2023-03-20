import { SnackStorageDTO } from '@storage/snacks/snackStorageDTO'

type Props = {
  snacks: SnackStorageDTO[]
}

export async function CalculateIsInsideDietSequence({ snacks }: Props){
  let currentSequence = 0
  let MaxSequence = 0

  snacks.map(obj => {
    if(obj.isInsideDiet === true){
      currentSequence ++;

      if(currentSequence > MaxSequence){
        MaxSequence = currentSequence
      }
    } else {
      currentSequence = 0
    }
  })

  return MaxSequence
}