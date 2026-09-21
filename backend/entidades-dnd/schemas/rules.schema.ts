// ==========================================================
// SCHEMA: rules (GET /api/2014/rules)
// ==========================================================
// As 6 grandes seções de regras (Aventurando-se, Combate, etc), cada uma
// listando suas "subsections" (que são rule-sections).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const RuleSummarySchema = ApiReferenceSchema;
export type RuleSummary = z.infer<typeof RuleSummarySchema>;

export const RuleSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.string(),
  subsections: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Rule = z.infer<typeof RuleSchema>;

export async function getRuleList(): Promise<RuleSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/rules");
  return RuleSummarySchema.array().parse(data.results);
}

export async function getRuleByIndex(index: string): Promise<Rule> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/rules/${index}`);
  return RuleSchema.parse(data);
}
