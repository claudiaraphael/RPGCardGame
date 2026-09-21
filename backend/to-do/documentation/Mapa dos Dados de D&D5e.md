# Mapa dos Dados de D&D5e

Gerado em 2026-09-18 a partir de `https://www.dnd5eapi.co/api/2014`.
Pra cada categoria: (1) o shape da resposta de LISTA e (2) o JSON completo de UM item de exemplo (o primeiro da lista), pra servir de base real pra modelar as interfaces em TypeScript.

## Índice de categorias

- [ability-scores](#ability-scores) — `/api/2014/ability-scores`
- [alignments](#alignments) — `/api/2014/alignments`
- [backgrounds](#backgrounds) — `/api/2014/backgrounds`
- [classes](#classes) — `/api/2014/classes`
- [conditions](#conditions) — `/api/2014/conditions`
- [damage-types](#damage-types) — `/api/2014/damage-types`
- [equipment](#equipment) — `/api/2014/equipment`
- [equipment-categories](#equipment-categories) — `/api/2014/equipment-categories`
- [feats](#feats) — `/api/2014/feats`
- [features](#features) — `/api/2014/features`
- [languages](#languages) — `/api/2014/languages`
- [magic-items](#magic-items) — `/api/2014/magic-items`
- [magic-schools](#magic-schools) — `/api/2014/magic-schools`
- [monsters](#monsters) — `/api/2014/monsters`
- [proficiencies](#proficiencies) — `/api/2014/proficiencies`
- [races](#races) — `/api/2014/races`
- [rule-sections](#rule-sections) — `/api/2014/rule-sections`
- [rules](#rules) — `/api/2014/rules`
- [skills](#skills) — `/api/2014/skills`
- [spells](#spells) — `/api/2014/spells`
- [subclasses](#subclasses) — `/api/2014/subclasses`
- [subraces](#subraces) — `/api/2014/subraces`
- [traits](#traits) — `/api/2014/traits`
- [weapon-properties](#weapon-properties) — `/api/2014/weapon-properties`

---

## ability-scores

Endpoint de lista: `GET /api/2014/ability-scores`

### Shape da lista

```json
{
  "count": 6,
  "results": [
    {
      "index": "cha",
      "name": "CHA",
      "url": "/api/2014/ability-scores/cha"
    },
    {
      "index": "con",
      "name": "CON",
      "url": "/api/2014/ability-scores/con"
    },
    {
      "index": "dex",
      "name": "DEX",
      "url": "/api/2014/ability-scores/dex"
    },
    {
      "index": "int",
      "name": "INT",
      "url": "/api/2014/ability-scores/int"
    },
    {
      "index": "str",
      "name": "STR",
      "url": "/api/2014/ability-scores/str"
    },
    {
      "index": "wis",
      "name": "WIS",
      "url": "/api/2014/ability-scores/wis"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/ability-scores/cha`)

```json
{
  "index": "cha",
  "name": "CHA",
  "full_name": "Charisma",
  "desc": [
    "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."
  ],
  "skills": [
    {
      "name": "Deception",
      "index": "deception",
      "url": "/api/2014/skills/deception"
    },
    {
      "name": "Intimidation",
      "index": "intimidation",
      "url": "/api/2014/skills/intimidation"
    },
    {
      "name": "Performance",
      "index": "performance",
      "url": "/api/2014/skills/performance"
    },
    {
      "name": "Persuasion",
      "index": "persuasion",
      "url": "/api/2014/skills/persuasion"
    }
  ],
  "url": "/api/2014/ability-scores/cha",
  "updated_at": "2026-04-01T20:35:36.010Z"
}
```

---

## alignments

Endpoint de lista: `GET /api/2014/alignments`

### Shape da lista

```json
{
  "count": 9,
  "results": [
    {
      "index": "chaotic-evil",
      "name": "Chaotic Evil",
      "url": "/api/2014/alignments/chaotic-evil"
    },
    {
      "index": "chaotic-good",
      "name": "Chaotic Good",
      "url": "/api/2014/alignments/chaotic-good"
    },
    {
      "index": "chaotic-neutral",
      "name": "Chaotic Neutral",
      "url": "/api/2014/alignments/chaotic-neutral"
    },
    {
      "index": "lawful-evil",
      "name": "Lawful Evil",
      "url": "/api/2014/alignments/lawful-evil"
    },
    {
      "index": "lawful-good",
      "name": "Lawful Good",
      "url": "/api/2014/alignments/lawful-good"
    },
    {
      "index": "lawful-neutral",
      "name": "Lawful Neutral",
      "url": "/api/2014/alignments/lawful-neutral"
    },
    {
      "index": "neutral",
      "name": "Neutral",
      "url": "/api/2014/alignments/neutral"
    },
    {
      "index": "neutral-evil",
      "name": "Neutral Evil",
      "url": "/api/2014/alignments/neutral-evil"
    },
    {
      "index": "neutral-good",
      "name": "Neutral Good",
      "url": "/api/2014/alignments/neutral-good"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/alignments/chaotic-evil`)

```json
{
  "index": "chaotic-evil",
  "name": "Chaotic Evil",
  "abbreviation": "CE",
  "desc": "Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.",
  "url": "/api/2014/alignments/chaotic-evil",
  "updated_at": "2026-04-01T20:35:36.175Z"
}
```

---

## backgrounds

Endpoint de lista: `GET /api/2014/backgrounds`

### Shape da lista

```json
{
  "count": 1,
  "results": [
    {
      "index": "acolyte",
      "name": "Acolyte",
      "url": "/api/2014/backgrounds/acolyte"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/backgrounds/acolyte`)

```json
{
  "index": "acolyte",
  "name": "Acolyte",
  "starting_proficiencies": [
    {
      "index": "skill-insight",
      "name": "Skill: Insight",
      "url": "/api/2014/proficiencies/skill-insight"
    },
    {
      "index": "skill-religion",
      "name": "Skill: Religion",
      "url": "/api/2014/proficiencies/skill-religion"
    }
  ],
  "language_options": {
    "choose": 2,
    "type": "languages",
    "from": {
      "option_set_type": "resource_list",
      "resource_list_url": "/api/2014/languages"
    }
  },
  "starting_equipment": [
    {
      "equipment": {
        "index": "clothes-common",
        "name": "Clothes, common",
        "url": "/api/2014/equipment/clothes-common"
      },
      "quantity": 1
    },
    {
      "equipment": {
        "index": "pouch",
        "name": "Pouch",
        "url": "/api/2014/equipment/pouch"
      },
      "quantity": 1
    }
  ],
  "starting_equipment_options": [
    {
      "choose": 1,
      "type": "equipment",
      "from": {
        "option_set_type": "equipment_category",
        "equipment_category": {
          "index": "holy-symbols",
          "name": "Holy Symbols",
          "url": "/api/2014/equipment-categories/holy-symbols"
        }
      }
    }
  ],
  "feature": {
    "name": "Shelter of the Faithful",
    "desc": [
      "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.",
      "You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
    ]
  },
  "personality_traits": {
    "choose": 2,
    "type": "personality_traits",
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "string",
          "string": "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."
        },
        {
          "option_type": "string",
          "string": "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace."
        },
        {
          "option_type": "string",
          "string": "I see omens in every event and action. The gods try to speak to us, we just need to listen."
        },
        {
          "option_type": "string",
          "string": "Nothing can shake my optimistic attitude."
        },
        {
          "option_type": "string",
          "string": "I quote (or misquote) sacred texts and proverbs in almost every situation."
        },
        {
          "option_type": "string",
          "string": "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods."
        },
        {
          "option_type": "string",
          "string": "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me."
        },
        {
          "option_type": "string",
          "string": "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
        }
      ]
    }
  },
  "ideals": {
    "choose": 1,
    "type": "ideals",
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "ideal",
          "desc": "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.",
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/2014/alignments/lawful-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/2014/alignments/lawful-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/2014/alignments/lawful-evil"
            }
          ]
        },
        {
          "option_type": "ideal",
          "desc": "Charity. I always try to help those in need, no matter what the personal cost.",
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/2014/alignments/lawful-good"
            },
            {
              "index": "neutral-good",
              "name": "Neutral Good",
              "url": "/api/2014/alignments/neutral-good"
            },
            {
              "index": "chaotic-good",
              "name": "Chaotic Good",
              "url": "/api/2014/alignments/chaotic-good"
            }
          ]
        },
        {
          "option_type": "ideal",
          "desc": "Change. We must help bring about the changes the gods are constantly working in the world.",
          "alignments": [
            {
              "index": "chaotic-good",
              "name": "Chaotic Good",
              "url": "/api/2014/alignments/chaotic-good"
            },
            {
              "index": "chaotic-neutral",
              "name": "Chaotic Neutral",
              "url": "/api/2014/alignments/chaotic-neutral"
            },
            {
              "index": "chaotic-evil",
              "name": "Chaotic Evil",
              "url": "/api/2014/alignments/chaotic-evil"
            }
          ]
        },
        {
          "option_type": "ideal",
          "desc": "Power. I hope to one day rise to the top of my faith's religious hierarchy.",
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/2014/alignments/lawful-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/2014/alignments/lawful-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/2014/alignments/lawful-evil"
            }
          ]
        },
        {
          "option_type": "ideal",
          "desc": "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.",
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/2014/alignments/lawful-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/2014/alignments/lawful-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/2014/alignments/lawful-evil"
            }
          ]
        },
        {
          "option_type": "ideal",
          "desc": "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.",
          "alignments": [
            {
              "index": "lawful-good",
              "name": "Lawful Good",
              "url": "/api/2014/alignments/lawful-good"
            },
            {
              "index": "neutral-good",
              "name": "Neutral Good",
              "url": "/api/2014/alignments/neutral-good"
            },
            {
              "index": "chaotic-good",
              "name": "Chaotic Good",
              "url": "/api/2014/alignments/chaotic-good"
            },
            {
              "index": "lawful-neutral",
              "name": "Lawful Neutral",
              "url": "/api/2014/alignments/lawful-neutral"
            },
            {
              "index": "neutral",
              "name": "Neutral",
              "url": "/api/2014/alignments/neutral"
            },
            {
              "index": "chaotic-neutral",
              "name": "Chaotic Neutral",
              "url": "/api/2014/alignments/chaotic-neutral"
            },
            {
              "index": "lawful-evil",
              "name": "Lawful Evil",
              "url": "/api/2014/alignments/lawful-evil"
            },
            {
              "index": "neutral-evil",
              "name": "Neutral Evil",
              "url": "/api/2014/alignments/neutral-evil"
            },
            {
              "index": "chaotic-evil",
              "name": "Chaotic Evil",
              "url": "/api/2014/alignments/chaotic-evil"
            }
          ]
        }
      ]
    }
  },
  "bonds": {
    "choose": 1,
    "type": "bonds",
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "string",
          "string": "I would die to recover an ancient relic of my faith that was lost long ago."
        },
        {
          "option_type": "string",
          "string": "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic."
        },
        {
          "option_type": "string",
          "string": "I owe my life to the priest who took me in when my parents died."
        },
        {
          "option_type": "string",
          "string": "Everything I do is for the common people."
        },
        {
          "option_type": "string",
          "string": "I will do anything to protect the temple where I served."
        },
        {
          "option_type": "string",
          "string": "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
        }
      ]
    }
  },
  "flaws": {
    "choose": 1,
    "type": "flaws",
    "from": {
      "option_set_type": "options_array",
      "options": [
        {
          "option_type": "string",
          "string": "I judge others harshly, and myself even more severely."
        },
        {
          "option_type": "string",
          "string": "I put too much trust in those who wield power within my temple's hierarchy."
        },
        {
          "option_type": "string",
          "string": "My piety sometimes leads me to blindly trust those that profess faith in my god."
        },
        {
          "option_type": "string",
          "string": "I am inflexible in my thinking."
        },
        {
          "option_type": "string",
          "string": "I am suspicious of strangers and expect the worst of them."
        },
        {
          "option_type": "string",
          "string": "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
        }
      ]
    }
  },
  "url": "/api/2014/backgrounds/acolyte",
  "updated_at": "2026-05-29T02:18:25.809Z",
  "starting_gold": {
    "quantity": 15,
    "unit": "gp"
  }
}
```

---

## classes

Endpoint de lista: `GET /api/2014/classes`

### Shape da lista

```json
{
  "count": 12,
  "results": [
    {
      "index": "barbarian",
      "name": "Barbarian",
      "url": "/api/2014/classes/barbarian"
    },
    {
      "index": "bard",
      "name": "Bard",
      "url": "/api/2014/classes/bard"
    },
    {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/2014/classes/cleric"
    },
    {
      "index": "druid",
      "name": "Druid",
      "url": "/api/2014/classes/druid"
    },
    {
      "index": "fighter",
      "name": "Fighter",
      "url": "/api/2014/classes/fighter"
    },
    {
      "index": "monk",
      "name": "Monk",
      "url": "/api/2014/classes/monk"
    },
    {
      "index": "paladin",
      "name": "Paladin",
      "url": "/api/2014/classes/paladin"
    },
    {
      "index": "ranger",
      "name": "Ranger",
      "url": "/api/2014/classes/ranger"
    },
    {
      "index": "rogue",
      "name": "Rogue",
      "url": "/api/2014/classes/rogue"
    },
    {
      "index": "sorcerer",
      "name": "Sorcerer",
      "url": "/api/2014/classes/sorcerer"
    },
    {
      "index": "warlock",
      "name": "Warlock",
      "url": "/api/2014/classes/warlock"
    },
    {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/2014/classes/wizard"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/classes/barbarian`)

```json
{
  "index": "barbarian",
  "name": "Barbarian",
  "hit_die": 12,
  "proficiency_choices": [
    {
      "desc": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
      "choose": 2,
      "type": "proficiencies",
      "from": {
        "option_set_type": "options_array",
        "options": [
          {
            "option_type": "reference",
            "item": {
              "index": "skill-animal-handling",
              "name": "Skill: Animal Handling",
              "url": "/api/2014/proficiencies/skill-animal-handling"
            }
          },
          {
            "option_type": "reference",
            "item": {
              "index": "skill-athletics",
              "name": "Skill: Athletics",
              "url": "/api/2014/proficiencies/skill-athletics"
            }
          },
          {
            "option_type": "reference",
            "item": {
              "index": "skill-intimidation",
              "name": "Skill: Intimidation",
              "url": "/api/2014/proficiencies/skill-intimidation"
            }
          },
          {
            "option_type": "reference",
            "item": {
              "index": "skill-nature",
              "name": "Skill: Nature",
              "url": "/api/2014/proficiencies/skill-nature"
            }
          },
          {
            "option_type": "reference",
            "item": {
              "index": "skill-perception",
              "name": "Skill: Perception",
              "url": "/api/2014/proficiencies/skill-perception"
            }
          },
          {
            "option_type": "reference",
            "item": {
              "index": "skill-survival",
              "name": "Skill: Survival",
              "url": "/api/2014/proficiencies/skill-survival"
            }
          }
        ]
      }
    }
  ],
  "proficiencies": [
    {
      "index": "light-armor",
      "name": "Light Armor",
      "url": "/api/2014/proficiencies/light-armor"
    },
    {
      "index": "medium-armor",
      "name": "Medium Armor",
      "url": "/api/2014/proficiencies/medium-armor"
    },
    {
      "index": "shields",
      "name": "Shields",
      "url": "/api/2014/proficiencies/shields"
    },
    {
      "index": "simple-weapons",
      "name": "Simple Weapons",
      "url": "/api/2014/proficiencies/simple-weapons"
    },
    {
      "index": "martial-weapons",
      "name": "Martial Weapons",
      "url": "/api/2014/proficiencies/martial-weapons"
    },
    {
      "index": "saving-throw-str",
      "name": "Saving Throw: STR",
      "url": "/api/2014/proficiencies/saving-throw-str"
    },
    {
      "index": "saving-throw-con",
      "name": "Saving Throw: CON",
      "url": "/api/2014/proficiencies/saving-throw-con"
    }
  ],
  "saving_throws": [
    {
      "index": "str",
      "name": "STR",
      "url": "/api/2014/ability-scores/str"
    },
    {
      "index": "con",
      "name": "CON",
      "url": "/api/2014/ability-scores/con"
    }
  ],
  "starting_equipment": [
    {
      "equipment": {
        "index": "explorers-pack",
        "name": "Explorer's Pack",
        "url": "/api/2014/equipment/explorers-pack"
      },
      "quantity": 1
    },
    {
      "equipment": {
        "index": "javelin",
        "name": "Javelin",
        "url": "/api/2014/equipment/javelin"
      },
      "quantity": 4
    }
  ],
  "starting_equipment_options": [
    {
      "desc": "(a) a greataxe or (b) any martial melee weapon",
      "choose": 1,
      "type": "equipment",
      "from": {
        "option_set_type": "options_array",
        "options": [
          {
            "option_type": "counted_reference",
            "count": 1,
            "of": {
              "index": "greataxe",
              "name": "Greataxe",
              "url": "/api/2014/equipment/greataxe"
            }
          },
          {
            "option_type": "choice",
            "choice": {
              "desc": "any martial melee weapon",
              "choose": 1,
              "type": "equipment",
              "from": {
                "option_set_type": "equipment_category",
                "equipment_category": {
                  "index": "martial-melee-weapons",
                  "name": "Martial Melee Weapons",
                  "url": "/api/2014/equipment-categories/martial-melee-weapons"
                }
              }
            }
          }
        ]
      }
    },
    {
      "desc": "(a) two handaxes or (b) any simple weapon",
      "choose": 1,
      "type": "equipment",
      "from": {
        "option_set_type": "options_array",
        "options": [
          {
            "option_type": "counted_reference",
            "count": 2,
            "of": {
              "index": "handaxe",
              "name": "Handaxe",
              "url": "/api/2014/equipment/handaxe"
            }
          },
          {
            "option_type": "choice",
            "choice": {
              "desc": "any simple weapon",
              "choose": 1,
              "type": "equipment",
              "from": {
                "option_set_type": "equipment_category",
                "equipment_category": {
                  "index": "simple-weapons",
                  "name": "Simple Weapons",
                  "url": "/api/2014/equipment-categories/simple-weapons"
                }
              }
            }
          }
        ]
      }
    }
  ],
  "class_levels": "/api/2014/classes/barbarian/levels",
  "multi_classing": {
    "prerequisites": [
      {
        "ability_score": {
          "index": "str",
          "name": "STR",
          "url": "/api/2014/ability-scores/str"
        },
        "minimum_score": 13
      }
    ],
    "proficiencies": [
      {
        "index": "shields",
        "name": "Shields",
        "url": "/api/2014/proficiencies/shields"
      },
      {
        "index": "simple-weapons",
        "name": "Simple Weapons",
        "url": "/api/2014/proficiencies/simple-weapons"
      },
      {
        "index": "martial-weapons",
        "name": "Martial Weapons",
        "url": "/api/2014/proficiencies/martial-weapons"
      }
    ]
  },
  "subclasses": [
    {
      "index": "berserker",
      "name": "Berserker",
      "url": "/api/2014/subclasses/berserker"
    }
  ],
  "url": "/api/2014/classes/barbarian",
  "updated_at": "2026-04-01T20:35:36.453Z"
}
```

---

## conditions

Endpoint de lista: `GET /api/2014/conditions`

### Shape da lista

```json
{
  "count": 15,
  "results": [
    {
      "index": "blinded",
      "name": "Blinded",
      "url": "/api/2014/conditions/blinded"
    },
    {
      "index": "charmed",
      "name": "Charmed",
      "url": "/api/2014/conditions/charmed"
    },
    {
      "index": "deafened",
      "name": "Deafened",
      "url": "/api/2014/conditions/deafened"
    },
    {
      "index": "exhaustion",
      "name": "Exhaustion",
      "url": "/api/2014/conditions/exhaustion"
    },
    {
      "index": "frightened",
      "name": "Frightened",
      "url": "/api/2014/conditions/frightened"
    },
    {
      "index": "grappled",
      "name": "Grappled",
      "url": "/api/2014/conditions/grappled"
    },
    {
      "index": "incapacitated",
      "name": "Incapacitated",
      "url": "/api/2014/conditions/incapacitated"
    },
    {
      "index": "invisible",
      "name": "Invisible",
      "url": "/api/2014/conditions/invisible"
    },
    {
      "index": "paralyzed",
      "name": "Paralyzed",
      "url": "/api/2014/conditions/paralyzed"
    },
    {
      "index": "petrified",
      "name": "Petrified",
      "url": "/api/2014/conditions/petrified"
    },
    {
      "index": "poisoned",
      "name": "Poisoned",
      "url": "/api/2014/conditions/poisoned"
    },
    {
      "index": "prone",
      "name": "Prone",
      "url": "/api/2014/conditions/prone"
    },
    {
      "index": "restrained",
      "name": "Restrained",
      "url": "/api/2014/conditions/restrained"
    }
```

### Exemplo de item completo (`GET /api/2014/conditions/blinded`)

```json
{
  "index": "blinded",
  "name": "Blinded",
  "desc": [
    "- A blinded creature can't see and automatically fails any ability check that requires sight.",
    "- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."
  ],
  "url": "/api/2014/conditions/blinded",
  "updated_at": "2026-04-01T20:35:36.710Z"
}
```

---

## damage-types

Endpoint de lista: `GET /api/2014/damage-types`

### Shape da lista

```json
{
  "count": 13,
  "results": [
    {
      "index": "acid",
      "name": "Acid",
      "url": "/api/2014/damage-types/acid"
    },
    {
      "index": "bludgeoning",
      "name": "Bludgeoning",
      "url": "/api/2014/damage-types/bludgeoning"
    },
    {
      "index": "cold",
      "name": "Cold",
      "url": "/api/2014/damage-types/cold"
    },
    {
      "index": "fire",
      "name": "Fire",
      "url": "/api/2014/damage-types/fire"
    },
    {
      "index": "force",
      "name": "Force",
      "url": "/api/2014/damage-types/force"
    },
    {
      "index": "lightning",
      "name": "Lightning",
      "url": "/api/2014/damage-types/lightning"
    },
    {
      "index": "necrotic",
      "name": "Necrotic",
      "url": "/api/2014/damage-types/necrotic"
    },
    {
      "index": "piercing",
      "name": "Piercing",
      "url": "/api/2014/damage-types/piercing"
    },
    {
      "index": "poison",
      "name": "Poison",
      "url": "/api/2014/damage-types/poison"
    },
    {
      "index": "psychic",
      "name": "Psychic",
      "url": "/api/2014/damage-types/psychic"
    },
    {
      "index": "radiant",
      "name": "Radiant",
      "url": "/api/2014/damage-types/radiant"
    },
    {
      "index": "slashing",
      "name": "Slashing",
      "url": "/api/2014/damage-types/slashing"
    },
    {
      "index": "thunder",
      "name": "Thunder",
      "url": "/api/2014/damage-types/thunder"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/damage-types/acid`)

```json
{
  "index": "acid",
  "name": "Acid",
  "desc": [
    "The corrosive spray of a black dragon's breath and the dissolving enzymes secreted by a black pudding deal acid damage."
  ],
  "url": "/api/2014/damage-types/acid",
  "updated_at": "2026-04-01T20:35:36.847Z"
}
```

---

## equipment

Endpoint de lista: `GET /api/2014/equipment`

### Shape da lista

```json
{
  "count": 237,
  "results": [
    {
      "index": "abacus",
      "name": "Abacus",
      "url": "/api/2014/equipment/abacus"
    },
    {
      "index": "acid-vial",
      "name": "Acid (vial)",
      "url": "/api/2014/equipment/acid-vial"
    },
    {
      "index": "alchemists-fire-flask",
      "name": "Alchemist's fire (flask)",
      "url": "/api/2014/equipment/alchemists-fire-flask"
    },
    {
      "index": "alchemists-supplies",
      "name": "Alchemist's Supplies",
      "url": "/api/2014/equipment/alchemists-supplies"
    },
    {
      "index": "alms-box",
      "name": "Alms box",
      "url": "/api/2014/equipment/alms-box"
    },
    {
      "index": "amulet",
      "name": "Amulet",
      "url": "/api/2014/equipment/amulet"
    },
    {
      "index": "animal-feed-1-day",
      "name": "Animal Feed (1 day)",
      "url": "/api/2014/equipment/animal-feed-1-day"
    },
    {
      "index": "antitoxin-vial",
      "name": "Antitoxin (vial)",
      "url": "/api/2014/equipment/antitoxin-vial"
    },
    {
      "index": "arrow",
      "name": "Arrow",
      "url": "/api/2014/equipment/arrow"
    },
    {
      "index": "backpack",
      "name": "Backpack",
      "url": "/api/2014/equipment/backpack"
    },
    {
      "index": "bagpipes",
      "name": "Bagpipes",
      "url": "/api/2014/equipment/bagpipes"
    },
    {
      "index": "ball-bearings-bag-of-1000",
      "name": "Ball bearings (bag of 1,000)",
      "url": "/api/2014/equipment/ball-bearings-bag-
```

### Exemplo de item completo (`GET /api/2014/equipment/abacus`)

```json
{
  "desc": [],
  "special": [],
  "index": "abacus",
  "name": "Abacus",
  "equipment_category": {
    "index": "adventuring-gear",
    "name": "Adventuring Gear",
    "url": "/api/2014/equipment-categories/adventuring-gear"
  },
  "gear_category": {
    "index": "standard-gear",
    "name": "Standard Gear",
    "url": "/api/2014/equipment-categories/standard-gear"
  },
  "cost": {
    "quantity": 2,
    "unit": "gp"
  },
  "weight": 2,
  "url": "/api/2014/equipment/abacus",
  "updated_at": "2026-04-01T20:35:37.141Z",
  "contents": [],
  "properties": []
}
```

---

## equipment-categories

Endpoint de lista: `GET /api/2014/equipment-categories`

### Shape da lista

```json
{
  "count": 39,
  "results": [
    {
      "index": "adventuring-gear",
      "name": "Adventuring Gear",
      "url": "/api/2014/equipment-categories/adventuring-gear"
    },
    {
      "index": "ammunition",
      "name": "Ammunition",
      "url": "/api/2014/equipment-categories/ammunition"
    },
    {
      "index": "arcane-foci",
      "name": "Arcane Foci",
      "url": "/api/2014/equipment-categories/arcane-foci"
    },
    {
      "index": "armor",
      "name": "Armor",
      "url": "/api/2014/equipment-categories/armor"
    },
    {
      "index": "artisans-tools",
      "name": "Artisan's Tools",
      "url": "/api/2014/equipment-categories/artisans-tools"
    },
    {
      "index": "druidic-foci",
      "name": "Druidic Foci",
      "url": "/api/2014/equipment-categories/druidic-foci"
    },
    {
      "index": "equipment-packs",
      "name": "Equipment Packs",
      "url": "/api/2014/equipment-categories/equipment-packs"
    },
    {
      "index": "gaming-sets",
      "name": "Gaming Sets",
      "url": "/api/2014/equipment-categories/gaming-sets"
    },
    {
      "index": "heavy-armor",
      "name": "Heavy Armor",
      "url": "/api/2014/equipment-categories/heavy-armor"
    },
    {
      "index": "holy-symbols",
      "name": "Holy Symbols",
      "url": "/api/2014/equipment-categories/holy-symbols"
    },
    {
      "index": "kits",
      "name": "Kits",
      "url": "/api/2014/equipment-categories/kits"
    },
    {
      "index": "land-vehicles",
```

### Exemplo de item completo (`GET /api/2014/equipment-categories/adventuring-gear`)

```json
{
  "index": "adventuring-gear",
  "name": "Adventuring Gear",
  "equipment": [
    {
      "index": "abacus",
      "name": "Abacus",
      "url": "/api/2014/equipment/abacus"
    },
    {
      "index": "acid-vial",
      "name": "Acid (vial)",
      "url": "/api/2014/equipment/acid-vial"
    },
    {
      "index": "alchemists-fire-flask",
      "name": "Alchemist's fire (flask)",
      "url": "/api/2014/equipment/alchemists-fire-flask"
    },
    {
      "index": "arrow",
      "name": "Arrow",
      "url": "/api/2014/equipment/arrow"
    },
    {
      "index": "blowgun-needle",
      "name": "Blowgun needle",
      "url": "/api/2014/equipment/blowgun-needle"
    },
    {
      "index": "crossbow-bolt",
      "name": "Crossbow bolt",
      "url": "/api/2014/equipment/crossbow-bolt"
    },
    {
      "index": "sling-bullet",
      "name": "Sling bullet",
      "url": "/api/2014/equipment/sling-bullet"
    },
    {
      "index": "alms-box",
      "name": "Alms box",
      "url": "/api/2014/equipment/alms-box"
    },
    {
      "index": "amulet",
      "name": "Amulet",
      "url": "/api/2014/equipment/amulet"
    },
    {
      "index": "antitoxin-vial",
      "name": "Antitoxin (vial)",
      "url": "/api/2014/equipment/antitoxin-vial"
    },
    {
      "index": "backpack",
      "name": "Backpack",
      "url": "/api/2014/equipment/backpack"
    },
    {
      "index": "ball-bearings-bag-of-1000",
      "name": "Ball bearings (bag of 1,000)",
      "url": "/api/2014/equipment/ball-bearings-bag-of-1000"
    },
    {
      "index": "barrel",
      "name": "Barrel",
      "url": "/api/2014/equipment/barrel"
    },
    {
      "index": "basket",
      "name": "Basket",
      "url": "/api/2014/equipment/basket"
    },
    {
      "index": "bedroll",
      "name": "Bedroll",
      "url": "/api/2014/equipment/bedroll"
    },
    {
      "index": "bell",
      "name": "Bell",
      "url": "/api/2014/equipment/bell"
    },
    {
      "index": "blanket",
      "name": "Blanket",
      "url": "/api/2014/equipment/blanket"
    },
    {
      "index": "block-and-tackle",
      "name": "Block and tackle",
      "url": "/api/2014/equipment/block-and-tackle"
    },
    {
      "index": "block-of-incense",
      "name": "Block of incense",
      "url": "/api/2014/equipment/block-of-incense"
    },
    {
      "index": "book",
      "name": "Book",
      "url": "/api/2014/equipment/book"
    },
    {
      "index": "bottle-glass",
      "name": "Bottle, glass",
      "url": "/api/2014/equipment/bottle-glass"
    },
    {
      "index": "bucket",
      "name": "Bucket",
      "url": "/api/2014/equipment/bucket"
    },
    {
      "index": "caltrops",
      "name": "Caltrops",
      "url": "/api/2014/equipment/caltrops"
    },
    {
      "index": "candle",
      "name": "Candle",
      "url": "/api/2014/equipment/candle"
    },
    {
      "index": "case-crossbow-bolt",
      "name": "Case, crossbow bolt",
      "url": "/api/2014/equipment/case-crossbow-bolt"
    },
    {
      "index": "case-map-or-scroll",
      "name": "Case, map or scroll",
      "url": "/api/2014/equipment/case-map-or-scroll"
    },
    {
      "index": "censer",
      "name": "Censer",
      "url": "/api/2014/equipment/censer"
    },
    {
      "index": "chain-10-feet",
      "name": "Chain (10 feet)",
      "url": "/api/2014/equipment/chain-10-feet"
    },
    {
      "index": "chalk-1-piece",
      "name": "Chalk (1 piece)",
      "url": "/api/2014/equipment/chalk-1-piece"
    },
    {
      "index": "chest",
      "name": "Chest",
      "url": "/api/2014/equipment/chest"
    },
    {
      "index": "clothes-common",
      "name": "Clothes, common",
      "url": "/api/2014/equipment/clothes-common"
    },
    {
      "index": "clothes-costume",
      "name": "Clothes, costume",
      "url": "/api/2014/equipment/clothes-costume"
    },
    {
      "index": "clothes-fine",
      "name": "Clothes, fine",
      "url": "/api/2014/equipment/clothes-fine"
    },
    {
      "index": "clothes-travelers",
      "name": "Clothes, traveler's",
      "url": "/api/2014/equipment/clothes-travelers"
    },
    {
      "index": "component-pouch",
      "name": "Component pouch",
      "url": "/api/2014/equipment/component-pouch"
    },
    {
      "index": "crowbar",
      "name": "Crowbar",
      "url": "/api/2014/equipment/crowbar"
    },
    {
      "index": "emblem",
      "name": "Emblem",
      "url": "/api/2014/equipment/emblem"
    },
    {
      "index": "fishing-tackle",
      "name": "Fishing tackle",
      "url": "/api/2014/equipment/fishing-tackle"
    },
    {
      "index": "flask-or-tankard",
      "name": "Flask or tankard",
      "url": "/api/2014/equipment/flask-or-tankard"
    },
    {
      "index": "grappling-hook",
      "name": "Grappling hook",
      "url": "/api/2014/equipment/grappling-hook"
    },
    {
      "index": "hammer",
      "name": "Hammer",
      "url": "/api/2014/equipment/hammer"
    },
    {
      "index": "hammer-sledge",
      "name": "Hammer, sledge",
      "url": "/api/2014/equipment/hammer-sledge"
    },
    {
      "index": "holy-water-flask",
      "name": "Holy water (flask)",
      "url": "/api/2014/equipment/holy-water-flask"
    },
    {
      "index": "hourglass",
      "name": "Hourglass",
      "url": "/api/2014/equipment/hourglass"
    },
    {
      "index": "hunting-trap",
      "name": "Hunting trap",
      "url": "/api/2014/equipment/hunting-trap"
    },
    {
      "index": "ink-1-ounce-bottle",
      "name": "Ink (1 ounce bottle)",
      "url": "/api/2014/equipment/ink-1-ounce-bottle"
    },
    {
      "index": "ink-pen",
      "name": "Ink pen",
      "url": "/api/2014/equipment/ink-pen"
    },
    {
      "index": "jug-or-pitcher",
      "name": "Jug or pitcher",
      "url": "/api/2014/equipment/jug-or-pitcher"
    },
    {
      "index": "climbers-kit",
      "name": "Climber's Kit",
      "url": "/api/2014/equipment/climbers-kit"
    },
    {
      "index": "disguise-kit",
      "name": "Disguise Kit",
      "url": "/api/2014/equipment/disguise-kit"
    },
    {
      "index": "forgery-kit",
      "name": "Forgery Kit",
      "url": "/api/2014/equipment/forgery-kit"
    },
    {
      "index": "herbalism-kit",
      "name": "Herbalism Kit",
      "url": "/api/2014/equipment/herbalism-kit"
    },
    {
      "index": "healers-kit",
      "name": "Healer's Kit",
      "url": "/api/2014/equipment/healers-kit"
    },
    {
      "index": "mess-kit",
      "name": "Mess Kit",
      "url": "/api/2014/equipment/mess-kit"
    },
    {
      "index": "poisoners-kit",
      "name": "Poisoner's Kit",
      "url": "/api/2014/equipment/poisoners-kit"
    },
    {
      "index": "ladder-10-foot",
      "name": "Ladder (10-foot)",
      "url": "/api/2014/equipment/ladder-10-foot"
    },
    {
      "index": "lamp",
      "name": "Lamp",
      "url": "/api/2014/equipment/lamp"
    },
    {
      "index": "lantern-bullseye",
      "name": "Lantern, bullseye",
      "url": "/api/2014/equipment/lantern-bullseye"
    },
    {
      "index": "lantern-hooded",
      "name": "Lantern, hooded",
      "url": "/api/2014/equipment/lantern-hooded"
    },
    {
      "index": "little-bag-of-sand",
      "name": "Little bag of sand",
      "url": "/api/2014/equipment/little-bag-of-sand"
    },
    {
      "index": "lock",
      "name": "Lock",
      "url": "/api/2014/equipment/lock"
    },
    {
      "index": "magnifying-glass",
      "name": "Magnifying glass",
      "url": "/api/2014/equipment/magnifying-glass"
    },
    {
      "index": "manacles",
      "name": "Manacles",
      "url": "/api/2014/equipment/manacles"
    },
    {
      "index": "mirror-steel",
      "name": "Mirror, steel",
      "url": "/api/2014/equipment/mirror-steel"
    },
    {
      "index": "oil-flask",
      "name": "Oil (flask)",
      "url": "/api/2014/equipment/oil-flask"
    },
    {
      "index": "paper-one-sheet",
      "name": "Paper (one sheet)",
      "url": "/api/2014/equipment/paper-one-sheet"
    },
    {
      "index": "parchment-one-sheet",
      "name": "Parchment (one sheet)",
      "url": "/api/2014/equipment/parchment-one-sheet"
    },
    {
      "index": "perfume-vial",
      "name": "Perfume (vial)",
      "url": "/api/2014/equipment/perfume-vial"
    },
    {
      "index": "pick-miners",
      "name": "Pick, miner's",
      "url": "/api/2014/equipment/pick-miners"
    },
    {
      "index": "piton",
      "name": "Piton",
      "url": "/api/2014/equipment/piton"
    },
    {
      "index": "poison-basic-vial",
      "name": "Poison, basic (vial)",
      "url": "/api/2014/equipment/poison-basic-vial"
    },
    {
      "index": "pole-10-foot",
      "name": "Pole (10-foot)",
      "url": "/api/2014/equipment/pole-10-foot"
    },
    {
      "index": "pot-iron",
      "name": "Pot, iron",
      "url": "/api/2014/equipment/pot-iron"
    },
    {
      "index": "pouch",
      "name": "Pouch",
      "url": "/api/2014/equipment/pouch"
    },
    {
      "index": "quiver",
      "name": "Quiver",
      "url": "/api/2014/equipment/quiver"
    },
    {
      "index": "ram-portable",
      "name": "Ram, portable",
      "url": "/api/2014/equipment/ram-portable"
    },
    {
      "index": "rations-1-day",
      "name": "Rations (1 day)",
      "url": "/api/2014/equipment/rations-1-day"
    },
    {
      "index": "reliquary",
      "name": "Reliquary",
      "url": "/api/2014/equipment/reliquary"
    },
    {
      "index": "robes",
      "name": "Robes",
      "url": "/api/2014/equipment/robes"
    },
    {
      "index": "rope-hempen-50-feet",
      "name": "Rope, hempen (50 feet)",
      "url": "/api/2014/equipment/rope-hempen-50-feet"
    },
    {
      "index": "rope-silk-50-feet",
      "name": "Rope, silk (50 feet)",
      "url": "/api/2014/equipment/rope-silk-50-feet"
    },
    {
      "index": "sack",
      "name": "Sack",
      "url": "/api/2014/equipment/sack"
    },
    {
      "index": "scale-merchants",
      "name": "Scale, merchant's",
      "url": "/api/2014/equipment/scale-merchants"
    },
    {
      "index": "sealing-wax",
      "name": "Sealing wax",
      "url": "/api/2014/equipment/sealing-wax"
    },
    {
      "index": "shovel",
      "name": "Shovel",
      "url": "/api/2014/equipment/shovel"
    },
    {
      "index": "signal-whistle",
      "name": "Signal whistle",
      "url": "/api/2014/equipment/signal-whistle"
    },
    {
      "index": "signet-ring",
      "name": "Signet ring",
      "url": "/api/2014/equipment/signet-ring"
    },
    {
      "index": "small-knife",
      "name": "Small knife",
      "url": "/api/2014/equipment/small-knife"
    },
    {
      "index": "soap",
      "name": "Soap",
      "url": "/api/2014/equipment/soap"
    },
    {
      "index": "spellbook",
      "name": "Spellbook",
      "url": "/api/2014/equipment/spellbook"
    },
    {
      "index": "spike-iron",
      "name": "Spike, iron",
      "url": "/api/2014/equipment/spike-iron"
    },
    {
      "index": "spyglass",
      "name": "Spyglass",
      "url": "/api/2014/equipment/spyglass"
    },
    {
      "index": "string-10-feet",
      "name": "String (10 feet)",
      "url": "/api/2014/equipment/string-10-feet"
    },
    {
      "index": "tent-two-person",
      "name": "Tent, two-person",
      "url": "/api/2014/equipment/tent-two-person"
    },
    {
      "index": "tinderbox",
      "name": "Tinderbox",
      "url": "/api/2014/equipment/tinderbox"
    },
    {
      "index": "torch",
      "name": "Torch",
      "url": "/api/2014/equipment/torch"
    },
    {
      "index": "vestments",
      "name": "Vestments",
      "url": "/api/2014/equipment/vestments"
    },
    {
      "index": "vial",
      "name": "Vial",
      "url": "/api/2014/equipment/vial"
    },
    {
      "index": "waterskin",
      "name": "Waterskin",
      "url": "/api/2014/equipment/waterskin"
    },
    {
      "index": "whetstone",
      "name": "Whetstone",
      "url": "/api/2014/equipment/whetstone"
    },
    {
      "index": "burglars-pack",
      "name": "Burglar's Pack",
      "url": "/api/2014/equipment/burglars-pack"
    },
    {
      "index": "diplomats-pack",
      "name": "Diplomat's Pack",
      "url": "/api/2014/equipment/diplomats-pack"
    },
    {
      "index": "dungeoneers-pack",
      "name": "Dungeoneer's Pack",
      "url": "/api/2014/equipment/dungeoneers-pack"
    },
    {
      "index": "entertainers-pack",
      "name": "Entertainer's Pack",
      "url": "/api/2014/equipment/entertainers-pack"
    },
    {
      "index": "explorers-pack",
      "name": "Explorer's Pack",
      "url": "/api/2014/equipment/explorers-pack"
    },
    {
      "index": "priests-pack",
      "name": "Priest's Pack",
      "url": "/api/2014/equipment/priests-pack"
    },
    {
      "index": "scholars-pack",
      "name": "Scholar's Pack",
      "url": "/api/2014/equipment/scholars-pack"
    },
    {
      "index": "crystal",
      "name": "Crystal",
      "url": "/api/2014/equipment/crystal"
    },
    {
      "index": "orb",
      "name": "Orb",
      "url": "/api/2014/equipment/orb"
    },
    {
      "index": "rod",
      "name": "Rod",
      "url": "/api/2014/equipment/rod"
    },
    {
      "index": "staff",
      "name": "Staff",
      "url": "/api/2014/equipment/staff"
    },
    {
      "index": "wand",
      "name": "Wand",
      "url": "/api/2014/equipment/wand"
    },
    {
      "index": "sprig-of-mistletoe",
      "name": "Sprig of mistletoe",
      "url": "/api/2014/equipment/sprig-of-mistletoe"
    },
    {
      "index": "totem",
      "name": "Totem",
      "url": "/api/2014/equipment/totem"
    },
    {
      "index": "wooden-staff",
      "name": "Wooden staff",
      "url": "/api/2014/equipment/wooden-staff"
    },
    {
      "index": "yew-wand",
      "name": "Yew wand",
      "url": "/api/2014/equipment/yew-wand"
    }
  ],
  "url": "/api/2014/equipment-categories/adventuring-gear",
  "updated_at": "2026-04-01T20:35:36.981Z"
}
```

---

## feats

Endpoint de lista: `GET /api/2014/feats`

### Shape da lista

```json
{
  "count": 1,
  "results": [
    {
      "index": "grappler",
      "name": "Grappler",
      "url": "/api/2014/feats/grappler"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/feats/grappler`)

```json
{
  "index": "grappler",
  "name": "Grappler",
  "prerequisites": [
    {
      "ability_score": {
        "index": "str",
        "name": "STR",
        "url": "/api/2014/ability-scores/str"
      },
      "minimum_score": 13
    }
  ],
  "desc": [
    "You’ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:",
    "- You have advantage on Attack Rolls against a creature you are Grappling.",
    "- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends."
  ],
  "url": "/api/2014/feats/grappler",
  "updated_at": "2026-04-01T20:35:37.295Z"
}
```

---

## features

Endpoint de lista: `GET /api/2014/features`

### Shape da lista

```json
{
  "count": 407,
  "results": [
    {
      "index": "action-surge-1-use",
      "name": "Action Surge (1 use)",
      "url": "/api/2014/features/action-surge-1-use"
    },
    {
      "index": "action-surge-2-uses",
      "name": "Action Surge (2 uses)",
      "url": "/api/2014/features/action-surge-2-uses"
    },
    {
      "index": "additional-fighting-style",
      "name": "Additional Fighting Style",
      "url": "/api/2014/features/additional-fighting-style"
    },
    {
      "index": "additional-magical-secrets",
      "name": "Additional Magical Secrets",
      "url": "/api/2014/features/additional-magical-secrets"
    },
    {
      "index": "arcane-recovery",
      "name": "Arcane Recovery",
      "url": "/api/2014/features/arcane-recovery"
    },
    {
      "index": "arcane-tradition",
      "name": "Arcane Tradition",
      "url": "/api/2014/features/arcane-tradition"
    },
    {
      "index": "arcane-tradition-improvement-1",
      "name": "Arcane Tradition feature",
      "url": "/api/2014/features/arcane-tradition-improvement-1"
    },
    {
      "index": "arcane-tradition-improvement-2",
      "name": "Arcane Tradition feature",
      "url": "/api/2014/features/arcane-tradition-improvement-2"
    },
    {
      "index": "arcane-tradition-improvement-3",
      "name": "Arcane Tradition feature",
      "url": "/api/2014/features/arcane-tradition-improvement-3"
    },
    {
      "index": "archdruid",
      "name": "Archdruid",
      "url": "/api/2014/feat
```

### Exemplo de item completo (`GET /api/2014/features/action-surge-1-use`)

```json
{
  "index": "action-surge-1-use",
  "class": {
    "index": "fighter",
    "name": "Fighter",
    "url": "/api/2014/classes/fighter"
  },
  "name": "Action Surge (1 use)",
  "level": 2,
  "prerequisites": [],
  "desc": [
    "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
    "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
  ],
  "url": "/api/2014/features/action-surge-1-use",
  "updated_at": "2026-04-01T20:35:37.430Z"
}
```

---

## languages

Endpoint de lista: `GET /api/2014/languages`

### Shape da lista

```json
{
  "count": 16,
  "results": [
    {
      "index": "abyssal",
      "name": "Abyssal",
      "url": "/api/2014/languages/abyssal"
    },
    {
      "index": "celestial",
      "name": "Celestial",
      "url": "/api/2014/languages/celestial"
    },
    {
      "index": "common",
      "name": "Common",
      "url": "/api/2014/languages/common"
    },
    {
      "index": "deep-speech",
      "name": "Deep Speech",
      "url": "/api/2014/languages/deep-speech"
    },
    {
      "index": "draconic",
      "name": "Draconic",
      "url": "/api/2014/languages/draconic"
    },
    {
      "index": "dwarvish",
      "name": "Dwarvish",
      "url": "/api/2014/languages/dwarvish"
    },
    {
      "index": "elvish",
      "name": "Elvish",
      "url": "/api/2014/languages/elvish"
    },
    {
      "index": "giant",
      "name": "Giant",
      "url": "/api/2014/languages/giant"
    },
    {
      "index": "gnomish",
      "name": "Gnomish",
      "url": "/api/2014/languages/gnomish"
    },
    {
      "index": "goblin",
      "name": "Goblin",
      "url": "/api/2014/languages/goblin"
    },
    {
      "index": "halfling",
      "name": "Halfling",
      "url": "/api/2014/languages/halfling"
    },
    {
      "index": "infernal",
      "name": "Infernal",
      "url": "/api/2014/languages/infernal"
    },
    {
      "index": "orc",
      "name": "Orc",
      "url": "/api/2014/languages/orc"
    },
    {
      "index": "primordial",
      "name": "Primordial",
      "url"
```

### Exemplo de item completo (`GET /api/2014/languages/abyssal`)

```json
{
  "index": "abyssal",
  "name": "Abyssal",
  "type": "Exotic",
  "typical_speakers": [
    "Demons"
  ],
  "script": "Infernal",
  "url": "/api/2014/languages/abyssal",
  "updated_at": "2026-04-01T20:35:37.652Z"
}
```

---

## magic-items

Endpoint de lista: `GET /api/2014/magic-items`

### Shape da lista

```json
{
  "count": 362,
  "results": [
    {
      "index": "adamantine-armor",
      "name": "Adamantine Armor",
      "url": "/api/2014/magic-items/adamantine-armor"
    },
    {
      "index": "ammunition",
      "name": "Ammunition, +1, +2, or +3",
      "url": "/api/2014/magic-items/ammunition"
    },
    {
      "index": "ammunition-1",
      "name": "Ammunition, +1",
      "url": "/api/2014/magic-items/ammunition-1"
    },
    {
      "index": "ammunition-2",
      "name": "Ammunition, +2",
      "url": "/api/2014/magic-items/ammunition-2"
    },
    {
      "index": "ammunition-3",
      "name": "Ammunition, +3",
      "url": "/api/2014/magic-items/ammunition-3"
    },
    {
      "index": "amulet-of-health",
      "name": "Amulet of Health",
      "url": "/api/2014/magic-items/amulet-of-health"
    },
    {
      "index": "amulet-of-proof-against-detection-and-location",
      "name": "Amulet of Proof against Detection and Location",
      "url": "/api/2014/magic-items/amulet-of-proof-against-detection-and-location"
    },
    {
      "index": "amulet-of-the-planes",
      "name": "Amulet of the Planes",
      "url": "/api/2014/magic-items/amulet-of-the-planes"
    },
    {
      "index": "animated-shield",
      "name": "Animated Shield",
      "url": "/api/2014/magic-items/animated-shield"
    },
    {
      "index": "apparatus-of-the-crab",
      "name": "Apparatus of the Crab",
      "url": "/api/2014/magic-items/apparatus-of-the-crab"
    },
    {
      "index": "armo
```

### Exemplo de item completo (`GET /api/2014/magic-items/adamantine-armor`)

```json
{
  "index": "adamantine-armor",
  "name": "Adamantine Armor",
  "equipment_category": {
    "index": "armor",
    "name": "Armor",
    "url": "/api/2014/equipment-categories/armor"
  },
  "rarity": {
    "name": "Uncommon"
  },
  "variants": [],
  "variant": false,
  "desc": [
    "Armor (medium or heavy, but not hide), uncommon",
    "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit."
  ],
  "image": "/api/images/magic-items/adamantine-armor.png",
  "url": "/api/2014/magic-items/adamantine-armor",
  "updated_at": "2026-04-01T20:35:37.946Z"
}
```

---

## magic-schools

Endpoint de lista: `GET /api/2014/magic-schools`

### Shape da lista

```json
{
  "count": 8,
  "results": [
    {
      "index": "abjuration",
      "name": "Abjuration",
      "url": "/api/2014/magic-schools/abjuration"
    },
    {
      "index": "conjuration",
      "name": "Conjuration",
      "url": "/api/2014/magic-schools/conjuration"
    },
    {
      "index": "divination",
      "name": "Divination",
      "url": "/api/2014/magic-schools/divination"
    },
    {
      "index": "enchantment",
      "name": "Enchantment",
      "url": "/api/2014/magic-schools/enchantment"
    },
    {
      "index": "evocation",
      "name": "Evocation",
      "url": "/api/2014/magic-schools/evocation"
    },
    {
      "index": "illusion",
      "name": "Illusion",
      "url": "/api/2014/magic-schools/illusion"
    },
    {
      "index": "necromancy",
      "name": "Necromancy",
      "url": "/api/2014/magic-schools/necromancy"
    },
    {
      "index": "transmutation",
      "name": "Transmutation",
      "url": "/api/2014/magic-schools/transmutation"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/magic-schools/abjuration`)

```json
{
  "index": "abjuration",
  "name": "Abjuration",
  "desc": "Abjuration spells are protective in nature, though some of them have aggressive uses. They create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence.",
  "url": "/api/2014/magic-schools/abjuration",
  "updated_at": "2026-04-01T20:35:38.112Z"
}
```

---

## monsters

Endpoint de lista: `GET /api/2014/monsters`

### Shape da lista

```json
{
  "count": 334,
  "results": [
    {
      "index": "aboleth",
      "name": "Aboleth",
      "url": "/api/2014/monsters/aboleth"
    },
    {
      "index": "acolyte",
      "name": "Acolyte",
      "url": "/api/2014/monsters/acolyte"
    },
    {
      "index": "adult-black-dragon",
      "name": "Adult Black Dragon",
      "url": "/api/2014/monsters/adult-black-dragon"
    },
    {
      "index": "adult-blue-dragon",
      "name": "Adult Blue Dragon",
      "url": "/api/2014/monsters/adult-blue-dragon"
    },
    {
      "index": "adult-brass-dragon",
      "name": "Adult Brass Dragon",
      "url": "/api/2014/monsters/adult-brass-dragon"
    },
    {
      "index": "adult-bronze-dragon",
      "name": "Adult Bronze Dragon",
      "url": "/api/2014/monsters/adult-bronze-dragon"
    },
    {
      "index": "adult-copper-dragon",
      "name": "Adult Copper Dragon",
      "url": "/api/2014/monsters/adult-copper-dragon"
    },
    {
      "index": "adult-gold-dragon",
      "name": "Adult Gold Dragon",
      "url": "/api/2014/monsters/adult-gold-dragon"
    },
    {
      "index": "adult-green-dragon",
      "name": "Adult Green Dragon",
      "url": "/api/2014/monsters/adult-green-dragon"
    },
    {
      "index": "adult-red-dragon",
      "name": "Adult Red Dragon",
      "url": "/api/2014/monsters/adult-red-dragon"
    },
    {
      "index": "adult-silver-dragon",
      "name": "Adult Silver Dragon",
      "url": "/api/2014/monsters/adult-silver-dragon"
    },
    {
 
```

### Exemplo de item completo (`GET /api/2014/monsters/aboleth`)

```json
{
  "index": "aboleth",
  "name": "Aboleth",
  "size": "Large",
  "type": "aberration",
  "alignment": "lawful evil",
  "armor_class": [
    {
      "type": "natural",
      "value": 17
    }
  ],
  "hit_points": 135,
  "hit_dice": "18d10",
  "hit_points_roll": "18d10+36",
  "speed": {
    "walk": "10 ft.",
    "swim": "40 ft."
  },
  "strength": 21,
  "dexterity": 9,
  "constitution": 15,
  "intelligence": 18,
  "wisdom": 15,
  "charisma": 18,
  "proficiencies": [
    {
      "value": 6,
      "proficiency": {
        "index": "saving-throw-con",
        "name": "Saving Throw: CON",
        "url": "/api/2014/proficiencies/saving-throw-con"
      }
    },
    {
      "value": 8,
      "proficiency": {
        "index": "saving-throw-int",
        "name": "Saving Throw: INT",
        "url": "/api/2014/proficiencies/saving-throw-int"
      }
    },
    {
      "value": 6,
      "proficiency": {
        "index": "saving-throw-wis",
        "name": "Saving Throw: WIS",
        "url": "/api/2014/proficiencies/saving-throw-wis"
      }
    },
    {
      "value": 12,
      "proficiency": {
        "index": "skill-history",
        "name": "Skill: History",
        "url": "/api/2014/proficiencies/skill-history"
      }
    },
    {
      "value": 10,
      "proficiency": {
        "index": "skill-perception",
        "name": "Skill: Perception",
        "url": "/api/2014/proficiencies/skill-perception"
      }
    }
  ],
  "damage_vulnerabilities": [],
  "damage_resistances": [],
  "damage_immunities": [],
  "condition_immunities": [],
  "senses": {
    "darkvision": "120 ft.",
    "passive_perception": 20
  },
  "languages": "Deep Speech, telepathy 120 ft.",
  "challenge_rating": 10,
  "proficiency_bonus": 4,
  "xp": 5900,
  "special_abilities": [
    {
      "name": "Amphibious",
      "desc": "The aboleth can breathe air and water.",
      "damage": []
    },
    {
      "name": "Mucous Cloud",
      "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
      "dc": {
        "dc_type": {
          "index": "con",
          "name": "CON",
          "url": "/api/2014/ability-scores/con"
        },
        "dc_value": 14,
        "success_type": "none"
      },
      "damage": []
    },
    {
      "name": "Probing Telepathy",
      "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
      "damage": []
    }
  ],
  "actions": [
    {
      "damage": [],
      "name": "Multiattack",
      "multiattack_type": "actions",
      "desc": "The aboleth makes three tentacle attacks.",
      "actions": [
        {
          "action_name": "Tentacle",
          "count": "3",
          "type": "melee"
        }
      ]
    },
    {
      "name": "Tentacle",
      "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
      "attack_bonus": 9,
      "dc": {
        "dc_type": {
          "index": "con",
          "name": "CON",
          "url": "/api/2014/ability-scores/con"
        },
        "dc_value": 14,
        "success_type": "none"
      },
      "damage": [
        {
          "damage_type": {
            "index": "bludgeoning",
            "name": "Bludgeoning",
            "url": "/api/2014/damage-types/bludgeoning"
          },
          "damage_dice": "2d6+5"
        },
        {
          "damage_type": {
            "index": "acid",
            "name": "Acid",
            "url": "/api/2014/damage-types/acid"
          },
          "damage_dice": "1d12"
        }
      ],
      "actions": []
    },
    {
      "name": "Tail",
      "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
      "attack_bonus": 9,
      "damage": [
        {
          "damage_type": {
            "index": "bludgeoning",
            "name": "Bludgeoning",
            "url": "/api/2014/damage-types/bludgeoning"
          },
          "damage_dice": "3d6+5"
        }
      ],
      "actions": []
    },
    {
      "damage": [],
      "name": "Enslave",
      "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
      "usage": {
        "type": "per day",
        "times": 3
      },
      "dc": {
        "dc_type": {
          "index": "wis",
          "name": "WIS",
          "url": "/api/2014/ability-scores/wis"
        },
        "dc_value": 14,
        "success_type": "none"
      },
      "actions": []
    }
  ],
  "legendary_actions": [
    {
      "name": "Detect",
      "desc": "The aboleth makes a Wisdom (Perception) check.",
      "damage": []
    },
    {
      "name": "Tail Swipe",
      "desc": "The aboleth makes one tail attack.",
      "damage": []
    },
    {
      "name": "Psychic Drain (Costs 2 Actions)",
      "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
      "damage": [
        {
          "damage_type": {
            "index": "psychic",
            "name": "Psychic",
            "url": "/api/2014/damage-types/psychic"
          },
          "damage_dice": "3d6"
        }
      ]
    }
  ],
  "image": "/api/images/monsters/aboleth.png",
  "url": "/api/2014/monsters/aboleth",
  "updated_at": "2026-04-01T20:35:38.253Z",
  "forms": [],
  "reactions": []
}
```

---

## proficiencies

Endpoint de lista: `GET /api/2014/proficiencies`

### Shape da lista

```json
{
  "count": 117,
  "results": [
    {
      "index": "alchemists-supplies",
      "name": "Alchemist's Supplies",
      "url": "/api/2014/proficiencies/alchemists-supplies"
    },
    {
      "index": "all-armor",
      "name": "All armor",
      "url": "/api/2014/proficiencies/all-armor"
    },
    {
      "index": "bagpipes",
      "name": "Bagpipes",
      "url": "/api/2014/proficiencies/bagpipes"
    },
    {
      "index": "battleaxes",
      "name": "Battleaxes",
      "url": "/api/2014/proficiencies/battleaxes"
    },
    {
      "index": "blowguns",
      "name": "Blowguns",
      "url": "/api/2014/proficiencies/blowguns"
    },
    {
      "index": "breastplate",
      "name": "Breastplate",
      "url": "/api/2014/proficiencies/breastplate"
    },
    {
      "index": "brewers-supplies",
      "name": "Brewer's Supplies",
      "url": "/api/2014/proficiencies/brewers-supplies"
    },
    {
      "index": "calligraphers-supplies",
      "name": "Calligrapher's Supplies",
      "url": "/api/2014/proficiencies/calligraphers-supplies"
    },
    {
      "index": "carpenters-tools",
      "name": "Carpenter's Tools",
      "url": "/api/2014/proficiencies/carpenters-tools"
    },
    {
      "index": "cartographers-tools",
      "name": "Cartographer's Tools",
      "url": "/api/2014/proficiencies/cartographers-tools"
    },
    {
      "index": "chain-mail",
      "name": "Chain Mail",
      "url": "/api/2014/proficiencies/chain-mail"
    },
    {
      "index": "chain-
```

### Exemplo de item completo (`GET /api/2014/proficiencies/alchemists-supplies`)

```json
{
  "index": "alchemists-supplies",
  "type": "Artisan's Tools",
  "name": "Alchemist's Supplies",
  "classes": [],
  "races": [],
  "url": "/api/2014/proficiencies/alchemists-supplies",
  "reference": {
    "index": "alchemists-supplies",
    "name": "Alchemist's Supplies",
    "url": "/api/2014/equipment/alchemists-supplies"
  },
  "updated_at": "2026-04-01T20:35:38.536Z"
}
```

---

## races

Endpoint de lista: `GET /api/2014/races`

### Shape da lista

```json
{
  "count": 9,
  "results": [
    {
      "index": "dragonborn",
      "name": "Dragonborn",
      "url": "/api/2014/races/dragonborn"
    },
    {
      "index": "dwarf",
      "name": "Dwarf",
      "url": "/api/2014/races/dwarf"
    },
    {
      "index": "elf",
      "name": "Elf",
      "url": "/api/2014/races/elf"
    },
    {
      "index": "gnome",
      "name": "Gnome",
      "url": "/api/2014/races/gnome"
    },
    {
      "index": "half-elf",
      "name": "Half-Elf",
      "url": "/api/2014/races/half-elf"
    },
    {
      "index": "half-orc",
      "name": "Half-Orc",
      "url": "/api/2014/races/half-orc"
    },
    {
      "index": "halfling",
      "name": "Halfling",
      "url": "/api/2014/races/halfling"
    },
    {
      "index": "human",
      "name": "Human",
      "url": "/api/2014/races/human"
    },
    {
      "index": "tiefling",
      "name": "Tiefling",
      "url": "/api/2014/races/tiefling"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/races/dragonborn`)

```json
{
  "index": "dragonborn",
  "name": "Dragonborn",
  "speed": 30,
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "str",
        "name": "STR",
        "url": "/api/2014/ability-scores/str"
      },
      "bonus": 2
    },
    {
      "ability_score": {
        "index": "cha",
        "name": "CHA",
        "url": "/api/2014/ability-scores/cha"
      },
      "bonus": 1
    }
  ],
  "alignment": "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
  "age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
  "size": "Medium",
  "size_description": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
  "languages": [
    {
      "index": "common",
      "name": "Common",
      "url": "/api/2014/languages/common"
    },
    {
      "index": "draconic",
      "name": "Draconic",
      "url": "/api/2014/languages/draconic"
    }
  ],
  "language_desc": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
  "traits": [
    {
      "index": "draconic-ancestry",
      "name": "Draconic Ancestry",
      "url": "/api/2014/traits/draconic-ancestry"
    },
    {
      "index": "breath-weapon",
      "name": "Breath Weapon",
      "url": "/api/2014/traits/breath-weapon"
    },
    {
      "index": "damage-resistance",
      "name": "Damage Resistance",
      "url": "/api/2014/traits/damage-resistance"
    }
  ],
  "subraces": [],
  "url": "/api/2014/races/dragonborn",
  "updated_at": "2026-04-01T20:35:38.675Z"
}
```

---

## rule-sections

Endpoint de lista: `GET /api/2014/rule-sections`

### Shape da lista

```json
{
  "count": 33,
  "results": [
    {
      "name": "Ability Checks",
      "index": "ability-checks",
      "url": "/api/2014/rule-sections/ability-checks"
    },
    {
      "name": "Ability Scores and Modifiers",
      "index": "ability-scores-and-modifiers",
      "url": "/api/2014/rule-sections/ability-scores-and-modifiers"
    },
    {
      "name": "Actions in Combat",
      "index": "actions-in-combat",
      "url": "/api/2014/rule-sections/actions-in-combat"
    },
    {
      "name": "Activating an Item",
      "index": "activating-an-item",
      "url": "/api/2014/rule-sections/activating-an-item"
    },
    {
      "name": "Advantage and Disadvantage",
      "index": "advantage-and-disadvantage",
      "url": "/api/2014/rule-sections/advantage-and-disadvantage"
    },
    {
      "name": "Attunement",
      "index": "attunement",
      "url": "/api/2014/rule-sections/attunement"
    },
    {
      "name": "Between Adventures",
      "index": "between-adventures",
      "url": "/api/2014/rule-sections/between-adventures"
    },
    {
      "name": "Casting a Spell",
      "index": "casting-a-spell",
      "url": "/api/2014/rule-sections/casting-a-spell"
    },
    {
      "name": "Cover",
      "index": "cover",
      "url": "/api/2014/rule-sections/cover"
    },
    {
      "name": "Damage and Healing",
      "index": "damage-and-healing",
      "url": "/api/2014/rule-sections/damage-and-healing"
    },
    {
      "name": "Diseases",
      "index": "diseases",
  
```

### Exemplo de item completo (`GET /api/2014/rule-sections/ability-checks`)

```json
{
  "name": "Ability Checks",
  "index": "ability-checks",
  "desc": "## Ability Checks\n\nAn ability check tests a character's or monster's innate talent and training in an effort to overcome a challenge. The GM calls for an ability check when a character or monster attempts an action (other than an attack) that has a chance of failure. When the outcome is uncertain, the dice determine the results.\n\nFor every ability check, the GM decides which of the six abilities is relevant to the task at hand and the difficulty of the task, represented by a Difficulty Class.\n\nThe more difficult a task, the higher its DC. The Typical Difficulty Classes table shows the most common DCs.\n\n### Typical Difficulty Classes\n\n| Task Difficulty   | DC |\n|-------------------|----|\n| Very easy         | 5  |\n| Easy              | 10 |\n| Medium            | 15 |\n| Hard              | 20 |\n| Very hard         | 25 |\n| Nearly impossible | 30 |\n\nTo make an ability check, roll a d20 and add the relevant ability modifier. As with other d20 rolls, apply bonuses and penalties, and compare the total to the DC. If the total equals or exceeds the DC, the ability check is a success-the creature overcomes the challenge at hand. Otherwise, it's a failure, which means the character or monster makes no progress toward the objective or makes progress combined with a setback determined by the GM.\n\n### Contests\n\nSometimes one character's or monster's efforts are directly opposed to another's. This can occur when both of them are trying to do the same thing and only one can succeed, such as attempting to snatch up a magic ring that has fallen on the floor. This situation also applies when one of them is trying to prevent the other one from accomplishing a goal--for example, when a monster tries to force open a door that an adventurer is holding closed. In situations like these, the outcome is determined by a special form of ability check, called a contest.\n\nBoth participants in a contest make ability checks appropriate to their efforts. They apply all appropriate bonuses and penalties, but instead of comparing the total to a DC, they compare the totals of their two checks. The participant with the higher check total wins the contest. That character or monster either succeeds at the action or prevents the other one from succeeding.\n\nIf the contest results in a tie, the situation remains the same as it was before the contest. Thus, one contestant might win the contest by default. If two characters tie in a contest to snatch a ring off the floor, neither character grabs it. In a contest between a monster trying to open a door and an adventurer trying to keep the door closed, a tie means that the door remains shut.\n\n### Skills\n\nEach ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. (A character's starting skill proficiencies are determined at character creation, and a monster's skill proficiencies appear in the monster's stat block.)\n\nFor example, a Dexterity check might reflect a character's attempt to pull off an acrobatic stunt, to palm an object, or to stay hidden. Each of these aspects of Dexterity has an associated skill: Acrobatics, Sleight of Hand, and Stealth, respectively. So a character who has proficiency in the Stealth skill is particularly good at Dexterity checks related to sneaking and hiding.\n\nThe skills related to each ability score are shown in the following list. (No skills are related to Constitution.) See an ability's description in the later sections of this section for examples of how to use a skill associated with an ability.\n\n#### Strength\n- Athletics\n\n#### Dexterity\n- Acrobatics\n- Sleight of Hand\n- Stealth\n\n#### Intelligence\n- Arcana\n- History\n- Investigation\n- Nature\n- Religion\n\n#### Wisdom\n- Animal Handling\n- Insight\n- Medicine\n- Perception\n- Survival\n\n#### Charisma\n- Deception\n- Intimidation\n- Performance\n- Persuasion\n\nSometimes, the GM might ask for an ability check using a specific skill-for example, \"Make a Wisdom (Perception) check.\" At other times, a player might ask the GM if proficiency in a particular skill applies to a check. In either case, proficiency in a skill means an individual can add his or her proficiency bonus to ability checks that involve that skill. Without proficiency in the skill, the individual makes a normal ability check.\n\nFor example, if a character attempts to climb up a dangerous cliff, the GM might ask for a Strength (Athletics) check. If the character is proficient in Athletics, the character's proficiency bonus is added to the Strength check. If the character lacks that proficiency, he or she just makes a Strength check.\n\n#### Variant: Skills with Different Abilities\n\nNormally, your proficiency in a skill applies only to a specific kind of ability check. Proficiency in Athletics, for example, usually applies to Strength checks. In some situations, though, your proficiency might reasonably apply to a different kind of check. In such cases, the GM might ask for a check using an unusual combination of ability and skill, or you might ask your GM if you can apply a proficiency to a different check. For example, if you have to swim from an offshore island to the mainland, your GM might call for a Constitution check to see if you have the stamina to make it that far. In this case, your GM might allow you to apply your proficiency in Athletics and ask for a Constitution (Athletics) check. So if you're proficient in Athletics, you apply your proficiency bonus to the Constitution check just as you would normally do for a Strength (Athletics) check. Similarly, when your half-orc barbarian uses a display of raw strength to intimidate an enemy, your GM might ask for a Strength (Intimidation) check, even though Intimidation is normally associated with Charisma.\n\n### Passive Checks\n\nA passive check is a special kind of ability check that doesn't involve any die rolls. Such a check can represent the average result for a task done repeatedly, such as searching for secret doors over and over again, or can be used when the GM wants to secretly determine whether the characters succeed at something without rolling dice, such as noticing a hidden monster.\n\nHere's how to determine a character's total for a passive check:\n\n10 + all modifiers that normally apply to the check\n\nIf the character has advantage on the check, add 5. For disadvantage, subtract 5. The game refers to a passive check total as a **score**.\n\nFor example, if a 1st-level character has a Wisdom of 15 and proficiency in Perception, he or she has a passive Wisdom (Perception) score of 14.\n\nThe rules on hiding in the \"Dexterity\" section below rely on passive checks, as do the exploration rules.\n\n### Working Together\n\nSometimes two or more characters team up to attempt a task. The character who's leading the effort-or the one with the highest ability modifier-can make an ability check with advantage, reflecting the help provided by the other characters. In combat, this requires the Help action.\n\nA character can only provide help if the task is one that he or she could attempt alone. For example, trying to open a lock requires proficiency with thieves' tools, so a character who lacks that proficiency can't help another character in that task. Moreover, a character can help only when two or more individuals working together would actually be productive. Some tasks, such as threading a needle, are no easier with help.\n\n#### Group Checks\n\nWhen a number of individuals are trying to accomplish something as a group, the GM might ask for a group ability check. In such a situation, the characters who are skilled at a particular task help cover those who aren't.\n\nTo make a group ability check, everyone in the group makes the ability check. If at least half the group succeeds, the whole group succeeds. Otherwise, the group fails.\n\nGroup checks don't come up very often, and they're most useful when all the characters succeed or fail as a group. For example, when adventurers are navigating a swamp, the GM might call for a group Wisdom (Survival) check to see if the characters can avoid the quicksand, sinkholes, and other natural hazards of the environment. If at least half the group succeeds, the successful characters are able to guide their companions out of danger. Otherwise, the group stumbles into one of these hazards.\n",
  "url": "/api/2014/rule-sections/ability-checks",
  "updated_at": "2026-05-05T15:31:44.212Z"
}
```

---

## rules

Endpoint de lista: `GET /api/2014/rules`

### Shape da lista

```json
{
  "count": 6,
  "results": [
    {
      "name": "Adventuring",
      "index": "adventuring",
      "url": "/api/2014/rules/adventuring"
    },
    {
      "name": "Appendix",
      "index": "appendix",
      "url": "/api/2014/rules/appendix"
    },
    {
      "name": "Combat",
      "index": "combat",
      "url": "/api/2014/rules/combat"
    },
    {
      "name": "Equipment",
      "index": "equipment",
      "url": "/api/2014/rules/equipment"
    },
    {
      "name": "Spellcasting",
      "index": "spellcasting",
      "url": "/api/2014/rules/spellcasting"
    },
    {
      "name": "Using Ability Scores",
      "index": "using-ability-scores",
      "url": "/api/2014/rules/using-ability-scores"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/rules/adventuring`)

```json
{
  "name": "Adventuring",
  "index": "adventuring",
  "desc": "# Adventuring\n",
  "subsections": [
    {
      "name": "Time",
      "index": "time",
      "url": "/api/2014/rule-sections/time"
    },
    {
      "name": "Movement",
      "index": "movement",
      "url": "/api/2014/rule-sections/movement"
    },
    {
      "name": "The Environment",
      "index": "the-environment",
      "url": "/api/2014/rule-sections/the-environment"
    },
    {
      "name": "Traps",
      "index": "traps",
      "url": "/api/2014/rule-sections/traps"
    },
    {
      "name": "Diseases",
      "index": "diseases",
      "url": "/api/2014/rule-sections/diseases"
    },
    {
      "name": "Madness",
      "index": "madness",
      "url": "/api/2014/rule-sections/madness"
    },
    {
      "name": "Resting",
      "index": "resting",
      "url": "/api/2014/rule-sections/resting"
    },
    {
      "name": "Between Adventures",
      "index": "between-adventures",
      "url": "/api/2014/rule-sections/between-adventures"
    }
  ],
  "url": "/api/2014/rules/adventuring",
  "updated_at": "2026-04-01T20:35:38.947Z"
}
```

---

## skills

Endpoint de lista: `GET /api/2014/skills`

### Shape da lista

```json
{
  "count": 18,
  "results": [
    {
      "index": "acrobatics",
      "name": "Acrobatics",
      "url": "/api/2014/skills/acrobatics"
    },
    {
      "index": "animal-handling",
      "name": "Animal Handling",
      "url": "/api/2014/skills/animal-handling"
    },
    {
      "index": "arcana",
      "name": "Arcana",
      "url": "/api/2014/skills/arcana"
    },
    {
      "index": "athletics",
      "name": "Athletics",
      "url": "/api/2014/skills/athletics"
    },
    {
      "index": "deception",
      "name": "Deception",
      "url": "/api/2014/skills/deception"
    },
    {
      "index": "history",
      "name": "History",
      "url": "/api/2014/skills/history"
    },
    {
      "index": "insight",
      "name": "Insight",
      "url": "/api/2014/skills/insight"
    },
    {
      "index": "intimidation",
      "name": "Intimidation",
      "url": "/api/2014/skills/intimidation"
    },
    {
      "index": "investigation",
      "name": "Investigation",
      "url": "/api/2014/skills/investigation"
    },
    {
      "index": "medicine",
      "name": "Medicine",
      "url": "/api/2014/skills/medicine"
    },
    {
      "index": "nature",
      "name": "Nature",
      "url": "/api/2014/skills/nature"
    },
    {
      "index": "perception",
      "name": "Perception",
      "url": "/api/2014/skills/perception"
    },
    {
      "index": "performance",
      "name": "Performance",
      "url": "/api/2014/skills/performance"
    },
    {
      "index":
```

### Exemplo de item completo (`GET /api/2014/skills/acrobatics`)

```json
{
  "index": "acrobatics",
  "name": "Acrobatics",
  "desc": [
    "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."
  ],
  "ability_score": {
    "index": "dex",
    "name": "DEX",
    "url": "/api/2014/ability-scores/dex"
  },
  "url": "/api/2014/skills/acrobatics",
  "updated_at": "2026-04-01T20:35:39.079Z"
}
```

---

## spells

Endpoint de lista: `GET /api/2014/spells`

### Shape da lista

```json
{
  "count": 319,
  "results": [
    {
      "index": "acid-arrow",
      "name": "Acid Arrow",
      "level": 2,
      "url": "/api/2014/spells/acid-arrow"
    },
    {
      "index": "acid-splash",
      "name": "Acid Splash",
      "level": 0,
      "url": "/api/2014/spells/acid-splash"
    },
    {
      "index": "aid",
      "name": "Aid",
      "level": 2,
      "url": "/api/2014/spells/aid"
    },
    {
      "index": "alarm",
      "name": "Alarm",
      "level": 1,
      "url": "/api/2014/spells/alarm"
    },
    {
      "index": "alter-self",
      "name": "Alter Self",
      "level": 2,
      "url": "/api/2014/spells/alter-self"
    },
    {
      "index": "animal-friendship",
      "name": "Animal Friendship",
      "level": 1,
      "url": "/api/2014/spells/animal-friendship"
    },
    {
      "index": "animal-messenger",
      "name": "Animal Messenger",
      "level": 2,
      "url": "/api/2014/spells/animal-messenger"
    },
    {
      "index": "animal-shapes",
      "name": "Animal Shapes",
      "level": 8,
      "url": "/api/2014/spells/animal-shapes"
    },
    {
      "index": "animate-dead",
      "name": "Animate Dead",
      "level": 3,
      "url": "/api/2014/spells/animate-dead"
    },
    {
      "index": "animate-objects",
      "name": "Animate Objects",
      "level": 5,
      "url": "/api/2014/spells/animate-objects"
    },
    {
      "index": "antilife-shell",
      "name": "Antilife Shell",
      "level": 5,
      "url": "/api/2014/spells/a
```

### Exemplo de item completo (`GET /api/2014/spells/acid-arrow`)

```json
{
  "index": "acid-arrow",
  "name": "Acid Arrow",
  "desc": [
    "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
  ],
  "higher_level": [
    "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
  ],
  "range": "90 feet",
  "components": [
    "V",
    "S",
    "M"
  ],
  "material": "Powdered rhubarb leaf and an adder's stomach.",
  "ritual": false,
  "duration": "Instantaneous",
  "concentration": false,
  "casting_time": "1 action",
  "level": 2,
  "attack_type": "ranged",
  "school": {
    "index": "evocation",
    "name": "Evocation",
    "url": "/api/2014/magic-schools/evocation"
  },
  "classes": [
    {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/2014/classes/wizard"
    }
  ],
  "subclasses": [
    {
      "index": "lore",
      "name": "Lore",
      "url": "/api/2014/subclasses/lore"
    },
    {
      "index": "land",
      "name": "Land",
      "url": "/api/2014/subclasses/land"
    }
  ],
  "url": "/api/2014/spells/acid-arrow",
  "updated_at": "2026-09-12T22:47:56.860Z"
}
```

---

## subclasses

Endpoint de lista: `GET /api/2014/subclasses`

### Shape da lista

```json
{
  "count": 12,
  "results": [
    {
      "index": "berserker",
      "name": "Berserker",
      "url": "/api/2014/subclasses/berserker"
    },
    {
      "index": "champion",
      "name": "Champion",
      "url": "/api/2014/subclasses/champion"
    },
    {
      "index": "devotion",
      "name": "Devotion",
      "url": "/api/2014/subclasses/devotion"
    },
    {
      "index": "draconic",
      "name": "Draconic",
      "url": "/api/2014/subclasses/draconic"
    },
    {
      "index": "evocation",
      "name": "Evocation",
      "url": "/api/2014/subclasses/evocation"
    },
    {
      "index": "fiend",
      "name": "Fiend",
      "url": "/api/2014/subclasses/fiend"
    },
    {
      "index": "hunter",
      "name": "Hunter",
      "url": "/api/2014/subclasses/hunter"
    },
    {
      "index": "land",
      "name": "Land",
      "url": "/api/2014/subclasses/land"
    },
    {
      "index": "life",
      "name": "Life",
      "url": "/api/2014/subclasses/life"
    },
    {
      "index": "lore",
      "name": "Lore",
      "url": "/api/2014/subclasses/lore"
    },
    {
      "index": "open-hand",
      "name": "Open Hand",
      "url": "/api/2014/subclasses/open-hand"
    },
    {
      "index": "thief",
      "name": "Thief",
      "url": "/api/2014/subclasses/thief"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/subclasses/berserker`)

```json
{
  "index": "berserker",
  "class": {
    "index": "barbarian",
    "name": "Barbarian",
    "url": "/api/2014/classes/barbarian"
  },
  "name": "Berserker",
  "subclass_flavor": "Primal Path",
  "desc": [
    "For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being."
  ],
  "subclass_levels": "/api/2014/subclasses/berserker/levels",
  "url": "/api/2014/subclasses/berserker",
  "updated_at": "2026-04-01T20:35:39.401Z",
  "spells": []
}
```

---

## subraces

Endpoint de lista: `GET /api/2014/subraces`

### Shape da lista

```json
{
  "count": 4,
  "results": [
    {
      "index": "high-elf",
      "name": "High Elf",
      "url": "/api/2014/subraces/high-elf"
    },
    {
      "index": "hill-dwarf",
      "name": "Hill Dwarf",
      "url": "/api/2014/subraces/hill-dwarf"
    },
    {
      "index": "lightfoot-halfling",
      "name": "Lightfoot Halfling",
      "url": "/api/2014/subraces/lightfoot-halfling"
    },
    {
      "index": "rock-gnome",
      "name": "Rock Gnome",
      "url": "/api/2014/subraces/rock-gnome"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/subraces/high-elf`)

```json
{
  "index": "high-elf",
  "name": "High Elf",
  "race": {
    "index": "elf",
    "name": "Elf",
    "url": "/api/2014/races/elf"
  },
  "desc": "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "int",
        "name": "INT",
        "url": "/api/2014/ability-scores/int"
      },
      "bonus": 1
    }
  ],
  "racial_traits": [
    {
      "index": "elf-weapon-training",
      "name": "Elf Weapon Training",
      "url": "/api/2014/traits/elf-weapon-training"
    },
    {
      "index": "high-elf-cantrip",
      "name": "High Elf Cantrip",
      "url": "/api/2014/traits/high-elf-cantrip"
    },
    {
      "index": "extra-language",
      "name": "Extra Language",
      "url": "/api/2014/traits/extra-language"
    }
  ],
  "url": "/api/2014/subraces/high-elf",
  "updated_at": "2026-04-01T20:35:39.541Z"
}
```

---

## traits

Endpoint de lista: `GET /api/2014/traits`

### Shape da lista

```json
{
  "count": 38,
  "results": [
    {
      "index": "artificers-lore",
      "name": "Artificer's Lore",
      "url": "/api/2014/traits/artificers-lore"
    },
    {
      "index": "brave",
      "name": "Brave",
      "url": "/api/2014/traits/brave"
    },
    {
      "index": "breath-weapon",
      "name": "Breath Weapon",
      "url": "/api/2014/traits/breath-weapon"
    },
    {
      "index": "damage-resistance",
      "name": "Damage Resistance",
      "url": "/api/2014/traits/damage-resistance"
    },
    {
      "index": "darkvision",
      "name": "Darkvision",
      "url": "/api/2014/traits/darkvision"
    },
    {
      "index": "draconic-ancestry",
      "name": "Draconic Ancestry",
      "url": "/api/2014/traits/draconic-ancestry"
    },
    {
      "index": "draconic-ancestry-black",
      "name": "Draconic Ancestry (Black)",
      "url": "/api/2014/traits/draconic-ancestry-black"
    },
    {
      "index": "draconic-ancestry-blue",
      "name": "Draconic Ancestry (Blue)",
      "url": "/api/2014/traits/draconic-ancestry-blue"
    },
    {
      "index": "draconic-ancestry-brass",
      "name": "Draconic Ancestry (Brass)",
      "url": "/api/2014/traits/draconic-ancestry-brass"
    },
    {
      "index": "draconic-ancestry-bronze",
      "name": "Draconic Ancestry (Bronze)",
      "url": "/api/2014/traits/draconic-ancestry-bronze"
    },
    {
      "index": "draconic-ancestry-copper",
      "name": "Draconic Ancestry (Copper)",
      "url": "/api/2014/trait
```

### Exemplo de item completo (`GET /api/2014/traits/artificers-lore`)

```json
{
  "index": "artificers-lore",
  "races": [],
  "subraces": [
    {
      "index": "rock-gnome",
      "name": "Rock Gnome",
      "url": "/api/2014/subraces/rock-gnome"
    }
  ],
  "name": "Artificer's Lore",
  "desc": [
    "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
  ],
  "proficiencies": [],
  "url": "/api/2014/traits/artificers-lore",
  "updated_at": "2026-04-01T20:35:39.695Z"
}
```

---

## weapon-properties

Endpoint de lista: `GET /api/2014/weapon-properties`

### Shape da lista

```json
{
  "count": 11,
  "results": [
    {
      "index": "ammunition",
      "name": "Ammunition",
      "url": "/api/2014/weapon-properties/ammunition"
    },
    {
      "index": "finesse",
      "name": "Finesse",
      "url": "/api/2014/weapon-properties/finesse"
    },
    {
      "index": "heavy",
      "name": "Heavy",
      "url": "/api/2014/weapon-properties/heavy"
    },
    {
      "index": "light",
      "name": "Light",
      "url": "/api/2014/weapon-properties/light"
    },
    {
      "index": "loading",
      "name": "Loading",
      "url": "/api/2014/weapon-properties/loading"
    },
    {
      "index": "monk",
      "name": "Monk",
      "url": "/api/2014/weapon-properties/monk"
    },
    {
      "index": "reach",
      "name": "Reach",
      "url": "/api/2014/weapon-properties/reach"
    },
    {
      "index": "special",
      "name": "Special",
      "url": "/api/2014/weapon-properties/special"
    },
    {
      "index": "thrown",
      "name": "Thrown",
      "url": "/api/2014/weapon-properties/thrown"
    },
    {
      "index": "two-handed",
      "name": "Two-Handed",
      "url": "/api/2014/weapon-properties/two-handed"
    },
    {
      "index": "versatile",
      "name": "Versatile",
      "url": "/api/2014/weapon-properties/versatile"
    }
  ]
}
```

### Exemplo de item completo (`GET /api/2014/weapon-properties/ammunition`)

```json
{
  "index": "ammunition",
  "name": "Ammunition",
  "desc": [
    "You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon).",
    "At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see \"Improvised Weapons\" later in the section). A sling must be loaded to deal any damage when used in this way."
  ],
  "url": "/api/2014/weapon-properties/ammunition",
  "updated_at": "2026-04-01T20:35:39.840Z"
}
```

---

