import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';

import Produto from './src/Telas/Produto';
import { View } from 'react-native';

export default function App() {
  //Carrega a fonte para o meu projeto
  const [fonteCarregada] = useFonts({
    "SpaceGRegular" : SpaceGrotesk_300Light,
    "SpaceGBold" : SpaceGrotesk_700Bold,
  })

  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return <Produto />
}