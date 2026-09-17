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
