import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (porpriedades) => {
    return (
        <Text style={Estilo.fonteGrande}> 
            O valor {porpriedades.max} é maior que o valor {porpriedades.min}
        </Text>
    )
}