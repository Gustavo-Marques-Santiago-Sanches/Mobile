import React from 'react';
import {} from 'react-native';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';

export default function Produto({topo, detalhes}){
    return <>
        <Topo {...topo}/>
        <Detalhes {...detalhes}/>
    </>
}