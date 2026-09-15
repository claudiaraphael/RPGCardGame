// ==========================================================
// SERVIDOR NODE.JS + TYPESCRIPT COM EXPRESS - EXEMPLO DE CRUD
// ==========================================================
// CRUD = Create, Read, Update, Delete (Criar, Ler, Atualizar, Apagar)
// Aqui praticamos isso com "cartas" (cards) do jogo, guardadas em um
// array na memória (ou seja: se reiniciar o servidor, os dados somem.
// Depois, quando você aprender bancos de dados, isso vira uma tabela
// de verdade).
//
// Este arquivo só liga o servidor; a configuração do Express (app.ts),
// as rotas, controllers, services e schemas vivem em pastas separadas
// por responsabilidade (ver backend/Documentation/architecture.md).

import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação em http://localhost:${PORT}/docs`);
});
