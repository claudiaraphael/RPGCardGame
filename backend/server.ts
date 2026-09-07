// ==========================================================
// SERVIDOR NODE.JS + TYPESCRIPT COM EXPRESS - EXEMPLO DE CRUD
// ==========================================================
// CRUD = Create, Read, Update, Delete (Criar, Ler, Atualizar, Apagar)
// Aqui vamos praticar isso com "cartas" (cards) do jogo, guardadas
// em um array na memória (ou seja: se reiniciar o servidor, os dados
// somem. Depois, quando você aprender bancos de dados, isso vira
// uma tabela de verdade).
//
// Diferente da versão anterior (com swagger-jsdoc), aqui usamos ZOD:
// definimos o "formato" de uma carta UMA vez, e esse mesmo schema
// serve para (1) validar o que chega nas requisições e (2) gerar
// a documentação em /docs. Não tem comentário duplicado.

import express, { Request, Response, NextFunction } from "express";
import { z } from "zod";
import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";
import swaggerUi from "swagger-ui-express";

// extendZodWithOpenApi "pluga" o método .openapi() no Zod, para
// conseguirmos anotar cada schema com metadados (nome, exemplo, etc.)
extendZodWithOpenApi(z);

// ==========================================================
// 1) SCHEMAS ZOD (fonte única de verdade: validação + tipos + docs)
// ==========================================================

// Formato de uma carta já existente (com id).
const CardSchema = z
  .object({
    id: z.number().openapi({ example: 1 }),
    name: z.string().openapi({ example: "Dragão de Fogo" }),
    type: z.string().openapi({ example: "Monstro" }),
    attack: z.number().openapi({ example: 90 }),
  })
  .openapi("Card");

// Formato aceito para CRIAR uma carta (sem id - quem gera o id é o servidor).
const CreateCardSchema = z
  .object({
    name: z.string().min(1),
    type: z.string().min(1),
    attack: z.number().optional(),
  })
  .openapi("CreateCard");

// Formato aceito para ATUALIZAR uma carta (todos os campos opcionais,
// já que o PUT aqui só troca o que for enviado).
const UpdateCardSchema = z
  .object({
    name: z.string().min(1).optional(),
    type: z.string().min(1).optional(),
    attack: z.number().optional(),
  })
  .openapi("UpdateCard");

// "Tipo TypeScript" derivado automaticamente do schema Zod.
// Ou seja: não escrevemos a interface Card na mão, o Zod gera pra gente.
type Card = z.infer<typeof CardSchema>;

// ==========================================================
// 2) "BANCO DE DADOS" FALSO (EM MEMÓRIA)
// ==========================================================
let cards: Card[] = [
  { id: 1, name: "Dragão de Fogo", type: "Monstro", attack: 90 },
  { id: 2, name: "Cura Menor", type: "Magia", attack: 0 },
];
let nextId = 3;

// ==========================================================
// 3) REGISTRO OPENAPI (aqui é onde documentamos cada rota,
// reaproveitando os schemas Zod acima)
// ==========================================================
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
function generateOpenApiDocument() {
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

// ==========================================================
// 4) APP EXPRESS
// ==========================================================
const app = express();

app.use(express.json());

// Página de documentação interativa, equivalente ao /docs do FastAPI.
app.use("/docs", swaggerUi.serve, swaggerUi.setup(generateOpenApiDocument()));

// Middleware auxiliar: valida req.body contra um schema Zod.
// Se falhar, responde 400 com os detalhes do erro; se passar, segue em frente.
function validateBody(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: z.flattenError(result.error) });
    }
    // req.body passa a ser os dados já validados (e tipados)
    req.body = result.data;
    next();
  };
}

// ---------- READ (LER TODAS AS CARTAS) ----------
app.get("/cards", (req: Request, res: Response) => {
  res.json(cards);
});

// ---------- READ (LER UMA CARTA ESPECÍFICA) ----------
app.get("/cards/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  res.json(card);
});

// ---------- CREATE (CRIAR UMA NOVA CARTA) ----------
// validateBody(CreateCardSchema) roda ANTES do handler da rota.
app.post("/cards", validateBody(CreateCardSchema), (req: Request, res: Response) => {
  const { name, type, attack } = req.body;

  const newCard: Card = {
    id: nextId++,
    name,
    type,
    attack: attack ?? 0,
  };

  cards.push(newCard);
  res.status(201).json(newCard);
});

// ---------- UPDATE (ATUALIZAR UMA CARTA EXISTENTE) ----------
app.put("/cards/:id", validateBody(UpdateCardSchema), (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  const { name, type, attack } = req.body;
  if (name !== undefined) card.name = name;
  if (type !== undefined) card.type = type;
  if (attack !== undefined) card.attack = attack;

  res.json(card);
});

// ---------- DELETE (APAGAR UMA CARTA) ----------
app.delete("/cards/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = cards.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  const [removedCard] = cards.splice(index, 1);
  res.json({ message: "Carta removida com sucesso", card: removedCard });
});

// ==========================================================
// 5) INICIAR O SERVIDOR
// ==========================================================
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação em http://localhost:${PORT}/docs`);
});
