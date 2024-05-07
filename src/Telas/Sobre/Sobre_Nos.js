import React from 'react';
import {ScrollView, Image} from 'react-native';

import Style from './Bonito/Detalhamento'; //CSS
import Texto from '../../componentes/Texto'; //Componente de exibição de texto

export default function Sobre({tela}){

    return <ScrollView style={Style.fundo}>
    <Image style={Style.logo} source={tela.logo} resizeMode='contain'/>
    <Texto style={Style.desc}>{tela.descricao_pri}</Texto>
    <Texto style={Style.titulo}>{tela.obj}</Texto>
    <Texto style={Style.desc}>{tela.descricao_sec}</Texto>
    <Image style={Style.imagem} source={tela.img}/>
  </ScrollView>
}