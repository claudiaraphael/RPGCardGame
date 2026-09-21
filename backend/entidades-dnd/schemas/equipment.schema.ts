// ==========================================================
// SCHEMA: equipment (GET /api/2014/equipment)
// ==========================================================
// ATENÇÃO: o único exemplo completo capturado no Mapa dos Dados é "abacus"
// (item de aventura simples). Armas e armaduras retornam campos extras que
// não aparecem nesse exemplo (ex: "damage", "range", "properties" em armas;
// "armor_class", "str_minimum" em armaduras). Modelado só com os campos
// confirmados; os campos específicos de arma/armadura ficam de fora até
// existir um exemplo real deles no Mapa — ver ressalva no relatório final.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema, QuantityUnitSchema } from "./shared.schema";

export const EquipmentSummarySchema = ApiReferenceSchema;
export type EquipmentSummary = z.infer<typeof EquipmentSummarySchema>;

export const EquipmentSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  special: z.array(z.string()),
  equipment_category: ApiReferenceSchema,
  gear_category: ApiReferenceSchema.optional(),
  cost: QuantityUnitSchema,
  weight: z.number().optional(),
  contents: z.array(z.unknown()),
  properties: z.array(ApiReferenceSchema),
  url: z.string(),
  updated_at: z.string(),
});
export type Equipment = z.infer<typeof EquipmentSchema>;

export async function getEquipmentList(): Promise<EquipmentSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/equipment");
  return EquipmentSummarySchema.array().parse(data.results);
}

export async function getEquipmentByIndex(index: string): Promise<Equipment> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/equipment/${index}`);
  return EquipmentSchema.parse(data);
}
