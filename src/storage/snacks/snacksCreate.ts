import AsyncStorage from '@react-native-async-storage/async-storage'

import { SNACK_COLLECTION } from '../storageConfig'
import { snacksGetAll } from './snacksGetAll';

import { SnackStorageDTO } from './snackStorageDTO'

export async function snackCreate(snack : SnackStorageDTO){
  try {
    const storageSnacks = await snacksGetAll()

    const storage = JSON.stringify([...storageSnacks, snack])

    await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    
  } catch (error) {
    throw(error)
  }
}