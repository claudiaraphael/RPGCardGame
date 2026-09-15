// ==========================================================
// SCHEMAS ZOD (fonte única de verdade: validação + tipos + docs)
// ==========================================================
// Cada schema define o "formato" de uma carta UMA vez, e esse mesmo
// schema serve para (1) validar o que chega nas requisições e
// (2) gerar a documentação OpenAPI em /docs. Não tem comentário
// duplicado nem interface TypeScript escrita à mão.

import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

// extendZodWithOpenApi "pluga" o método .openapi() no Zod, para
// conseguirmos anotar cada schema com metadados (nome, exemplo, etc.)
extendZodWithOpenApi(z);

// Formato de uma carta já existente (com id).
export const CardSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    name: z.string().openapi({ example: "Dragão de Fogo" }),
    type: z.string().openapi({ example: "Monstro" }),
    attack: z.number().openapi({ example: 90 }),
  })
  .openapi("Card");

// Formato aceito para CRIAR uma carta (sem id - quem gera o id é o servidor).
export const CreateCardSchema = z
  .object({
    name: z.string().min(1),
    type: z.string().min(1),
    attack: z.number().optional(),
  })
  .openapi("CreateCard");

// Formato aceito para ATUALIZAR uma carta (todos os campos opcionais,
// já que o PUT aqui só troca o que for enviado).
export const UpdateCardSchema = z
  .object({
    name: z.string().min(1).optional(),
    type: z.string().min(1).optional(),
    attack: z.number().optional(),
  })
  .openapi("UpdateCard");

// "Tipo TypeScript" derivado automaticamente do schema Zod.
// Ou seja: não escrevemos a interface Card na mão, o Zod gera pra gente.
export type Card = z.infer<typeof CardSchema>;
export type CreateCardInput = z.infer<typeof CreateCardSchema>;
export type UpdateCardInput = z.infer<typeof UpdateCardSchema>;
