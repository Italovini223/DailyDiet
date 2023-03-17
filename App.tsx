import { useFonts,  NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'

import { StatusBar } from 'react-native'

import { ThemeProvider } from 'styled-components'

import theme from './src/theme'

import { Update } from '@screens/Update'

import { Loading } from '@components/Loading'



export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {
        fontsLoaded ? <Update /> : <Loading />
      }
    </ThemeProvider>
  );
}
