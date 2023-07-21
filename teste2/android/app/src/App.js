import React from 'react'
import { View, StyleSheet } from 'react-native'

// import Primeiro from './componentes/Primeiro'
// import { Comp1, Comp2 } from './componentes/Multi'
// import Comp3 from './componentes/Multi'
// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import Titulo from './componentes/Titulo'
// import Botao from './componentes/Botao'
import Contator from './componentes/Contador'

export default () => (
    <View style={style.App}>
        <Contator inicial={100} passe={10}/>
        <Contator inicial={100} passe={10}/>
        {/* <Aleatorio min="1" max="60"/>
       <Botao />
        <Titulo 
            principal="Cadastro Produto"
            secundario="Tela de cadastro do produto"
        />
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Primeiro/>
        <MinMax min="3" max="20"/>
        <MinMax min="1" max="10"/> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50
    }
})