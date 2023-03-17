import { useEffect, useState } from 'react'
import { SectionList } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import groupBy from 'lodash/groupBy'

import { ButtonArea, ButtonLabel, Container, HeaderList, ListContent } from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Snack } from '@components/Snack';


type SnackDataProps = {
  name: string
  time: string
  date: string
  isInsideDiet: boolean
}

type SnackProps = {
  title: string;
  data: SnackDataProps[]
}

export function Home(){
  const [snacks, setSnacks] = useState<SnackProps[]>([])
  const [percent, setPercent] = useState(0)

  const navigation = useNavigation()

  const snacksTest = [
    {
      date: '05/05/2023',
      time: '8:00',
      name: 'Banana',
      isInsideDiet: true
    },
    {
      date: '05/05/2023',
      time: '8:00',
      name: 'Arroz integral',
      isInsideDiet: true
    },
    {
      date: '05/05/2023',
      time: '8:00',
      name: 'Mexido',
      isInsideDiet: false
    },
    {
      date: '06/05/2023',
      time: '8:00',
      name: 'Danix',
      isInsideDiet: false
    },
    {
      date: '06/05/2023',
      time: '8:00',
      name: 'Pera',
      isInsideDiet: true
    },
    {
      date: '06/05/2023',
      time: '8:00',
      name: 'Laranja',
      isInsideDiet: true
    },
    {
      date: '06/05/2023',
      time: '8:00',
      name: 'Maracujá',
      isInsideDiet: true
    },
  ]

  const calculatePercent = () => {
    const isInsideDiet = snacksTest.filter(snack => snack.isInsideDiet === true);

    const total = (isInsideDiet.length / snacksTest.length) * 100

    setPercent(total)

  }

  useEffect(() => {
    

    const groupedList = Object.values(
      groupBy(snacksTest, (snack) => {
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

    calculatePercent()
  }, [])

  return (
    <Container>
      <Header />
      <Percent 
        DietUpToDate={percent > 50}
        percent={percent}
        onPressArrow={() => navigation.navigate('statics')}
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
        style={[
          {flex: 1}, 
        ]}
        showsVerticalScrollIndicator={false}
        sections={snacks}
        keyExtractor={({name}) => name}
        renderSectionHeader={({section: {title}})=> (
          <HeaderList>
            {title}
          </HeaderList>
        )}
        renderItem={({item}) => (
          <ListContent>
            <Snack 
              title={item.name}
              time={item.time}
              isInsideDiet={item.isInsideDiet}
              onPress={() => navigation.navigate('details')}
            />
          </ListContent>
        )}
      />
    </Container>
  )
}