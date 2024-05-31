import React from 'react';
import {Card} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto'; //Componente de exibição de texto

export default function Carde({item:{nome, imagem, preco}}){

    return <Card mode='elevated' style={styles.card}>
                <Card.Content>
                    <Texto style={styles.titulo}>{nome}</Texto>
                </Card.Content>
                <Card.Cover style={styles.imagem} source={imagem}/>
                <Card.Content>
                  <Texto style={styles.preco}>{preco}</Texto>
                </Card.Content>
            </Card> 
}

const styles = StyleSheet.create({
  card:{
    flex: 1,    
    width: "95%",
    height: "95%",
    margin: 7,
    padding: 0,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    backgroundColor: "white",
  },
  titulo:{
    color: "#008B8B",
    fontWeight: "bold",
    fontSize: 16,
  },
  imagem:{
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
  },
  preco:{
    color: "#A52A2A",
    fontSize: 12,
    fontWeight: "bold",
  }
})