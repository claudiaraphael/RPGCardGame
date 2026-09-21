// ==========================================================
// SCHEMAS ZOD REPETIDOS ENTRE ENTIDADES DA D&D 5E API
// ==========================================================
// O Mapa dos Dados (backend/.to-do/documentation/Mapa dos Dados de D&D5e.md)
// mostra o mesmo formato pequeno se repetindo em várias entidades. Em vez
// de redefinir o mesmo z.object() em 10+ arquivos, ficam aqui uma vez só.

import { z } from "zod";

// Referência cruzada entre recursos da API: aparece em praticamente toda
// entidade (ex: school de uma spell, class de uma feature, race de uma
// subrace...). Sempre os mesmos 3 campos.
export const ApiReferenceSchema = z.object({
  index: z.string(),
  name: z.string(),
  url: z.string(),
});
export type ApiReference = z.infer<typeof ApiReferenceSchema>;

// { quantity, unit } — usado em custo de equipamento e ouro inicial de
// background (ex: { "quantity": 15, "unit": "gp" }).
export const QuantityUnitSchema = z.object({
  quantity: z.number(),
  unit: z.string(),
});

// { ability_score, bonus } — bônus de atributo de raça/subraça.
export const AbilityBonusSchema = z.object({
  ability_score: ApiReferenceSchema,
  bonus: z.number(),
});

// { equipment, quantity } — item de equipamento inicial de classe/background.
export const EquipmentQuantitySchema = z.object({
  equipment: ApiReferenceSchema,
  quantity: z.number(),
});

// { ability_score, minimum_score } — pré-requisito de feat/multiclasse.
export const AbilityScorePrerequisiteSchema = z.object({
  ability_score: ApiReferenceSchema,
  minimum_score: z.number(),
});

// { dc_type, dc_value, success_type } — teste de resistência de spell/monstro.
export const DcSchema = z.object({
  dc_type: ApiReferenceSchema,
  dc_value: z.number(),
  success_type: z.string(),
});

// { damage_type, damage_dice } — dano de ação/spell de monstro.
export const DamageSchema = z.object({
  damage_type: ApiReferenceSchema,
  damage_dice: z.string(),
});

// { type, times } — quantas vezes por dia/descanso uma habilidade pode ser
// usada (ex: Enslave do aboleth, "3 vezes por dia"). Confirmado num teste
// manual: ações que "recarregam" com um dado (ex: Acid Breath de dragões)
// não têm "times" — têm "dice"/"min_value" em vez disso. Por isso os três
// campos além de "type" são opcionais, cobrindo os dois casos reais.
export const UsageSchema = z.object({
  type: z.string(),
  times: z.number().optional(),
  dice: z.string().optional(),
  min_value: z.number().optional(),
});

// ----------------------------------------------------------
// ESTRUTURA DE "ESCOLHA" (Choice / OptionSet / Option)
// ----------------------------------------------------------
// Usada em backgrounds, classes, races... pra representar "escolha N destes
// M itens" (ex: "escolha 2 perícias entre Atletismo, Intimidação..."). É
// recursiva: uma Option pode ser do tipo "choice", que contém outra Choice
// dentro — por isso os três schemas abaixo se referenciam via z.lazy().

// Um item dentro de "options" de um options_array. O formato muda conforme
// "option_type" (união: referência simples, referência com quantidade,
// texto livre, ideal com alinhamentos, ou outra escolha aninhada).
export const OptionSchema: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    z.object({
      option_type: z.literal("reference"),
      item: ApiReferenceSchema,
    }),
    z.object({
      option_type: z.literal("counted_reference"),
      count: z.number(),
      of: ApiReferenceSchema,
    }),
    z.object({
      option_type: z.literal("string"),
      string: z.string(),
    }),
    z.object({
      option_type: z.literal("ideal"),
      desc: z.string(),
      alignments: z.array(ApiReferenceSchema),
    }),
    // Confirmado num teste manual: ações de monstro com dano variável (ex:
    // lança que pode ser usada com uma ou duas mãos) representam cada
    // alternativa como uma "option_type": "damage" dentro de um choice —
    // não como um Damage direto.
    z.object({
      option_type: z.literal("damage"),
      notes: z.string().optional(),
      damage_type: ApiReferenceSchema,
      damage_dice: z.string(),
    }),
    z.object({
      option_type: z.literal("choice"),
      choice: ChoiceSchema,
    }),
  ])
);

// De onde vêm as opções de uma escolha: lista fixa de opções, categoria
// inteira de equipamento, ou uma lista de recursos da própria API.
export const OptionSetSchema: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    z.object({
      option_set_type: z.literal("options_array"),
      options: z.array(OptionSchema),
    }),
    z.object({
      option_set_type: z.literal("equipment_category"),
      equipment_category: ApiReferenceSchema,
    }),
    z.object({
      option_set_type: z.literal("resource_list"),
      resource_list_url: z.string(),
    }),
  ])
);

// "Escolha N itens do tipo X, a partir de Y" — ex: proficiency_choices de
// uma classe, language_options de um background.
export const ChoiceSchema: z.ZodType<unknown> = z.lazy(() =>
  z.object({
    desc: z.string().optional(),
    choose: z.number(),
    type: z.string(),
    from: OptionSetSchema,
  })
);
