import { Router } from "express";

import { getLivros, createLivros } from "./controllers/LivrosController.js";

const routes = Router();

routes.get("/livro", getLivros);
routes.post("livro", createLivros);

export default routes;
