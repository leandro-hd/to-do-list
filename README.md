<h1 align="center"> To Do List </h1>

<p align="center">
  <a href="#status">Status</a> 🚢 
  <a href="#features">Features</a> 🚢 
  <a href="#results">Resultado</a> 🚢 
  <a href="#execute">Como Executar</a> 🚢 
  <a href="#tecnologys">Tecnologias</a> 🚢 
  <a href="#author">Autor</a> 🚢 
  <a href="#license">Licença</a>
</p>

<br/>

<p align="center">
  <img src="https://github.com/leandro-hd/to-do-list/blob/master/assets/To%20Do%20List.png" alt="VSCode e Docker" width="720px"/>
</p>

<br/>

<p align="center"> Uma aplicação To Do List construída em Node.js e MongoDB, utilizando o Bootstrap na interface, com um ambiente em Docker e Docker Compose. </p>

<p align="center">
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/> &nbsp;
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn"/>
</p>

<br/>

<h2 id="status"> 📋 Status do Projeto </h2>

<p> ✔️ Concluído </p>

<br/>

<h2 id="features"> 📌 Funcionalidades </h2>

<p>
  🚢 Registrar novos usuários e tarefas; <br/> <br/>
  🚢 Pesquisar tarefas por usuário; <br/> <br/>
  🚢 Adicionar e renomear tarefas; <br/> <br/>
  🚢 Apagar uma ou todas as tarefas; <br/>
</p>

<br/>

<h2 id="results"> 🗺️ Resultado Final </h2>

<p align="center">
  <img src="https://media-exp1.licdn.com/dms/image/C4E22AQGvS-bvWtalSA/feedshare-shrink_1280/0/1620164276467?e=1623888000&v=beta&t=bDxyiEHLrcgVCG1tdXuuddxJbGuqnfrv09oVUHsLVBY" alt="Interface Bootstrap"/>
</p>

<br/>

<h2 id="execute"> 🕹️ Como Executar </h2>

<h3> ⚠️ Pré-requisitos </h3>

<p> Antes de começar, é importante que você tenha instalado as seguintes ferramentas: <br/> <br/>
  🛢️ Editor de código (não é obrigatório, mas facilitará o desenvolvimento); <br/> <br/>
  🛢️ Gerenciador de pacotes (neste projeto foi utilizado o Yarn); <br/> <br/>
  🛢️ Docker e Docker Compose;  
</p>

<br/>

<h3> ▶️ Rodando o servidor </h3>

<pre>
  <code>Clone este repositório
  $ git clone https://github.com/leandro-hd/to-do-list.git

  Acesse a pasta do projeto no terminal/cmd
  $ cd to-do-list

  Instale as dependências
  $ yarn install

  Suba o container ao Docker
  $ make up

  O container do servidor inciará na porta:8080 - acesse http://localhost:8080</code>
</pre>

<br/>

<h3> 🚨 Importante </h3>

<p> Na raíz do projeto, crie um arquivo .env e inclua as seguintes variáveis de ambiente: <br/> <br/>
  🔵 DB_NAME = databaseName <br/> <br/>
  🔵 DB_USER = username <br/> <br/>
  🔵 DB_PASSWORD = password <br/> <br/>
  🔵 DB_HOST = hostName
</p>

<br/>

<h2 id="tecnologys"> ⚒️ Tecnologias Utilizadas </h2>

<p> Para a construção do projeto, as ferramentas utilizadas foram: <br/> <br/>
  👉 JavaScript; <br/> <br/>
  👉 TypeScript; <br/> <br/>
  👉 Node.js; <br/> <br/>
  👉 Express.js; <br/> <br/>
  👉 MongoDB; <br/> <br/>
  👉 Bootstrap; <br/> <br/>
  👉 Docker / Docker Compose;
</p>

<br/>

<h2 id="author"> ✅ Autor </h2>

<p> Feito por <strong>Leandro Dias</strong>. <br/> <br/>
  <a href="https://www.linkedin.com/in/leandro-hd/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  &nbsp;
  <a href="https://www.github.com/leandro-hd/">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leandrohg2003@gmail.com" alt="Gmail"/>
</p>

<br/>

<h2 id="license"> 🏷️ Licença </h2>

<p> Esse projeto está sob a <strong>Licença MIT</strong>. Veja o arquivo <a href="https://github.com/leandro-hd/to-do-list/blob/master/LICENSE">LICENSE</a> para mais detalhes.
