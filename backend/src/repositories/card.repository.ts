// ==========================================================
// REPOSITORY: acesso aos dados das cartas
// ==========================================================
// Camada responsável por ONDE os dados moram. Hoje é só um array em
// memória (os dados somem quando o servidor reinicia); no futuro,
// quando `database.db` for usado de verdade, é só trocar o "miolo"
// destas funções para consultar SQLite — o resto do app (services,
// controllers) nem precisa saber que isso mudou.

import { Card, CreateCardInput, UpdateCardInput } from "../schemas/card.schema";

let cards: Card[] = [
  { id: 1, name: "Dragão de Fogo", type: "Monstro", attack: 90 },
  { id: 2, name: "Cura Menor", type: "Magia", attack: 0 },
];
let nextId = 3;

export function findAll(): Card[] {
  return cards;
}

export function findById(id: number): Card | undefined {
  return cards.find((c) => c.id === id);
}

export function create(data: CreateCardInput): Card {
  const newCard: Card = {
    id: nextId++,
    name: data.name,
    type: data.type,
    attack: data.attack ?? 0,
  };
  cards.push(newCard);
  return newCard;
}

export function update(id: number, data: UpdateCardInput): Card | undefined {
  const card = findById(id);
  if (!card) return undefined;

  if (data.name !== undefined) card.name = data.name;
  if (data.type !== undefined) card.type = data.type;
  if (data.attack !== undefined) card.attack = data.attack;

  return card;
}

export function remove(id: number): Card | undefined {
  const index = cards.findIndex((c) => c.id === id);
  if (index === -1) return undefined;

  const [removedCard] = cards.splice(index, 1);
  return removedCard;
}
