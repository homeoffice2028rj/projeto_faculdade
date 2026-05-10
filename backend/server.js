require("dotenv").config();

const express =
    require("express");

const cors =
    require("cors");

const mongoose =
    require("mongoose");


// APP

const app = express();


// MIDDLEWARES

app.use(cors());

app.use(express.json());


// ROTAS

const produtoRoutes =
    require("./routes/produtoRoutes");


app.use(
   "/api/produtos",
   produtoRoutes
);


// MONGODB

mongoose.connect(
   process.env.MONGO_URI
)

.then(() => {

   console.log(
      "MongoDB conectado"
   );

})

.catch((err) => {

   console.log(err);

});


// SERVIDOR

app.listen(3000, () => {

   console.log(
      "Servidor rodando"
   );

});