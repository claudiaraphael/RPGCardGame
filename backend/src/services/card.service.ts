// ==========================================================
// SERVICE: regra de negócio das cartas
// ==========================================================
// Fica entre o controller (que só conhece HTTP) e o repository (que só
// conhece dados). Hoje é praticamente uma passagem direta para o
// repository, porque o CRUD é simples — mas é aqui que entraria, por
// exemplo, uma regra tipo "carta de Monstro precisa ter attack > 0".

import * as cardRepository from "../repositories/card.repository";
import { Card, CreateCardInput, UpdateCardInput } from "../schemas/card.schema";

export function listCards(): Card[] {
  return cardRepository.findAll();
}

export function getCard(id: number): Card | undefined {
  return cardRepository.findById(id);
}

export function createCard(data: CreateCardInput): Card {
  return cardRepository.create(data);
}

export function updateCard(id: number, data: UpdateCardInput): Card | undefined {
  return cardRepository.update(id, data);
}

export function deleteCard(id: number): Card | undefined {
  return cardRepository.remove(id);
}
