// ==========================================================
// SCHEMA: personagem (placeholder)
// ==========================================================
// Campos provisórios só pra existir um CRUD de verdade (exigência do
// requerimento da disciplina) enquanto o modelo real de personagem ainda
// não foi desenhado (ver interface_personagem.ts, que é o esboço da
// autora, e auth/User.ts, que também modela Character — nenhum dos dois
// é tocado aqui). Quando o modelo real existir, é só trocar os campos
// deste schema; o resto do CRUD (rotas, repositório) não depende do
// formato específico dos campos.

import { z } from "zod";

// Shape base sem .default(): usado como estava pro PUT (abaixo). Se os
// defaults ficassem no schema base, .partial() não adiantaria pra
// campo omitido — o Zod aplicaria o default no parse mesmo assim, e um
// PUT parcial acabaria zerando campos que o cliente nem mandou (foi
// exatamente o bug visto testando o CRUD manualmente: enviar só
// {hp, nivel} zerava o "mp" existente).
const personagemShape = {
  nome: z.string().min(1).max(60).trim(),
  raca: z.string().min(1).max(40).trim(),
  classe: z.string().min(1).max(40).trim(),
  nivel: z.number().int().min(1).max(20),
  hp: z.number().int().min(1),
  mp: z.number().int().min(0),
};

// POST: todos os campos obrigatórios, com defaults pra nivel/hp/mp.
export const personagemInputSchema = z.object({
  ...personagemShape,
  nivel: personagemShape.nivel.default(1),
  hp: personagemShape.hp.default(10),
  mp: personagemShape.mp.default(0),
});
export type PersonagemInput = z.infer<typeof personagemInputSchema>;

// PUT: mesmos campos, todos opcionais, sem default — campo omitido fica
// undefined de propósito, pra distinguir de "campo enviado como 0".
export const personagemUpdateSchema = z.object(personagemShape).partial();
export type PersonagemUpdateInput = z.infer<typeof personagemUpdateSchema>;
