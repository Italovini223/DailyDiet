import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'

import { SNACK_COLLECTION } from '../storageConfig'
import { snacksGetAll } from './snacksGetAll';

import { SnackStorageDTO } from './snackStorageDTO'

export async function snackCreate(snack : SnackStorageDTO){
  try {
    const storageSnacks = await snacksGetAll()

    const snackAlreadyExists = storageSnacks.includes(snack)

    if(snackAlreadyExists) {
      throw new AppError("esta refeição ja esta cadastrada nessa data e horário")
    }

    const storage = JSON.stringify([...storageSnacks, snack])

    await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    
  } catch (error) {
    throw(error)
  }
}