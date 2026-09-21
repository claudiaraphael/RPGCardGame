// ==========================================================
// REGISTRO DE ROTAS: liga cada entidade da D&D API a um caminho HTTP
// ==========================================================
// Um roteador por entidade, todos montados pela mesma fábrica
// (makeEntityRouter) em cima das funções de entidades-dnd/schemas/.
//
// Por que getXList/getXByIndex são todas async: cada uma faz uma
// requisição HTTP pra D&D API por trás (via fetchFromDndApi, que usa
// axios). Chamada de rede tem uma duração imprevisível — o processo
// Node é single-threaded, então se essas funções fossem síncronas, a
// thread inteira travaria esperando a resposta e nenhuma outra
// requisição ao servidor seria atendida nesse meio tempo. Com
// async/await, o event loop do Node fica livre pra atender outras
// requisições enquanto espera a D&D API responder.

import { Router } from "express";
import { makeEntityRouter } from "./entityRouter";

import { getAbilityScoreList, getAbilityScoreByIndex } from "../../entidades-dnd/schemas/ability-scores.schema";
import { getAlignmentList, getAlignmentByIndex } from "../../entidades-dnd/schemas/alignments.schema";
import { getBackgroundList, getBackgroundByIndex } from "../../entidades-dnd/schemas/backgrounds.schema";
import { getClassList, getClassByIndex } from "../../entidades-dnd/schemas/classes.schema";
import { getConditionList, getConditionByIndex } from "../../entidades-dnd/schemas/conditions.schema";
import { getDamageTypeList, getDamageTypeByIndex } from "../../entidades-dnd/schemas/damage-types.schema";
import { getEquipmentList, getEquipmentByIndex } from "../../entidades-dnd/schemas/equipment.schema";
import { getEquipmentCategoryList, getEquipmentCategoryByIndex } from "../../entidades-dnd/schemas/equipment-categories.schema";
import { getFeatList, getFeatByIndex } from "../../entidades-dnd/schemas/feats.schema";
import { getFeatureList, getFeatureByIndex } from "../../entidades-dnd/schemas/features.schema";
import { getLanguageList, getLanguageByIndex } from "../../entidades-dnd/schemas/languages.schema";
import { getMagicItemList, getMagicItemByIndex } from "../../entidades-dnd/schemas/magic-items.schema";
import { getMagicSchoolList, getMagicSchoolByIndex } from "../../entidades-dnd/schemas/magic-schools.schema";
import { getMonsterList, getMonsterByIndex } from "../../entidades-dnd/schemas/monsters.schema";
import { getProficiencyList, getProficiencyByIndex } from "../../entidades-dnd/schemas/proficiencies.schema";
import { getRaceList, getRaceByIndex } from "../../entidades-dnd/schemas/races.schema";
import { getRuleSectionList, getRuleSectionByIndex } from "../../entidades-dnd/schemas/rule-sections.schema";
import { getRuleList, getRuleByIndex } from "../../entidades-dnd/schemas/rules.schema";
import { getSkillList, getSkillByIndex } from "../../entidades-dnd/schemas/skills.schema";
import { getSpellList, getSpellByIndex } from "../../entidades-dnd/schemas/spells.schema";
import { getSubclassList, getSubclassByIndex } from "../../entidades-dnd/schemas/subclasses.schema";
import { getSubraceList, getSubraceByIndex } from "../../entidades-dnd/schemas/subraces.schema";
import { getTraitList, getTraitByIndex } from "../../entidades-dnd/schemas/traits.schema";
import { getWeaponPropertyList, getWeaponPropertyByIndex } from "../../entidades-dnd/schemas/weapon-properties.schema";

const router = Router();

router.use("/ability-scores", makeEntityRouter(getAbilityScoreList, getAbilityScoreByIndex));
router.use("/alignments", makeEntityRouter(getAlignmentList, getAlignmentByIndex));
router.use("/backgrounds", makeEntityRouter(getBackgroundList, getBackgroundByIndex));
router.use("/classes", makeEntityRouter(getClassList, getClassByIndex));
router.use("/conditions", makeEntityRouter(getConditionList, getConditionByIndex));
router.use("/damage-types", makeEntityRouter(getDamageTypeList, getDamageTypeByIndex));
router.use("/equipment", makeEntityRouter(getEquipmentList, getEquipmentByIndex));
router.use("/equipment-categories", makeEntityRouter(getEquipmentCategoryList, getEquipmentCategoryByIndex));
router.use("/feats", makeEntityRouter(getFeatList, getFeatByIndex));
router.use("/features", makeEntityRouter(getFeatureList, getFeatureByIndex));
router.use("/languages", makeEntityRouter(getLanguageList, getLanguageByIndex));
router.use("/magic-items", makeEntityRouter(getMagicItemList, getMagicItemByIndex));
router.use("/magic-schools", makeEntityRouter(getMagicSchoolList, getMagicSchoolByIndex));
router.use("/monsters", makeEntityRouter(getMonsterList, getMonsterByIndex));
router.use("/proficiencies", makeEntityRouter(getProficiencyList, getProficiencyByIndex));
router.use("/races", makeEntityRouter(getRaceList, getRaceByIndex));
router.use("/rule-sections", makeEntityRouter(getRuleSectionList, getRuleSectionByIndex));
router.use("/rules", makeEntityRouter(getRuleList, getRuleByIndex));
router.use("/skills", makeEntityRouter(getSkillList, getSkillByIndex));
router.use("/spells", makeEntityRouter(getSpellList, getSpellByIndex));
router.use("/subclasses", makeEntityRouter(getSubclassList, getSubclassByIndex));
router.use("/subraces", makeEntityRouter(getSubraceList, getSubraceByIndex));
router.use("/traits", makeEntityRouter(getTraitList, getTraitByIndex));
router.use("/weapon-properties", makeEntityRouter(getWeaponPropertyList, getWeaponPropertyByIndex));

export default router;
