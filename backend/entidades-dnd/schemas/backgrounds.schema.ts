// ==========================================================
// SCHEMA: backgrounds (GET /api/2014/backgrounds)
// ==========================================================
// Antecedentes (ex: Acólito). Usa as estruturas de "escolha" (Choice) de
// shared.schema.ts pra personality_traits, ideals, bonds, flaws, etc.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import {
  ApiReferenceSchema,
  ChoiceSchema,
  EquipmentQuantitySchema,
  QuantityUnitSchema,
} from "./shared.schema";

export const BackgroundSummarySchema = ApiReferenceSchema;
export type BackgroundSummary = z.infer<typeof BackgroundSummarySchema>;

export const BackgroundSchema = z.object({
  index: z.string(),
  name: z.string(),
  starting_proficiencies: z.array(ApiReferenceSchema),
  language_options: ChoiceSchema,
  starting_equipment: z.array(EquipmentQuantitySchema),
  starting_equipment_options: z.array(ChoiceSchema),
  feature: z.object({
    name: z.string(),
    desc: z.array(z.string()),
  }),
  personality_traits: ChoiceSchema,
  ideals: ChoiceSchema,
  bonds: ChoiceSchema,
  flaws: ChoiceSchema,
  url: z.string(),
  updated_at: z.string(),
  starting_gold: QuantityUnitSchema,
});
export type Background = z.infer<typeof BackgroundSchema>;

export async function getBackgroundList(): Promise<BackgroundSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/backgrounds");
  return BackgroundSummarySchema.array().parse(data.results);
}

export async function getBackgroundByIndex(index: string): Promise<Background> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/backgrounds/${index}`);
  return BackgroundSchema.parse(data);
}
