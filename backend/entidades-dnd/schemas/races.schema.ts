// ==========================================================
// SCHEMA: races (GET /api/2014/races)
// ==========================================================
// As 9 raças jogáveis (Draconato, Anão, Elfo, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { AbilityBonusSchema, ApiReferenceSchema } from "./shared.schema";

export const RaceSummarySchema = ApiReferenceSchema;
export type RaceSummary = z.infer<typeof RaceSummarySchema>;

export const RaceSchema = z.object({
  index: z.string(),
  name: z.string(),
  speed: z.number(),
  ability_bonuses: z.array(AbilityBonusSchema),
  alignment: z.string(),
  age: z.string(),
  size: z.string(),
  size_description: z.string(),
  languages: z.array(ApiReferenceSchema),
  language_desc: z.string(),
  traits: z.array(ApiReferenceSchema),
  subraces: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Race = z.infer<typeof RaceSchema>;

export async function getRaceList(): Promise<RaceSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/races");
  return RaceSummarySchema.array().parse(data.results);
}

export async function getRaceByIndex(index: string): Promise<Race> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/races/${index}`);
  return RaceSchema.parse(data);
}
