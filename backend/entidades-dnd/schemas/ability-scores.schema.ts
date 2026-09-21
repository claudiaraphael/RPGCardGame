// ==========================================================
// SCHEMA: ability-scores (GET /api/2014/ability-scores)
// ==========================================================
// Os 6 atributos base (FOR, DES, CON, INT, SAB, CAR). Ver exemplo real em
// backend/.to-do/documentation/Mapa dos Dados de D&D5e.md#ability-scores.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const AbilityScoreSummarySchema = ApiReferenceSchema;
export type AbilityScoreSummary = z.infer<typeof AbilityScoreSummarySchema>;

export const AbilityScoreSchema = z.object({
  index: z.string(),
  name: z.string(),
  full_name: z.string(),
  desc: z.array(z.string()),
  skills: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type AbilityScore = z.infer<typeof AbilityScoreSchema>;

export async function getAbilityScoreList(): Promise<AbilityScoreSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/ability-scores");
  return AbilityScoreSummarySchema.array().parse(data.results);
}

export async function getAbilityScoreByIndex(index: string): Promise<AbilityScore> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/ability-scores/${index}`);
  return AbilityScoreSchema.parse(data);
}
