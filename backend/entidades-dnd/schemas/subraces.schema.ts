// ==========================================================
// SCHEMA: subraces (GET /api/2014/subraces)
// ==========================================================
// Sub-raças (ex: Alto Elfo, do Elfo).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { AbilityBonusSchema, ApiReferenceSchema } from "./shared.schema";

export const SubraceSummarySchema = ApiReferenceSchema;
export type SubraceSummary = z.infer<typeof SubraceSummarySchema>;

export const SubraceSchema = z.object({
  index: z.string(),
  name: z.string(),
  race: ApiReferenceSchema,
  desc: z.string(),
  ability_bonuses: z.array(AbilityBonusSchema),
  racial_traits: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Subrace = z.infer<typeof SubraceSchema>;

export async function getSubraceList(): Promise<SubraceSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/subraces");
  return SubraceSummarySchema.array().parse(data.results);
}

export async function getSubraceByIndex(index: string): Promise<Subrace> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/subraces/${index}`);
  return SubraceSchema.parse(data);
}
