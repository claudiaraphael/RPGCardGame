// ==========================================================
// SCHEMA: alignments (GET /api/2014/alignments)
// ==========================================================
// Os 9 alinhamentos (Leal e Bom, Caótico e Mau, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const AlignmentSummarySchema = ApiReferenceSchema;
export type AlignmentSummary = z.infer<typeof AlignmentSummarySchema>;

export const AlignmentSchema = z.object({
  index: z.string(),
  name: z.string(),
  abbreviation: z.string(),
  desc: z.string(),
  url: z.string(),
  updated_at: z.string(),
});
export type Alignment = z.infer<typeof AlignmentSchema>;

export async function getAlignmentList(): Promise<AlignmentSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/alignments");
  return AlignmentSummarySchema.array().parse(data.results);
}

export async function getAlignmentByIndex(index: string): Promise<Alignment> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/alignments/${index}`);
  return AlignmentSchema.parse(data);
}
