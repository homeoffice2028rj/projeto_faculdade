const express = require("express");

const router = express.Router();

const {
    listarProdutos
} = require("../controllers/produtoController");

router.get("/", listarProdutos);

module.exports = router;