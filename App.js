import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';

import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Texto from './src/componentes/Texto';

import Produto from './src/Telas/Produtos/Index';
import Sobre from './src/Telas/Sobre/Sobre_Nos';
import Item from './src/Telas/Itens/Produtos';
import mockProd from './src/mocks/Produto';
import mockSobre from './src/mocks/Sobre';
import mockItem from './src/mocks/Item';

//Audio
import {Audio} from 'expo-av';

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

function MenuAudio(){

  //Áudio para o APP
  const [audioStatus, setAudioStatus] = useState(false)
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/acdc_highway_to_hell.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if(!loading) {setAudioStatus(!audioStatus);}}}>
            <Texto>🎧 Liga/Desliga</Texto>
          </TouchableOpacity>
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
          <MenuAudio />
        </NavigationContainer>
}