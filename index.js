import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect("mongodb+srv://soler:mongodb020480@biblioteca.dqqv8lv.mongodb.net/")
  .then(() => console.log("Conectado ao Banco de dados"))
  .catch(() => "Não foi possivel se conectar a API");

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
