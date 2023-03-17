import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Details } from '@screens/Details'
import { New } from '@screens/New'
import { AfterCreate } from '@screens/AfterCreate'
import { Update } from '@screens/Update'
import { Statics } from '@screens/Statics'

const { Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='home'
        component={Home}
      />

      <Screen 
        name='details'
        component={Details}
      />

      <Screen 
        name='new'
        component={New}
      />

      <Screen 
        name='afterCreate'
        component={AfterCreate}
      />

      <Screen 
        name='update'
        component={Update}
      />

      <Screen 
        name='statics'
        component={Statics}
      />
    </Navigator>
  )
}