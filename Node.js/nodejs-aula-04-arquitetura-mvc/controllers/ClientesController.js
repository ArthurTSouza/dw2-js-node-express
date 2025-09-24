//Importando o Express
import express from "express";
//Router() é o método responsável por gerencias as rotas da aplicação
const router = express.Router();

router.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Ricardo",
      cpf: "123.456.789-00",
      endereco: "Rua das Flores, 34",
    },
    {
      nome: "Isaac",
      cpf: "123.456.789-00",
      endereco: "Rua Diamante, 100",
    },
    {
      nome: "Ana Flávia",
      cpf: "123.456.789-00",
      endereco: "Rua Ceará, 20",
    },
    {
      nome: "Renan",
      cpf: "123.456.789-00",
      endereco: "Rua Curitiba, 22",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

//Exportando o objeto router
export default router;