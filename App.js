import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';

import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/Telas/Produtos/Index';
import Sobre from './src/Telas/Sobre/Sobre_Nos';
import Item from './src/Telas/Itens/Produtos';
import mockProd from './src/mocks/Produto';
import mockSobre from './src/mocks/Sobre';
import mockItem from './src/mocks/Item';


function MenuKit(){
  return <View>
          <Produto {...mockProd}/>
        </View>
}

function SobreN(){
  return <View>
          <Sobre {...mockSobre}/>
        </View>
}

function Itens(){
  return <View>
          <Item {...mockItem}/>
        </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator 
          screenOptions={ ({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              
              if(route.name === "Sobre nós"){
                iconName = focused
                ? 'help-circle'
                : 'help-circle-outline';
              } else if(route.name === "Kit"){
                iconName = focused
                ? 'basket'
                : 'basket-outline';
              } else if(route.name === "Produtos"){
                iconName = focused
                ? 'list'
                : 'list-outline';
              } else if(route.name === "Lista de Desejos"){
                iconName = focused
                ? 'heart'
                : 'heart-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
          })}>
            <Tab.Screen name="Sobre nós" component={SobreN}/>
            <Tab.Screen name="Kit" component={MenuKit}/>
            <Tab.Screen name="Produtos" component={Itens}/>
            <Tab.Screen name="Lista de Desejos" component={MenuKit}/>
          </Tab.Navigator>
}

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

  return <NavigationContainer>
          <TabsMenu />
        </NavigationContainer>
}