// ==========================================================
// SCHEMA: subclasses (GET /api/2014/subclasses)
// ==========================================================
// Subclasses (ex: Berserker, do Bárbaro). "spells" veio vazio no exemplo
// (berserker não é conjurador) — shape interno não confirmado pra
// subclasses conjuradoras, ver ressalva no relatório final.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const SubclassSummarySchema = ApiReferenceSchema;
export type SubclassSummary = z.infer<typeof SubclassSummarySchema>;

export const SubclassSchema = z.object({
  index: z.string(),
  class: ApiReferenceSchema,
  name: z.string(),
  subclass_flavor: z.string(),
  desc: z.array(z.string()),
  // URL de outro endpoint (lista de níveis da subclasse), não um array.
  subclass_levels: z.string(),
  spells: z.array(z.unknown()),
  url: z.string(),
  updated_at: z.string(),
});
export type Subclass = z.infer<typeof SubclassSchema>;

export async function getSubclassList(): Promise<SubclassSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/subclasses");
  return SubclassSummarySchema.array().parse(data.results);
}

export async function getSubclassByIndex(index: string): Promise<Subclass> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/subclasses/${index}`);
  return SubclassSchema.parse(data);
}
