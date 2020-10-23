## 📖 Happy  
O projeto foi desenvolvido na **[Next Level Week](https://nextlevelweek.com/)**,evento que ocorreu durante os dias 12  a 18  de Outubro de 2020, ministrado pela **[@Rocketseat](https://github.com/Rocketseat)**. O Intuito do projeto é desenvolver uma aplicação para unir grupos de pessoas com interesse em efetuar visitações a orfanatos. Será possível cadastrar os orfanatos da sua cidade, além de pesquisar os que existem na região e obter alguns detalhes sobre o mesmo.

## 📋 Índice
- [🖥 Preview](#-preview)
- [🚀 Tecnologias utilizadas](#-tecnologias)
- [⌨ Como executar o projeto](#-executando-o-projeto)

---

## 🖥 Preview
### Página inicial
<p align="center">
  <img src="https://imgur.com/Ckzod1Q.png" width="700" >
</p>

### Localização da região
<p align="center">
  <img src="https://imgur.com/1lCy4tI.png" width="700" >
</p>

### Informações sobre o orfanato
<p align="center">
  <img src="https://imgur.com/B1EMkxo.png" width="700" >
</p>

---
## 🚀 Tecnologias 

- **Web**
  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Open Street Map](https://www.openstreetmap.org/) ou [Mapbox](https://www.mapbox.com/) 

- **Backend**
  - [Nodejs](https://nodejs.org/en/)
  - [Express](https://expressjs.com/) 
  - [Typeorm](https://typeorm.io/)
  - [Multer](https://github.com/expressjs/multer)
  - [Yup](https://github.com/jquense/yup)

- **Mobile**
  - [Expo](https://expo.io/)
  - [React Native](https://reactnative.dev/)
  - [Axios](https://github.com/axios/axios)
---
## ⌨ Executando o Projeto

Este repositório é um monorepo, onde vamos ter o código do backend,frontend e do app mobile, portanto, cada um terá suas próprias dependências que
devem ser baixadas individualmente.

Baixe o projeto:
```bash
  git clone https://github.com/igorishere/NLW-3.git
```

<details>
<summary>Server</summary>

#### Entre no diretório e baixe as dependências

```bash
  cd backend\web 
   yarn install ou npm install
```
#### Caso seja a primeira execução do backend, execute as migrations para atualizar o banco de dados:
```bash
  yarn typeorm migration:run
  # ou
  npm typeorm migration:run
```
#### Procure o arquiv **.env.exemple**, faça uma cópia e renomeie para **.env**, depois edite ele e coloque o IP da sua máquina
```bash
   # SERVER HOST

   SERVER_HOST = http://{seu Ip aqui}:3333
   
   # ex.: SERVER_HOST = http://192.168.0.1:3333
```

#### Feito isso, para subir o servidor execute:
```bash
  yarn start
  # ou
  npm start
``` 
</details> 

<br />

<details>
<summary>Web</summary>

Para rodar o frontend na versão Web:

#### Entre no diretório
```bash
  cd frontend\web 
```
#### Baixe todas as dependências do projeto: 
```bash 
  yarn install ou npm install 
```
#### Procure o arquivo **.env.exemple**, faça uma cópia e renomeie para **.env**, depois edite ele e coloque o endereço do servidor criado antes
```bash
  # API
  
  REACT_APP_API_HOST = http://{ip do servidor}:3333
  
  ex.: REACT_APP_API_HOST = http://192.168.0.1:3333
```
#### Execute a aplicação
```bash
  yarn start 
  # ou 
  npm start
```

</details>

<br />

<details>
<summary>Mobile</summary>

Para rodar o app Mobile da aplicação:

#### Entre no diretório
```bash
  cd frontend\mobile 
```
#### Baixe todas as dependências do projeto: 
```bash 
  yarn install ou npm install 
```
#### Procure o arquivo **.env.exemple**, faça uma cópia e renomeie para **.env**, depois edite ele e coloque o endereço do servidor criado antes
```bash
  # API

  API_HOST = http://{IP do servidor aqui}:3333
  
  ex.: API_HOST = http://192.168.0.1:3333
```
#### Execute a aplicação
```bash
  yarn start 
  # ou 
  npm start
```
#### Baixe o aplicativo do [Expo](https://expo.io/) no seu celular e escaneie o QRcode que será apresentado no servidor para rodar o app no dispositivo
- Expo para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US)
- Expo para [IOS](https://apps.apple.com/br/app/expo-client/id982107779) 

</details>
