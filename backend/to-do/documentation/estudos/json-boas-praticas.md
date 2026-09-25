# JSON — como escrever um bom JSON

JSON (JavaScript Object Notation) é só um formato de texto pra representar
dados: objetos, arrays, strings, números, booleanos e `null`. Nada de
funções, comentários ou `undefined` — isso é JavaScript, não JSON. É por
isso que `dnd-full-data.json` e o `data` que fica salvo em `dnd_cache` são
JSON puro: dado, sem lógica.

## 1. Os tipos que existem (só estes)

```json
{
  "string": "texto entre aspas duplas, sempre",
  "numero": 42,
  "decimal": 3.14,
  "booleano": true,
  "nulo": null,
  "objeto": { "chave": "valor" },
  "array": [1, 2, 3]
}
```

Não existe:
- aspas simples (`'texto'` é inválido em JSON, só `"texto"`)
- comentários (`// isso` quebra o parser)
- vírgula sobrando depois do último item (`"trailing comma"`)
- `undefined`, `NaN`, `Infinity` — não são representáveis
- chaves sem aspas (`{chave: 1}` é inválido; tem que ser `{"chave": 1}`)

## 2. Nomeação de chaves

Escolha **um** padrão e mantenha em todo o arquivo/projeto:

- `snake_case` — é o que a D&D API usa (`hit_points`, `armor_class`,
  `dc_success`). Quando você está *consumindo* o JSON de uma API externa,
  você não escolhe o padrão dela — só documenta e valida (é pra isso que
  servem os schemas Zod em `entidades-dnd/schemas/`).
- `camelCase` — mais comum quando *você* é quem desenha o formato (estado
  de jogo, configs internas). Ex.: `hitPoints`, `armorClass`.

Nunca misture os dois no mesmo objeto. Se seu `Systems.ts` vai gerar JSON
próprio (salvar estado de personagem, por exemplo), decida logo no início
qual convenção usar e seja consistente — isso evita bug bobo de digitar
`hp_atual` num lugar e `hpAtual` em outro.

## 3. Estrutura: pense em "poderia isso ser uma lista?"

Objeto (`{}`) quando cada chave é única e você sabe o nome dela de
antemão:

```json
{
  "nome": "Grog",
  "classe": "barbaro",
  "nivel": 3
}
```

Array (`[]`) quando é uma coleção de itens do mesmo tipo, sem nome fixo:

```json
{
  "inventario": [
    { "item": "espada-longa", "quantidade": 1 },
    { "item": "pocao-de-cura", "quantidade": 3 }
  ]
}
```

Erro comum: usar objeto onde deveria ser array, tipo
`{"item1": {...}, "item2": {...}}`. Isso parece prático mas quebra assim
que você precisa iterar ("me dá todos os itens") ou ordenar — com array
você tem `.map()`, `.filter()`, `.find()` de graça; com objeto você
precisa de `Object.values()` primeiro. Prefira array de objetos com um
campo `id`/`index` dentro, exatamente como a D&D API faz (`index: "grog"`
dentro do objeto, não `"grog"` como chave externa).

## 4. Aninhamento: até onde vale a pena

JSON aninha à vontade, mas cada nível a mais custa legibilidade. Regra
prática: se você precisa descer mais de 3-4 níveis pra achar um valor
(`personagem.inventario[0].item.atributos.dano.dados`), considere achatar
ou quebrar em outra tabela/coleção. É basicamente o motivo de
`dnd_cache` guardar cada entidade como uma linha própria (`entity_type`,
`idx`, `data`) em vez de um único JSON gigante com as 24 categorias
aninhadas — mais fácil de consultar, indexar e atualizar peça por peça.

## 5. Consistência de forma dentro de um array

Todo item de um mesmo array deveria ter o mesmo formato — mesmas chaves,
mesmos tipos. Se um item de spell tem `dc` e outro não, isso não é
"opcional silencioso", é uma inconsistência que precisa aparecer no
schema (foi exatamente o bug do `SpellDcSchema` que vocês encontraram:
`dc_success` só existe pra spell, `dc_value`/`success_type` é formato de
monstro — dois formatos diferentes que pareciam o mesmo campo).

Quando um campo é *de fato* opcional (nem todo item tem), representar
como ausente (chave não existe) é melhor que `null` na maioria dos casos
— mas dependa do que seu schema Zod espera (`z.string().optional()` vs
`z.string().nullable()` são coisas diferentes).

## 6. Nunca confie em JSON de fora sem validar

Isso vale tanto pra resposta da D&D API quanto pra `req.body` de uma
rota sua. JSON não garante *nada* sobre o shape — o parser (`JSON.parse`)
só garante que é sintaticamente válido, não que tem os campos certos ou
os tipos certos. É pra isso que serve o Zod:

```ts
import { z } from "zod";

const PersonagemSchema = z.object({
  nome: z.string(),
  nivel: z.number().int().positive(),
  classe: z.string(),
});

// se o JSON não bater com o schema, isso lança erro em vez de
// deixar um dado malformado seguir pra frente silenciosamente
const personagem = PersonagemSchema.parse(JSON.parse(textoJson));
```

O schema também *é* a documentação viva do formato — melhor que um
comentário que pode ficar desatualizado.

## 7. Formatação (pretty-print vs. minificado)

- Pra arquivo versionado/lido por humano (como `dnd-full-data.json`):
  indentado, 2 espaços, fácil de dar `git diff`.
- Pra dado trafegando em rede ou salvo em banco (como a coluna `data` de
  `dnd_cache`): não importa formatação, geralmente vai minificado mesmo
  (`JSON.stringify(obj)` sem `null, 2`).

```ts
// legível (documentação, debug)
JSON.stringify(objeto, null, 2);

// compacto (rede, banco)
JSON.stringify(objeto);
```

## 8. Checklist rápido antes de considerar um JSON "bom"

- [ ] Todas as chaves seguem a mesma convenção de nomeação?
- [ ] Itens do mesmo array têm o mesmo formato (mesmas chaves/tipos)?
- [ ] Não tem aninhamento fundo demais pra achar um valor comum?
- [ ] Campos opcionais são tratados de forma explícita no schema (não
      "só não mandei esse campo e torço pra ninguém notar")?
- [ ] Existe um schema (Zod ou equivalente) validando esse formato antes
      de qualquer código confiar nele?
