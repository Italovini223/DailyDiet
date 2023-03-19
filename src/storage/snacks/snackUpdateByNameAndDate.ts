import AsyncStorage from '@react-native-async-storage/async-storage'

import { SnackStorageDTO } from './snackStorageDTO'
import { snacksGetAll } from './snacksGetAll'
import { SNACK_COLLECTION } from '../storageConfig'

type Props = {
  oldName: string
  oldDate: string
  newSnack: SnackStorageDTO
}

export async function snackUpdateByNameAndDate({ oldName, oldDate, newSnack }: Props){
  try {
    const storage = await snacksGetAll()

    const filteredStorage = storage.filter(snack => snack.name !== oldName && snack.date !== oldDate)
  
    const newStorage = JSON.stringify([...filteredStorage, newSnack])
  
    await AsyncStorage.setItem(SNACK_COLLECTION, newStorage)

  } catch (error) {
    throw error
  }
}