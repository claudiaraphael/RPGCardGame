// ==========================================================
// SCHEMA: conditions (GET /api/2014/conditions)
// ==========================================================
// Condições de combate (cego, envenenado, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const ConditionSummarySchema = ApiReferenceSchema;
export type ConditionSummary = z.infer<typeof ConditionSummarySchema>;

export const ConditionSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  url: z.string(),
  updated_at: z.string(),
});
export type Condition = z.infer<typeof ConditionSchema>;

export async function getConditionList(): Promise<ConditionSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/conditions");
  return ConditionSummarySchema.array().parse(data.results);
}

export async function getConditionByIndex(index: string): Promise<Condition> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/conditions/${index}`);
  return ConditionSchema.parse(data);
}
