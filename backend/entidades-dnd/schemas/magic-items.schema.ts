// ==========================================================
// SCHEMA: magic-items (GET /api/2014/magic-items)
// ==========================================================
// Itens mágicos (ex: Armadura de Adamantina).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const MagicItemSummarySchema = ApiReferenceSchema;
export type MagicItemSummary = z.infer<typeof MagicItemSummarySchema>;

export const MagicItemSchema = z.object({
  index: z.string(),
  name: z.string(),
  equipment_category: ApiReferenceSchema,
  rarity: z.object({ name: z.string() }),
  variants: z.array(ApiReferenceSchema),
  variant: z.boolean(),
  desc: z.array(z.string()),
  image: z.string().optional(),
  url: z.string(),
  updated_at: z.string(),
});
export type MagicItem = z.infer<typeof MagicItemSchema>;

export async function getMagicItemList(): Promise<MagicItemSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/magic-items");
  return MagicItemSummarySchema.array().parse(data.results);
}

export async function getMagicItemByIndex(index: string): Promise<MagicItem> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/magic-items/${index}`);
  return MagicItemSchema.parse(data);
}
