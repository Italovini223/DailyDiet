import AsyncStorage from '@react-native-async-storage/async-storage'

import { snacksGetAll } from './snacksGetAll'
import { snackGetByNameAndDate } from './snackGetByNameAndDate'

import { SNACK_COLLECTION } from '../storageConfig'

export async function snackDeleteByNameAndId(name: string, date: string){
  try {
    const storage = await snacksGetAll()

    const data = await snackGetByNameAndDate(name, date)

    const [snackDeleted] = data

    const newStorage = storage.filter(snack => snack.name !== snackDeleted.name && snack.time !== snackDeleted.time)

   console.log(newStorage)

    AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(newStorage))

  } catch (error) {
    throw error
  }
}