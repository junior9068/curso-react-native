import React from 'react'
import { Text } from 'react-native'

export default function aleatorio(props) {
    const resultado = parseInt(Math.random() * (props.max - props.min) + props.min)
    return <Text>Aqui está o número aleatório entre {props.min} e {props.max}: {resultado}</Text>
}