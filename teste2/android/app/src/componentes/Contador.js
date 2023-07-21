import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default props => {

    const [numero, setNumero] = useState(props.inicial)
    //console.warn(numero)

    const inc = () => setNumero(numero + props.passe)
    const dec = () => setNumero(numero - props.passe)

    //console.warn(setNumero)
    return (
        <>
            <Text style={Estilo.fonteGrande}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}