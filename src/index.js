import express from "express";

import conexaoDB from "./database/db.js";
import router from "./router.js";

const app = express();
const PORT = 3001;

// Middleware para ler JSON
app.use(express.json());
app.use("/", router);

conexaoDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
  })
  .catch((error) => error);
