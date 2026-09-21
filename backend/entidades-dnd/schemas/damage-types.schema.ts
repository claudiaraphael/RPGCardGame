// ==========================================================
// SCHEMA: damage-types (GET /api/2014/damage-types)
// ==========================================================
// Tipos de dano (ácido, cortante, fogo, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const DamageTypeSummarySchema = ApiReferenceSchema;
export type DamageTypeSummary = z.infer<typeof DamageTypeSummarySchema>;

export const DamageTypeSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  url: z.string(),
  updated_at: z.string(),
});
export type DamageType = z.infer<typeof DamageTypeSchema>;

export async function getDamageTypeList(): Promise<DamageTypeSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/damage-types");
  return DamageTypeSummarySchema.array().parse(data.results);
}

export async function getDamageTypeByIndex(index: string): Promise<DamageType> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/damage-types/${index}`);
  return DamageTypeSchema.parse(data);
}
