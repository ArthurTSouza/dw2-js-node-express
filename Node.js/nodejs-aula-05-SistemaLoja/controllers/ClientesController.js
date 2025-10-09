import express from "express";
const router = express.Router();
//Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //Select * from clientes
  Cliente.findAll()
    .then((clientes) => {
      //then => Promessa bem sucedida
      res.render("clientes", {
        clientes: clientes,
      });
    })
    //catch => Falha na resolução da promessa
    .catch((error) => {
      console.log(error);
    });
});

router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    //Coluna: dado do Form
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((erro) => {
      console.log(error);
    });
});

router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  //Buscando o cliente pela ID
  // findByPk() -> Busca um registro pela chave primária
  Cliente.findByPk(id).then(cliente => {
    res.render("clientesEdit", {
      cliente: cliente,
    });
  });
});

export default router;
