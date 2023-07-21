# curso-react-native Udemy
Curso de React Native

REPOSITÓRIO DO CURSO

Todos os exercícios e projetos estão em -> https://github.com/cod3rcursos/curso-react-native

Versões atualizadas para 2022 -> https://github.com/cod3rcursos/curso-react-native/tree/master/2022

## O que é React Native?

React Native é um framework voltado para desenvolvimento mobile. 

## Instalação 


Instalar React: 
1 - abrir o link https://reactnative.dev/docs/environment-setup?guide=native , clicar em *React Native CLI Quickstart* e ir para seção *Installing depencencies*

2 - Instalar Node;

3 - Instalar Java: sudo apt install default-jdk

4 - Instalar o Android Studio: Clicar no link e fazer o Download https://developer.android.com/studio/index.html

5 - Enquanto o instalador é baixado, clique neste link para instalar as dependencias do Android Studio https://developer.android.com/studio/install

5.1 - sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386

6 - Quando o Download do Android Studio for finalizado, extraia os arquivos;

7 - Copie a pasta extraida (android-studio) para dentro de /usr/local: sudo cp -r android-studio /usr/local

8 - Verifique se a pasta foi copiada: ls -l /usr/local;

9 - Colocar o Android Studio no Menu do Ubuntu instalando o *alacarte*:

9.1 - sudo apt install alacarte

9.2 - Navegue até o Menu do Ubuntu e localize o app Main Menu;

9.3 - Clique em New Item > Digite Android Studio no campo Name > No campo command, clique em browser e navegue até /usr/local/android-studio/bin/studio.sh e dê ok > Clique no icone para trocar e navegue até /usr/local/android-studio/bin/studio.svg > clique em Ok e está pronto

9.4 - Abra o Android Studio e siga as etapas para finalizar as configurações;

9.5 - Após finalizar as configurações, clique em More Actions > SDK Manager > Show PAckage Details > Marque a combo *Google APIs Intel Atom_64 System Image* > Apply > Ok > Accept> Next. Neste momento será baixado o pacote.

9.6 - Na mesma tela do procedimento anterior, clique em SDK Tools e marque a combo *Android SDK Command-line Tools (latest)* > Apply > Ok > Finish > Apply > ok

9.7 - Vamos clicar mais uma vez em *More Actions* > *Virtual Device Manager* > Create Device > Selecione o emulador Pixel 4 > Next > Clique para baixar a imagem do android S > Estamos fazendo isso para não baixar a ultima versão do Android. Escolha sempre umas duas versões a baixo para evitar muitos bugs > Aceite os termos e clique em Next.

9.8 - Após finalizar o Download da imagem, clique em Finish > Selecione a imagem que acabou de ser baixada > NExt> Dê um nome e clique em Finish.

9.9 - Depois disso selecione o emulador e clique em play para iniciar o emulador. O primeiro boot pode demorar um pouco pois é como se um celular estivesse sendo iniciado pela primeira vez.

9.10 - Prontinho. Android Studio instalado!

10 - Voltamos para a documentação de instalação do React Native e navegamos até as configurações das variáveis de ambiente do android

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

11 - Rodar o comando para criar o projeto:  `npx react-native@latest init teste2`;

12 - Antes de startar o projeto temos que rodar um comando para não dar erros (Seção Unable to start react-native package manager (on Linux)): https://reactnative.dev/docs/troubleshooting: `echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

13 - Iniciamos o React-Native: `npx react-native start`

14 - Iniciar a aplicação: `npx react-native run-android`

OBS: Tive problemas. `Erro: javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target`.

Solução: 
1 - Também tive que abrir o projeto criado dentro do android Studio para ele baixar as dependências.

2 - Tive que setar o proxy no Android Studio: File > Settings > System Settings > HTTP Proxy 


# Criando um novo projeto

Para criar um novo projeto rode o comando: `npx react-native init nome-do-projeto` (leva alguns minutos)

Em seguida entre na pasta do projeto e digite: `npx react-native run-android`

O deploy da aplicação será feito dentro do emulador do android studio. Você pode abrir a pasta do projeto no vscodea alterar o texto do arquivo App.tsx para testar o ambiente.

É muito interessante instalar o plugin do vscode Material Icon Theme pois ajuda muito visualmente para identificarar os arquivos do projeto

# Iniciando um projeto já criado

1 - Abra o emulador

2 - Digite `npx react-native start`

3 - Digite a para iniciar o projeto no emulador android

# Dificuldades

Como subir o projeto? 

* Mesmo fechando a IDE do android studio, um processo ficou travado e a IDE não subia novamente para poder subir o emulador. Solução: Tive que matar o processo na mão ou fazer logoff;

* Não esquecer de setar as variáveis de ambiente que está na documentação;


# Começando o cruso pra valer

# O que é um componente?


Componentes permitem dividir a interface do usuário em partes independentes, reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas. Componentes são como funções JavaScript. Eles aceitam entradas e retornam elementos React que descrevem o que deve aparecer na tela. Existem componentes baseados em funções e baseados em classes.

No javascript há várias maneiras de declarar uma função (neste caso, cada função é chamada de componente).
Perceba que no fim do arquivo sempre devemos exportar a função

Função normal (Function Declaration):
```
    import React from 'react'
    import { Text } from 'react-native'

    function App() {
        return <Text>Primeiro Componente!</Text>

    }
    export default App
```
Função anônima (Function Expression)

```
    import React from 'react'
    import { Text } from 'react-native'

    const App = function () {
        return <Text>Primeiro Componente!</Text>

    }
    export default App

```
Também é possível exportar uma função de maneira direta:

```
    import React from 'react'
    import { Text } from 'react-native'

    export default function () {
        return <Text>Primeiro Componente!</Text>
    }
```
Há outra maneira de simplificar a função transfomando-a em uma Arrow Function

```
    import React from 'react'
    import { Text } from 'react-native'

    export default () => {
        return <Text>Primeiro Componente!</Text>
    }
```

Tem como siplificar ainda mais uma Arrow Function:


```
    import React from 'react'
    import { Text } from 'react-native'

    export default () => <Text>Primeiro Componente!</Text>
```

# Primeiro componente e Sistema de Módulos do ECMAScript

Ordem normalmente usada para os compoentes: index acessa o App e o App acesso os componentes. Impostante: O arquivo .js que contém os componentes deve ter a primeira letra maiúscula.

Criamos um arquivo com o nome Multi.js com o seguinte conteudo:

```
import React from 'react'
import { Text } from 'react-native'

export default () => <Text>PRIMEIRO</Text>

```
No arquivo App.js ficou da seguinte forma:

```
import React from 'react'
import { Text, View } from 'react-native'

import Primeiro from './componentes/Primeiro'
import { Comp1, Comp2 } from './componentes/Multi'
import Comp3 from './componentes/Multi'

export default () => (
    <View>
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Primeiro/>    
    </View>

)
```
Desta forma, o arquivo App.js consume os componentes que estão no arquivo Multi.js

Parecido com o python, o react também importa 'módulos' para serem consumidos pelo código. EX:

```
import React from 'react'
import { Text } from 'react-native'
```

Na primeira linha, note que o `React` não está entre chaves, isso porque o módulo `React` foi exportado da maneira default conforme abaixo (ultima linha do código):
```
    function React() {
        return <Text>Primeiro Componente!</Text>

    }
    export default React
```

Neste segundo exemplo, note que o `{ Text }`, do código acima, está entre chaves, pois o export foi feito diretamente na função. Note também que a função é nominada. Veja o exemplo:

```
export function Text() (
    return 'Olá'
)
```
Sendo assim, concluimos que um módulo ou componente deve ser importado de acordo como é realizado o export.

# Aplicando um pouco de estilo na aplicação

A maneira correta de aplicar estilo em um determinado componente, é criar um arquivo de estilo e importar o estilo no componente. Também pode-se criar um estilo no próprio componente, mas não é recomendado.

No arquivo de estilo (estilo.js):
```
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    fonteGrande: {
        fontSize: 24
    }
})
```

No componente: 

```
import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (param) => {
    return (
        <Text style={Estilo.fonteGrande}> 
            Testanto o estilo
        </Text>
    )
}
```

# Componente com Propriedades

No React, podemos passar pra uma função propriedades que são como parâmetros em uma função do python. A diferença é que pode-se passar vários valores em uma propriedade. veja no exemplo:

Componente:

```
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
```

Chamando o componente:

```
export default () => (
    <View style={style.App}>
        <MinMax min="1" max="10"/>
    </View>
)
```

OBS: Propriedades são somente leitura!

# React Fragment

Não é possível carregar mais de um elemento fora de uma View. Quando necessitamos fazer isso usamos o Fragment. EX:

```
export default props => (
    <React.Fragment>
        <Text style={Estilo.fonteGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
// Também podemos usar o <></> para fragmentar
```

# Criando Componente com Estado (useState)

Para salvar o estado de um componente e fazê-lo ser atualizado na nossa aplicação, usamos a função `useState` (que é um tipo de `hook`). Por exemplo: Se queremos incrementar um valor a um determinado número, este valor será alterado mas não será atualizado na tela. O framework deve detectar quando há uma alteração em uma variável para atualizar seu valor na aplicação. Isso é feito pelo `useState`.




