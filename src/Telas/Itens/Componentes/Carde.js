import React from 'react';
import {Card} from 'react-native-paper';
import {StyleSheet, Image} from 'react-native';

import Texto from '../../../componentes/Texto'; //Componente de exibição de texto

export default function Carde({item:{nome, imagem}}){

    return <Card mode='elevated' style={styles.card}>
                <Card.Content>
                    <Texto style={styles.titulo}>{nome}</Texto>
                    {/* <Image source={imagem} style={styles.imagem}/> */}
                </Card.Content>
                <Card.Cover source={imagem}/>
            </Card> 
}

const styles = StyleSheet.create({
  card:{
    flex: 1,    
    width: "90%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  titulo:{
      fontWeight: "bold",
      fontSize: 20,
  },
  imagem: {
      width: "80%",
      height: "80%",
      alignSelf: "center",
  }
})