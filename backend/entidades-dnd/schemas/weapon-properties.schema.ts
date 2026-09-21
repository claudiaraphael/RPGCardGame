// ==========================================================
// SCHEMA: weapon-properties (GET /api/2014/weapon-properties)
// ==========================================================
// Propriedades de arma (Leve, Pesada, Alcance, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const WeaponPropertySummarySchema = ApiReferenceSchema;
export type WeaponPropertySummary = z.infer<typeof WeaponPropertySummarySchema>;

export const WeaponPropertySchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  url: z.string(),
  updated_at: z.string(),
});
export type WeaponProperty = z.infer<typeof WeaponPropertySchema>;

export async function getWeaponPropertyList(): Promise<WeaponPropertySummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/weapon-properties");
  return WeaponPropertySummarySchema.array().parse(data.results);
}

export async function getWeaponPropertyByIndex(index: string): Promise<WeaponProperty> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/weapon-properties/${index}`);
  return WeaponPropertySchema.parse(data);
}
