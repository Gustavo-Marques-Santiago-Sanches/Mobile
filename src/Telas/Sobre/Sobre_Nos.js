import React, {useState} from 'react';
import {ScrollView, Image} from 'react-native';
import {Video, ResizeMode} from 'expo-av';

import Style from './Bonito/Detalhamento'; //CSS
import Texto from '../../componentes/Texto'; //Componente de exibição de texto

import Video_ursinhos from '../../../assets/Comercial Ursinhos.mp4';



export default function Sobre({tela}){
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return <ScrollView style={Style.fundo}>
    <Image style={Style.logo} source={tela.logo} resizeMode='contain'/>
    <Texto style={Style.desc}>{tela.descricao_pri}</Texto>
    <Texto style={Style.titulo}>{tela.obj}</Texto>
    <Texto style={Style.desc}>{tela.descricao_sec}</Texto>
    <Image style={Style.imagem} source={tela.img}/>
    <Video ref={video} 
      style={Style.video}
      source={Video_ursinhos}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}/>
  </ScrollView>
}