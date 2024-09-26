import React from 'react';
import {Card} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Texto from '../../../componentes/Texto'; //Componente de exibição de texto


export default function Carde({item:{id, nome, imagem, preco}}){

  async function addListaDesejos(id, nome, imagem) {

    //Produto favoritado
    const addProduto = [{
      id: id,
      nome: nome,
      imagem: imagem,
    }];

    //Verifica se a lista está vazia
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

    if(listaDesejosSalva == null){
      //Lista vazia, insere o procuto clicado
      const listaDesejosAtulizada = JSON.stringify(addProduto);

      //Insere no AsyncStorage
      await AsyncStorage.setItem('ListaDesejos', listaDesejosAtulizada);
      Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
      console.log("Adicionou produto");
      console.log(listaDesejosAtulizada);
    } else {
      //A lista já possui itens
      const listaDesejos = JSON.parse(listaDesejosSalva);

      //Insere mais um produto na lista
      listaDesejos.push({id: id, nome: nome, imagem: imagem});

      //Converte o Array para String
      const listaDesejosAtulizada = JSON.stringify(listaDesejos);

      //Insere no AsyncStorage
      await AsyncStorage.setItem('ListaDesejos', listaDesejosAtulizada);
      Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
      console.log("Mais um produto na lista");
      console.log(listaDesejosAtulizada);
    }
  }

    return <Card mode='elevated' style={styles.card}>
                <Card.Content>
                    <Texto style={styles.titulo}>{nome}</Texto>
                </Card.Content>
                <Card.Cover style={styles.imagem} source={imagem}/>
                <Card.Content>
                  <Texto style={styles.preco}>{preco}</Texto>
                </Card.Content>
                <Card.Actions>
                  <TouchableOpacity onPress={() => addListaDesejos(id, nome, imagem)}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
                </Card.Actions>
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