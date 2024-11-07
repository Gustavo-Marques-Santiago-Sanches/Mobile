import React, {useEffect, useState} from "react";
import { View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { Card } from "react-native-paper";

import Texto from '../../componentes/Texto';
import ListaItem from "./listaItem";
import styles from "./estilos";
import Botao from "../Produtos/Componentes/Botao";

export default function Lista(){

    const [listData, setListData] = useState([]);
    const [apiImagem, setapiImagem] = useState();
    const [apiNome, setapiNome] = useState();

    //Função para capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Carrega a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, []);

    const navigation = useNavigation();

    //Função para limpar a Lista de Desejos
    const clearAsyncStorage = async () => {
        await AsyncStorage.clear();
        console.log('AsyncStorage apagado com sucesso');
        Alert.alert("Lista de Desejos foi excluida com sucesso.");
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    async function api() {
        const num = getRandomInt(1, 20);
        const numTexto = JSON.stringify(num);
        console.log(numTexto);
    
            const response = await axios.get('https://fakestoreapi.com/products/' + numTexto);
            
            // Acessamos o corpo da resposta:
            const data = response.data;
            console.log(data);
            
            // Acessando informações específicas
            setapiNome(data.title);
            setapiImagem(data.image);
            
            // console.log(nome, imagem);
    }

    return <View style={styles.listaContainer}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <Botao textoBotao={"Sugestões de Item"} clickBotao={()=> api()}></Botao>
            {apiImagem &&
                <Card mode='contained' style={styles.card_API}>
                    <Card.Content>
                        <Card.Cover source={{uri : apiImagem}} style={styles.imagem_API} resizeMode='contain'/>
                        <Texto style={styles.nomeProduto}>{apiNome}</Texto>
                    </Card.Content>
                </Card>
            }

            <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>

            

            <FlatList
                data={listData}
                renderItem={({item})=> <ListaItem {...item}/>}
                keyExtractor={({id})=>String(id)}
                numColumns={2}
            />
            <Botao textoBotao={"Apagar Lista de Desejos"} clickBotao={()=> clearAsyncStorage()}></Botao>
    </View>
}