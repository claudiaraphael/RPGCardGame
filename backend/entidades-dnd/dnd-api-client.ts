// ==========================================================
// CLIENTE HTTP GENÉRICO PRA D&D 5E API
// ==========================================================
// Mesmo padrão de backend/seed.ts (process.loadEnvFile + DND_BASE_URL +
// axios), mas numa função genérica só, reaproveitada por todos os schemas
// de entidades em ./schemas — evita repetir o mesmo try/catch 23 vezes.

import axios from "axios";

process.loadEnvFile();
const DND_BASE_URL = process.env.DND_BASE_URL;
if (!DND_BASE_URL) {
  throw new Error("DND_BASE_URL não está definida");
}

// Busca um caminho da D&D API (ex: "/api/2014/spells/acid-arrow") e devolve
// o JSON cru (sem validar formato ainda — quem chama decide o schema Zod
// que valida a resposta).
export async function fetchFromDndApi<T>(path: string): Promise<T> {
  try {
    const response = await axios.get<T>(`${DND_BASE_URL}${path}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // A API respondeu, mas com status de erro (4xx/5xx) — path errado,
        // recurso não existe, etc.
        throw new Error(`D&D API respondeu ${error.response.status} em ${path}`);
      }
      // Erro de rede/timeout — a requisição nem chegou a ter resposta.
      throw new Error(`Falha de rede ao acessar D&D API (${path}): ${error.message}`);
    }
    throw error;
  }
}
