import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Texto from '../../../componentes/Texto'; //Componente de exibição de texto

export default function Botao({textoBotao, clickBotao}){
    return <>
        <TouchableOpacity style={styles.botao} onPress={clickBotao}>
            <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    botao: {
      margin: 10,
      backgroundColor: "gold",
      paddingVertical: 10,
      borderRadius: 6,
      width: "75%",
      marginLeft: "13%",
    },
    botaoTexto: {
      textAlign: "center",
      color: "black",
      fontSize: 18,
      lineHeight: 26,
      fontWeight: "bold",
    }
});