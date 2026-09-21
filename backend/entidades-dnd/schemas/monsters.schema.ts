// ==========================================================
// SCHEMA: monsters (GET /api/2014/monsters)
// ==========================================================
// A entidade mais complexa da API — modelada a partir do exemplo completo
// do "aboleth" no Mapa dos Dados. Alguns sub-shapes (ex: special_abilities
// com spellcasting embutido, que existe em monstros conjuradores) não
// apareceram nesse exemplo específico — ver ressalva no relatório final.

import { z } from "zod";
import { fetchFromDndApi } from "../dnd-api-client";
import { ApiReferenceSchema, ChoiceSchema, DamageSchema, DcSchema, UsageSchema } from "./shared.schema";

export const MonsterSummarySchema = ApiReferenceSchema;
export type MonsterSummary = z.infer<typeof MonsterSummarySchema>;

// Confirmado num teste manual (ex: Spear do gnoll, que pode ser usada com
// uma ou duas mãos): um item de "damage" às vezes não é um dano fixo, é
// uma escolha entre variantes de dano — por isso a união com ChoiceSchema.
const MonsterDamageEntrySchema = z.union([DamageSchema, ChoiceSchema]);

const MonsterActionSchema: z.ZodType<unknown> = z.lazy(() =>
  z.object({
    name: z.string(),
    desc: z.string(),
    multiattack_type: z.string().optional(),
    attack_bonus: z.number().optional(),
    dc: DcSchema.optional(),
    usage: UsageSchema.optional(),
    damage: z.array(MonsterDamageEntrySchema),
    // Sub-ações de um "Multiattack" (ex: 3 ataques de tentáculo).
    actions: z
      .array(
        z.object({
          action_name: z.string(),
          count: z.union([z.number(), z.string()]),
          type: z.string(),
        })
      )
      .optional(),
  })
);

const MonsterSpecialAbilitySchema = z.object({
  name: z.string(),
  desc: z.string(),
  dc: DcSchema.optional(),
  damage: z.array(MonsterDamageEntrySchema),
  usage: UsageSchema.optional(),
});

export const MonsterSchema = z.object({
  index: z.string(),
  name: z.string(),
  size: z.string(),
  type: z.string(),
  alignment: z.string(),
  armor_class: z.array(
    z.object({
      type: z.string(),
      value: z.number(),
    })
  ),
  hit_points: z.number(),
  hit_dice: z.string(),
  hit_points_roll: z.string(),
  speed: z.object({
    walk: z.string().optional(),
    swim: z.string().optional(),
    fly: z.string().optional(),
    burrow: z.string().optional(),
    climb: z.string().optional(),
  }),
  strength: z.number(),
  dexterity: z.number(),
  constitution: z.number(),
  intelligence: z.number(),
  wisdom: z.number(),
  charisma: z.number(),
  proficiencies: z.array(
    z.object({
      value: z.number(),
      proficiency: ApiReferenceSchema,
    })
  ),
  damage_vulnerabilities: z.array(z.string()),
  damage_resistances: z.array(z.string()),
  damage_immunities: z.array(z.string()),
  condition_immunities: z.array(ApiReferenceSchema),
  senses: z.object({
    passive_perception: z.number(),
    darkvision: z.string().optional(),
    blindsight: z.string().optional(),
    tremorsense: z.string().optional(),
    truesight: z.string().optional(),
  }),
  languages: z.string(),
  challenge_rating: z.number(),
  proficiency_bonus: z.number(),
  xp: z.number(),
  special_abilities: z.array(MonsterSpecialAbilitySchema).optional(),
  actions: z.array(MonsterActionSchema).optional(),
  legendary_actions: z.array(MonsterActionSchema).optional(),
  reactions: z.array(z.unknown()).optional(),
  forms: z.array(z.unknown()).optional(),
  image: z.string().optional(),
  url: z.string(),
  updated_at: z.string(),
});
export type Monster = z.infer<typeof MonsterSchema>;

export async function getMonsterList(): Promise<MonsterSummary[]> {
  const data = await fetchFromDndApi<{ results: unknown[] }>("/api/2014/monsters");
  return MonsterSummarySchema.array().parse(data.results);
}

export async function getMonsterByIndex(index: string): Promise<Monster> {
  const data = await fetchFromDndApi<unknown>(`/api/2014/monsters/${index}`);
  return MonsterSchema.parse(data);
}
