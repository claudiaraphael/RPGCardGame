// ==========================================================
// SCHEMA: features (GET /api/2014/features)
// ==========================================================
// Habilidades de classe (ex: Surto de Ação). "prerequisites" veio vazio no
// exemplo capturado (action-surge-1-use) — shape interno não confirmado,
// deixado como array genérico. Ver ressalva no relatório final.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const FeatureSummarySchema = ApiReferenceSchema;
export type FeatureSummary = z.infer<typeof FeatureSummarySchema>;

export const FeatureSchema = z.object({
  index: z.string(),
  class: ApiReferenceSchema,
  subclass: ApiReferenceSchema.optional(),
  name: z.string(),
  level: z.number(),
  prerequisites: z.array(z.unknown()),
  desc: z.array(z.string()),
  url: z.string(),
  updated_at: z.string(),
});
export type Feature = z.infer<typeof FeatureSchema>;

export async function getFeatureList(): Promise<FeatureSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/features");
  return FeatureSummarySchema.array().parse(data.results);
}

export async function getFeatureByIndex(index: string): Promise<Feature> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/features/${index}`);
  return FeatureSchema.parse(data);
}
