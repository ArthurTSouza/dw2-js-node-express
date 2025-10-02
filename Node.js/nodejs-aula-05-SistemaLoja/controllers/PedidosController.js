import express from "express";
const router = express.Router();
//Importando o Model de Cliente
import Cliente from "../models/Pedido.js";

// ROTA pedidos
router.get("/pedidos", function (req, res) {
  //Select * from pedidos
  Cliente.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

export default router;
