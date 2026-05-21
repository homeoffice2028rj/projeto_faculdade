<<<<<<< HEAD
require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("Servidor funcionando");

});

app.listen(process.env.PORT || 3000, () => {

    console.log("Servidor rodando");

});
=======
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtosRoutes = require("./routes/produtos");

app.use("/produtos", produtosRoutes);

app.get("/", (req, res) => {
    res.send("Servidor da Lanchonete funcionando!");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
>>>>>>> 77bff52 (fix css)
