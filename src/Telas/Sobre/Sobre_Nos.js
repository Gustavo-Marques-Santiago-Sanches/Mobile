import React from 'react';
import {ScrollView, Image} from 'react-native';

import Style from './Bonito/Detalhamento'; //CSS
import Texto from '../../componentes/Texto'; //Componente de exibição de texto

export default function Sobre({tela}){

    return <ScrollView style={Style.fundo}>
    <Image style={Style.logo} source={tela.logo}/>
    <Texto style={Style.desc}>{tela.descricao}</Texto>
    <Image style={Style.imagem} source={tela.img}/>
  </ScrollView>
    
    {/* <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={itens.lista.id}
            ListHeaderComponent={()=>{
                return <>
                    <Detalhes {...tela}/>
                </>
            }}
        /> */}
}