import mongoose from "mongoose";

// Define o schema do livro
const livroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Cria o modelo Livro baseado no schema
export default mongoose.model("Livros", livroSchema);
