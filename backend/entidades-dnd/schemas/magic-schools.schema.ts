// ==========================================================
// SCHEMA: magic-schools (GET /api/2014/magic-schools)
// ==========================================================
// As 8 escolas de magia (Abjuração, Conjuração, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const MagicSchoolSummarySchema = ApiReferenceSchema;
export type MagicSchoolSummary = z.infer<typeof MagicSchoolSummarySchema>;

export const MagicSchoolSchema = z.object({
  index: z.string(),
  name: z.string(),
  desc: z.string(),
  url: z.string(),
  updated_at: z.string(),
});
export type MagicSchool = z.infer<typeof MagicSchoolSchema>;

export async function getMagicSchoolList(): Promise<MagicSchoolSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/magic-schools");
  return MagicSchoolSummarySchema.array().parse(data.results);
}

export async function getMagicSchoolByIndex(index: string): Promise<MagicSchool> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/magic-schools/${index}`);
  return MagicSchoolSchema.parse(data);
}
