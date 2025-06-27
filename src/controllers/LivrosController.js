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

// Atualizar livro
async function attLivros(req, res) {
  const id = req.params.id;
  const dadosAtualizados = req.body;

  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(
      id,
      dadosAtualizados,
      {
        new: true, // Retorna o Livro atualizado
      }
    );

    if (!livroAtualizado) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    return res.status(200).json(livroAtualizado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteLivros(req, res) {
  const id = req.params.id;

  await Livro.findByIdAndDelete({ _id: id });

  return res.status(200).json({ res: "Livro deletado com sucesso" });
}

export { getLivros, createLivros, deleteLivros, attLivros };
