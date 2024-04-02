import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Alert} from 'react-native';

import Texto from '../../../componentes/Texto'; //Componente de exibição de texto


export default function Detalhes({nome, detalhes, preco, logo}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <TouchableOpacity style={styles.botao} onPress={() => (Alert.alert("Lista de Desejos", "Em breve a funcionalidade da Lista de Desejos estará disponivel"))}>
              <Texto style={styles.botaoTexto}>Adicionar a Lista de Desejos</Texto>
            </TouchableOpacity>
          </View>
}

const styles = StyleSheet.create({
    produto: {
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    nome: {
      color: "#ff0084",
      fontSize: 22,
      paddingTop: 8,
      fontWeight: "bold",
    },
    descricao: {
      color: "black",
      fontSize: 16,
    },
    preco: {
      color: "#2A9F85",
      fontSize: 26,
      fontWeight: "bold",
    },
    logo: {
      width: 90,
      height: 50,
    },
    logotipo: {
      flexDirection: "row",
    },
    botao: {
      margin: 10,
      backgroundColor: "gold",
      paddingVertical: 10,
      borderRadius: 6,
    },
    botaoTexto: {
      textAlign: "center",
      color: "black",
      fontSize: 18,
      lineHeight: 26,
      fontWeight: "bold",
    }
});