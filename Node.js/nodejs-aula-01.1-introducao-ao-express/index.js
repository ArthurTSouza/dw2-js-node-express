//Importando o express (framework)
const express = require("express");
//Iniciando o Express na variável 'app'
const app = express();

//Configurando o EJS
app.set("view engine", "ejs");

//Criando a primeira rota do site (Rota principal)
//Req trata a requisição
//Res trata a resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello Word! Bem-vindo ao meu primeiro site com Node.js e Express!</h1>"
  );
});
//Rota de Produtos
app.get("/produtos", (req, res) => {
  res.send("<h1>Bem-vindo a página de Produtos!</h1>");
});
//Rota de Clientes
app.get("/clientes", (req, res) => {
  res.send("<h1>Bem-vindo a página de clientes!</h1>");
});
//Rota de Perfil
app.get("/perfil", (req, res) => {
  res.send("perfil");
});

//Iniciando o servidor HTTP
const port = 8080; //O servidor escutará a porta 8080

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
