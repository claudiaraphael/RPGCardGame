// ==========================================================
// CONEXÃO SQLITE
// ==========================================================
// better-sqlite3 é síncrono (sem Promise/await): cada chamada bloqueia até
// terminar, o que é adequado aqui porque não bate em rede — é leitura/escrita
// de um arquivo local. Isso é diferente das funções de entidades-dnd/schemas/,
// que são assíncronas porque fazem requisição HTTP pra D&D API (ver
// src/routes/index.ts pra essa distinção).
//
// Esse arquivo só abre a conexão e garante que o modo certo está ligado.
// As tabelas (CREATE TABLE) ficam em db/schema.ts, seguindo os estados do
// jogo desenhados em S1 do to-do/todo.md — não são definidas aqui.

import path from "path";
import Database from "better-sqlite3";

// Arquivo físico do banco, fora de qualquer pasta versionada de código-fonte.
// Não é commitado (ver .gitignore) — cada ambiente (sua máquina, o Docker do
// vídeo) gera o próprio arquivo a partir do schema + seed.
const DB_PATH = path.join(__dirname, "..", "database.sqlite");

export const db = new Database(DB_PATH);

// WAL melhora concorrência de leitura/escrita; é o modo recomendado pelo
// próprio better-sqlite3 pra uso normal (não só testes).
db.pragma("journal_mode = WAL");

// Trava erros de integridade referencial cedo (ex: apagar um personagem que
// ainda tem cartas na mão) em vez de deixar o banco ficar inconsistente.
db.pragma("foreign_keys = ON");
