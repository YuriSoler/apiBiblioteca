import { Router } from "express";

import {
  getLivros,
  createLivros,
  deleteLivros,
  attLivros,
  getLivrosById,
} from "./controllers/LivrosController.js";

const router = Router();

router.get("/livro", getLivros);
router.get("/livro/:id", getLivrosById);
router.post("/livro", createLivros);
router.put("/livro/:id", attLivros);
router.delete("/livro/:id", deleteLivros);

export default router;
