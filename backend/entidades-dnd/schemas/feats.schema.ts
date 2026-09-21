// ==========================================================
// SCHEMA: feats (GET /api/2014/feats)
// ==========================================================
// Talentos (ex: Agarrador). Só existe 1 no ruleset 2014 (Grappler).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { AbilityScorePrerequisiteSchema, ApiReferenceSchema } from "./shared.schema";

export const FeatSummarySchema = ApiReferenceSchema;
export type FeatSummary = z.infer<typeof FeatSummarySchema>;

export const FeatSchema = z.object({
  index: z.string(),
  name: z.string(),
  prerequisites: z.array(AbilityScorePrerequisiteSchema),
  desc: z.array(z.string()),
  url: z.string(),
  updated_at: z.string(),
});
export type Feat = z.infer<typeof FeatSchema>;

export async function getFeatList(): Promise<FeatSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/feats");
  return FeatSummarySchema.array().parse(data.results);
}

export async function getFeatByIndex(index: string): Promise<Feat> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/feats/${index}`);
  return FeatSchema.parse(data);
}
