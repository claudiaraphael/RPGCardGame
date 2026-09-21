// ==========================================================
// SCHEMA: skills (GET /api/2014/skills)
// ==========================================================
// As 18 perícias (Acrobacia, Atletismo, etc), cada uma ligada a um atributo.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const SkillSummarySchema = ApiReferenceSchema;
export type SkillSummary = z.infer<typeof SkillSummarySchema>;

export const SkillSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  ability_score: ApiReferenceSchema,
  url: z.string(),
  updated_at: z.string(),
});
export type Skill = z.infer<typeof SkillSchema>;

export async function getSkillList(): Promise<SkillSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/skills");
  return SkillSummarySchema.array().parse(data.results);
}

export async function getSkillByIndex(index: string): Promise<Skill> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/skills/${index}`);
  return SkillSchema.parse(data);
}
