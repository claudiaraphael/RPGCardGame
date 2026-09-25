# Base de Dados D&D 5e (SRD) — Referência para Criação de Personagens

> Fonte: `https://www.dnd5eapi.co/api/2014` · Gerado em: `2026-09-21T19:50:53.935Z`

> Este documento é um recorte legível do JSON completo da 5e-API, mantendo
> apenas as chaves relevantes para **criar personagens** (raças, classes,
> antecedentes, talentos, perícias, proficiências, equipamento inicial,
> magias e traços). Ficaram de fora: monstros, itens mágicos, condições,
> tipos de dano e o texto integral das regras — esses são dados de mesa/jogo,
> não de criação de ficha.
>
> Observação sobre os dados: neste dump, itens de equipamento (armas e
> armaduras) não trazem dano, CA ou alcance — só nome, custo, peso e
> propriedades. Se precisar desses números, puxe da PHB/SRD original.

## Sumário

1. [Atributos (Ability Scores)](#1-atributos-ability-scores)
2. [Perícias (Skills)](#2-perícias-skills)
3. [Alinhamentos](#3-alinhamentos)
4. [Idiomas](#4-idiomas)
5. [Raças](#5-raças)
6. [Sub-raças](#6-sub-raças)
7. [Traços Raciais (catálogo)](#7-traços-raciais-catálogo)
8. [Classes](#8-classes)
9. [Subclasses](#9-subclasses)
10. [Antecedentes (Backgrounds)](#10-antecedentes-backgrounds)
11. [Talentos (Feats)](#11-talentos-feats)
12. [Features de Classe — Nível 1](#12-features-de-classe--nível-1)
13. [Features de Classe — Progressão completa (tabela)](#13-features-de-classe--progressão-completa-tabela)
14. [Proficiências (catálogo)](#14-proficiências-catálogo)
15. [Equipamento Inicial](#15-equipamento-inicial)
16. [Propriedades de Armas](#16-propriedades-de-armas)
17. [Escolas de Magia](#17-escolas-de-magia)
18. [Magias (tabela de referência)](#18-magias-tabela-de-referência)


---

## 1. Atributos (Ability Scores)

Os 6 atributos base e as perícias associadas a cada um.

### Charisma (CHA)
Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.

A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks.

**Perícias associadas:** Deception, Intimidation, Performance, Persuasion

### Constitution (CON)
Constitution measures health, stamina, and vital force.

Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster.

**Perícias associadas:** —

### Dexterity (DEX)
Dexterity measures agility, reflexes, and balance.

A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks.

**Perícias associadas:** Acrobatics, Sleight of Hand, Stealth

### Intelligence (INT)
Intelligence measures mental acuity, accuracy of recall, and the ability to reason.

An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks.

**Perícias associadas:** Arcana, History, Investigation, Nature, Religion

### Strength (STR)
Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.

A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. The Athletics skill reflects aptitude in certain kinds of Strength checks.

**Perícias associadas:** Athletics

### Wisdom (WIS)
Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.

A Wisdom check might reflect an effort to read body language, understand someone's feelings, notice things about the environment, or care for an injured person. The Animal Handling, Insight, Medicine, Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks.

**Perícias associadas:** Animal Handling, Insight, Medicine, Perception, Survival


---

## 2. Perícias (Skills)

| Perícia | Atributo | Descrição |
|---|---|---|
| Acrobatics | DEX | Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips. |
| Animal Handling | WIS | When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver. |
| Arcana | INT | Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes. |
| Athletics | STR | Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming. |
| Deception | CHA | Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast- talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie. |
| History | INT | Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations. |
| Insight | WIS | Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms. |
| Intimidation | CHA | When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision. |
| Investigation | INT | When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check. |
| Medicine | WIS | A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness. |
| Nature | INT | Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles. |
| Perception | WIS | Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door. |
| Performance | CHA | Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment. |
| Persuasion | CHA | When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk. |
| Religion | INT | Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults. |
| Sleight of Hand | DEX | Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket. |
| Stealth | DEX | Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard. |
| Survival | WIS | The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards. |

---

## 3. Alinhamentos

| Alinhamento | Sigla | Descrição |
|---|---|---|
| Chaotic Evil | CE | Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil. |
| Chaotic Good | CG | Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good. |
| Chaotic Neutral | CN | Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral. |
| Lawful Evil | LE | Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil. |
| Lawful Good | LG | Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good. |
| Lawful Neutral | LN | Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral. |
| Neutral | N | Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral. |
| Neutral Evil | NE | Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil. |
| Neutral Good | NG | Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good. |

---

## 4. Idiomas

| Idioma | Tipo | Script | Falantes típicos |
|---|---|---|---|
| Abyssal | Exotic | Infernal | Demons |
| Celestial | Exotic | Celestial | Celestials |
| Common | Standard | Common | Humans |
| Deep Speech | Exotic | - | Aboleths, Cloakers |
| Draconic | Exotic | Draconic | Dragons, Dragonborn |
| Dwarvish | Standard | Dwarvish | Dwarves |
| Elvish | Standard | Elvish | Elves |
| Giant | Standard | Dwarvish | Ogres, Giants |
| Gnomish | Standard | Dwarvish | Gnomes |
| Goblin | Standard | Dwarvish | Goblinoids |
| Halfling | Standard | Common | Halflings |
| Infernal | Exotic | Infernal | Devils |
| Orc | Standard | Dwarvish | Orcs |
| Primordial | Exotic | Dwarvish | Elementals |
| Sylvan | Exotic | Elvish | Fey creatures |
| Undercommon | Exotic | Elvish | Underdark traders |

---

## 5. Raças

### Dragonborn

- **Bônus de atributo:** STR +2, CHA +1
- **Tamanho:** Medium
- **Deslocamento:** 30 pés
- **Idiomas:** Common, Draconic
- **Traços raciais:** Draconic Ancestry, Breath Weapon, Damage Resistance
- **Sub-raças:** —
- **Idade:** Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.
- **Tendência de alinhamento:** Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.
- **Sobre os idiomas:** You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.

### Dwarf

- **Bônus de atributo:** CON +2
- **Tamanho:** Medium
- **Deslocamento:** 25 pés
- **Idiomas:** Common, Dwarvish
- **Traços raciais:** Darkvision, Dwarven Resilience, Stonecunning, Dwarven Combat Training, Tool Proficiency
- **Sub-raças:** Hill Dwarf
- **Idade:** Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.
- **Tendência de alinhamento:** Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.
- **Sobre os idiomas:** You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.

### Elf

- **Bônus de atributo:** DEX +2
- **Tamanho:** Medium
- **Deslocamento:** 30 pés
- **Idiomas:** Common, Elvish
- **Traços raciais:** Darkvision, Fey Ancestry, Trance, Keen Senses
- **Sub-raças:** High Elf
- **Idade:** Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.
- **Tendência de alinhamento:** Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.
- **Sobre os idiomas:** You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.

### Gnome

- **Bônus de atributo:** INT +2
- **Tamanho:** Small
- **Deslocamento:** 25 pés
- **Idiomas:** Common, Gnomish
- **Traços raciais:** Darkvision, Gnome Cunning
- **Sub-raças:** Rock Gnome
- **Idade:** Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.
- **Tendência de alinhamento:** Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.
- **Sobre os idiomas:** You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.

### Half-Elf

- **Bônus de atributo:** CHA +2
- **Tamanho:** Medium
- **Deslocamento:** 30 pés
- **Idiomas:** Common, Elvish
- **Traços raciais:** Darkvision, Fey Ancestry, Skill Versatility
- **Sub-raças:** —
- **Idade:** Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.
- **Tendência de alinhamento:** Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.
- **Sobre os idiomas:** You can speak, read, and write Common, Elvish, and one extra language of your choice.

### Half-Orc

- **Bônus de atributo:** STR +2, CON +1
- **Tamanho:** Medium
- **Deslocamento:** 30 pés
- **Idiomas:** Common, Orc
- **Traços raciais:** Darkvision, Savage Attacks, Relentless Endurance, Menacing
- **Sub-raças:** —
- **Idade:** Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.
- **Tendência de alinhamento:** Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.
- **Sobre os idiomas:** You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.

### Halfling

- **Bônus de atributo:** DEX +2
- **Tamanho:** Small
- **Deslocamento:** 25 pés
- **Idiomas:** Common, Halfling
- **Traços raciais:** Brave, Halfling Nimbleness, Lucky
- **Sub-raças:** Lightfoot Halfling
- **Idade:** A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.
- **Tendência de alinhamento:** Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.
- **Sobre os idiomas:** You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.

### Human

- **Bônus de atributo:** STR +1, DEX +1, CON +1, INT +1, WIS +1, CHA +1
- **Tamanho:** Medium
- **Deslocamento:** 30 pés
- **Idiomas:** Common
- **Traços raciais:** —
- **Sub-raças:** —
- **Idade:** Humans reach adulthood in their late teens and live less than a century.
- **Tendência de alinhamento:** Humans tend toward no particular alignment. The best and the worst are found among them.
- **Sobre os idiomas:** You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.

### Tiefling

- **Bônus de atributo:** INT +1, CHA +2
- **Tamanho:** Medium
- **Deslocamento:** 30 pés
- **Idiomas:** Common, Infernal
- **Traços raciais:** Darkvision, Hellish Resistance, Infernal Legacy
- **Sub-raças:** —
- **Idade:** Tieflings mature at the same rate as humans but live a few years longer.
- **Tendência de alinhamento:** Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.
- **Sobre os idiomas:** You can speak, read, and write Common and Infernal.


---

## 6. Sub-raças

### High Elf (sub-raça de Elf)

- **Bônus de atributo adicional:** INT +1
- **Traços adicionais:** Elf Weapon Training, High Elf Cantrip, Extra Language

As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.

### Hill Dwarf (sub-raça de Dwarf)

- **Bônus de atributo adicional:** WIS +1
- **Traços adicionais:** Dwarven Toughness

As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.

### Lightfoot Halfling (sub-raça de Halfling)

- **Bônus de atributo adicional:** CHA +1
- **Traços adicionais:** Naturally Stealthy

As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.

### Rock Gnome (sub-raça de Gnome)

- **Bônus de atributo adicional:** CON +1
- **Traços adicionais:** Artificer's Lore, Tinker

As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.


---

## 7. Traços Raciais (catálogo)

Descrição de cada traço referenciado pelas raças/sub-raças acima.

**Artificer's Lore** _(origem: Rock Gnome)_
Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.

**Brave** _(origem: Halfling)_
You have advantage on saving throw against being frightened.

**Breath Weapon** _(origem: Dragonborn)_
You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.

When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.

After you use your breath weapon, you cannot use it again until you complete a short or long rest.

**Damage Resistance** _(origem: Dragonborn)_
You have resistance to the damage type associated with your draconic ancestry.

**Darkvision** _(origem: Dwarf, Elf, Gnome, Half-Elf, Half-Orc, Tiefling)_
You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.

**Draconic Ancestry** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Black)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Blue)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Brass)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Bronze)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Copper)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Gold)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Green)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Red)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (Silver)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Draconic Ancestry (White)** _(origem: Dragonborn)_
You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

**Dwarven Combat Training** _(origem: Dwarf)_
You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.

**Dwarven Resilience** _(origem: Dwarf)_
You have advantage on saving throws against poison, and you have resistance against poison damage.

**Dwarven Toughness** _(origem: Hill Dwarf)_
Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.

**Elf Weapon Training** _(origem: High Elf)_
You have proficiency with the longsword, shortsword, shortbow, and longbow.

**Extra Language** _(origem: High Elf)_
You can speak, read, and write one extra language of your choice.

**Fey Ancestry** _(origem: Elf, Half-Elf)_
You have advantage on saving throws against being charmed, and magic cannot put you to sleep.

**Gnome Cunning** _(origem: Gnome)_
You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.

**Halfling Nimbleness** _(origem: Halfling)_
You can move through the space of any creature that is of a size larger than yours.

**Hellish Resistance** _(origem: Tiefling)_
You have resistance to fire damage.

**High Elf Cantrip** _(origem: High Elf)_
You know one cantrip of your choice form the wizard spell list. Intelligence is your spellcasting ability for it.

**Infernal Legacy** _(origem: Tiefling)_
You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.

**Keen Senses** _(origem: Elf)_
You have proficiency in the Perception skill.

**Lucky** _(origem: Halfling)_
When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.

**Menacing** _(origem: Half-Orc)_
You gain proficiency in the Intimidation skill.

**Naturally Stealthy** _(origem: Lightfoot Halfling)_
You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.

**Relentless Endurance** _(origem: Half-Orc)_
When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. you cannot use this feature again until you finish a long rest.

**Savage Attacks** _(origem: Half-Orc)_
When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.

**Skill Versatility** _(origem: Half-Elf)_
You gain proficiency in two skills of your choice.

**Stonecunning** _(origem: Dwarf)_
Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.

**Tinker** _(origem: Rock Gnome)_
You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.

When you create a device, choose one of the following options:

Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.

Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.

Music Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.

**Tool Proficiency** _(origem: Dwarf)_
You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.

**Trance** _(origem: Elf)_
Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.


---

## 8. Classes

### Barbarian

- **Dado de vida:** d12
- **Salvaguardas (proficiência):** STR, CON
- **Proficiências:** Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons, Saving Throw: STR, Saving Throw: CON
- **Escolhas de proficiência:**
  - Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival
- **Subclasses disponíveis:** Berserker
- **Multiclasse — pré-requisito:** STR 13+
- **Multiclasse — proficiências ganhas:** Shields, Simple Weapons, Martial Weapons
- **Equipamento inicial:**
  - 1x Explorer's Pack
  - 4x Javelin
  - (equipment) (a) a greataxe or (b) any martial melee weapon
  - (equipment) (a) two handaxes or (b) any simple weapon

### Bard

- **Dado de vida:** d8
- **Salvaguardas (proficiência):** DEX, CHA
- **Proficiências:** Light Armor, Simple Weapons, Longswords, Rapiers, Shortswords, Hand crossbows, Saving Throw: DEX, Saving Throw: CHA
- **Escolhas de proficiência:**
  - Choose any three
  - Three musical instruments of your choice
- **Subclasses disponíveis:** Lore
- **Multiclasse — pré-requisito:** CHA 13+
- **Multiclasse — proficiências ganhas:** Light Armor
- **Equipamento inicial:**
  - 1x Leather Armor
  - 1x Dagger
  - (equipment) (a) a rapier, (b) a longsword, or (c) any simple weapon
  - (equipment) (a) a diplomat’s pack or (b) an entertainer’s pack
  - (equipment) (a) a lute or (b) any other musical instrument

### Cleric

- **Dado de vida:** d8
- **Salvaguardas (proficiência):** WIS, CHA
- **Proficiências:** Light Armor, Medium Armor, Shields, Simple Weapons, Saving Throw: WIS, Saving Throw: CHA
- **Escolhas de proficiência:**
  - Choose two from History, Insight, Medicine, Persuasion, and Religion
- **Subclasses disponíveis:** Life
- **Multiclasse — pré-requisito:** WIS 13+
- **Multiclasse — proficiências ganhas:** Light Armor, Medium Armor, Shields
- **Equipamento inicial:**
  - 1x Shield
  - (equipment) (a) a mace or (b) a warhammer (if proficient)
  - (equipment) (a) scale mail, (b) leather armor, or (c) chain mail (if proficient)
  - (equipment) (a) a light crossbow and 20 bolts or (b) any simple weapon
  - (equipment) (a) a priest’s pack or (b) an explorer’s pack
  - (equipment) holy symbol

### Druid

- **Dado de vida:** d8
- **Salvaguardas (proficiência):** INT, WIS
- **Proficiências:** Light Armor, Medium Armor, Shields, Clubs, Daggers, Javelins, Maces, Quarterstaffs, Sickles, Spears, Darts, Slings, Scimitars, Herbalism Kit, Saving Throw: INT, Saving Throw: WIS
- **Escolhas de proficiência:**
  - Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival
- **Subclasses disponíveis:** Land
- **Multiclasse — pré-requisito:** WIS 13+
- **Multiclasse — proficiências ganhas:** Light Armor, Medium Armor, Shields
- **Equipamento inicial:**
  - 1x Leather Armor
  - 1x Explorer's Pack
  - (equipment) (a) a wooden shield or (b) any simple weapon
  - (equipment) (a) a scimitar or (b) any simple melee weapon
  - (equipment) druidic focus

### Fighter

- **Dado de vida:** d10
- **Salvaguardas (proficiência):** STR, CON
- **Proficiências:** All armor, Shields, Simple Weapons, Martial Weapons, Saving Throw: STR, Saving Throw: CON
- **Escolhas de proficiência:**
  - Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival
- **Subclasses disponíveis:** Champion
- **Multiclasse — pré-requisito:** —
- **Multiclasse — proficiências ganhas:** Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons
- **Equipamento inicial:**
  - (equipment) (a) chain mail or (b) leather armor, longbow, and 20 arrows
  - (equipment) (a) a martial weapon and a shield or (b) two martial weapons
  - (equipment) (a) a light crossbow and 20 bolts or (b) two handaxes
  - (equipment) (a) a dungeoneer’s pack or (b) an explorer’s pack

### Monk

- **Dado de vida:** d8
- **Salvaguardas (proficiência):** STR, DEX
- **Proficiências:** Simple Weapons, Shortswords, Saving Throw: DEX, Saving Throw: STR
- **Escolhas de proficiência:**
  - Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth
  - Choose one type of artisan’s tools or one musical instrument
- **Subclasses disponíveis:** Open Hand
- **Multiclasse — pré-requisito:** DEX 13+, WIS 13+
- **Multiclasse — proficiências ganhas:** Simple Weapons, Shortswords
- **Equipamento inicial:**
  - 10x Dart
  - (equipment) (a) a shortsword or (b) any simple weapon
  - (equipment) (a) a dungeoneer’s pack or (b) an explorer’s pack

### Paladin

- **Dado de vida:** d10
- **Salvaguardas (proficiência):** WIS, CHA
- **Proficiências:** All armor, Shields, Simple Weapons, Martial Weapons, Saving Throw: WIS, Saving Throw: CHA
- **Escolhas de proficiência:**
  - Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion
- **Subclasses disponíveis:** Devotion
- **Multiclasse — pré-requisito:** STR 13+, CHA 13+
- **Multiclasse — proficiências ganhas:** Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons
- **Equipamento inicial:**
  - 1x Chain Mail
  - (equipment) (a) a martial weapon and a shield or (b) two martial weapons
  - (equipment) (a) five javelins or (b) any simple melee weapon
  - (equipment) (a) a priest’s pack or (b) an explorer’s pack
  - (equipment) holy symbol

### Ranger

- **Dado de vida:** d10
- **Salvaguardas (proficiência):** STR, DEX
- **Proficiências:** Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons, Saving Throw: DEX, Saving Throw: STR
- **Escolhas de proficiência:**
  - Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival
- **Subclasses disponíveis:** Hunter
- **Multiclasse — pré-requisito:** DEX 13+, WIS 13+
- **Multiclasse — proficiências ganhas:** Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons
- **Equipamento inicial:**
  - 1x Longbow
  - 20x Arrow
  - (equipment) (a) scale mail or (b) leather armor
  - (equipment) (a) two shortswords or (b) two simple melee weapons
  - (equipment) (a) a dungeoneer’s pack or (b) an explorer’s pack

### Rogue

- **Dado de vida:** d8
- **Salvaguardas (proficiência):** DEX, INT
- **Proficiências:** Light Armor, Simple Weapons, Longswords, Rapiers, Shortswords, Hand crossbows, Thieves' Tools, Saving Throw: DEX, Saving Throw: INT
- **Escolhas de proficiência:**
  - Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth
- **Subclasses disponíveis:** Thief
- **Multiclasse — pré-requisito:** DEX 13+
- **Multiclasse — proficiências ganhas:** Light Armor, Thieves' Tools
- **Equipamento inicial:**
  - 1x Leather Armor
  - 2x Dagger
  - 1x Thieves' Tools
  - (equipment) (a) a rapier or (b) a shortsword
  - (equipment) (a) a shortbow and quiver of 20 arrows or (b) a shortsword
  - (equipment) (a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack

### Sorcerer

- **Dado de vida:** d6
- **Salvaguardas (proficiência):** CON, CHA
- **Proficiências:** Daggers, Darts, Slings, Quarterstaffs, Crossbows, light, Saving Throw: CON, Saving Throw: CHA
- **Escolhas de proficiência:**
  - Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion
- **Subclasses disponíveis:** Draconic
- **Multiclasse — pré-requisito:** CHA 13+
- **Multiclasse — proficiências ganhas:** —
- **Equipamento inicial:**
  - 2x Dagger
  - (equipment) (a) a light crossbow and 20 bolts or (b) any simple weapon
  - (equipment) (a) a component pouch or (b) an arcane focus
  - (equipment) (a) a dungeoneer’s pack or (b) an explorer’s pack

### Warlock

- **Dado de vida:** d8
- **Salvaguardas (proficiência):** WIS, CHA
- **Proficiências:** Light Armor, Simple Weapons, Saving Throw: WIS, Saving Throw: CHA
- **Escolhas de proficiência:**
  - Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion
- **Subclasses disponíveis:** Fiend
- **Multiclasse — pré-requisito:** CHA 13+
- **Multiclasse — proficiências ganhas:** Light Armor, Simple Weapons
- **Equipamento inicial:**
  - 2x Dagger
  - 1x Leather Armor
  - (equipment) (a) a light crossbow and 20 bolts or (b) any simple weapon
  - (equipment) (a) a component pouch or (b) an arcane focus
  - (equipment) (a) a scholar’s pack or (b) a dungeoneer’s pack
  - (equipment) any simple weapon

### Wizard

- **Dado de vida:** d6
- **Salvaguardas (proficiência):** INT, WIS
- **Proficiências:** Daggers, Darts, Slings, Quarterstaffs, Crossbows, light, Saving Throw: INT, Saving Throw: WIS
- **Escolhas de proficiência:**
  - Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion
- **Subclasses disponíveis:** Evocation
- **Multiclasse — pré-requisito:** INT 13+
- **Multiclasse — proficiências ganhas:** —
- **Equipamento inicial:**
  - 1x Spellbook
  - (equipment) (a) a quarterstaff or (b) a dagger
  - (equipment) (a) a component pouch or (b) an arcane focus
  - (equipment) (a) a scholar’s pack or (b) an explorer’s pack


---

## 9. Subclasses

### Berserker (Primal Path) — Barbarian

For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.

### Champion (Martial Archetype) — Fighter

The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.

### Devotion (Sacred Oath) — Paladin

The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.

### Draconic (Sorcerous Origin) — Sorcerer

Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.

### Evocation (Arcane Tradition) — Wizard

You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.

### Fiend (Otherworldly Patron) — Warlock

You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.

### Hunter (Ranger Archetype) — Ranger

Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.

### Land (Druid Circle) — Druid

The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.

### Life (Divine Domain) — Cleric

The Life domain focuses on the vibrant positive energy--one of the fundamental forces of the universe--that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community.

### Lore (Bard College) — Bard

Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.

### Open Hand (Monastic Tradition) — Monk

Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.

### Thief (Roguish Archetype) — Rogue

You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.


---

## 10. Antecedentes (Backgrounds)

### Acolyte

**Feature — Shelter of the Faithful**

As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.

You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.

- **Proficiências iniciais:** Skill: Insight, Skill: Religion
- **Idiomas:** escolha 2 adicionais
- **Ouro inicial:** 15 gp
- **Equipamento inicial:**
  - 1x Clothes, common
  - 1x Pouch
  - (equipment) escolha 1 de: Holy Symbols

**Traços de personalidade** (escolha 2):
- I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.
- I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.
- I see omens in every event and action. The gods try to speak to us, we just need to listen.
- Nothing can shake my optimistic attitude.
- I quote (or misquote) sacred texts and proverbs in almost every situation.
- I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.
- I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.
- I've spent so long in the temple that I have little practical experience dealing with people in the outside world.

**Ideais** (escolha 1):
- Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. _(Lawful Good, Lawful Neutral, Lawful Evil)_
- Charity. I always try to help those in need, no matter what the personal cost. _(Lawful Good, Neutral Good, Chaotic Good)_
- Change. We must help bring about the changes the gods are constantly working in the world. _(Chaotic Good, Chaotic Neutral, Chaotic Evil)_
- Power. I hope to one day rise to the top of my faith's religious hierarchy. _(Lawful Good, Lawful Neutral, Lawful Evil)_
- Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. _(Lawful Good, Lawful Neutral, Lawful Evil)_
- Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. _(Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, Neutral, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil)_

**Vínculos** (escolha 1):
- I would die to recover an ancient relic of my faith that was lost long ago.
- I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.
- I owe my life to the priest who took me in when my parents died.
- Everything I do is for the common people.
- I will do anything to protect the temple where I served.
- I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.

**Defeitos** (escolha 1):
- I judge others harshly, and myself even more severely.
- I put too much trust in those who wield power within my temple's hierarchy.
- My piety sometimes leads me to blindly trust those that profess faith in my god.
- I am inflexible in my thinking.
- I am suspicious of strangers and expect the worst of them.
- Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.


---

## 11. Talentos (Feats)

### Grappler

**Pré-requisito:** STR 13+

You’ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:

- You have advantage on Attack Rolls against a creature you are Grappling.

- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends.


---

## 12. Features de Classe — Nível 1

O que cada classe já entrega a um personagem recém-criado (nível 1).

### Barbarian

**Rage**
In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:

- You have advantage on Strength checks and Strength saving throws.

- When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.

- You have Resistance to bludgeoning, piercing, and slashing damage.

If you are able to cast Spells, you can't cast them or concentrate on them while raging.

Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.

Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.

**Unarmored Defense**
While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.

### Bard

**Bardic Inspiration (d6)**
You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.

You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. 

Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.

**Spellcasting: Bard**
You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.

### Cleric

**Bonus Proficiency**
When you choose this domain at 1st level, you gain proficiency with heavy armor.

**Disciple of Life**
Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.

**Divine Domain**
Choose one domain related to your deity, such as Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.

Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.

**Domain Spells**
Each domain has a list of spells--its domain spells--that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.

If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.

**Spellcasting: Cleric**
As a conduit for divine power, you can cast cleric spells.

### Druid

**Druidic**
You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.

**Spellcasting: Druid**
Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.

### Fighter

**Fighting Style**
You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

**Fighting Style: Archery**
You gain a +2 bonus to attack rolls you make with ranged weapons.

**Fighting Style: Defense**
While you are wearing armor, you gain a +1 bonus to AC.

**Fighting Style: Dueling**
When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.

**Fighting Style: Great Weapon Fighting**
When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.

**Fighting Style: Protection**
When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.

**Fighting Style: Two-Weapon Fighting**
When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.

**Second Wind**
You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.

### Monk

**Martial Arts**
At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property.

You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:

- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.

- You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.

- When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.

Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon.

**Unarmored Defense**
Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.

### Paladin

**Divine Sense**
The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.

You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.

**Lay on Hands**
Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.

As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.

Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.

This feature has no effect on undead and constructs.

### Ranger

**Favored Enemy (1 type)**
Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.

You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.

When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.

You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.

**Natural Explorer (1 terrain type)**
You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.

While traveling for an hour or more in your favored terrain, you gain the following benefits:

- Difficult terrain doesn't slow your group's travel.

- Your group can't become lost except by magical means.

- Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.

- If you are traveling alone, you can move stealthily at a normal pace.

- When you forage, you find twice as much food as you normally would.

- While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.

You choose additional favored terrain types at 6th and 10th level.

### Rogue

**Expertise**
At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit

**Sneak Attack**
Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.

The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.

**Thieves' Cant**
During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.

### Sorcerer

**Draconic Resilience**
As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.

Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.

**Dragon Ancestor**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Black - Acid Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Blue - Lightning Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Brass - Fire Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Bronze - Lightning Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Copper - Acid Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Gold - Fire Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Green - Poison Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Red - Fire Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: Silver - Cold Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Dragon Ancestor: White - Cold Damage**
At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.

You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.

**Sorcerous Origin**
Choose a sorcerous origin, which describes the source of your innate magical power, such as Draconic Bloodline.

Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.

**Spellcasting: Sorcerer**
An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.

### Warlock

**Dark One's Blessing**
Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).

**Otherworldly Patron**
At 1st level, you have struck a bargain with an otherworldly being of your choice, such as the Fiend. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.

**Pact Magic**
Your arcane research and the magic bestowed on you by your patron have given you facility with spells.

### Wizard

**Arcane Recovery**
You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.

For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.

**Spellcasting: Wizard**
As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.


---

## 13. Features de Classe — Progressão completa (tabela)

Todas as features por classe/subclasse e o nível em que são obtidas (texto completo de cada uma fica na 5e-API; aqui é o índice para saber o que existe).

| Classe/Subclasse | Nível | Feature |
|---|---|---|
| Barbarian | 1 | Rage |
| Barbarian | 1 | Unarmored Defense |
| Barbarian | 2 | Danger Sense |
| Barbarian | 2 | Reckless Attack |
| Barbarian | 3 | Frenzy |
| Barbarian | 3 | Primal Path |
| Barbarian | 4 | Ability Score Improvement |
| Barbarian | 5 | Extra Attack |
| Barbarian | 5 | Fast Movement |
| Barbarian | 6 | Mindless Rage |
| Barbarian | 6 | Path feature |
| Barbarian | 7 | Feral Instinct |
| Barbarian | 8 | Ability Score Improvement |
| Barbarian | 9 | Brutal Critical (1 die) |
| Barbarian | 10 | Intimidating Presence |
| Barbarian | 10 | Path feature |
| Barbarian | 11 | Relentless Rage |
| Barbarian | 12 | Ability Score Improvement |
| Barbarian | 13 | Brutal Critical (2 dice) |
| Barbarian | 14 | Path feature |
| Barbarian | 14 | Retaliation |
| Barbarian | 15 | Persistent Rage |
| Barbarian | 16 | Ability Score Improvement |
| Barbarian | 17 | Brutal Critical (3 dice) |
| Barbarian | 18 | Indomitable Might |
| Barbarian | 19 | Ability Score Improvement |
| Barbarian | 20 | Primal Champion |
| Bard | 1 | Bardic Inspiration (d6) |
| Bard | 1 | Spellcasting: Bard |
| Bard | 2 | Jack of All Trades |
| Bard | 2 | Song of Rest (d6) |
| Bard | 3 | Bard College |
| Bard | 3 | Bonus Proficiencies |
| Bard | 3 | Cutting Words |
| Bard | 3 | Expertise |
| Bard | 4 | Ability Score Improvement |
| Bard | 5 | Bardic Inspiration (d8) |
| Bard | 5 | Font of Inspiration |
| Bard | 6 | Additional Magical Secrets |
| Bard | 6 | Bard College feature |
| Bard | 6 | Countercharm |
| Bard | 8 | Ability Score Improvement |
| Bard | 9 | Song of Rest (d8) |
| Bard | 10 | Bardic Inspiration (d10) |
| Bard | 10 | Expertise |
| Bard | 10 | Magical Secrets |
| Bard | 12 | Ability Score Improvement |
| Bard | 13 | Song of Rest (d10) |
| Bard | 14 | Bard College feature |
| Bard | 14 | Magical Secrets |
| Bard | 14 | Peerless Skill |
| Bard | 15 | Bardic Inspiration (d12) |
| Bard | 16 | Ability Score Improvement |
| Bard | 17 | Song of Rest (d12) |
| Bard | 18 | Magical Secrets |
| Bard | 19 | Ability Score Improvement |
| Bard | 20 | Superior Inspiration |
| Cleric | 1 | Bonus Proficiency |
| Cleric | 1 | Disciple of Life |
| Cleric | 1 | Divine Domain |
| Cleric | 1 | Domain Spells |
| Cleric | 1 | Spellcasting: Cleric |
| Cleric | 2 | Channel Divinity (1/rest) |
| Cleric | 2 | Channel Divinity: Preserve Life |
| Cleric | 2 | Channel Divinity: Turn Undead |
| Cleric | 2 | Divine Domain feature |
| Cleric | 3 | Domain Spells |
| Cleric | 4 | Ability Score Improvement |
| Cleric | 5 | Destroy Undead (CR 1/2 or below) |
| Cleric | 5 | Domain Spells |
| Cleric | 6 | Blessed Healer |
| Cleric | 6 | Channel Divinity (2/rest) |
| Cleric | 6 | Divine Domain feature |
| Cleric | 7 | Domain Spells |
| Cleric | 8 | Ability Score Improvement |
| Cleric | 8 | Destroy Undead (CR 1 or below) |
| Cleric | 8 | Divine Domain feature |
| Cleric | 8 | Divine Strike |
| Cleric | 9 | Domain Spells |
| Cleric | 10 | Divine Intervention |
| Cleric | 11 | Destroy Undead (CR 2 or below) |
| Cleric | 12 | Ability Score Improvement |
| Cleric | 14 | Destroy Undead (CR 3 or below) |
| Cleric | 16 | Ability Score Improvement |
| Cleric | 17 | Destroy Undead (CR 4 or below) |
| Cleric | 17 | Divine Domain feature |
| Cleric | 17 | Supreme Healing |
| Cleric | 18 | Channel Divinity (3/rest) |
| Cleric | 19 | Ability Score Improvement |
| Cleric | 20 | Divine Intervention Improvement |
| Druid | 1 | Druidic |
| Druid | 1 | Spellcasting: Druid |
| Druid | 2 | Bonus Cantrip |
| Druid | 2 | Circle of the Land |
| Druid | 2 | Circle of the Land: Arctic |
| Druid | 2 | Circle of the Land: Coast |
| Druid | 2 | Circle of the Land: Desert |
| Druid | 2 | Circle of the Land: Forest |
| Druid | 2 | Circle of the Land: Grassland |
| Druid | 2 | Circle of the Land: Mountain |
| Druid | 2 | Circle of the Land: Swamp |
| Druid | 2 | Druid Circle |
| Druid | 2 | Natural Recovery |
| Druid | 2 | Wild Shape (CR 1/4 or below, no flying or swim speed) |
| Druid | 3 | Circle Spells |
| Druid | 4 | Ability Score Improvement |
| Druid | 4 | Wild Shape (CR 1/2 or below, no flying speed) |
| Druid | 5 | Circle Spells |
| Druid | 6 | Druid Circle feature |
| Druid | 6 | Land's Stride |
| Druid | 7 | Circle Spells |
| Druid | 8 | Ability Score Improvement |
| Druid | 8 | Wild Shape (CR 1 or below) |
| Druid | 9 | Circle Spells |
| Druid | 10 | Druid Circle feature |
| Druid | 10 | Nature's Ward |
| Druid | 12 | Ability Score Improvement |
| Druid | 14 | Druid Circle feature |
| Druid | 14 | Nature's Sanctuary |
| Druid | 16 | Ability Score Improvement |
| Druid | 18 | Beast Spells |
| Druid | 18 | Timeless Body |
| Druid | 19 | Ability Score Improvement |
| Druid | 20 | Archdruid |
| Fighter | 1 | Fighting Style |
| Fighter | 1 | Fighting Style: Archery |
| Fighter | 1 | Fighting Style: Defense |
| Fighter | 1 | Fighting Style: Dueling |
| Fighter | 1 | Fighting Style: Great Weapon Fighting |
| Fighter | 1 | Fighting Style: Protection |
| Fighter | 1 | Fighting Style: Two-Weapon Fighting |
| Fighter | 1 | Second Wind |
| Fighter | 2 | Action Surge (1 use) |
| Fighter | 3 | Improved Critical |
| Fighter | 3 | Martial Archetype |
| Fighter | 4 | Ability Score Improvement |
| Fighter | 5 | Extra Attack |
| Fighter | 6 | Ability Score Improvement |
| Fighter | 7 | Martial Archetype feature |
| Fighter | 7 | Remarkable Athlete |
| Fighter | 8 | Ability Score Improvement |
| Fighter | 9 | Indomitable (1 use) |
| Fighter | 10 | Additional Fighting Style |
| Fighter | 10 | Martial Archetype feature |
| Fighter | 11 | Extra Attack (2) |
| Fighter | 12 | Ability Score Improvement |
| Fighter | 13 | Indomitable (2 uses) |
| Fighter | 14 | Ability Score Improvement |
| Fighter | 15 | Martial Archetype feature |
| Fighter | 15 | Superior Critical |
| Fighter | 16 | Ability Score Improvement |
| Fighter | 17 | Action Surge (2 uses) |
| Fighter | 17 | Indomitable (3 uses) |
| Fighter | 18 | Martial Archetype feature |
| Fighter | 18 | Survivor |
| Fighter | 19 | Ability Score Improvement |
| Fighter | 20 | Extra Attack (3) |
| Monk | 1 | Martial Arts |
| Monk | 1 | Unarmored Defense |
| Monk | 2 | Flurry of Blows |
| Monk | 2 | Ki |
| Monk | 2 | Patient Defense |
| Monk | 2 | Step of the Wind |
| Monk | 2 | Unarmored Movement |
| Monk | 3 | Deflect Missiles |
| Monk | 3 | Monastic Tradition |
| Monk | 3 | Open Hand Technique |
| Monk | 4 | Ability Score Improvement |
| Monk | 4 | Slow Fall |
| Monk | 5 | Extra Attack |
| Monk | 5 | Stunning Strike |
| Monk | 6 | Ki Empowered Strikes |
| Monk | 6 | Monastic Tradition feature |
| Monk | 6 | Wholeness of Body |
| Monk | 7 | Evasion |
| Monk | 7 | Stillness of Mind |
| Monk | 8 | Ability Score Improvement |
| Monk | 9 | Unarmored Movement |
| Monk | 10 | Purity of Body |
| Monk | 11 | Monastic Tradition feature |
| Monk | 11 | Tranquility |
| Monk | 12 | Ability Score Improvement |
| Monk | 13 | Tongue of the Sun and Moon |
| Monk | 14 | Diamond Soul |
| Monk | 15 | Timeless Body |
| Monk | 16 | Ability Score Improvement |
| Monk | 17 | Monastic Tradition feature |
| Monk | 17 | Quivering Palm |
| Monk | 18 | Empty Body |
| Monk | 19 | Ability Score Improvement |
| Monk | 20 | Perfect Self |
| Paladin | 1 | Divine Sense |
| Paladin | 1 | Lay on Hands |
| Paladin | 2 | Divine Smite |
| Paladin | 2 | Fighting Style |
| Paladin | 2 | Fighting Style: Defense |
| Paladin | 2 | Fighting Style: Dueling |
| Paladin | 2 | Fighting Style: Great Weapon Fighting |
| Paladin | 2 | Fighting Style: Protection |
| Paladin | 2 | Spellcasting: Paladin |
| Paladin | 3 | Channel Divinity |
| Paladin | 3 | Channel Divinity: Sacred Weapon |
| Paladin | 3 | Channel Divinity: Turn the Unholy |
| Paladin | 3 | Divine Health |
| Paladin | 3 | Oath Spells |
| Paladin | 3 | Sacred Oath |
| Paladin | 4 | Ability Score Improvement |
| Paladin | 5 | Extra Attack |
| Paladin | 6 | Aura of Protection |
| Paladin | 7 | Aura of Devotion |
| Paladin | 7 | Sacred Oath feature |
| Paladin | 8 | Ability Score Improvement |
| Paladin | 10 | Aura of Courage |
| Paladin | 11 | Improved Divine Smite |
| Paladin | 12 | Ability Score Improvement |
| Paladin | 14 | Cleansing Touch |
| Paladin | 15 | Purity of Spirit |
| Paladin | 15 | Sacred Oath feature |
| Paladin | 16 | Ability Score Improvement |
| Paladin | 18 | Aura improvements |
| Paladin | 19 | Ability Score Improvement |
| Paladin | 20 | Holy Nimbus |
| Paladin | 20 | Sacred Oath feature |
| Ranger | 1 | Favored Enemy (1 type) |
| Ranger | 1 | Natural Explorer (1 terrain type) |
| Ranger | 2 | Fighting Style |
| Ranger | 2 | Fighting Style: Archery |
| Ranger | 2 | Fighting Style: Defense |
| Ranger | 2 | Fighting Style: Dueling |
| Ranger | 2 | Fighting Style: Two-Weapon Fighting |
| Ranger | 2 | Spellcasting: Ranger |
| Ranger | 3 | Hunter's Prey |
| Ranger | 3 | Hunter's Prey: Colossus Slayer |
| Ranger | 3 | Hunter's Prey: Giant Killer |
| Ranger | 3 | Hunter's Prey: Horde Breaker |
| Ranger | 3 | Primeval Awareness |
| Ranger | 3 | Ranger Archetype |
| Ranger | 4 | Ability Score Improvement |
| Ranger | 5 | Extra Attack |
| Ranger | 6 | Favored Enemy (2 types) |
| Ranger | 6 | Natural Explorer (2 terrain types) |
| Ranger | 7 | Defensive Tactics |
| Ranger | 7 | Defensive Tactics: Escape the Horde |
| Ranger | 7 | Defensive Tactics: Multiattack Defense |
| Ranger | 7 | Defensive Tactics: Steel Will |
| Ranger | 7 | Ranger Archetype feature |
| Ranger | 8 | Ability Score Improvement |
| Ranger | 8 | Land's Stride |
| Ranger | 10 | Hide in Plain Sight |
| Ranger | 10 | Natural Explorer (3 terrain types) |
| Ranger | 11 | Multiattack |
| Ranger | 11 | Multiattack: Volley |
| Ranger | 11 | Multiattack: Whirlwind Attack |
| Ranger | 11 | Ranger Archetype feature |
| Ranger | 12 | Ability Score Improvement |
| Ranger | 14 | Favored Enemy (3 enemies) |
| Ranger | 14 | Vanish |
| Ranger | 15 | Ranger Archetype feature |
| Ranger | 15 | Superior Hunter's Defense |
| Ranger | 15 | Superior Hunter's Defense: Evasion |
| Ranger | 15 | Superior Hunter's Defense: Stand Against the Tide |
| Ranger | 15 | Superior Hunter's Defense: Uncanny Dodge |
| Ranger | 16 | Ability Score Improvement |
| Ranger | 18 | Feral Senses |
| Ranger | 19 | Ability Score Improvement |
| Ranger | 20 | Foe Slayer |
| Rogue | 1 | Expertise |
| Rogue | 1 | Sneak Attack |
| Rogue | 1 | Thieves' Cant |
| Rogue | 2 | Cunning Action |
| Rogue | 3 | Fast Hands |
| Rogue | 3 | Roguish Archetype |
| Rogue | 3 | Second-Story Work |
| Rogue | 4 | Ability Score Improvement |
| Rogue | 5 | Uncanny Dodge |
| Rogue | 6 | Expertise |
| Rogue | 7 | Evasion |
| Rogue | 8 | Ability Score Improvement |
| Rogue | 9 | Roguish Archetype feature |
| Rogue | 9 | Supreme Sneak |
| Rogue | 10 | Ability Score Improvement |
| Rogue | 11 | Reliable Talent |
| Rogue | 12 | Ability Score Improvement |
| Rogue | 13 | Roguish Archetype feature |
| Rogue | 13 | Use Magic Device |
| Rogue | 14 | Blindsense |
| Rogue | 15 | Slippery Mind |
| Rogue | 16 | Ability Score Improvement |
| Rogue | 17 | Roguish Archetype feature |
| Rogue | 17 | Thief's Reflexes |
| Rogue | 18 | Elusive |
| Rogue | 19 | Ability Score Improvement |
| Rogue | 20 | Stroke of Luck |
| Sorcerer | 1 | Draconic Resilience |
| Sorcerer | 1 | Dragon Ancestor |
| Sorcerer | 1 | Dragon Ancestor: Black - Acid Damage |
| Sorcerer | 1 | Dragon Ancestor: Blue - Lightning Damage |
| Sorcerer | 1 | Dragon Ancestor: Brass - Fire Damage |
| Sorcerer | 1 | Dragon Ancestor: Bronze - Lightning Damage |
| Sorcerer | 1 | Dragon Ancestor: Copper - Acid Damage |
| Sorcerer | 1 | Dragon Ancestor: Gold - Fire Damage |
| Sorcerer | 1 | Dragon Ancestor: Green - Poison Damage |
| Sorcerer | 1 | Dragon Ancestor: Red - Fire Damage |
| Sorcerer | 1 | Dragon Ancestor: Silver - Cold Damage |
| Sorcerer | 1 | Dragon Ancestor: White - Cold Damage |
| Sorcerer | 1 | Sorcerous Origin |
| Sorcerer | 1 | Spellcasting: Sorcerer |
| Sorcerer | 2 | Flexible Casting: Converting Spell Slot |
| Sorcerer | 2 | Flexible Casting: Creating Spell Slots |
| Sorcerer | 2 | Font of Magic |
| Sorcerer | 3 | Metamagic |
| Sorcerer | 3 | Metamagic: Careful Spell |
| Sorcerer | 3 | Metamagic: Distant Spell |
| Sorcerer | 3 | Metamagic: Empowered Spell |
| Sorcerer | 3 | Metamagic: Extended Spell |
| Sorcerer | 3 | Metamagic: Heightened Spell |
| Sorcerer | 3 | Metamagic: Quickened Spell |
| Sorcerer | 3 | Metamagic: Subtle Spell |
| Sorcerer | 3 | Metamagic: Twinned Spell |
| Sorcerer | 4 | Ability Score Improvement |
| Sorcerer | 6 | Elemental Affinity |
| Sorcerer | 6 | Sorcerous Origin feature |
| Sorcerer | 8 | Ability Score Improvement |
| Sorcerer | 10 | Metamagic |
| Sorcerer | 12 | Ability Score Improvement |
| Sorcerer | 14 | Dragon Wings |
| Sorcerer | 14 | Sorcerous Origin feature |
| Sorcerer | 16 | Ability Score Improvement |
| Sorcerer | 17 | Metamagic |
| Sorcerer | 18 | Draconic Presence |
| Sorcerer | 18 | Sorcerous Origin feature |
| Sorcerer | 19 | Ability Score Improvement |
| Sorcerer | 20 | Sorcerous Restoration |
| Warlock | 1 | Dark One's Blessing |
| Warlock | 1 | Otherworldly Patron |
| Warlock | 1 | Pact Magic |
| Warlock | 2 | Eldritch Invocation: Agonizing Blast |
| Warlock | 2 | Eldritch Invocation: Armor of Shadows |
| Warlock | 2 | Eldritch Invocation: Beast Speech |
| Warlock | 2 | Eldritch Invocation: Beguiling Influence |
| Warlock | 2 | Eldritch Invocation: Book of Ancient Secrets |
| Warlock | 2 | Eldritch Invocation: Devil's Sight |
| Warlock | 2 | Eldritch Invocation: Eldritch Sight |
| Warlock | 2 | Eldritch Invocation: Eldritch Spear |
| Warlock | 2 | Eldritch Invocation: Eyes of the Rune Keeper |
| Warlock | 2 | Eldritch Invocation: Fiendish Vigor |
| Warlock | 2 | Eldritch Invocation: Gaze of Two Minds |
| Warlock | 2 | Eldritch Invocation: Mask of Many Faces |
| Warlock | 2 | Eldritch Invocation: Misty Visions |
| Warlock | 2 | Eldritch Invocation: Repelling Blast |
| Warlock | 2 | Eldritch Invocation: Thief of Five Fates |
| Warlock | 2 | Eldritch Invocation: Voice of the Chain Master |
| Warlock | 2 | Eldritch Invocations |
| Warlock | 3 | Pact Boon |
| Warlock | 3 | Pact of the Blade |
| Warlock | 3 | Pact of the Chain |
| Warlock | 3 | Pact of the Tome |
| Warlock | 4 | Ability Score Improvement |
| Warlock | 5 | Eldritch Invocation: Mire the Mind |
| Warlock | 5 | Eldritch Invocation: One with Shadows |
| Warlock | 5 | Eldritch Invocation: Sign of Ill Omen |
| Warlock | 5 | Eldritch Invocation: Thirsting Blade |
| Warlock | 6 | Dark One's Own Luck |
| Warlock | 6 | Otherworldly Patron feature |
| Warlock | 7 | Eldritch Invocation: Bewitching Whispers |
| Warlock | 7 | Eldritch Invocation: Dreadful Word |
| Warlock | 7 | Eldritch Invocation: Sculptor of Flesh |
| Warlock | 8 | Ability Score Improvement |
| Warlock | 9 | Eldritch Invocation: Ascendant Step |
| Warlock | 9 | Eldritch Invocation: Minions of Chaos |
| Warlock | 9 | Eldritch Invocation: Otherworldly Leap |
| Warlock | 9 | Eldritch Invocation: Whispers of the Grave |
| Warlock | 10 | Fiendish Resilience |
| Warlock | 10 | Otherworldly Patron feature |
| Warlock | 11 | Mystic Arcanum (6th level) |
| Warlock | 12 | Ability Score Improvement |
| Warlock | 12 | Eldritch Invocation: Lifedrinker |
| Warlock | 13 | Mystic Arcanum (7th level) |
| Warlock | 14 | Hurl Through Hell |
| Warlock | 14 | Otherworldly Patron feature |
| Warlock | 15 | Eldritch Invocation: Chains of Carceri |
| Warlock | 15 | Eldritch Invocation: Master of Myriad Forms |
| Warlock | 15 | Eldritch Invocation: Visions of Distant Realms |
| Warlock | 15 | Eldritch Invocation: Witch Sight |
| Warlock | 15 | Mystic Arcanum (8th level) |
| Warlock | 16 | Ability Score Improvement |
| Warlock | 17 | Mystic Arcanum (9th level) |
| Warlock | 19 | Ability Score Improvement |
| Warlock | 20 | Eldritch Master |
| Wizard | 1 | Arcane Recovery |
| Wizard | 1 | Spellcasting: Wizard |
| Wizard | 2 | Arcane Tradition |
| Wizard | 2 | Evocation Savant |
| Wizard | 2 | Sculpt Spells |
| Wizard | 4 | Ability Score Improvement |
| Wizard | 6 | Arcane Tradition feature |
| Wizard | 6 | Potent Cantrip |
| Wizard | 8 | Ability Score Improvement |
| Wizard | 10 | Arcane Tradition feature |
| Wizard | 10 | Empowered Evocation |
| Wizard | 12 | Ability Score Improvement |
| Wizard | 14 | Arcane Tradition feature |
| Wizard | 14 | Overchannel |
| Wizard | 16 | Ability Score Improvement |
| Wizard | 18 | Spell Mastery |
| Wizard | 19 | Ability Score Improvement |
| Wizard | 20 | Signature Spell |

---

## 14. Proficiências (catálogo)

### Armor

All armor, Breastplate, Chain Mail, Chain Shirt, Half Plate Armor, Heavy Armor, Hide Armor, Leather Armor, Light Armor, Medium Armor, Padded Armor, Plate Armor, Ring Mail, Scale Mail, Shields, Splint Armor, Studded Leather Armor

### Artisan's Tools

Alchemist's Supplies, Brewer's Supplies, Calligrapher's Supplies, Carpenter's Tools, Cartographer's Tools, Cobbler's Tools, Cook's utensils, Disguise Kit, Forgery Kit, Glassblower's Tools, Jeweler's Tools, Leatherworker's Tools, Mason's Tools, Painter's Supplies, Potter's Tools, Smith's Tools, Tinker's Tools, Weaver's Tools, Woodcarver's Tools

### Gaming Sets

Dice Set, Playing Card Set

### Musical Instruments

Bagpipes, Drum, Dulcimer, Flute, Horn, Lute, Lyre, Pan flute, Shawm, Viol

### Other

Herbalism Kit, Navigator's Tools, Poisoner's Kit, Thieves' Tools

### Saving Throws

Saving Throw: CHA, Saving Throw: CON, Saving Throw: DEX, Saving Throw: INT, Saving Throw: STR, Saving Throw: WIS

### Skills

Skill: Acrobatics, Skill: Animal Handling, Skill: Arcana, Skill: Athletics, Skill: Deception, Skill: History, Skill: Insight, Skill: Intimidation, Skill: Investigation, Skill: Medicine, Skill: Nature, Skill: Perception, Skill: Performance, Skill: Persuasion, Skill: Religion, Skill: Sleight of Hand, Skill: Stealth, Skill: Survival

### Vehicles

Land Vehicles, Water Vehicles

### Weapons

Battleaxes, Blowguns, Clubs, Crossbows, heavy, Crossbows, light, Daggers, Darts, Flails, Glaives, Greataxes, Greatclubs, Greatswords, Halberds, Hand crossbows, Handaxes, Javelins, Lances, Light hammers, Longbows, Longswords, Maces, Martial Weapons, Mauls, Morningstars, Nets, Pikes, Quarterstaffs, Rapiers, Scimitars, Shortbows, Shortswords, Sickles, Simple Weapons, Slings, Spears, Tridents, War picks, Warhammers, Whips


---

## 15. Equipamento Inicial

Agrupado por categoria. Colunas disponíveis nesta base: custo, peso e propriedades (dano/CA/alcance não vêm neste dump — ver PHB/SRD para esses números).

### Adventuring Gear

**Ammunition**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Arrow | 1 gp | 1 lb | - |
| Blowgun needle | 1 gp | 1 lb | - |
| Crossbow bolt | 1 gp | 1.5 lb | - |
| Sling bullet | 4 cp | 1.5 lb | - |

**Arcane Foci**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Crystal | 10 gp | 1 lb | - |
| Orb | 20 gp | 3 lb | - |
| Rod | 10 gp | 2 lb | - |
| Staff | 5 gp | 4 lb | - |
| Wand | 10 gp | 1 lb | - |

**Druidic Foci**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Sprig of mistletoe | 1 gp | 0 lb | - |
| Totem | 1 gp | 0 lb | - |
| Wooden staff | 5 gp | 4 lb | - |
| Yew wand | 10 gp | 1 lb | - |

**Equipment Packs**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Burglar's Pack | 16 gp | - | 1x Backpack, 1x Ball bearings (bag of 1,000), 1x String (10 feet), 1x Bell, 5x Candle, 1x Crowbar, 1x Hammer, 10x Piton, 1x Lantern, hooded, 2x Oil (flask), 5x Rations (1 day), 1x Tinderbox, 1x Waterskin, 1x Rope, hempen (50 feet) |
| Diplomat's Pack | 39 gp | - | 1x Chest, 2x Case, map or scroll, 1x Clothes, fine, 1x Ink (1 ounce bottle), 1x Ink pen, 1x Lamp, 2x Oil (flask), 5x Paper (one sheet), 1x Perfume (vial), 1x Sealing wax, 1x Soap |
| Dungeoneer's Pack | 12 gp | - | 1x Backpack, 1x Crowbar, 1x Hammer, 10x Piton, 10x Torch, 1x Tinderbox, 10x Rations (1 day), 1x Waterskin, 1x Rope, hempen (50 feet) |
| Entertainer's Pack | 40 gp | - | 1x Backpack, 1x Bedroll, 2x Clothes, costume, 5x Candle, 5x Rations (1 day), 1x Waterskin, 1x Disguise Kit |
| Explorer's Pack | 10 gp | - | 1x Backpack, 1x Bedroll, 1x Mess Kit, 1x Tinderbox, 10x Torch, 10x Rations (1 day), 1x Waterskin, 1x Rope, hempen (50 feet) |
| Priest's Pack | 19 gp | - | 1x Backpack, 1x Blanket, 10x Candle, 1x Tinderbox, 2x Rations (1 day), 1x Waterskin, 1x Alms box, 2x Block of incense, 1x Censer, 1x Vestments |
| Scholar's Pack | 40 gp | - | 1x Backpack, 1x Book, 1x Ink (1 ounce bottle), 1x Ink pen, 10x Parchment (one sheet), 1x Little bag of sand, 1x Small knife |

**Holy Symbols**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Amulet | 5 gp | 1 lb | - |
| Emblem | 5 gp | 0 lb | - |
| Reliquary | 5 gp | 2 lb | - |

**Kits**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Climber's Kit | 25 gp | 12 lb | - |
| Disguise Kit | 25 gp | 3 lb | - |
| Forgery Kit | 15 gp | 5 lb | - |
| Healer's Kit | 5 gp | 3 lb | - |
| Herbalism Kit | 5 gp | 3 lb | - |
| Mess Kit | 2 sp | 1 lb | - |
| Poisoner's Kit | 50 gp | 2 lb | - |

**Standard Gear**

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Abacus | 2 gp | 2 lb | - |
| Acid (vial) | 25 gp | 1 lb | - |
| Alchemist's fire (flask) | 50 gp | 1 lb | - |
| Alms box | 0 cp | 0 lb | - |
| Antitoxin (vial) | 50 gp | 0 lb | - |
| Backpack | 2 gp | 5 lb | - |
| Ball bearings (bag of 1,000) | 1 gp | 2 lb | - |
| Barrel | 2 gp | 70 lb | - |
| Basket | 4 sp | 2 lb | - |
| Bedroll | 1 gp | 7 lb | - |
| Bell | 1 gp | 0 lb | - |
| Blanket | 5 sp | 3 lb | - |
| Block and tackle | 1 gp | 5 lb | - |
| Block of incense | 0 cp | 0 lb | - |
| Book | 25 gp | 5 lb | - |
| Bottle, glass | 2 gp | 2 lb | - |
| Bucket | 5 cp | 2 lb | - |
| Caltrops | 5 cp | 2 lb | - |
| Candle | 1 cp | 0 lb | - |
| Case, crossbow bolt | 1 gp | 1 lb | - |
| Case, map or scroll | 1 gp | 1 lb | - |
| Censer | 0 cp | 0 lb | - |
| Chain (10 feet) | 5 gp | 10 lb | - |
| Chalk (1 piece) | 1 cp | 0 lb | - |
| Chest | 5 gp | 25 lb | - |
| Clothes, common | 5 sp | 3 lb | - |
| Clothes, costume | 5 gp | 4 lb | - |
| Clothes, fine | 15 gp | 6 lb | - |
| Clothes, traveler's | 2 gp | 4 lb | - |
| Component pouch | 25 gp | 2 lb | - |
| Crowbar | 2 gp | 5 lb | - |
| Fishing tackle | 1 gp | 4 lb | - |
| Flask or tankard | 2 cp | 1 lb | - |
| Grappling hook | 2 gp | 4 lb | - |
| Hammer | 1 gp | 3 lb | - |
| Hammer, sledge | 2 gp | 10 lb | - |
| Holy water (flask) | 25 gp | 1 lb | - |
| Hourglass | 25 gp | 1 lb | - |
| Hunting trap | 5 gp | 25 lb | - |
| Ink (1 ounce bottle) | 10 gp | 0 lb | - |
| Ink pen | 2 cp | 0 lb | - |
| Jug or pitcher | 2 cp | 4 lb | - |
| Ladder (10-foot) | 1 sp | 25 lb | - |
| Lamp | 5 sp | 1 lb | - |
| Lantern, bullseye | 10 gp | 2 lb | - |
| Lantern, hooded | 5 gp | 2 lb | - |
| Little bag of sand | 0 cp | 0 lb | - |
| Lock | 10 gp | 1 lb | - |
| Magnifying glass | 100 gp | 0 lb | - |
| Manacles | 2 gp | 6 lb | - |
| Mirror, steel | 5 gp | 0.5 lb | - |
| Oil (flask) | 1 sp | 1 lb | - |
| Paper (one sheet) | 2 sp | 0 lb | - |
| Parchment (one sheet) | 1 sp | 0 lb | - |
| Perfume (vial) | 5 gp | 0 lb | - |
| Pick, miner's | 2 gp | 10 lb | - |
| Piton | 5 cp | 0.25 lb | - |
| Poison, basic (vial) | 100 gp | 0 lb | - |
| Pole (10-foot) | 5 cp | 7 lb | - |
| Pot, iron | 2 gp | 10 lb | - |
| Pouch | 5 sp | 1 lb | - |
| Quiver | 1 gp | 1 lb | - |
| Ram, portable | 4 gp | 35 lb | - |
| Rations (1 day) | 5 sp | 2 lb | - |
| Robes | 1 gp | 4 lb | - |
| Rope, hempen (50 feet) | 1 gp | 10 lb | - |
| Rope, silk (50 feet) | 10 gp | 5 lb | - |
| Sack | 1 cp | 0.5 lb | - |
| Scale, merchant's | 5 gp | 3 lb | - |
| Sealing wax | 5 sp | 0 lb | - |
| Shovel | 2 gp | 5 lb | - |
| Signal whistle | 5 cp | 0 lb | - |
| Signet ring | 5 gp | 0 lb | - |
| Small knife | 0 cp | 0 lb | - |
| Soap | 2 cp | 0 lb | - |
| Spellbook | 50 gp | 3 lb | - |
| Spike, iron | 1 sp | 5 lb | - |
| Spyglass | 1000 gp | 1 lb | - |
| String (10 feet) | 0 cp | 0 lb | - |
| Tent, two-person | 2 gp | 20 lb | - |
| Tinderbox | 5 sp | 1 lb | - |
| Torch | 1 cp | 1 lb | - |
| Vestments | 0 cp | 0 lb | - |
| Vial | 1 gp | 0 lb | - |
| Waterskin | 2 sp | 5 lb | - |
| Whetstone | 1 cp | 1 lb | - |

### Armor

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Breastplate | 400 gp | 20 lb | - |
| Chain Mail | 75 gp | 55 lb | - |
| Chain Shirt | 50 gp | 20 lb | - |
| Half Plate Armor | 750 gp | 40 lb | - |
| Hide Armor | 10 gp | 12 lb | - |
| Leather Armor | 10 gp | 10 lb | - |
| Padded Armor | 5 gp | 8 lb | - |
| Plate Armor | 1500 gp | 65 lb | - |
| Ring Mail | 30 gp | 40 lb | - |
| Scale Mail | 50 gp | 45 lb | - |
| Shield | 10 gp | 6 lb | - |
| Splint Armor | 200 gp | 60 lb | - |
| Studded Leather Armor | 45 gp | 13 lb | - |

### Mounts and Vehicles

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Animal Feed (1 day) | 5 cp | 10 lb | - |
| Barding: Breastplate | 1600 gp | 40 lb | - |
| Barding: Chain mail | 300 gp | 110 lb | - |
| Barding: Chain shirt | 200 gp | 40 lb | - |
| Barding: Half plate | 3000 gp | 80 lb | - |
| Barding: Hide | 40 gp | 24 lb | - |
| Barding: Leather | 40 gp | 20 lb | - |
| Barding: Padded | 20 gp | 16 lb | - |
| Barding: Plate | 6000 gp | 130 lb | - |
| Barding: Ring mail | 12 gp | 80 lb | - |
| Barding: Scale mail | 200 gp | 90 lb | - |
| Barding: Splint | 800 gp | 120 lb | - |
| Barding: Studded Leather | 180 gp | 26 lb | - |
| Bit and bridle | 2 gp | 1 lb | - |
| Camel | 50 gp | - | - |
| Carriage | 100 gp | 600 lb | - |
| Cart | 15 gp | 200 lb | - |
| Chariot | 250 gp | 100 lb | - |
| Donkey | 8 gp | - | - |
| Elephant | 200 gp | - | - |
| Galley | 30000 gp | - | - |
| Horse, draft | 50 gp | - | - |
| Horse, riding | 75 gp | - | - |
| Keelboat | 3000 gp | - | - |
| Longship | 10000 gp | - | - |
| Mastiff | 25 gp | - | - |
| Mule | 8 gp | - | - |
| Pony | 30 gp | - | - |
| Rowboat | 50 gp | - | - |
| Saddle, Exotic | 60 gp | 50 lb | - |
| Saddle, Military | 20 gp | 30 lb | - |
| Saddle, Pack | 5 gp | 15 lb | - |
| Saddle, Riding | 10 gp | 25 lb | - |
| Saddlebags | 4 gp | 8 lb | - |
| Sailing ship | 10000 gp | - | - |
| Sled | 20 gp | 300 lb | - |
| Stabling (1 day) | 5 sp | 0 lb | - |
| Wagon | 35 gp | 400 lb | - |
| Warhorse | 400 gp | - | - |
| Warship | 25000 gp | - | - |

### Tools

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Alchemist's Supplies | 50 gp | 8 lb | - |
| Bagpipes | 30 gp | 6 lb | - |
| Brewer's Supplies | 20 gp | 9 lb | - |
| Calligrapher's Supplies | 10 gp | 5 lb | - |
| Carpenter's Tools | 8 gp | 6 lb | - |
| Cartographer's Tools | 15 gp | 6 lb | - |
| Cobbler's Tools | 5 gp | 5 lb | - |
| Cook's utensils | 1 gp | 8 lb | - |
| Dice Set | 1 sp | 0 lb | - |
| Drum | 6 gp | 3 lb | - |
| Dulcimer | 25 gp | 10 lb | - |
| Flute | 2 gp | 1 lb | - |
| Glassblower's Tools | 30 gp | 5 lb | - |
| Horn | 3 gp | 2 lb | - |
| Jeweler's Tools | 25 gp | 2 lb | - |
| Leatherworker's Tools | 5 gp | 5 lb | - |
| Lute | 35 gp | 2 lb | - |
| Lyre | 30 gp | 2 lb | - |
| Mason's Tools | 10 gp | 8 lb | - |
| Navigator's Tools | 25 gp | 2 lb | - |
| Painter's Supplies | 10 gp | 5 lb | - |
| Pan flute | 12 gp | 2 lb | - |
| Playing Card Set | 5 sp | 0 lb | - |
| Potter's Tools | 10 gp | 3 lb | - |
| Shawm | 2 gp | 1 lb | - |
| Smith's Tools | 20 gp | 8 lb | - |
| Thieves' Tools | 25 gp | 1 lb | - |
| Tinker's Tools | 50 gp | 10 lb | - |
| Viol | 30 gp | 1 lb | - |
| Weaver's Tools | 1 gp | 5 lb | - |
| Woodcarver's Tools | 1 gp | 5 lb | - |

### Weapon

| Item | Custo | Peso | Propriedades / Conteúdo |
|---|---|---|---|
| Battleaxe | 10 gp | 4 lb | Versatile |
| Blowgun | 10 gp | 1 lb | Ammunition, Loading |
| Club | 1 sp | 2 lb | Light, Monk |
| Crossbow, hand | 75 gp | 3 lb | Ammunition, Light, Loading |
| Crossbow, heavy | 50 gp | 18 lb | Ammunition, Heavy, Loading, Two-Handed |
| Crossbow, light | 25 gp | 5 lb | Ammunition, Loading, Two-Handed |
| Dagger | 2 gp | 1 lb | Finesse, Light, Thrown, Monk |
| Dart | 5 cp | 0.25 lb | Finesse, Thrown |
| Flail | 10 gp | 2 lb | - |
| Glaive | 20 gp | 6 lb | Heavy, Reach, Two-Handed |
| Greataxe | 30 gp | 7 lb | Heavy, Two-Handed |
| Greatclub | 2 sp | 10 lb | Two-Handed |
| Greatsword | 50 gp | 6 lb | Heavy, Two-Handed |
| Halberd | 20 gp | 6 lb | Heavy, Reach, Two-Handed |
| Handaxe | 5 gp | 2 lb | Light, Thrown, Monk |
| Javelin | 5 sp | 2 lb | Thrown, Monk |
| Lance | 10 gp | 6 lb | Reach, Special |
| Light hammer | 2 gp | 2 lb | Light, Thrown, Monk |
| Longbow | 50 gp | 2 lb | Ammunition, Heavy, Two-Handed |
| Longsword | 15 gp | 3 lb | Versatile |
| Mace | 5 gp | 4 lb | Monk |
| Maul | 10 gp | 10 lb | Heavy, Two-Handed |
| Morningstar | 15 gp | 4 lb | - |
| Net | 1 gp | 3 lb | Thrown, Special |
| Pike | 5 gp | 18 lb | Heavy, Reach, Two-Handed |
| Quarterstaff | 2 sp | 4 lb | Versatile, Monk |
| Rapier | 25 gp | 2 lb | Finesse |
| Scimitar | 25 gp | 3 lb | Finesse, Light |
| Shortbow | 25 gp | 2 lb | Ammunition, Two-Handed |
| Shortsword | 10 gp | 2 lb | Finesse, Light, Monk |
| Sickle | 1 gp | 2 lb | Light, Monk |
| Sling | 1 sp | 0 lb | Ammunition |
| Spear | 1 gp | 3 lb | Thrown, Versatile, Monk |
| Trident | 5 gp | 4 lb | Thrown, Versatile |
| War pick | 5 gp | 2 lb | - |
| Warhammer | 15 gp | 2 lb | Versatile |
| Whip | 2 gp | 3 lb | Finesse, Reach |


---

## 16. Propriedades de Armas

**Ammunition**
You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon).

At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.

**Finesse**
When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.

**Heavy**
Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Small creature to use effectively.

**Light**
A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.

**Loading**
Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.

**Monk**
Monks gain several benefits while unarmed or wielding only monk weapons while they aren't wearing armor or wielding shields.

**Reach**
This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it.

**Special**
A weapon with the special property has unusual rules governing its use, explained in the weapon's description (see "Special Weapons" later in this section).

**Thrown**
If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.

**Two-Handed**
This weapon requires two hands when you attack with it.

**Versatile**
This weapon can be used with one or two hands. A damage value in parentheses appears with the property--the damage when the weapon is used with two hands to make a melee attack.


---

## 17. Escolas de Magia

**Abjuration** — Abjuration spells are protective in nature, though some of them have aggressive uses. They create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence.
**Conjuration** — Conjuration spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster's side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing.
**Divination** — Divination spells reveal information, whether in the form of secrets long forgotten, glimpses of the future, the locations of hidden things, the truth behind illusions, or visions of distant people or places.
**Enchantment** — Enchantment spells affect the minds of others, influencing or controlling their behavior. Such spells can make enemies see the caster as a friend, force creatures to take a course of action, or even control another creature like a puppet.
**Evocation** — Evocation spells manipulate magical energy to produce a desired effect. Some call up blasts of fire or lightning. Others channel positive energy to heal wounds.
**Illusion** — Illusion spells deceive the senses or minds of others. They cause people to see things that are not there, to miss things that are there, to hear phantom noises, or to remember things that never happened. Some illusions create phantom images that any creature can see, but the most insidious illusions plant an image directly in the mind of a creature.
**Necromancy** — Necromancy spells manipulate the energies of life and death. Such spells can grant an extra reserve of life force, drain the life energy from another creature, create the undead, or even bring the dead back to life.
**Transmutation** — Transmutation spells change the properties of a creature, object, or environment. They might turn an enemy into a harmless creature, bolster the strength of an ally, make an object move at the caster's command, or enhance a creature's innate healing abilities to rapidly recover from injury.


---

## 18. Magias (tabela de referência)

Total: 319 magias. Descrições completas ficam na 5e-API; aqui vai o essencial para escolher magias na criação do personagem.

| Nv | Magia | Escola | Tempo de conjuração | Alcance | Conc. | Ritual | Classes |
|---|---|---|---|---|---|---|---|
| Truque | Acid Splash | Conjuration | 1 action | 60 feet | - | - | Sorcerer, Wizard |
| Truque | Chill Touch | Necromancy | 1 action | 120 feet | - | - | Sorcerer, Warlock, Wizard |
| Truque | Dancing Lights | Evocation | 1 action | 120 feet | Sim | - | Bard, Sorcerer, Wizard |
| Truque | Druidcraft | Transmutation | 1 action | 30 feet | - | - | Druid |
| Truque | Eldritch Blast | Evocation | 1 action | 120 feet | - | - | Warlock |
| Truque | Fire Bolt | Evocation | 1 action | 120 feet | - | - | Sorcerer, Wizard |
| Truque | Guidance | Divination | 1 action | Touch | Sim | - | Cleric, Druid |
| Truque | Light | Evocation | 1 action | Touch | - | - | Bard, Cleric, Sorcerer, Wizard |
| Truque | Mage Hand | Conjuration | 1 action | 30 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| Truque | Mending | Transmutation | 1 minute | Touch | - | - | Cleric, Bard, Druid, Sorcerer, Wizard |
| Truque | Message | Transmutation | 1 action | 120 feet | - | - | Bard, Sorcerer, Wizard |
| Truque | Minor Illusion | Illusion | 1 action | 30 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| Truque | Poison Spray | Conjuration | 1 action | 10 feet | - | - | Sorcerer, Warlock, Wizard, Druid |
| Truque | Prestidigitation | Transmutation | 1 action | 10 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| Truque | Produce Flame | Conjuration | 1 action | Self | - | - | Druid |
| Truque | Ray of Frost | Evocation | 1 action | 60 feet | - | - | Sorcerer, Wizard |
| Truque | Resistance | Abjuration | 1 action | Touch | Sim | - | Cleric, Druid |
| Truque | Sacred Flame | Evocation | 1 action | 60 feet | - | - | Cleric |
| Truque | Shillelagh | Transmutation | 1 bonus action | Touch | - | - | Druid |
| Truque | Shocking Grasp | Evocation | 1 action | Touch | - | - | Sorcerer, Wizard |
| Truque | Spare the Dying | Necromancy | 1 action | Touch | - | - | Cleric |
| Truque | Thaumaturgy | Transmutation | 1 action | 30 feet | - | - | Cleric |
| Truque | True Strike | Divination | 1 action | 30 feet | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| Truque | Vicious Mockery | Enchantment | 1 action | 60 feet | - | - | Bard |
| 1 | Alarm | Abjuration | 1 minute | 30 feet | - | Sim | Ranger, Wizard |
| 1 | Animal Friendship | Enchantment | 1 action | 30 feet | - | - | Bard, Druid, Ranger |
| 1 | Bane | Enchantment | 1 action | 30 feet | Sim | - | Bard, Cleric |
| 1 | Bless | Enchantment | 1 action | 30 feet | Sim | - | Cleric, Paladin |
| 1 | Burning Hands | Evocation | 1 action | Self | - | - | Sorcerer, Wizard |
| 1 | Charm Person | Enchantment | 1 action | 30 feet | - | - | Bard, Druid, Sorcerer, Warlock, Wizard |
| 1 | Color Spray | Illusion | 1 action | Self | - | - | Sorcerer, Wizard |
| 1 | Command | Enchantment | 1 action | 60 feet | - | - | Cleric, Paladin |
| 1 | Comprehend Languages | Divination | 1 action | Self | - | Sim | Bard, Sorcerer, Warlock, Wizard |
| 1 | Create or Destroy Water | Transmutation | 1 action | 30 feet | - | - | Cleric, Druid |
| 1 | Cure Wounds | Evocation | 1 action | Touch | - | - | Bard, Cleric, Druid, Paladin, Ranger |
| 1 | Detect Evil and Good | Divination | 1 action | Self | Sim | - | Cleric, Paladin |
| 1 | Detect Magic | Divination | 1 action | Self | Sim | Sim | Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard |
| 1 | Detect Poison and Disease | Divination | 1 action | Self | Sim | Sim | Cleric, Druid, Paladin, Ranger |
| 1 | Disguise Self | Illusion | 1 action | Self | - | - | Bard, Sorcerer, Wizard |
| 1 | Divine Favor | Evocation | 1 bonus action | Self | Sim | - | Paladin |
| 1 | Entangle | Conjuration | 1 action | 90 feet | Sim | - | Druid |
| 1 | Expeditious Retreat | Transmutation | 1 bonus action | Self | Sim | - | Sorcerer, Warlock, Wizard |
| 1 | Faerie Fire | Evocation | 1 action | 60 feet | Sim | - | Druid |
| 1 | False Life | Necromancy | 1 action | Self | - | - | Sorcerer, Wizard |
| 1 | Feather Fall | Transmutation | 1 reaction | 60 feet | - | - | Bard, Sorcerer, Wizard |
| 1 | Find Familiar | Conjuration | 1 hour | 10 feet | - | Sim | Wizard |
| 1 | Floating Disk | Conjuration | 1 action | 30 feet | - | Sim | Wizard |
| 1 | Fog Cloud | Conjuration | 1 action | 120 feet | Sim | - | Druid, Ranger, Sorcerer, Wizard |
| 1 | Goodberry | Transmutation | 1 action | Touch | - | - | Druid, Ranger |
| 1 | Grease | Conjuration | 1 action | 60 feet | - | - | Wizard |
| 1 | Guiding Bolt | Evocation | 1 action | 120 feet | - | - | Cleric |
| 1 | Healing Word | Evocation | 1 bonus action | 60 feet | - | - | Bard, Cleric, Druid |
| 1 | Hellish Rebuke | Evocation | 1 reaction | 60 feet | - | - | Warlock |
| 1 | Heroism | Enchantment | 1 action | Touch | Sim | - | Bard, Paladin |
| 1 | Hideous Laughter | Enchantment | 1 action | 30 feet | Sim | - | Bard, Wizard |
| 1 | Hunter's Mark | Divination | 1 bonus action | 90 feet | Sim | - | Ranger |
| 1 | Identify | Divination | 1 minute | Touch | - | Sim | Bard, Wizard |
| 1 | Illusory Script | Illusion | 1 minute | Touch | - | Sim | Bard, Warlock, Wizard |
| 1 | Inflict Wounds | Necromancy | 1 action | Touch | - | - | Cleric |
| 1 | Jump | Transmutation | 1 action | Touch | - | - | Druid, Ranger, Sorcerer, Wizard |
| 1 | Longstrider | Transmutation | 1 action | Touch | - | - | Bard, Druid, Ranger, Wizard |
| 1 | Mage Armor | Abjuration | 1 action | Touch | - | - | Sorcerer, Wizard |
| 1 | Magic Missile | Evocation | 1 action | 120 feet | - | - | Sorcerer, Wizard |
| 1 | Protection from Evil and Good | Abjuration | 1 action | Touch | Sim | - | Cleric, Paladin, Warlock, Wizard |
| 1 | Purify Food and Drink | Transmutation | 1 action | 10 feet | - | Sim | Cleric, Druid, Paladin |
| 1 | Sanctuary | Abjuration | 1 bonus action | 30 feet | - | - | Cleric |
| 1 | Shield | Abjuration | 1 reaction | Self | - | - | Sorcerer, Wizard |
| 1 | Shield of Faith | Abjuration | 1 bonus action | 60 feet | Sim | - | Cleric, Paladin |
| 1 | Silent Image | Illusion | 1 action | 60 feet | Sim | - | Bard, Sorcerer, Wizard |
| 1 | Sleep | Enchantment | 1 action | 90 feet | - | - | Bard, Sorcerer, Wizard |
| 1 | Speak with Animals | Divination | 1 action | Self | - | Sim | Bard, Druid, Ranger |
| 1 | Thunderwave | Evocation | 1 action | Self | - | - | Bard, Druid, Sorcerer, Wizard |
| 1 | Unseen Servant | Conjuration | 1 action | 60 feet | - | Sim | Bard, Warlock, Wizard |
| 2 | Acid Arrow | Evocation | 1 action | 90 feet | - | - | Wizard |
| 2 | Aid | Abjuration | 1 action | 30 feet | - | - | Cleric, Paladin |
| 2 | Alter Self | Transmutation | 1 action | Self | Sim | - | Sorcerer, Wizard |
| 2 | Animal Messenger | Enchantment | 1 action | 30 feet | - | Sim | Bard, Druid, Ranger |
| 2 | Arcane Lock | Abjuration | 1 action | Touch | - | - | Wizard |
| 2 | Arcanist's Magic Aura | Illusion | 1 action | Touch | - | - | Wizard |
| 2 | Augury | Divination | 1 minute | Self | - | Sim | Cleric |
| 2 | Barkskin | Transmutation | 1 action | Touch | Sim | - | Druid, Ranger |
| 2 | Blindness/Deafness | Necromancy | 1 action | 30 feet | - | - | Bard, Cleric, Sorcerer, Wizard |
| 2 | Blur | Illusion | 1 action | Self | Sim | - | Sorcerer, Wizard |
| 2 | Branding Smite | Evocation | 1 bonus action | Self | Sim | - | Paladin |
| 2 | Calm Emotions | Enchantment | 1 action | 60 feet | Sim | - | Bard, Cleric |
| 2 | Continual Flame | Evocation | 1 action | Touch | - | - | Cleric, Wizard |
| 2 | Darkness | Evocation | 1 action | 60 feet | Sim | - | Sorcerer, Warlock, Wizard |
| 2 | Darkvision | Transmutation | 1 action | Touch | - | - | Druid, Ranger, Sorcerer, Wizard |
| 2 | Detect Thoughts | Divination | 1 action | Self | Sim | - | Bard, Sorcerer, Wizard |
| 2 | Enhance Ability | Transmutation | 1 action | Touch | Sim | - | Bard, Cleric, Druid, Sorcerer |
| 2 | Enlarge/Reduce | Transmutation | 1 action | 30 feet | Sim | - | Sorcerer, Wizard |
| 2 | Enthrall | Enchantment | 1 action | 60 feet | - | - | Bard, Warlock |
| 2 | Find Steed | Conjuration | 10 minutes | 30 feet | - | - | Paladin |
| 2 | Find Traps | Divination | 1 action | 120 feet | - | - | Cleric, Druid, Ranger |
| 2 | Flame Blade | Evocation | 1 bonus action | Self | Sim | - | Druid |
| 2 | Flaming Sphere | Conjuration | 1 action | 60 feet | Sim | - | Druid, Wizard |
| 2 | Gentle Repose | Necromancy | 1 action | Touch | - | Sim | Cleric, Wizard |
| 2 | Gust of Wind | Evocation | 1 action | Self | Sim | - | Druid, Sorcerer, Wizard |
| 2 | Heat Metal | Transmutation | 1 action | 60 feet | Sim | - | Bard, Druid |
| 2 | Hold Person | Enchantment | 1 action | 60 feet | Sim | - | Bard, Cleric, Druid, Sorcerer, Warlock, Wizard |
| 2 | Invisibility | Illusion | 1 action | Touch | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 2 | Knock | Transmutation | 1 action | 60 feet | - | - | Bard, Sorcerer, Wizard |
| 2 | Lesser Restoration | Abjuration | 1 action | Touch | - | - | Bard, Cleric, Druid, Paladin, Ranger |
| 2 | Levitate | Transmutation | 1 action | 60 feet | Sim | - | Sorcerer, Wizard |
| 2 | Locate Animals or Plants | Divination | 1 action | Self | - | Sim | Bard, Druid, Ranger |
| 2 | Locate Object | Divination | 1 action | Self | Sim | - | Bard, Cleric, Druid, Paladin, Ranger, Wizard |
| 2 | Magic Mouth | Illusion | 1 minute | 30 feet | - | Sim | Bard, Wizard |
| 2 | Magic Weapon | Transmutation | 1 bonus action | Touch | Sim | - | Paladin, Wizard |
| 2 | Mirror Image | Illusion | 1 action | Self | - | - | Sorcerer, Warlock, Wizard |
| 2 | Misty Step | Conjuration | 1 bonus action | Self | - | - | Sorcerer, Warlock, Wizard |
| 2 | Moonbeam | Evocation | 1 action | 120 feet | Sim | - | Druid |
| 2 | Pass Without Trace | Abjuration | 1 action | Self | Sim | - | Druid, Ranger |
| 2 | Prayer of Healing | Evocation | 10 minutes | 30 feet | - | - | Cleric |
| 2 | Protection from Poison | Abjuration | 1 action | Touch | - | - | Cleric, Druid, Paladin, Ranger |
| 2 | Ray of Enfeeblement | Necromancy | 1 action | 60 feet | Sim | - | Warlock, Wizard |
| 2 | Rope Trick | Transmutation | 1 action | Touch | - | - | Wizard |
| 2 | Scorching Ray | Evocation | 1 action | 120 feet | - | - | Sorcerer, Wizard |
| 2 | See Invisibility | Divination | 1 action | Self | - | - | Bard, Sorcerer, Wizard |
| 2 | Shatter | Evocation | 1 action | 60 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| 2 | Silence | Illusion | 1 action | 120 feet | Sim | Sim | Bard, Cleric, Ranger |
| 2 | Spider Climb | Transmutation | 1 action | Touch | Sim | - | Sorcerer, Warlock, Wizard |
| 2 | Spike Growth | Transmutation | 1 action | 150 feet | Sim | - | Druid, Ranger |
| 2 | Spiritual Weapon | Evocation | 1 bonus action | 60 feet | - | - | Cleric |
| 2 | Suggestion | Enchantment | 1 action | 30 feet | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 2 | Warding Bond | Abjuration | 1 action | Touch | - | - | Cleric |
| 2 | Web | Conjuration | 1 action | 60 feet | Sim | - | Sorcerer, Wizard |
| 2 | Zone of Truth | Enchantment | 1 action | 60 feet | - | - | Bard, Cleric, Paladin |
| 3 | Animate Dead | Necromancy | 1 minute | 10 feet | - | - | Cleric, Wizard |
| 3 | Beacon of Hope | Abjuration | 1 action | 30 feet | Sim | - | Cleric |
| 3 | Bestow Curse | Necromancy | 1 action | Touch | Sim | - | Bard, Cleric, Wizard |
| 3 | Blink | Transmutation | 1 action | Self | - | - | Sorcerer, Wizard |
| 3 | Call Lightning | Conjuration | 1 action | 120 feet | Sim | - | Druid |
| 3 | Clairvoyance | Divination | 10 minutes | 1 mile | Sim | - | Bard, Cleric, Sorcerer, Wizard |
| 3 | Conjure Animals | Conjuration | 1 action | 60 feet | Sim | - | Druid, Ranger |
| 3 | Counterspell | Abjuration | 1 reaction | 60 feet | - | - | Sorcerer, Warlock, Wizard |
| 3 | Create Food and Water | Conjuration | 1 action | 30 feet | - | - | Cleric, Druid, Paladin |
| 3 | Daylight | Evocation | 1 action | 60 feet | - | - | Cleric, Druid, Paladin, Ranger, Sorcerer |
| 3 | Dispel Magic | Abjuration | 1 action | 120 feet | - | - | Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard |
| 3 | Fear | Illusion | 1 action | Self | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 3 | Fireball | Evocation | 1 action | 150 feet | - | - | Sorcerer, Wizard |
| 3 | Fly | Transmutation | 1 action | Touch | Sim | - | Sorcerer, Warlock, Wizard |
| 3 | Gaseous Form | Transmutation | 1 action | Touch | Sim | - | Sorcerer, Warlock, Wizard |
| 3 | Glyph of Warding | Abjuration | 1 hour | Touch | - | - | Bard, Cleric, Wizard |
| 3 | Haste | Transmutation | 1 action | 30 feet | Sim | - | Sorcerer, Wizard |
| 3 | Hypnotic Pattern | Illusion | 1 action | 120 feet | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 3 | Lightning Bolt | Evocation | 1 action | Self | - | - | Sorcerer, Wizard |
| 3 | Magic Circle | Abjuration | 1 minute | 10 feet | - | - | Cleric, Paladin, Warlock, Wizard |
| 3 | Major Image | Illusion | 1 action | 120 feet | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 3 | Mass Healing Word | Evocation | 1 bonus action | 60 feet | - | - | Cleric |
| 3 | Meld Into Stone | Transmutation | 1 action | Touch | - | Sim | Cleric |
| 3 | Nondetection | Abjuration | 1 action | Touch | - | - | Bard, Ranger, Wizard |
| 3 | Phantom Steed | Illusion | 1 minute | 30 feet | - | Sim | Wizard |
| 3 | Plant Growth | Transmutation | 1 action | 150 feet | - | - | Bard, Druid, Ranger |
| 3 | Protection From Energy | Abjuration | 1 action | Touch | Sim | - | Cleric, Druid, Ranger, Sorcerer, Wizard |
| 3 | Remove Curse | Abjuration | 1 action | Touch | - | - | Cleric, Paladin, Warlock, Wizard |
| 3 | Revivify | Conjuration | 1 action | Touch | - | - | Cleric, Paladin |
| 3 | Sending | Evocation | 1 action | Unlimited | - | - | Bard, Cleric, Wizard |
| 3 | Sleet Storm | Conjuration | 1 action | 150 feet | Sim | - | Druid, Sorcerer, Wizard |
| 3 | Slow | Transmutation | 1 action | 120 feet | Sim | - | Sorcerer, Wizard |
| 3 | Speak with Dead | Necromancy | 1 action | 10 feet | - | - | Bard, Cleric |
| 3 | Speak with Plants | Transmutation | 1 action | Self | - | - | Bard, Druid, Ranger |
| 3 | Spirit Guardians | Conjuration | 1 action | Self | Sim | - | Cleric |
| 3 | Stinking Cloud | Conjuration | 1 action | 90 feet | Sim | - | Bard, Sorcerer, Wizard |
| 3 | Tiny Hut | Evocation | 1 minute | Self | - | Sim | Bard, Wizard |
| 3 | Tongues | Divination | 1 action | Touch | - | - | Bard, Cleric, Sorcerer, Warlock, Wizard |
| 3 | Vampiric Touch | Necromancy | 1 action | Self | Sim | - | Warlock, Wizard |
| 3 | Water Breathing | Transmutation | 1 action | 30 feet | - | Sim | Druid, Ranger, Sorcerer, Wizard |
| 3 | Water Walk | Transmutation | 1 action | 30 feet | - | Sim | Cleric, Druid, Ranger, Sorcerer |
| 3 | Wind Wall | Evocation | 1 action | 120 feet | Sim | - | Druid, Ranger |
| 4 | Arcane Eye | Divination | 1 action | 30 feet | Sim | - | Cleric, Wizard |
| 4 | Banishment | Abjuration | 1 action | 60 feet | Sim | - | Cleric, Paladin, Sorcerer, Warlock, Wizard |
| 4 | Black Tentacles | Conjuration | 1 action | 90 feet | Sim | - | Wizard |
| 4 | Blight | Necromancy | 1 action | 30 feet | - | - | Druid, Sorcerer, Warlock, Wizard |
| 4 | Compulsion | Enchantment | 1 action | 30 feet | Sim | - | Bard |
| 4 | Confusion | Enchantment | 1 action | 90 feet | Sim | - | Bard, Druid, Sorcerer, Wizard |
| 4 | Conjure Minor Elementals | Conjuration | 1 minute | 90 feet | Sim | - | Druid, Wizard |
| 4 | Conjure Woodland Beings | Conjuration | 1 action | 60 feet | Sim | - | Druid, Ranger |
| 4 | Control Water | Transmutation | 1 action | 300 feet | Sim | - | Cleric, Druid, Wizard |
| 4 | Death Ward | Abjuration | 1 action | Touch | - | - | Cleric, Paladin |
| 4 | Dimension Door | Conjuration | 1 action | 500 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| 4 | Divination | Divination | 1 action | Self | - | Sim | Druid |
| 4 | Dominate Beast | Enchantment | 1 action | 60 feet | Sim | - | Druid, Sorcerer |
| 4 | Fabricate | Transmutation | 10 minutes | 120 feet | - | - | Wizard |
| 4 | Faithful Hound | Conjuration | 1 action | 30 feet | - | - | Wizard |
| 4 | Fire Shield | Evocation | 1 action | Self | - | - | Wizard |
| 4 | Freedom of Movement | Abjuration | 1 action | Touch | - | - | Bard, Cleric, Druid, Ranger |
| 4 | Giant Insect | Transmutation | 1 action | 30 feet | Sim | - | Druid |
| 4 | Greater Invisibility | Illusion | 1 action | Touch | Sim | - | Bard, Sorcerer, Wizard |
| 4 | Guardian of Faith | Conjuration | 1 action | 30 feet | - | - | Cleric |
| 4 | Hallucinatory Terrain | Illusion | 10 minutes | 300 feet | - | - | Bard, Druid, Warlock, Wizard |
| 4 | Ice Storm | Evocation | 1 action | 300 feet | - | - | Druid, Sorcerer, Wizard |
| 4 | Locate Creature | Divination | 1 action | Self | Sim | - | Bard, Cleric, Druid, Paladin, Ranger, Wizard |
| 4 | Phantasmal Killer | Illusion | 1 action | 120 feet | Sim | - | Wizard |
| 4 | Polymorph | Transmutation | 1 action | 60 feet | Sim | - | Bard, Druid, Sorcerer, Wizard |
| 4 | Private Sanctum | Abjuration | 10 minutes | 120 feet | - | - | Wizard |
| 4 | Resilient Sphere | Evocation | 1 action | 30 feet | Sim | - | Wizard |
| 4 | Secret Chest | Conjuration | 1 action | Touch | - | - | Wizard |
| 4 | Stone Shape | Transmutation | 1 action | Touch | - | - | Cleric, Druid, Wizard |
| 4 | Stoneskin | Abjuration | 1 action | Touch | Sim | - | Druid, Ranger, Sorcerer, Wizard |
| 4 | Wall of Fire | Evocation | 1 action | 120 feet | Sim | - | Druid, Sorcerer, Wizard |
| 5 | Animate Objects | Transmutation | 1 action | 120 feet | Sim | - | Bard, Sorcerer, Wizard |
| 5 | Antilife Shell | Abjuration | 1 action | Self | Sim | - | Druid |
| 5 | Arcane Hand | Evocation | 1 action | 120 feet | Sim | - | Wizard |
| 5 | Awaken | Transmutation | 8 hours | Touch | - | - | Bard, Druid |
| 5 | Cloudkill | Conjuration | 1 action | 120 feet | Sim | - | Sorcerer, Wizard |
| 5 | Commune | Divination | 1 minute | Self | - | Sim | Cleric |
| 5 | Commune With Nature | Divination | 1 minute | Self | - | Sim | Druid, Ranger |
| 5 | Cone of Cold | Evocation | 1 action | Self | - | - | Sorcerer, Wizard |
| 5 | Conjure Elemental | Conjuration | 1 minute | 90 feet | Sim | - | Druid, Wizard |
| 5 | Contact Other Plane | Divination | 1 minute | Self | - | Sim | Warlock, Wizard |
| 5 | Contagion | Necromancy | 1 action | Touch | - | - | Cleric, Druid |
| 5 | Creation | Illusion | 1 minute | 30 feet | - | - | Sorcerer, Wizard |
| 5 | Dispel Evil and Good | Abjuration | 1 action | Self | Sim | - | Cleric, Paladin |
| 5 | Dominate Person | Enchantment | 1 action | 60 feet | Sim | - | Bard, Sorcerer, Wizard |
| 5 | Dream | Illusion | 1 minute | Special | - | - | Bard, Warlock, Wizard |
| 5 | Flame Strike | Evocation | 1 action | 60 feet | - | - | Cleric |
| 5 | Geas | Enchantment | 1 minute | 60 feet | - | - | Bard, Cleric, Druid, Paladin, Wizard |
| 5 | Greater Restoration | Abjuration | 1 action | Touch | - | - | Bard, Cleric, Druid |
| 5 | Hallow | Evocation | 24 hours | Touch | - | - | Cleric |
| 5 | Hold Monster | Enchantment | 1 action | 90 feet | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 5 | Insect Plague | Conjuration | 1 action | 300 feet | Sim | - | Cleric, Druid, Sorcerer |
| 5 | Legend Lore | Divination | 10 minutes | Self | - | - | Bard, Cleric, Wizard |
| 5 | Mass Cure Wounds | Conjuration | 1 action | 60 feet | - | - | Bard, Cleric, Druid |
| 5 | Mislead | Illusion | 1 action | Self | Sim | - | Bard, Wizard |
| 5 | Modify Memory | Enchantment | 1 action | 30 feet | Sim | - | Bard, Wizard |
| 5 | Passwall | Transmutation | 1 action | 30 feet | - | - | Wizard |
| 5 | Planar Binding | Abjuration | 1 hour | 60 feet | - | - | Bard, Cleric, Druid, Wizard |
| 5 | Raise Dead | Necromancy | 1 hour | Touch | - | - | Bard, Cleric, Paladin |
| 5 | Reincarnate | Transmutation | 1 hour | Touch | - | - | Druid |
| 5 | Scrying | Divination | 10 minutes | Self | Sim | - | Bard, Cleric, Druid, Warlock, Wizard |
| 5 | Seeming | Illusion | 1 action | 30 feet | - | - | Bard, Sorcerer, Wizard |
| 5 | Telekinesis | Transmutation | 1 action | 60 feet | Sim | - | Sorcerer, Wizard |
| 5 | Telepathic Bond | Divination | 1 action | 30 feet | - | Sim | Wizard |
| 5 | Teleportation Circle | Conjuration | 1 minute | 10 feet | - | - | Bard, Sorcerer, Wizard |
| 5 | Tree Stride | Conjuration | 1 action | Self | Sim | - | Druid, Ranger |
| 5 | Wall of Force | Evocation | 1 action | 120 feet | Sim | - | Wizard |
| 5 | Wall of Stone | Evocation | 1 action | 120 feet | Sim | - | Druid, Sorcerer, Wizard |
| 6 | Blade Barrier | Evocation | 1 action | 90 feet | Sim | - | Cleric |
| 6 | Chain Lightning | Evocation | 1 action | 150 feet | - | - | Sorcerer, Wizard |
| 6 | Circle of Death | Necromancy | 1 action | 150 feet | - | - | Sorcerer, Warlock, Wizard |
| 6 | Conjure Fey | Conjuration | 1 minute | 90 feet | Sim | - | Druid, Warlock |
| 6 | Contingency | Evocation | 10 minutes | Self | - | - | Wizard |
| 6 | Create Undead | Necromancy | 1 minute | 10 feet | - | - | Cleric, Warlock, Wizard |
| 6 | Disintegrate | Transmutation | 1 action | 60 feet | - | - | Sorcerer, Wizard |
| 6 | Eyebite | Necromancy | 1 action | Self | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 6 | Find the Path | Divination | 1 minute | Self | Sim | - | Bard, Cleric, Druid |
| 6 | Flesh to Stone | Transmutation | 1 action | 60 feet | Sim | - | Warlock, Wizard |
| 6 | Forbiddance | Abjuration | 10 minutes | Touch | - | Sim | Cleric |
| 6 | Freezing Sphere | Evocation | 1 action | 300 feet | - | - | Wizard |
| 6 | Globe of Invulnerability | Abjuration | 1 action | Self | Sim | - | Sorcerer, Wizard |
| 6 | Guards and Wards | Abjuration | 10 minutes | Touch | - | - | Bard, Wizard |
| 6 | Harm | Necromancy | 1 action | 60 feet | - | - | Cleric |
| 6 | Heal | Evocation | 1 action | 60 feet | - | - | Cleric, Druid |
| 6 | Heroes' Feast | Conjuration | 10 minutes | 30 feet | - | - | Cleric, Druid |
| 6 | Instant Summons | Conjuration | 1 minute | Touch | - | Sim | Wizard |
| 6 | Irresistible Dance | Enchantment | 1 action | 30 feet | Sim | - | Bard, Wizard |
| 6 | Magic Jar | Necromancy | 1 minute | Self | - | - | Wizard |
| 6 | Mass Suggestion | Enchantment | 1 action | 60 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| 6 | Move Earth | Transmutation | 1 action | 120 feet | Sim | - | Druid, Sorcerer, Wizard |
| 6 | Planar Ally | Conjuration | 10 minutes | 60 feet | - | - | Cleric |
| 6 | Programmed Illusion | Illusion | 1 action | 120 feet | - | - | Bard, Wizard |
| 6 | Sunbeam | Evocation | 1 action | Self | Sim | - | Druid, Sorcerer, Wizard |
| 6 | Transport via Plants | Conjuration | 1 action | 10 feet | - | - | Druid |
| 6 | True Seeing | Divination | 1 action | Touch | - | - | Bard, Cleric, Sorcerer, Warlock, Wizard |
| 6 | Wall of Ice | Evocation | 1 action | 120 feet | Sim | - | Wizard |
| 6 | Wall of Thorns | Conjuration | 1 action | 120 feet | Sim | - | Druid |
| 6 | Wind Walk | Transmutation | 1 minute | 30 feet | - | - | Druid |
| 6 | Word of Recall | Conjuration | 1 action | 5 feet | - | - | Cleric |
| 7 | Arcane Sword | Evocation | 1 action | 60 feet | Sim | - | Bard, Wizard |
| 7 | Conjure Celestial | Conjuration | 1 minute | 90 feet | Sim | - | Cleric |
| 7 | Delayed Blast Fireball | Evocation | 1 action | 150 feet | Sim | - | Sorcerer, Wizard |
| 7 | Divine Word | Evocation | 1 bonus action | 30 feet | - | - | Cleric |
| 7 | Etherealness | Transmutation | 1 action | Self | - | - | Bard, Cleric, Sorcerer, Warlock, Wizard |
| 7 | Finger of Death | Necromancy | 1 action | 60 feet | - | - | Sorcerer, Warlock, Wizard |
| 7 | Fire Storm | Evocation | 1 action | 150 feet | - | - | Cleric, Druid, Sorcerer |
| 7 | Forcecage | Evocation | 1 action | 100 feet | - | - | Bard, Warlock, Wizard |
| 7 | Magnificent Mansion | Conjuration | 1 minute | 300 feet | - | - | Bard, Wizard |
| 7 | Mirage Arcane | Illusion | 10 minutes | Sight | - | - | Bard, Druid, Wizard |
| 7 | Plane Shift | Conjuration | 1 action | Touch | - | - | Cleric, Druid, Sorcerer, Warlock, Wizard |
| 7 | Prismatic Spray | Evocation | 1 action | Self | - | - | Sorcerer, Wizard |
| 7 | Project Image | Illusion | 1 action | 500 miles | Sim | - | Bard, Wizard |
| 7 | Regenerate | Transmutation | 1 minute | Touch | - | - | Bard, Cleric, Druid |
| 7 | Resurrection | Necromancy | 1 hour | Touch | - | - | Bard, Cleric |
| 7 | Reverse Gravity | Transmutation | 1 action | 100 feet | Sim | - | Druid, Sorcerer, Wizard |
| 7 | Sequester | Transmutation | 1 action | Touch | - | - | Wizard |
| 7 | Simulacrum | Illusion | 12 hours | Touch | - | - | Wizard |
| 7 | Symbol | Abjuration | 1 minute | Touch | - | - | Bard, Cleric, Wizard |
| 7 | Teleport | Conjuration | 1 action | 10 feet | - | - | Bard, Sorcerer, Wizard |
| 8 | Animal Shapes | Transmutation | 1 action | 30 feet | Sim | - | Druid |
| 8 | Antimagic Field | Abjuration | 1 action | Self | Sim | - | Cleric, Wizard |
| 8 | Antipathy/Sympathy | Enchantment | 1 hour | 60 feet | - | - | Druid, Wizard |
| 8 | Clone | Necromancy | 1 hour | Touch | - | - | Wizard |
| 8 | Control Weather | Transmutation | 10 minutes | Self | Sim | - | Cleric, Druid, Wizard |
| 8 | Demiplane | Conjuration | 1 action | 60 feet | - | - | Warlock, Wizard |
| 8 | Dominate Monster | Enchantment | 1 action | 60 feet | Sim | - | Bard, Sorcerer, Warlock, Wizard |
| 8 | Earthquake | Evocation | 1 action | 500 feet | Sim | - | Cleric, Druid, Sorcerer |
| 8 | Feeblemind | Enchantment | 1 action | 150 feet | - | - | Bard, Druid, Warlock, Wizard |
| 8 | Glibness | Transmutation | 1 action | Self | - | - | Bard, Warlock |
| 8 | Holy Aura | Abjuration | 1 action | Self | Sim | - | Cleric |
| 8 | Incendiary Cloud | Conjuration | 1 action | 150 feet | Sim | - | Sorcerer, Wizard |
| 8 | Maze | Conjuration | 1 action | 60 feet | Sim | - | Wizard |
| 8 | Mind Blank | Abjuration | 1 action | Touch | - | - | Bard, Wizard |
| 8 | Power Word Stun | Enchantment | 1 action | 60 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| 8 | Sunburst | Evocation | 1 action | 150 feet | - | - | Druid, Sorcerer, Wizard |
| 9 | Astral Projection | Necromancy | 1 hour | 10 feet | - | - | Cleric, Warlock, Wizard |
| 9 | Foresight | Divination | 1 minute | Touch | - | - | Bard, Druid, Warlock, Wizard |
| 9 | Gate | Conjuration | 1 action | 60 feet | Sim | - | Cleric, Sorcerer, Wizard |
| 9 | Imprisonment | Abjuration | 1 minute | 30 feet | - | - | Warlock, Wizard |
| 9 | Mass Heal | Conjuration | 1 action | 60 feet | - | - | Cleric |
| 9 | Meteor Swarm | Evocation | 1 action | 1 mile | - | - | Sorcerer, Wizard |
| 9 | Power Word Kill | Enchantment | 1 action | 60 feet | - | - | Bard, Sorcerer, Warlock, Wizard |
| 9 | Prismatic Wall | Abjuration | 1 action | 60 feet | - | - | Wizard |
| 9 | Shapechange | Transmutation | 1 action | Self | Sim | - | Druid, Wizard |
| 9 | Storm of Vengeance | Conjuration | 1 action | Sight | Sim | - | Druid |
| 9 | Time Stop | Transmutation | 1 action | Self | - | - | Sorcerer, Wizard |
| 9 | True Polymorph | Transmutation | 1 action | 30 feet | Sim | - | Bard, Warlock, Wizard |
| 9 | True Resurrection | Necromancy | 1 hour | Touch | - | - | Cleric, Druid |
| 9 | Weird | Illusion | 1 action | 120 feet | Sim | - | Wizard |
| 9 | Wish | Conjuration | 1 action | Self | - | - | Sorcerer, Wizard |