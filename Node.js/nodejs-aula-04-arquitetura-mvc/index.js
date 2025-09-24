//Importando o express (framework)
//const express = require("express"); CommonJS Modules

import express from "express"; // ES6 Modules

//Iniciando o Express na variável 'app'
const app = express();

//Importando os Controllers (onde estão as rotas e onde é tratador as requisições)
import ClientesController from "./controllers/ClientesController.js";
// import PedidosController from "./controllers/PedidosController.js";
// import ProdutosController from "./controllers/ProdutosContoller.js";

//Configurando o EJS
app.set("view engine", "ejs");

//Definindo a pasta public para arquivos estáticos
app.use(express.static("public"));

//Definindo o uso das rotas que estão nos controllers
app.use("/", ClientesController);
// app.use("/", PedidosController);  
// app.use("/", ProdutosController);

//Criando a primeira rota do site (Rota principal)
//Req trata a requisição
//Res trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});
//Rota de Produtos
app.get("/produtos", (req, res) => {
  const produtos = [
    {
      nome: "Celular",
      preco: 3000,
    },
    {
      nome: "Computador",
      preco: 4000,
    },
    {
      nome: "Tablet",
      preco: 2000,
    },
    {
      nome: "Notebook",
      preco: 3800,
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

app.get("/pedidos", (req, res) => {
  const pedidos = [
    {
      numero: 1,
      clientePedido: "Fulano",
      algumacoisaPedido: "O pedido é legal",
    },
    {
      numero: 20,
      clientePedido: "Sicrano",
      algumacoisaPedido: "Me arrependi desse pedido",
    },
    {
      numero: 6345,
      clientePedido: "Test",
      algumacoisaPedido: "Gostei desse pedido",
    },
    {
      numero: 3425,
      clientePedido: "Testador de testes",
      algumacoisaPedido: "O pedido não chegou ainda",
    },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

//Rota de Perfil
// :user é parâmetro da rota (Obrigatório)
// :user? é um parâmetro (Opcional)
app.get("/perfil/:user", (req, res) => {
  const user = req.params.user;

  res.render("perfil", {
    //Enviando variáveis para a página EJS(HTML)
    user: user,
  });
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
