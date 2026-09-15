// ==========================================================
// CONTROLLER: traduz HTTP (req/res) para chamadas de service
// ==========================================================
// Não tem regra de negócio aqui — só extrai o que veio na requisição,
// chama o service certo e devolve a resposta HTTP adequada.

import { Request, Response } from "express";
import * as cardService from "../services/card.service";

// ---------- READ (LER TODAS AS CARTAS) ----------
export function listCards(req: Request, res: Response) {
  res.json(cardService.listCards());
}

// ---------- READ (LER UMA CARTA ESPECÍFICA) ----------
export function getCard(req: Request, res: Response) {
  const id = Number(req.params.id);
  const card = cardService.getCard(id);

  if (!card) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  res.json(card);
}

// ---------- CREATE (CRIAR UMA NOVA CARTA) ----------
// req.body já chega validado pelo middleware validateBody(CreateCardSchema).
export function createCard(req: Request, res: Response) {
  const newCard = cardService.createCard(req.body);
  res.status(201).json(newCard);
}

// ---------- UPDATE (ATUALIZAR UMA CARTA EXISTENTE) ----------
export function updateCard(req: Request, res: Response) {
  const id = Number(req.params.id);
  const updatedCard = cardService.updateCard(id, req.body);

  if (!updatedCard) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  res.json(updatedCard);
}

// ---------- DELETE (APAGAR UMA CARTA) ----------
export function deleteCard(req: Request, res: Response) {
  const id = Number(req.params.id);
  const removedCard = cardService.deleteCard(id);

  if (!removedCard) {
    return res.status(404).json({ error: "Carta não encontrada" });
  }

  res.json({ message: "Carta removida com sucesso", card: removedCard });
}
