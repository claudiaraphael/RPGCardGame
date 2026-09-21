// ==========================================================
// SCHEMA: languages (GET /api/2014/languages)
// ==========================================================
// Idiomas do jogo (Comum, Abissal, Élfico, etc).

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema } from "./shared.schema";

export const LanguageSummarySchema = ApiReferenceSchema;
export type LanguageSummary = z.infer<typeof LanguageSummarySchema>;

export const LanguageSchema = z.object({
  index: z.string(),
  name: z.string(),
  type: z.string(),
  typical_speakers: z.array(z.string()),
  script: z.string().optional(),
  url: z.string(),
  updated_at: z.string(),
});
export type Language = z.infer<typeof LanguageSchema>;

export async function getLanguageList(): Promise<LanguageSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/languages");
  return LanguageSummarySchema.array().parse(data.results);
}

export async function getLanguageByIndex(index: string): Promise<Language> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/languages/${index}`);
  return LanguageSchema.parse(data);
}
