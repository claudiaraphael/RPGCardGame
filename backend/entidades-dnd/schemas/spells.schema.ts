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

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema, DcSchema } from "./shared.schema";

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
  dc: DcSchema.optional(),
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
