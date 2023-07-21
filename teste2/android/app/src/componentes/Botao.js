import React from 'react'
import { Button } from 'react-native'

export default props =>{

    function executar() {
        console.warn("Executou!")
    }
    return(
        <>
            <Button
                title="Clique aqui 1"
                onPress={executar}
            />
            <Button
                title="Clique aqui 2"
                onPress={function() {
                    console.warn('Exec #02')
                }}
            />
        </>
    )
}