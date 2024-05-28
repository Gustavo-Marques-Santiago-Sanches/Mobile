import React from 'react';
import {FlatList, View} from 'react-native';

import Card from './Componentes/Carde';
import Texto from '../../componentes/Texto';
import style from './Componentes/Estilizacao_Itens';

export default function Produtos({detalhes, itens}){

    return <View style={style.container}>
            <Texto>{itens.titulo}</Texto>
            <FlatList 
                data={itens.lista}
                renderItem={Card}
                keyExtractor={itens.lista.id}
                numColumns={2}
            />
        </View>
}