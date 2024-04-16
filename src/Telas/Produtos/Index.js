import React from 'react';
import {FlatList} from 'react-native';

import Topo from './Componentes/Topo'
import Detalhes from './Componentes/Detalhes'
import Item from './Componentes/Item'

export default function Produto({topo, detalhes, itens}){

    return <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={itens.lista.id}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo}/>
                    <Detalhes {...detalhes}/>
                </>
            }}
        />
}