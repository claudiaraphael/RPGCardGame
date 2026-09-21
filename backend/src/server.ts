// ==========================================================
// SERVIDOR: só liga o Express na porta e loga que subiu
// ==========================================================

import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
