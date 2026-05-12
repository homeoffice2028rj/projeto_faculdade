const express =
require("express");

const router =
express.Router();

const {

   cadastrarCliente,

   loginCliente

} = require(

   "../controllers/clienteController"

);


// CADASTRO

router.post(
   "/cadastro",
   cadastrarCliente
);


// LOGIN

router.post(
   "/login",
   loginCliente
);


module.exports =
router;