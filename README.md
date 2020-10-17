## 📖 Next Level Weel #3
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

- React.js
- Node.js 
- Typescript
---
## ⌨ Executando o Projeto

Este repositório é um **Monorepo**, portanto a versão Web, Mobile e o Backend da aplicação
estão em pastas separadas, e antes de serem executadas pela primeira vez precisam ter suas próprias dependências atualizadas.

Baixe o projeto na pasta de sua preferência
```bash
  git clone https://github.com/igorishere/NLW-3.git
``` 
<details>

<summary>Backend</summary>

```shell
#Entre no diretório

$ cd backend/

#Atualize as dependências do projeto com Yarn ou Npm

$ yarn install ou npm install

```

#### Na primeira execução do backend, será necessário executar *migrations* para atualizar o banco de dados:

```shell

$ yarn typeorm migration:run


```
#### Por final, execute a aplicação que vai estar disponível no endereço [http://localhost:3333](http://localhost:3333)

```shell

$ yarn start 
#ou 
$ npm start

```

</details>

<br/>

<details>
<summary>Web/Mobile</summary>

#### Para o frontend na versão Web e Mobile, os passos serão os mesmos

```shell

$ cd web/
#ou
$ cd mobile/

#Instalação das dependências

$ yarn install 
#ou 
$ npm install

```

#### E por último

```shell

$ yarn start
#ou
$ npm start

```

</details>

