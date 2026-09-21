// ==========================================================
// SCHEMA: classes (GET /api/2014/classes)
// ==========================================================
// As 12 classes (Bárbaro, Bardo, ...). multi_classing.proficiency_choices
// não apareceu no exemplo capturado (barbarian) — deixado opcional, ver
// observação no relatório final sobre esse campo.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import {
  AbilityScorePrerequisiteSchema,
  ApiReferenceSchema,
  ChoiceSchema,
  EquipmentQuantitySchema,
} from "./shared.schema";

export const ClassSummarySchema = ApiReferenceSchema;
export type ClassSummary = z.infer<typeof ClassSummarySchema>;

export const ClassSchema = z.object({
  index: z.string(),
  name: z.string(),
  hit_die: z.number(),
  proficiency_choices: z.array(ChoiceSchema),
  proficiencies: z.array(ApiReferenceSchema),
  saving_throws: z.array(ApiReferenceSchema),
  starting_equipment: z.array(EquipmentQuantitySchema),
  starting_equipment_options: z.array(ChoiceSchema),
  // Não é um array de recursos: é a URL de outro endpoint (lista de níveis).
  class_levels: z.string(),
  multi_classing: z.object({
    prerequisites: z.array(AbilityScorePrerequisiteSchema).optional(),
    proficiencies: z.array(ApiReferenceSchema).optional(),
    proficiency_choices: z.array(ChoiceSchema).optional(),
  }),
  subclasses: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Class = z.infer<typeof ClassSchema>;

export async function getClassList(): Promise<ClassSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/classes");
  return ClassSummarySchema.array().parse(data.results);
}

export async function getClassByIndex(index: string): Promise<Class> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/classes/${index}`);
  return ClassSchema.parse(data);
}
