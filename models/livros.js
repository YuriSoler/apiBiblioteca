import mongoose from "mongoose";

// Definindo o schema do livro
const livrosSchema = new mongoose.Schema({
  title: String,
  author: String,
});

// Criando o modelo Livro baseado no schema
const Livro = mongoose.model("Livro", livrosSchema);

export default Livro;
