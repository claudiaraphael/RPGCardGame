// ==========================================================
// SEED: popula dnd_cache a partir da D&D API
// ==========================================================
// Script avulso (não faz parte do servidor — roda com
// `npx ts-node db/seedDndCache.ts`), no mesmo espírito de backend/seed.ts:
// executa uma vez, popula o banco, termina.
//
// seedEntity é genérica porque as 24 entidades em entidades-dnd/schemas/
// seguem o mesmo par de funções (getXList/getXByIndex) — mesmo raciocínio
// de src/routes/entityRouter.ts, aplicado aqui pro seed em vez das rotas.
// Cada função já valida com Zod antes de devolver (é o schema de cada
// entidade que faz isso, não este arquivo).

import "./schema";
import { db } from "./connection";

const upsertStmt = db.prepare(
  "INSERT INTO dnd_cache (entity_type, idx, data, updated_at) VALUES (?, ?, ?, datetime('now')) " +
    "ON CONFLICT(entity_type, idx) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at"
);

// Retry simples: a D&D API é pública e às vezes falha por rede/timeout
// transitório, não por erro do nosso lado — vale tentar de novo antes de
// desistir do item. Paginação não é necessária aqui: cada endpoint de
// lista da D&D API já devolve todos os itens de uma vez (sem cursor/página).
export async function withRetry<T>(fn: () => Promise<T>, tentativas = 3): Promise<T> {
  let ultimoErro: unknown;
  for (let i = 1; i <= tentativas; i++) {
    try {
      return await fn();
    } catch (err) {
      ultimoErro = err;
      console.warn(`  tentativa ${i}/${tentativas} falhou:`, (err as Error).message);
    }
  }
  throw ultimoErro;
}

export async function seedEntity<TSummary extends { index: string }, TItem>(
  entityType: string,
  getList: () => Promise<TSummary[]>,
  getByIndex: (index: string) => Promise<TItem>
): Promise<void> {
  console.log(`[${entityType}] buscando lista...`);
  const list = await withRetry(getList);
  console.log(`[${entityType}] ${list.length} itens — buscando cada um...`);

  let ok = 0;
  for (const summary of list) {
    try {
      const item = await withRetry(() => getByIndex(summary.index));
      upsertStmt.run(entityType, summary.index, JSON.stringify(item));
      ok++;
    } catch (err) {
      console.error(`[${entityType}] falhou "${summary.index}" após retries:`, (err as Error).message);
    }
  }
  console.log(`[${entityType}] gravados ${ok}/${list.length} no dnd_cache.`);
}
