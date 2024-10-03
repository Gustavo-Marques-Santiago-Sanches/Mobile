import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons/Ionicons";

import Texto from "../../componentes/Texto";
import styles from './estilos';
import { StatusBar } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListaItem ({id, nome, imagem}){

    return <SafeAreaView style={styles.cardContainer}>
            <StatusBar/>
            <Card mode='contained' style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Texto style={styles.nomeProduto}>{nome}</Texto>
                </Card.Content>
            </Card>
    </SafeAreaView>
}