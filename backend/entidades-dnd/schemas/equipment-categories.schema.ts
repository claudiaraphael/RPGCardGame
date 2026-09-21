// ==========================================================
// SCHEMA: equipment-categories (GET /api/2014/equipment-categories)
// ==========================================================
// Categorias de equipamento (Armas Marciais, Ferramentas de Artesão, etc),
// cada uma listando os itens que pertencem a ela.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const EquipmentCategorySummarySchema = ApiReferenceSchema;
export type EquipmentCategorySummary = z.infer<typeof EquipmentCategorySummarySchema>;

export const EquipmentCategorySchema = z.object({
  index: z.string(),
  name: z.string(),
  equipment: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type EquipmentCategory = z.infer<typeof EquipmentCategorySchema>;

export async function getEquipmentCategoryList(): Promise<EquipmentCategorySummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/equipment-categories");
  return EquipmentCategorySummarySchema.array().parse(data.results);
}

export async function getEquipmentCategoryByIndex(index: string): Promise<EquipmentCategory> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/equipment-categories/${index}`);
  return EquipmentCategorySchema.parse(data);
}
