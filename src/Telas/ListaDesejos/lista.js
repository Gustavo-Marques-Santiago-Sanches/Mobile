import React, {useEffect, useState} from "react";
import { View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import Texto from '../../componentes/Texto';
import ListaItem from "./listaItem";
import styles from "./estilos";
import Botao from "../Produtos/Componentes/Botao";

export default function Lista(){

    const [listData, setListData] = useState([]);

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

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    async function api(){
        const num = getRandomInt(100);
        const numTexto = JSON.stringify(num);
        console.log(numTexto);
        
        axios.get('https://api.escuelajs.co/api/v1/products/' + numTexto).then(function (response) {
            // aqui acessamos o corpo da resposta:
            console.log(response.data);
        })
    }

    return <View style={styles.listaContainer}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>

            <FlatList
                data={listData}
                renderItem={({item})=> <ListaItem {...item}/>}
                keyExtractor={({id})=>String(id)}
                numColumns={2}
            />
            <Botao textoBotao={"Apagar Lista de Desejos"} clickBotao={()=> clearAsyncStorage()}></Botao>
            <Botao textoBotao={"API"} clickBotao={()=> api()}></Botao>
    </View>
}