import React from 'react';
import {FlatList} from 'react-native';

import Item from './Componentes/Item';
import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';

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