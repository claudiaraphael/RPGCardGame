// ==========================================================
// REPOSITÓRIO: personagens (SQLite)
// ==========================================================
// Mesmo padrão de auth/userRepository.ts: CREATE TABLE aqui mesmo (só
// roda de verdade na primeira vez, por causa do IF NOT EXISTS) e um
// objeto com as operações de CRUD em cima de better-sqlite3 (síncrono,
// ver comentário de db/connection.ts pro porquê disso não ser problema).
//
// Tabela nova, separada de dnd_cache (que é só espelho da API externa,
// não dado de jogo — ver db/schema.ts). "user_id" amarra cada personagem
// a um usuário autenticado, então um usuário só vê/edita os próprios.

import { randomUUID } from "node:crypto";
import { db } from "../db/connection";
import type { PersonagemInput, PersonagemUpdateInput } from "./personagemSchema";

export interface Personagem {
  id: string;
  userId: string;
  nome: string;
  raca: string;
  classe: string;
  nivel: number;
  hp: number;
  mp: number;
  createdAt: string;
  updatedAt: string;
}

type PersonagemRow = {
  id: string;
  user_id: string;
  nome: string;
  raca: string;
  classe: string;
  nivel: number;
  hp: number;
  mp: number;
  created_at: string;
  updated_at: string;
};

function mapRowToPersonagem(row: PersonagemRow): Personagem {
  return {
    id: row.id,
    userId: row.user_id,
    nome: row.nome,
    raca: row.raca,
    classe: row.classe,
    nivel: row.nivel,
    hp: row.hp,
    mp: row.mp,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

db.exec(`
  CREATE TABLE IF NOT EXISTS personagens (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id),
    nome TEXT NOT NULL,
    raca TEXT NOT NULL,
    classe TEXT NOT NULL,
    nivel INTEGER NOT NULL,
    hp INTEGER NOT NULL,
    mp INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

export const personagemRepository = {
  findAllByUser(userId: string): Personagem[] {
    const rows = db
      .prepare(`
        SELECT *
        FROM personagens
        WHERE user_id = ?
        ORDER BY created_at DESC
      `)
      .all(userId) as PersonagemRow[];

    return rows.map(mapRowToPersonagem);
  },

  findById(id: string): Personagem | null {
    const row = db
      .prepare(`
        SELECT *
        FROM personagens
        WHERE id = ?
      `)
      .get(id) as PersonagemRow | undefined;

    return row ? mapRowToPersonagem(row) : null;
  },

  create(userId: string, input: PersonagemInput): Personagem {
    const id = randomUUID();
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO personagens (
        id, user_id, nome, raca, classe, nivel, hp, mp, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      userId,
      input.nome,
      input.raca,
      input.classe,
      input.nivel,
      input.hp,
      input.mp,
      now,
      now,
    );

    const created = this.findById(id);

    if (!created) {
      throw new Error("Failed to create personagem");
    }

    return created;
  },

  update(id: string, input: PersonagemUpdateInput): Personagem | null {
    const existing = this.findById(id);

    if (!existing) {
      return null;
    }

    const nextNome = input.nome ?? existing.nome;
    const nextRaca = input.raca ?? existing.raca;
    const nextClasse = input.classe ?? existing.classe;
    const nextNivel = input.nivel ?? existing.nivel;
    const nextHp = input.hp ?? existing.hp;
    const nextMp = input.mp ?? existing.mp;

    const now = new Date().toISOString();

    db.prepare(`
      UPDATE personagens
      SET nome = ?, raca = ?, classe = ?, nivel = ?, hp = ?, mp = ?, updated_at = ?
      WHERE id = ?
    `).run(nextNome, nextRaca, nextClasse, nextNivel, nextHp, nextMp, now, id);

    return this.findById(id);
  },

  delete(id: string): boolean {
    const result = db
      .prepare(`
        DELETE FROM personagens
        WHERE id = ?
      `)
      .run(id);

    return result.changes > 0;
  },
};
