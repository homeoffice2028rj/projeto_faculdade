const express = require("express");

const router = express.Router();

const {
  listarPedidos,
  criarPedido
} = require("../controllers/pedidoController");

router.get("/", listarPedidos);

router.post("/", criarPedido);

module.exports = router;