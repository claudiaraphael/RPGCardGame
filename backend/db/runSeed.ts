// ==========================================================
// RUNNER: roda o seed pras 24 entidades da D&D API
// ==========================================================
// `npx ts-node db/runSeed.ts` — popula dnd_cache com todas as categorias.
// Todas já foram validadas contra dado real (ver
// to-do/documentation/dnd-full-data.json, 2.027 itens, 0 falhas), então
// aqui é só repetir o mesmo par getXList/getXByIndex de cada
// entidades-dnd/schemas/<entidade>.schema.ts — mesma lista de imports já
// usada em src/routes/index.ts.
//
// Cada entidade passa por try/catch aqui fora, além do retry por item já
// dentro de seedEntity() (db/seedDndCache.ts). Sem isso, se a LISTA de uma
// única entidade falhasse (não um item, a lista inteira — ver comentário
// em seedDndCache.ts), o erro subia sem ser pego e o script parava ali,
// nunca chegando nas entidades seguintes nem no db.close() final.

import { seedEntity } from "./seedDndCache";
import { db } from "./connection";

import { getAbilityScoreList, getAbilityScoreByIndex } from "../entidades-dnd/schemas/ability-scores.schema";
import { getAlignmentList, getAlignmentByIndex } from "../entidades-dnd/schemas/alignments.schema";
import { getBackgroundList, getBackgroundByIndex } from "../entidades-dnd/schemas/backgrounds.schema";
import { getClassList, getClassByIndex } from "../entidades-dnd/schemas/classes.schema";
import { getConditionList, getConditionByIndex } from "../entidades-dnd/schemas/conditions.schema";
import { getDamageTypeList, getDamageTypeByIndex } from "../entidades-dnd/schemas/damage-types.schema";
import { getEquipmentList, getEquipmentByIndex } from "../entidades-dnd/schemas/equipment.schema";
import { getEquipmentCategoryList, getEquipmentCategoryByIndex } from "../entidades-dnd/schemas/equipment-categories.schema";
import { getFeatList, getFeatByIndex } from "../entidades-dnd/schemas/feats.schema";
import { getFeatureList, getFeatureByIndex } from "../entidades-dnd/schemas/features.schema";
import { getLanguageList, getLanguageByIndex } from "../entidades-dnd/schemas/languages.schema";
import { getMagicItemList, getMagicItemByIndex } from "../entidades-dnd/schemas/magic-items.schema";
import { getMagicSchoolList, getMagicSchoolByIndex } from "../entidades-dnd/schemas/magic-schools.schema";
import { getMonsterList, getMonsterByIndex } from "../entidades-dnd/schemas/monsters.schema";
import { getProficiencyList, getProficiencyByIndex } from "../entidades-dnd/schemas/proficiencies.schema";
import { getRaceList, getRaceByIndex } from "../entidades-dnd/schemas/races.schema";
import { getRuleSectionList, getRuleSectionByIndex } from "../entidades-dnd/schemas/rule-sections.schema";
import { getRuleList, getRuleByIndex } from "../entidades-dnd/schemas/rules.schema";
import { getSkillList, getSkillByIndex } from "../entidades-dnd/schemas/skills.schema";
import { getSpellList, getSpellByIndex } from "../entidades-dnd/schemas/spells.schema";
import { getSubclassList, getSubclassByIndex } from "../entidades-dnd/schemas/subclasses.schema";
import { getSubraceList, getSubraceByIndex } from "../entidades-dnd/schemas/subraces.schema";
import { getTraitList, getTraitByIndex } from "../entidades-dnd/schemas/traits.schema";
import { getWeaponPropertyList, getWeaponPropertyByIndex } from "../entidades-dnd/schemas/weapon-properties.schema";

const entidades: [string, () => Promise<{ index: string }[]>, (i: string) => Promise<unknown>][] = [
  ["ability-scores", getAbilityScoreList, getAbilityScoreByIndex],
  ["alignments", getAlignmentList, getAlignmentByIndex],
  ["backgrounds", getBackgroundList, getBackgroundByIndex],
  ["classes", getClassList, getClassByIndex],
  ["conditions", getConditionList, getConditionByIndex],
  ["damage-types", getDamageTypeList, getDamageTypeByIndex],
  ["equipment", getEquipmentList, getEquipmentByIndex],
  ["equipment-categories", getEquipmentCategoryList, getEquipmentCategoryByIndex],
  ["feats", getFeatList, getFeatByIndex],
  ["features", getFeatureList, getFeatureByIndex],
  ["languages", getLanguageList, getLanguageByIndex],
  ["magic-items", getMagicItemList, getMagicItemByIndex],
  ["magic-schools", getMagicSchoolList, getMagicSchoolByIndex],
  ["monsters", getMonsterList, getMonsterByIndex],
  ["proficiencies", getProficiencyList, getProficiencyByIndex],
  ["races", getRaceList, getRaceByIndex],
  ["rule-sections", getRuleSectionList, getRuleSectionByIndex],
  ["rules", getRuleList, getRuleByIndex],
  ["skills", getSkillList, getSkillByIndex],
  ["spells", getSpellList, getSpellByIndex],
  ["subclasses", getSubclassList, getSubclassByIndex],
  ["subraces", getSubraceList, getSubraceByIndex],
  ["traits", getTraitList, getTraitByIndex],
  ["weapon-properties", getWeaponPropertyList, getWeaponPropertyByIndex],
];

async function main() {
  const entidadesComFalhaTotal: string[] = [];

  for (const [nome, getList, getByIndex] of entidades) {
    try {
      await seedEntity(nome, getList, getByIndex);
    } catch (err) {
      // A LISTA inteira da entidade falhou (não um item — isso o
      // seedEntity já trata sozinho). Registra e segue pra próxima em vez
      // de derrubar o script inteiro.
      entidadesComFalhaTotal.push(nome);
      console.error(`[${nome}] pulada — lista falhou mesmo com retry:`, (err as Error).message);
    }
  }

  db.close();

  if (entidadesComFalhaTotal.length > 0) {
    console.error(`\nEntidades não seedadas: ${entidadesComFalhaTotal.join(", ")}`);
    process.exitCode = 1;
  }
}

main();
