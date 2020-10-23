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
Para executar o backend: 
```bash
  cd backend\web 
   yarn install ou npm install
```
Caso seja a primeira execução do backend, execute as migrations para atualizar o banco de dados:
```bash
  yarn typeorm migration:run 
```
Feito isso, para subir o servidor:
```bash
  yarn start ou npm start
Para rodar o frontend na versão Web:
```bash
  cd frontend\web
  yarn install ou npm install
  yarn start ou npm start
```
<details>
<summary>Server</summary>

#### Apenas execute

</details> 

<br />

<details>
<summary>Web</summary>

#### Apenas execute

</details>

<br />

<details>
<summary>Mobile</summary>

#### Apenas execute

</details>
