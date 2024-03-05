import React from 'react';
import { StyleSheet, Text, Image, Dimensions, StatusBar, View} from 'react-native';

import Topo from '../../assets/pantufa.png';

//captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Produto(){
    return <>
        <StatusBar />
        <Image source={Topo} style={styles.topo}/>
        <Text style={styles.titulo}>Detalhes do Produto</Text>
        <View style={styles.produto}>
          <Text style={styles.nome}>Pantufa Ursinhos Carinhosos</Text>
          <Text style={styles.descricao}>Uma linda e fofa pantufa para você presentear sua amada!</Text>
          <Text style={styles.preco}>R$ 37,00</Text>
        </View>
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
      textAlign: "right",
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
    },
    produto: {
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    nome: {
      color: "#ff0084",
      fontSize: 26,
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
});