// ==========================================================
// RUNNER: roda o seed pra uma ou mais entidades
// ==========================================================
// `npx ts-node db/runSeed.ts` — hoje só popula spells (mesmo escopo que
// backend/seed.ts já cobria "de ponta a ponta"). Pra estender pras outras
// 23 entidades, basta mais uma chamada de seedEntity() aqui, reaproveitando
// o par getXList/getXByIndex de entidades-dnd/schemas/<entidade>.schema.ts.

import { seedEntity } from "./seedDndCache";
import { getSpellList, getSpellByIndex } from "../entidades-dnd/schemas/spells.schema";
import { db } from "./connection";

async function main() {
  await seedEntity("spells", getSpellList, getSpellByIndex);
  db.close();
}

main();
