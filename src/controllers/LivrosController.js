import Livro from "../models/Livro.js";

// Função para listar TODOS os Livros
async function getLivros(req, res) {
  try {
    const Livros = await Livro.find();
    return res.status(200).json(Livros);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Função para pesquisar o livro pelo ID
async function getLivrosById(req, res) {
  const id = req.params.id;

  try {
    const livro = await Livro.findById(id);

    if (!livro) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }
    return res.status(200).json(livro);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Função para Adicionar "Livros" no banco de dados
async function createLivros(req, res) {
  const { title, author } = req.body;

  // Validação
  if (!title || !author) {
    return res
      .status(400)
      .json({ error: "Os campos 'title' e 'author' são obrigatórios." });
  }

  try {
    const newLivro = await Livro.create({ title, author });
    return res.status(201).json(newLivro);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Atualizar livro (ID)
async function attLivros(req, res) {
  const id = req.params.id;
  const { title, author } = req.body;

  if (!title || !author) {
    return res
      .status(400)
      .json({ error: "Os campos 'title' e 'author' são obrigatórios." });
  }

  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(
      id,
      { title, author },
      { new: true } // Retorna o livro atualizado
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

  try {
    const livroDeletado = await Livro.findByIdAndDelete(id);

    if (!livroDeletado) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    return res.status(200).json({ message: "Livro deletado com sucesso" }); // <-- faltava isso
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { getLivros, getLivrosById, createLivros, deleteLivros, attLivros };
