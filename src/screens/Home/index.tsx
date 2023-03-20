import { useEffect, useState, useCallback } from 'react'
import { SectionList } from 'react-native'

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { snacksGetAll } from '@storage/snacks/snacksGetAll'
import { SnackStorageDTO } from '@storage/snacks/snackStorageDTO'

import groupBy from 'lodash/groupBy'

import { ButtonArea, ButtonLabel, Container, HeaderList } from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Snack } from '@components/Snack';



type SnackProps = {
  title: string;
  data: SnackStorageDTO[]
}

export function Home(){
  const [snacks, setSnacks] = useState<SnackProps[]>([])
  const [percent, setPercent] = useState(0)

  const navigation = useNavigation()


  const calculatePercent = (snacks : SnackStorageDTO[]) => {
    const isInsideDiet = snacks.filter(snack => snack.isInsideDiet === true);

    if(snacks.length > 0) {
      const total = (isInsideDiet.length / snacks.length) * 100
      setPercent(total)
    } else {
      setPercent(0)
    }

  }
  

  async function fetchSnacks() {
    try {

      setSnacks([])

      const storage = await snacksGetAll()

      const groupedList = Object.values(
        groupBy(storage, (snack) => {
          return snack.date
        })
      )
  
      groupedList.map(list => {
        let snack = {
          title: list[0].date,
          data: [...list]
        }

        setSnacks(prevState => [...prevState, snack])
        
      })
      
      calculatePercent(storage)



    } catch (error) {

    }
  }




  useFocusEffect(useCallback( () => {
    fetchSnacks()
  }, []))
  
  return (
    <Container>
      <Header />
      <Percent 
        DietUpToDate={percent > 50}
        percent={percent}
        onPressArrow={() => navigation.navigate('statics', {percent})}
      />

      <ButtonArea>
        <ButtonLabel>
          Refeições
        </ButtonLabel>

        <Button 
          title="Nova refeição"
          icon="add"
          onPress={() => navigation.navigate('new')}
        />
      </ButtonArea>

      <SectionList 
        sections={snacks}
        showsVerticalScrollIndicator={false}
        initialNumToRender={1}
        keyExtractor={({name, date}) => name + date}
        renderSectionHeader={({section: {title}})=> (
          <HeaderList>
            {title}
          </HeaderList>
        )}
        renderItem={({item}) => (
          <Snack 
            title={item.name}
            time={item.time}
            isInsideDiet={item.isInsideDiet}
            onPress={() => navigation.navigate('details', { 
              date: item.date,
              name: item.name
            })}
        />

        )}
      />
    </Container>
  )
}