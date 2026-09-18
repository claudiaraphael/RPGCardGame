# Código de referência (arquivado em 2026-09-17)

Este arquivo guarda o conteúdo de `backend/src/` antes da faxina que removeu
a arquitetura montada. É só **referência de consulta** — não é código rodando.
A ideia é reescrever essa lógica com as próprias mãos (exigência da disciplina:
pelo menos 50% de código próprio), usando isto como guia do que já funcionava
e já atendia ao requerimento do MVP (CRUD REST de `/cards` com GET/POST/PUT/DELETE,
validação via Zod, documentação OpenAPI/Swagger).

Arquivos originais (301 linhas no total):
- `src/app.ts` (21 linhas)
- `src/server.ts` (21 linhas)
- `src/routes/card.routes.ts` (98 linhas)
- `src/schemas/card.schema.ts` (49 linhas)
- `src/middlewares/validateBody.ts` (19 linhas)
- `src/docs/openapi.ts` (93 linhas)

---

## `src/server.ts`

```ts
// ==========================================================
// SERVIDOR NODE.JS + TYPESCRIPT COM EXPRESS - EXEMPLO DE CRUD
// ==========================================================
// CRUD = Create, Read, Update, Delete (Criar, Ler, Atualizar, Apagar)
// Aqui praticamos isso com "cartas" (cards) do jogo, guardadas em um
// array na memória (ou seja: se reiniciar o servidor, os dados somem.
// Depois, quando você aprender bancos de dados, isso vira uma tabela
// de verdade).
//
// Este arquivo só liga o servidor; a configuração do Express (app.ts),
// as rotas, controllers, services e schemas vivem em pastas separadas
// por responsabilidade (ver backend/Documentation/architecture.md).

import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação em http://localhost:${PORT}/docs`);
});
```

## `src/app.ts`

```ts
// ==========================================================
// APP EXPRESS: monta middlewares globais, rotas e documentação
// ==========================================================
// Separado do server.ts para o app poder ser testado/importado sem
// precisar necessariamente subir um servidor HTTP.

import express from "express";
import swaggerUi from "swagger-ui-express";
import cardRoutes from "./routes/card.routes";
import { generateOpenApiDocument } from "./docs/openapi";

const app = express();

app.use(express.json());

// Página de documentação interativa, equivalente ao /docs do FastAPI.
app.use("/docs", swaggerUi.serve, swaggerUi.setup(generateOpenApiDocument()));

app.use("/cards", cardRoutes);

export default app;
```

## `src/schemas/card.schema.ts`

```ts
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
```

## `src/middlewares/validateBody.ts`

```ts
// ==========================================================
// MIDDLEWARE: valida req.body contra um schema Zod
// ==========================================================
// Se falhar, responde 400 com os detalhes do erro; se passar, segue
// em frente e substitui req.body pelos dados já validados (e tipados).

import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validateBody(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: z.flattenError(result.error) });
    }
    req.body = result.data;
    next();
  };
}
```

## `src/routes/card.routes.ts`

```ts
// ==========================================================
// CARD.ROUTES: rotas + regra de negócio + dados das cartas
// ==========================================================
// Arquitetura simplificada: em vez de espalhar CRUD simples em
// routes/controllers/services/repositories separados, tudo que é
// específico de "cartas" mora aqui num arquivo só. O Zod continua
// validando o req.body (via middleware) e schemas/card.schema.ts
// continua sendo a fonte única de verdade do formato dos dados.
//
// Se um dia a lógica de cartas ficar complexa (muitas regras de
// negócio, múltiplas fontes de dados), aí sim vale separar de novo
// em camadas — não antes disso.

import { Router, Request, Response } from "express";
import { validateBody } from "../middlewares/validateBody";
import {
  Card,
  CreateCardSchema,
  UpdateCardSchema,
  CreateCardInput,
  UpdateCardInput,
} from "../schemas/card.schema";

const router = Router();

// ---------- "BANCO DE DADOS" (array em memória) ----------
// Os dados somem quando o servidor reinicia. Quando database.db virar
// SQLite de verdade, é só trocar este array por chamadas ao banco.
let cards: Card[] = [
  { id: 1, name: "Dragão de Fogo", type: "Monstro", attack: 90 },
  { id: 2, name: "Cura Menor", type: "Magia", attack: 0 },
];
let nextId = 3;

// ---------- READ (LER TODAS AS CARTAS) ----------
router.get("/", (req: Request, res: Response) => {
  res.json(cards);
});

// ---------- READ (LER UMA CARTA ESPECÍFICA) ----------
router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  res.json(card);
});

// ---------- CREATE (CRIAR UMA NOVA CARTA) ----------
// req.body já chega validado pelo middleware validateBody(CreateCardSchema).
router.post("/", validateBody(CreateCardSchema), (req: Request, res: Response) => {
  const data = req.body as CreateCardInput;

  const newCard: Card = {
    id: nextId++,
    name: data.name,
    type: data.type,
    attack: data.attack ?? 0,
  };
  cards.push(newCard);

  res.status(201).json(newCard);
});

// ---------- UPDATE (ATUALIZAR UMA CARTA EXISTENTE) ----------
router.put("/:id", validateBody(UpdateCardSchema), (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body as UpdateCardInput;

  const card = cards.find((c) => c.id === id);
  if (!card) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  if (data.name !== undefined) card.name = data.name;
  if (data.type !== undefined) card.type = data.type;
  if (data.attack !== undefined) card.attack = data.attack;

  res.json(card);
});

// ---------- DELETE (APAGAR UMA CARTA) ----------
router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = cards.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  const [removedCard] = cards.splice(index, 1);
  res.json({ message: "Carta removida com sucesso", card: removedCard });
});

export default router;
```

## `src/docs/openapi.ts`

```ts
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
```
