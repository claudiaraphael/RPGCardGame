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

// todo: que nome ruim pra esta funcao. nao da nem pra entender o q ela faz.
// todo: "upsert" = update + insert. Esse SQL faz os dois num comando só:
// se (entity_type, idx) já existe, faz UPDATE (a cláusula ON CONFLICT ...
// DO UPDATE); se não existe, faz INSERT normal. "Stmt" é abreviação de
// "statement" (comando SQL preparado — o db.prepare() compila o SQL uma
// vez só e essa constante guarda o "molde" pronto pra rodar várias vezes
// com .run(), sem recompilar o SQL a cada item da lista). Um nome mais
// direto seria upsertDndCacheItem ou salvarNoCache.
const upsertStmt = db.prepare(
  "INSERT INTO dnd_cache (entity_type, idx, data, updated_at) VALUES (?, ?, ?, datetime('now')) " +
    "ON CONFLICT(entity_type, idx) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at"
);

// Retry simples: a D&D API é pública e às vezes falha por rede/timeout
// transitório, não por erro do nosso lado — vale tentar de novo antes de
// desistir do item. Paginação não é necessária aqui: cada endpoint de
// lista da D&D API já devolve todos os itens de uma vez (sem cursor/página).
// todo: explicar essas duas abundantes promessas aqui na mesma funcao. o q e o <T>?
// todo: as "duas promessas": `fn` é uma função que, quando chamada, devolve
// uma Promise<T> (ex: passar `getSpellList` sem os parênteses — não é
// getSpellList(), é a própria função, pra withRetry poder chamar ela de
// novo a cada tentativa). O retorno de withRetry também é Promise<T>,
// porque ela só repassa (via `return await fn()`) o que `fn` devolveria
// de qualquer forma se desse certo na primeira tentativa.
// O `<T>` é um generic: um "tipo variável". Em vez de escrever essa função
// uma vez pra Promise<Spell[]> e outra pra Promise<Monster>, o `<T>` deixa
// TypeScript inferir o tipo real a partir de quem chama — em
// `withRetry(getList)` (linha 48), T vira TSummary[]; em
// `withRetry(() => getByIndex(summary.index))` (linha 54), T vira TItem.
// Sem generics, ou duplicava a função por tipo, ou usava `any` e perdia a
// checagem de tipo em quem consome o retorno.
export async function withRetry<T>(fn: () => Promise<T>, tentativas = 3): Promise<T> {
  let ultimoErro: any;
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

//todo: TSummary?
// todo: TSummary é o tipo do item "resumido" que vem da função de lista
// (getXList) — ex: em spells, cada item da lista é só `{index, name, url}`,
// não a spell inteira. TItem é o tipo do item completo que vem de
// getByIndex (ex: a spell inteira, com todos os campos). São tipos
// diferentes de propósito: a lista é leve (resumo pra listar), o
// getByIndex é pesado (dado completo pra gravar no cache).
// O `extends { index: string }` (na linha de baixo) é uma restrição: só
// aceita como TSummary um tipo que tenha pelo menos um campo `index`
// string — é esse campo que o loop usa (`summary.index`, linha 52-54) pra
// saber qual item buscar em getByIndex. Sem essa restrição, TypeScript não
// deixaria acessar `summary.index` dentro da função, porque não teria
// garantia de que esse campo existe pra um T qualquer.
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
