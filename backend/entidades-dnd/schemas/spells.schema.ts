// ==========================================================
// SCHEMA: spells (GET /api/2014/spells)
// ==========================================================
// Magias. O item de lista tem um campo extra ("level") além do trio
// padrão index/name/url — por isso não reaproveita ApiReferenceSchema.
//
// "heal_at_slot_level" foi confirmado num teste manual à parte (spell
// "cure-wounds", que cura) e não aparece no exemplo do Mapa ("acid-arrow",
// que causa dano) — por isso ficou opcional. Spells de dano têm um campo
// "damage" (com damage_at_slot_level) que NENHUM exemplo real confirmou
// ainda — não foi modelado, ver ressalva no relatório final.
//
// "dc" de spell NÃO é o DcSchema compartilhado (esse é o formato de
// monstro: dc_type/dc_value/success_type). Descoberto rodando o seed de
// verdade contra as 319 spells: "acid-splash" e outras 91 falhavam a
// validação porque o dc de spell só tem dc_type + dc_success (sem
// dc_value nenhum) — "acid-arrow", o exemplo usado originalmente, não
// tinha campo "dc" pra pegar essa diferença.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

const SpellDcSchema = z.object({
  dc_type: ApiReferenceSchema,
  dc_success: z.string(),
});

export const SpellSummarySchema = z.object({
  index: z.string(),
  name: z.string(),
  level: z.number(),
  url: z.string(),
});
export type SpellSummary = z.infer<typeof SpellSummarySchema>;

export const SpellSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  higher_level: z.array(z.string()).optional(),
  range: z.string(),
  components: z.array(z.string()),
  material: z.string().optional(),
  ritual: z.boolean(),
  duration: z.string(),
  concentration: z.boolean(),
  casting_time: z.string(),
  level: z.number(),
  attack_type: z.string().optional(),
  dc: SpellDcSchema.optional(),
  heal_at_slot_level: z.record(z.string(), z.string()).optional(),
  school: ApiReferenceSchema,
  classes: z.array(ApiReferenceSchema),
  subclasses: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Spell = z.infer<typeof SpellSchema>;

export async function getSpellList(): Promise<SpellSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/spells");
  return SpellSummarySchema.array().parse(data.results);
}

export async function getSpellByIndex(index: string): Promise<Spell> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/spells/${index}`);
  return SpellSchema.parse(data);
}
