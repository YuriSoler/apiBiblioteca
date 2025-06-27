import Livro from "../models/Livro.js";

// Função para listar Livros
async function getLivros(req, res) {
  const Livros = await Livro.find();

  return res.status(200).json(Livros);
}

// Função para Adicionar "Livros" no banco de dados
async function createLivros(req, res) {
  const livro = req.body;

  const newLivro = await Livro.create(livro);

  return res.status(201).json(newLivro);
}

export { getLivros, createLivros };
