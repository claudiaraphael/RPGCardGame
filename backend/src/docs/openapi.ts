// ==========================================================
// REGISTRO OPENAPI: documenta cada rota reaproveitando os
// schemas Zod definidos em schemas/card.schema.ts
// ==========================================================

import { z } from "zod";
import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { CardSchema, CreateCardSchema, UpdateCardSchema } from "../schemas/card.schema";

const registry = new OpenAPIRegistry();

registry.registerPath({
  method: "get",
  path: "/cards",
  summary: "Lista todas as cartas",
  responses: {
    200: {
      description: "Lista de cartas",
      content: { "application/json": { schema: z.array(CardSchema) } },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/cards/{id}",
  summary: "Busca uma carta pelo id",
  request: { params: z.object({ id: z.string() }) },
  responses: {
    200: {
      description: "Carta encontrada",
      content: { "application/json": { schema: CardSchema } },
    },
    404: { description: "Carta não encontrada" },
  },
});

registry.registerPath({
  method: "post",
  path: "/cards",
  summary: "Cria uma nova carta",
  request: {
    body: { content: { "application/json": { schema: CreateCardSchema } } },
  },
  responses: {
    201: {
      description: "Carta criada",
      content: { "application/json": { schema: CardSchema } },
    },
    400: { description: "Dados inválidos" },
  },
});

registry.registerPath({
  method: "put",
  path: "/cards/{id}",
  summary: "Atualiza uma carta existente",
  request: {
    params: z.object({ id: z.string() }),
    body: { content: { "application/json": { schema: UpdateCardSchema } } },
  },
  responses: {
    200: {
      description: "Carta atualizada",
      content: { "application/json": { schema: CardSchema } },
    },
    404: { description: "Carta não encontrada" },
  },
});

registry.registerPath({
  method: "delete",
  path: "/cards/{id}",
  summary: "Remove uma carta",
  request: { params: z.object({ id: z.string() }) },
  responses: {
    200: { description: "Carta removida" },
    404: { description: "Carta não encontrada" },
  },
});

// Gera o documento OpenAPI final a partir de tudo que foi registrado acima.
export function generateOpenApiDocument() {
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "RPG Card Game API",
      version: "1.0.0",
      description: "CRUD de cartas do jogo (dados em memória, só para estudo)",
    },
  });
}
