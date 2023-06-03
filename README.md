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
Também tive que abrir o projeto criado dentro do android Studio para ele baixar as dependências.


Solução: Tive que setar o proxy no Android Studio: File > Settings > System Settings > HTTP Proxy 


# Criando um novo projeto

Para criar um novo projeto rode o comando: `npx react-native init nome-do-projeto` (leva alguns minutos)

Em seguida entre na pasta do projeto e digite: `npx react-native run-android`

O deploy da aplicação será feito dentro do emulador do android studio. Você pode abrir a pasta do projeto no vscodea alterar o texto do arquivo App.tsx para testar o ambiente.