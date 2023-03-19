import { snacksGetAll } from './snacksGetAll'

export async function snackGetByNameAndDate(name: string, date: string){
  const storage = await snacksGetAll()

  const snack = storage.filter(snack => snack.name === name && snack.date === date)
  return snack
}