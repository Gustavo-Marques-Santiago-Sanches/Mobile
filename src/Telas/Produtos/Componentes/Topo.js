import React from 'react';
import { StyleSheet, Image, Dimensions, StatusBar} from 'react-native';

import Header from '../../../../assets/pantufa.png';
import Texto from '../../../componentes/Texto'; //Componente de exibição de texto

//captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
        <StatusBar />
        <Image source={Header} style={styles.topo}/>
        <Texto style={styles.titulo}>{titulo}</Texto>
    </>

}

const styles = StyleSheet.create({
    topo: {
      width: "100%",
      height: (1000/1000)*width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
    },
});