import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, Alert } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import Texto from "../../componentes/Texto";
import styles from './estilos';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaItem ({id, nome, imagem}){

    const navigation = useNavigation();

    //Função para remover itens da Lista de Desejos
    async function removeProdListaDesejos(id){
        //Captura da Lista de Desejos
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lista de desejos em array
        const listaDesejos = JSON.parse(listaDesejosSalva);

        //Excluo o item e transforma em string para atualizar o AsyncStorage
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item)=> item.id !== id));

        //Atualiza o AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("Produto removida da Lista de Desejos.");
        console.log("Removeu item da lista.");

        //Atualiza a tela da Lista de Desejos
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});
    }

    async function api(){
        const num = Math.getRandomInt(1, 200);
        const numTexto = stringify(num);
        const texto = ('https://api.escuelajs.co/api/v1/products/' + numTexto);

        const axios = require('axios');

        console.log(axios.get(texto));
    }

    return <SafeAreaView style={styles.cardContainer}>
            <StatusBar/>
            <Card mode='contained' style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Texto style={styles.nomeProduto}>{nome}</Texto>
                    <TouchableOpacity style={styles.lixeira} onPress={()=>removeProdListaDesejos(id)}>
                        <Ionicons name="trash" size={25} color="gray"/>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
    </SafeAreaView>
}