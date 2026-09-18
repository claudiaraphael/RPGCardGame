# Card Generator — mapeamento de dados da D&D 5e API

Documentação de apoio para a construção do gerador de cartas (template criado
no Gemini + dados vindos da [D&D 5e API](https://www.dnd5eapi.co/)). Este
gerador é um requisito do trabalho da PUC e precisa ser implementado do zero;
os repositórios de referência pesquisados (DNDFetch, card-generator de
matt-walsh) servem só como inspiração de arquitetura, não como código a
reaproveitar.

## Teste de conectividade com a API

Script usado para confirmar os endpoints disponíveis em `/api`:

```python
import urllib.request
import json

try:
    req = urllib.request.Request("https://www.dnd5eapi.co/api", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        print("Endpoints available:", list(data.keys()))
except Exception as e:
    print("Error:", e)
```

**Resultado obtido no ambiente testado:**

```text
Error: <urlopen error [Errno -3] Temporary failure in name resolution>
```

Esse erro é de resolução de DNS do ambiente local usado no teste (sem acesso
à internet), não um problema da API em si — não é um bloqueio conhecido do
`dnd5eapi.co`. Antes de assumir instabilidade da API em uma tentativa futura,
reconfirmar com esse mesmo script rodando num ambiente com rede.

## Mapeamento de recursos da API por tipo de carta

### 1. Monsters (Monstros / Criaturas)

Equivalente no jogo: carta de Criatura.

| Campo da API | Uso na carta |
|---|---|
| `name` | Nome |
| `size`, `type`, `alignment` | Ex: *Large Monstrosity, Unaligned* |
| `armor_class` | Classe de Armadura (AC) |
| `hit_points`, `hit_dice` | Vida / HP |
| `speed` | Deslocamento |
| `strength`, `dexterity`, `constitution`, `intelligence`, `wisdom`, `charisma` | Atributos base |
| `challenge_rating` | CR / nível de ameaça — candidato a custo ou raridade da carta |
| `special_abilities`, `actions` | Texto de habilidades e ataques |

### 2. Spells (Magias)

Equivalente no jogo: carta de Feitiço / Instantânea.

| Campo da API | Uso na carta |
|---|---|
| `name` | Nome |
| `level` | Nível da magia (0 a 9) — candidato a custo de mana/recurso |
| `school` | Escola (Evocation, Necromancy, etc.) |
| `casting_time` | Tempo de conjuração (*1 action*, *1 bonus action*, *reaction*) |
| `range` | Alcance |
| `components` | Componentes (V, S, M) |
| `duration`, `concentration` | Duração e concentração |
| `damage`, `desc` | Efeito e dano por nível de slot |

### 3. Magic Items & Equipment (Itens Mágicos e Equipamentos)

Equivalente no jogo: carta de Artefato / Equipamento / Item.

| Campo da API | Uso na carta |
|---|---|
| `name` | Nome |
| `equipment_category` | Arma, armadura, anel, varinha, etc. |
| `rarity` | Common, Uncommon, Rare, Very Rare, Legendary, Artifact |
| `cost`, `weight` | Preço e peso |
| `damage` ou `armor_class` | Dado + tipo de dano, ou CA |
| `properties` | Finesse, Versatile, Light, etc. |
| `desc` | Efeito mágico / descrição |

### 4. Classes, Races & Features (Heróis, Raças e Passivas)

| Campo da API | Uso na carta |
|---|---|
| `name`, `hit_die`, `proficiencies`, `subclasses`, `traits`, `desc` | Base para cartas de classe/raça/traço |

## Decisões em aberto

- **Categoria inicial do template**: Monstros, Magias ou Itens/Equipamentos —
  a definir antes de integrar o template do Gemini com os dados da API.
- **Layout visual**: seguir a estrutura clássica de carta estilo MTG (moldura,
  imagem central, caixa de tipo, caixa de texto inferior) ou um layout
  customizado — a definir junto com o template sendo desenhado no Gemini.
