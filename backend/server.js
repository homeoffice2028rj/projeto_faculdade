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