// ==========================================================
// SCHEMA: proficiencies (GET /api/2014/proficiencies)
// ==========================================================
// Proficiências (perícias, armas, ferramentas, testes de resistência).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const ProficiencySummarySchema = ApiReferenceSchema;
export type ProficiencySummary = z.infer<typeof ProficiencySummarySchema>;

export const ProficiencySchema = z.object({
  index: z.string(),
  type: z.string(),
  name: z.string(),
  classes: z.array(ApiReferenceSchema),
  races: z.array(ApiReferenceSchema),
  reference: ApiReferenceSchema.optional(),
  url: z.string(),
  updated_at: z.string(),
});
export type Proficiency = z.infer<typeof ProficiencySchema>;

export async function getProficiencyList(): Promise<ProficiencySummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/proficiencies");
  return ProficiencySummarySchema.array().parse(data.results);
}

export async function getProficiencyByIndex(index: string): Promise<Proficiency> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/proficiencies/${index}`);
  return ProficiencySchema.parse(data);
}
