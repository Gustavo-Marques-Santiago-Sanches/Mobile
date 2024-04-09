import React from 'react';
import { StyleSheet, Image, View, Alert} from 'react-native';

import Texto from '../../../componentes/Texto'; //Componente de exibição de texto
import Botao from './Botao';

export default function Detalhes({nome, detalhes, preco, logo, botao}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode='contain'/>
              <Texto style={styles.nome}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao textoBotao={botao} clickBotao={()=>(Alert.alert("Em breve!", "Estamos preparando uma nova função para esse botão"))}/>
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
});