// ==========================================================
// RUNNER: roda o seed pras 24 entidades da D&D API
// ==========================================================
// `npx ts-node db/runSeed.ts` — popula dnd_cache com todas as categorias.
// Todas já foram validadas contra dado real (ver
// to-do/documentation/dnd-full-data.json, 2.027 itens, 0 falhas), então
// aqui é só repetir o mesmo par getXList/getXByIndex de cada
// entidades-dnd/schemas/<entidade>.schema.ts — mesma lista de imports já
// usada em src/routes/index.ts.

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

async function main() {
  await seedEntity("ability-scores", getAbilityScoreList, getAbilityScoreByIndex);
  await seedEntity("alignments", getAlignmentList, getAlignmentByIndex);
  await seedEntity("backgrounds", getBackgroundList, getBackgroundByIndex);
  await seedEntity("classes", getClassList, getClassByIndex);
  await seedEntity("conditions", getConditionList, getConditionByIndex);
  await seedEntity("damage-types", getDamageTypeList, getDamageTypeByIndex);
  await seedEntity("equipment", getEquipmentList, getEquipmentByIndex);
  await seedEntity("equipment-categories", getEquipmentCategoryList, getEquipmentCategoryByIndex);
  await seedEntity("feats", getFeatList, getFeatByIndex);
  await seedEntity("features", getFeatureList, getFeatureByIndex);
  await seedEntity("languages", getLanguageList, getLanguageByIndex);
  await seedEntity("magic-items", getMagicItemList, getMagicItemByIndex);
  await seedEntity("magic-schools", getMagicSchoolList, getMagicSchoolByIndex);
  await seedEntity("monsters", getMonsterList, getMonsterByIndex);
  await seedEntity("proficiencies", getProficiencyList, getProficiencyByIndex);
  await seedEntity("races", getRaceList, getRaceByIndex);
  await seedEntity("rule-sections", getRuleSectionList, getRuleSectionByIndex);
  await seedEntity("rules", getRuleList, getRuleByIndex);
  await seedEntity("skills", getSkillList, getSkillByIndex);
  await seedEntity("spells", getSpellList, getSpellByIndex);
  await seedEntity("subclasses", getSubclassList, getSubclassByIndex);
  await seedEntity("subraces", getSubraceList, getSubraceByIndex);
  await seedEntity("traits", getTraitList, getTraitByIndex);
  await seedEntity("weapon-properties", getWeaponPropertyList, getWeaponPropertyByIndex);

  db.close();
}

main();
