<h1 align="center">Autistic Friends</h1>
<h2 title="Páginas">📌 Sobre</h2>
<p align="left">
Aplicação desenvolvida com a objeção de integrar pessoas com TEA(Síndrome do Espectro Autista) ao mundo digital, ao ingressarem na plataforma os usuários podem marcar seus compromissos de rotina, tarefas diárias e também suas consultas com neurologistas afim de ter um cronograma de acesso dinâmico.
Ela também poderá fazer postagens tornando o seus estilo de vida público a outros usuários pertencentes a esse nicho especifico de pessoas
</p>

<h4 align="center">
🚧 Em desenvolvimento 🚧
</h4>
<h2>Web Pages</h2>
<h4>Logon</h4>
<p align="left">
      <img src="./assets/logon.png" width="80%" alt="logon"/>
</p>
<h4>Register</h4>
<p align="left">
      <img src="./assets/register.png" width="80%" alt="register"/>
</p>
<h4>Dashboard</h4>
<p align="left">
      <img src="./assets/dashboard.png" width="80%" alt="dashboard"/>
</p>
<h4>Queries</h4>
<p align="left">
      <img src="./assets/queries.png" width="80%" alt="queries"/>
</p>
<h4>Tasks</h4>
<p align="left">
      <img src="./assets/tasks.png" width="80%" alt="tasks"/>
</p>
<h4>Add Querie</h4>
<p align="left">
      <img src="./assets/add-querie.png" width="80%" alt="add querie"/>
</p>
<h4>Add Task</h4>
<p align="left">
      <img src="./assets/add-task.png" width="80%" alt="add task"/>
</p>
<h4>Add Post</h4>
<p align="left">
      <img src="./assets/add-post.png" width="80%" alt="add post"/>
</p>
<br>
## 📋 Pré-requisitos
Para começar você vai precisar ter as seguintes ferramentas em sua máquina:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/). 
Também precisará de um editor para trabalhar com o código.

## ▶️ Rodando o projeto

``` bash
# Clone o repositório
$ git clone <https://github.com/Leandro2585/AutisticFriends>

# Acesse o diretório do projeto via terminal
$ cd AutisticFriends

# Vá até o diretório server
$ cd server

# Instale as dependências do projeto
$ yarn

# Acesse o seu MySql pelo terminal com o comando
$ mysql -u root -p

# Crie a base de dados digitando
$ create database amigos_do_autista;

# Saia do MySql
$ exit;

# Execute as migrations para criar as tabelas em sua base de dados
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O serviço ficará disponível na porta: 3333 - para acessá-la use: http://localhost:3333

# Agora abra outro terminal e acesse o diretório web
$ cd AutisticFriends/web

# Instale as dependências
$ yarn

# Execute a aplicação web
$ yarn start

# O serviço ficará disponível na porta: 3000 - para acessá-la use: <localhost:3000>

```
<br/>

## ⚙️ Funcionalidades

- [x] Cadastro de usuário;<br>
- [x] Login do usuário;<br>
- [x] Agendamento de tarefas;<br>
- [x] Agendamento de consultas;<br>
- [x] Adicionar postagem(foto e comentário);<br>
- [x] Listagem dos posts;<br>
- [x] Listagem das tarefas;<br>
- [x] Listagem das consultas;<br>

## 💡 Tecnologias
As ferramentas utilizadas no desenvolvimento desse projeto foram:
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

 <br/> Entre em contato comigo:<br/> [![Linkedin Badge](https://img.shields.io/badge/-LeandroReal-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leandro-r-434b811a5/)](https://www.linkedin.com/in/leandro-r-434b811a5/)
|
[![Gmail Badge](https://img.shields.io/badge/-leo.real2585@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leo.real2585@gmail.com)](mailto:leo.real2585@gmail.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
