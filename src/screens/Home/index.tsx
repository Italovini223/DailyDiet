import { SectionList } from 'react-native'

import groupBy  from 'lodash/groupBy'

import { ButtonArea, ButtonLabel, Container, HeaderList, ListContent } from "./styles";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Snack } from '@components/Snack';
import { useEffect, useState } from 'react';



export function Home(){
  const snacksTest = [
    {
      name: "X-tudo",
      date: "14/03/2022" ,
      isInsideDiet: false,
    },
    {
      name: "salada",
      date: "14/03/2022" ,
      isInsideDiet: true,
    },
    {
      name: "macarrão",
      date: "15/03/2022" ,
      isInsideDiet: false,
    },
    {
      name: "Banana",
      date: "15/03/2022" ,
      isInsideDiet: true,
    },
    {
      name: "abacate",
      date: "15/03/2022" ,
      isInsideDiet: true,
    },
  ]

  const percent = 90.82

  return (
    <Container>
      <Header />
      <Percent 
        DietUpToDate={percent > 50}
        percent={String(percent).replace('.', ',')}
      />

      <ButtonArea>
        <ButtonLabel>
          Refeições
        </ButtonLabel>

        <Button 
          title="Nova refeição"
          icon="add"
        />
      </ButtonArea>

      <SectionList 
        sections={[
          {title: '04/05/2022', data: ['X-tudo', 'Alface']},
          {title: '05/05/2022', data: ['Banana', 'Alface']},
          {title: '06/05/2022', data: ['Banana', 'Alface']},
          // {title: '07/05/2022', data: ['Banana', 'Alface']},
          // {title: '08/05/2022', data: ['Banana', 'Alface']},
        ]}
        keyExtractor={(item) => item}
        renderSectionHeader={({section: {title}})=> (
          <HeaderList>
            {title}
          </HeaderList>
        )}
        renderItem={({item}) => (
          <ListContent>
            <Snack 
              title={item}
              time='8:00'
              isInsideDiet={false}
            />
          </ListContent>
        )}
      />
    </Container>
  )
}