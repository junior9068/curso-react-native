import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default props => (
    <React.Fragment>
        <Text style={Estilo.fonteGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>


) 