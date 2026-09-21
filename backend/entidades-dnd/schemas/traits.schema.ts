// ==========================================================
// SCHEMA: traits (GET /api/2014/traits)
// ==========================================================
// Traços raciais (ex: Conhecimento de Artífice). Alguns traços (ex: High
// Elf Cantrip) têm um campo "trait_specific" com opções de sub-escolha que
// não aparece no exemplo capturado — não modelado, ver ressalva no
// relatório final.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const TraitSummarySchema = ApiReferenceSchema;
export type TraitSummary = z.infer<typeof TraitSummarySchema>;

export const TraitSchema = z.object({
  index: z.string(),
  name: z.string(),
  races: z.array(ApiReferenceSchema),
  subraces: z.array(ApiReferenceSchema),
  desc: z.array(z.string()),
  proficiencies: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Trait = z.infer<typeof TraitSchema>;

export async function getTraitList(): Promise<TraitSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/traits");
  return TraitSummarySchema.array().parse(data.results);
}

export async function getTraitByIndex(index: string): Promise<Trait> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/traits/${index}`);
  return TraitSchema.parse(data);
}
