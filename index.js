import express from "express";
import mongoose from "mongoose";

import Livro from "./models/Livro.js";

const app = express();
const PORT = 3001;

// Middleware para ler JSON
app.use(express.json());

// Listando os Livros
app.get("/livro", async (req, res) => {
  const Livros = await Livro.find();

  return res.status(200).json(Livros);
});

// Adição de Livro ao banco de dados (MongoDB)
app.post("/livro", async (req, res) => {
  const livro = req.body;

  const newLivro = await Livro.create(livro);

  return res.status(201).json(newLivro);
});

mongoose
  .connect("mongodb+srv://soler:mongodb020480@biblioteca.dqqv8lv.mongodb.net/")
  .then(() => console.log("Conectado ao Banco de dados"))
  .catch(() => "Não foi possivel se conectar a API");

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
