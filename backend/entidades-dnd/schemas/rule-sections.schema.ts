// ==========================================================
// SCHEMA: rule-sections (GET /api/2014/rule-sections)
// ==========================================================
// Subseções de regras (ex: "Ability Checks") — "desc" vem como um bloco
// markdown longo (texto da regra em si), não uma lista de parágrafos.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const RuleSectionSummarySchema = ApiReferenceSchema;
export type RuleSectionSummary = z.infer<typeof RuleSectionSummarySchema>;

export const RuleSectionSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.string(),
  url: z.string(),
  updated_at: z.string(),
});
export type RuleSection = z.infer<typeof RuleSectionSchema>;

export async function getRuleSectionList(): Promise<RuleSectionSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/rule-sections");
  return RuleSectionSummarySchema.array().parse(data.results);
}

export async function getRuleSectionByIndex(index: string): Promise<RuleSection> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/rule-sections/${index}`);
  return RuleSectionSchema.parse(data);
}
