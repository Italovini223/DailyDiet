import AsyncStorage from '@react-native-async-storage/async-storage'

import { SNACK_COLLECTION } from '../storageConfig'

import { SnackStorageDTO } from './snackStorageDTO'

export async function snacksGetAll() {
  const storage = await AsyncStorage.getItem(SNACK_COLLECTION)

  const snacks: SnackStorageDTO[] = storage ? JSON.parse(storage) : []
  

  if(snacks.length > 0) {
    snacks.sort((a, b) => {
      if(a.date < b.date) {
        return -1
      } else if(a.date > b.date) {
        return 1
      } else {
        return 0
      }
    }) 
  }

  return snacks
}