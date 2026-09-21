// ==========================================================
// TABELA DE CACHE DA D&D API
// ==========================================================
// Isto NÃO é dado de jogo (personagem, deck, carta, mão, combate — isso
// é modelagem original, feita pela autora a partir dos estados de S1 do
// to-do/todo.md). É só um espelho local das 24 entidades da D&D API, pra
// não bater na rede a cada requisição — a mesma distinção que o próprio
// to-do/todo.md já fazia ("o que é cache da API externa e o que é dado
// próprio", nota de S3/S4).
//
// Uma linha por item de qualquer entidade (spell, monster, class...), com
// o JSON já validado pelo schema Zod correspondente guardado como texto.
// Uma tabela por entidade seria 24 tabelas idênticas na estrutura (só o
// formato do JSON interno muda) — igual ao raciocínio já usado nas rotas
// (src/routes/entityRouter.ts).

import { db } from "./connection";

db.exec(`
  CREATE TABLE IF NOT EXISTS dnd_cache (
    entity_type TEXT NOT NULL,
    idx TEXT NOT NULL,
    data TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (entity_type, idx)
  );
`);
