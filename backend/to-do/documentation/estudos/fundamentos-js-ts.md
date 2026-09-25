# Fundamentos de JS/TS pra gerenciar estado (rumo ao Systems.ts)

Esse guia existe pra te dar vocabulário e exemplos curtos de cada peça que
você vai precisar pra evoluir `Systems.js`/`Systems.ts` — a exploração de
arquitetura ECS (Entities/Components/Systems) que é trabalho seu. Nada
aqui te diz *como* desenhar o seu ECS — isso é a parte que conta pros 50%.
É só ferramenta.

## 1. Objetos — a unidade básica de dado

Um objeto agrupa valores relacionados sob chaves nomeadas.

```ts
const personagem = {
  nome: "Grog",
  nivel: 3,
  vida: 25,
};

personagem.nivel; // 3 — acesso por ponto
personagem["nivel"]; // 3 — acesso por colchete (útil quando a chave é variável)
```

Num ECS, um **Component** costuma ser só isso: um objeto de dado puro, sem
comportamento. Ex.: `{ vidaAtual: 25, vidaMaxima: 30 }` é o componente
"Health" de uma entidade.

## 2. Arrays — coleções ordenadas

```ts
const inventario = ["espada", "pocao", "escudo"];
inventario.length; // 3
inventario[0]; // "espada"
```

Num ECS, a lista de entidades ou a lista de sistemas ativos costuma viver
num array.

## 3. Interfaces (TypeScript) — contrato de formato

Uma `interface` não gera código — ela só diz ao compilador "todo valor
desse tipo tem que ter essa forma". É documentação que o TypeScript
*fiscaliza*.

```ts
interface Personagem {
  nome: string;
  nivel: number;
  vidaAtual: number;
  vidaMaxima: number;
  inventario: string[]; // array de strings
}

function curar(p: Personagem, quantidade: number): Personagem {
  return {
    ...p,
    vidaAtual: Math.min(p.vidaAtual + quantidade, p.vidaMaxima),
  };
}
```

Se você tentar passar um objeto sem `vidaMaxima`, o TypeScript avisa
*antes* de rodar. Isso é ouro pra gerenciar estado de jogo: erros de
formato de state pegos em tempo de compilação, não em produção no meio de
um combate.

`interface` vs `type`: pra objetos, são quase intercambiáveis. Use
`interface` quando é a "forma de uma coisa que existe" (um Personagem, um
Component); use `type` quando é uma combinação/união de possibilidades
(ver seção 9).

## 4. Classes e construtores

Uma classe empacota dado (propriedades) + comportamento (métodos) que
operam nesse dado. O **construtor** roda uma vez, na criação (`new`), pra
deixar a instância num estado inicial válido.

```ts
class Personagem {
  nome: string;
  nivel: number;
  vidaAtual: number;
  vidaMaxima: number;

  constructor(nome: string, nivel: number, vidaMaxima: number) {
    this.nome = nome;
    this.nivel = nivel;
    this.vidaMaxima = vidaMaxima;
    this.vidaAtual = vidaMaxima; // começa com vida cheia
  }

  receberDano(quantidade: number): void {
    this.vidaAtual = Math.max(0, this.vidaAtual - quantidade);
  }

  estaVivo(): boolean {
    return this.vidaAtual > 0;
  }
}

const grog = new Personagem("Grog", 3, 30);
grog.receberDano(12);
grog.estaVivo(); // true
```

**Classe vs. objeto literal (`{...}`) vs. interface+função**: num ECS
"puro" é comum *evitar* classes pros Components (preferir objeto +
interface) e usar classes/funções só pros Systems (a lógica que processa
vários componentes). Não é regra fixa — é uma escolha de design sua.

## 5. Funções

Três formas comuns em JS/TS, mesmo comportamento básico:

```ts
// declaração de função
function somar(a: number, b: number): number {
  return a + b;
}

// função anônima guardada numa const
const somar2 = function (a: number, b: number): number {
  return a + b;
};

// arrow function (mais comum em código moderno, principalmente callbacks)
const somar3 = (a: number, b: number): number => a + b;
```

Diferença prática que importa: arrow function **não tem seu próprio
`this`** — ela usa o `this` de onde foi definida. Isso costuma ser o
motivo de bug estranho em métodos de classe passados como callback.

## 6. Loops

```ts
const inimigos = ["goblin", "orc", "goblin"];

// for clássico — quando você precisa do índice
for (let i = 0; i < inimigos.length; i++) {
  console.log(i, inimigos[i]);
}

// for...of — quando você só quer os valores
for (const inimigo of inimigos) {
  console.log(inimigo);
}

// for...in — itera as CHAVES de um objeto (raramente o que você quer pra array)
const atributos = { forca: 16, destreza: 12 };
for (const chave in atributos) {
  console.log(chave, atributos[chave as keyof typeof atributos]);
}
```

Na prática, pra arrays, os métodos da seção 8 (`.map`, `.filter`, etc.)
substituem a maioria dos `for` — são mais declarativos ("o que eu quero",
não "como iterar").

## 7. Métodos vs. funções

Método é só uma função "pendurada" num objeto/classe — quando chamada,
`this` dentro dela aponta pro objeto que a chamou.

```ts
const personagem = {
  nome: "Grog",
  apresentar() {
    // método: usa `this` pra acessar o próprio objeto
    return `Eu sou ${this.nome}`;
  },
};

personagem.apresentar(); // "Eu sou Grog"
```

## 8. Métodos de array que valem ouro (com significado real)

Todos abaixo **não modificam o array original** (exceto onde avisado) —
retornam um novo valor. Isso importa muito pra gerenciar estado sem bugs
de mutação acidental.

### `.map()` — transforma cada item em outra coisa, 1 pra 1

"Pra cada item da lista, me devolve uma versão transformada dele."

```ts
const personagens = [
  { nome: "Grog", vidaAtual: 10, vidaMaxima: 30 },
  { nome: "Vex", vidaAtual: 20, vidaMaxima: 20 },
];

// exemplo real de ECS: um "sistema de regeneração" que cura todo mundo em 5
const curados = personagens.map((p) => ({
  ...p,
  vidaAtual: Math.min(p.vidaAtual + 5, p.vidaMaxima),
}));
// curados = [{ nome: "Grog", vidaAtual: 15, ... }, { nome: "Vex", vidaAtual: 20, ... }]
// personagens original NÃO mudou
```

### `.filter()` — mantém só os itens que passam num teste

```ts
// quem ainda está vivo?
const vivos = personagens.filter((p) => p.vidaAtual > 0);
```

### `.find()` — pega o primeiro item que bate com a condição (ou `undefined`)

```ts
const grog = personagens.find((p) => p.nome === "Grog");
```

### `.reduce()` — junta a lista inteira num valor só

```ts
// dano total do grupo
const vidaTotal = personagens.reduce((total, p) => total + p.vidaAtual, 0);
```

### `.forEach()` — roda algo pra cada item, sem gerar novo array (efeito colateral)

```ts
personagens.forEach((p) => console.log(`${p.nome}: ${p.vidaAtual} HP`));
```

### `.some()` / `.every()` — teste booleano sobre a lista

```ts
const algumMorreu = personagens.some((p) => p.vidaAtual <= 0);
const todosVivos = personagens.every((p) => p.vidaAtual > 0);
```

### `.sort()` — ordena (⚠️ modifica o array original)

```ts
// ordem de iniciativa, do maior pro menor
const ordemDeAcao = [...personagens].sort((a, b) => b.iniciativa - a.iniciativa);
// o [...personagens] é uma cópia — assim o sort não mexe no array original
```

## 9. Funções/objetos "coringa" que aparecem toda hora

### `Date` — datas e timestamps

```ts
const agora = new Date();
agora.toISOString(); // "2026-09-22T14:30:00.000Z" — formato bom pra salvar em banco/JSON
Date.now(); // 1758553800000 — timestamp em milissegundos, útil pra medir duração de turno/combate
```

No seu projeto, `updated_at` na tabela `dnd_cache` provavelmente usa algo
assim pra saber quando o cache foi preenchido.

### `Object.keys()` / `Object.values()` / `Object.entries()`

Convertem objeto em array, pra poder usar os métodos da seção 8.

```ts
const atributos = { forca: 16, destreza: 12, sabedoria: 10 };

Object.keys(atributos); // ["forca", "destreza", "sabedoria"]
Object.values(atributos); // [16, 12, 10]
Object.entries(atributos); // [["forca", 16], ["destreza", 12], ["sabedoria", 10]]

// exemplo: qual o maior atributo?
const [nomeAtributo, valor] = Object.entries(atributos)
  .sort((a, b) => b[1] - a[1])[0];
```

### Spread (`...`) — copiar/mesclar sem mutar

```ts
const base = { vidaMaxima: 30, vidaAtual: 30 };
const comDano = { ...base, vidaAtual: 18 }; // cópia com um campo sobrescrito
const arrayNovo = [...inventario, "poção nova"]; // array copiado + item novo
```

Esse padrão é a espinha dorsal de gerenciar estado sem mutação direta —
cada "atualização" gera um objeto/array novo em vez de alterar o antigo
no lugar. Ajuda demais a rastrear bug ("quem mudou esse valor?").

### Destructuring — extrair campos direto

```ts
const { nome, vidaAtual } = personagem;
const [primeiro, ...resto] = inventario;
```

### `Math.min` / `Math.max` / `Math.random`

```ts
Math.max(0, vidaAtual - dano); // nunca deixa vida negativa
Math.min(vidaAtual + cura, vidaMaxima); // nunca cura acima do máximo
Math.floor(Math.random() * 20) + 1; // rolagem de d20 — provavelmente já é o que dado/d20.ts faz
```

## 10. Juntando tudo — um "sistema" pequeno de exemplo

Isso é só ilustração do *tipo* de coisa que um System costuma fazer
(pegar uma lista de entidades com certo componente, aplicar uma regra,
devolver o novo estado) — não é sugestão de como estruturar o seu ECS
especificamente.

```ts
interface Entidade {
  id: string;
  vidaAtual: number;
  vidaMaxima: number;
}

// um "system" é uma função que recebe o estado e devolve o novo estado
function sistemaDeRegeneracao(entidades: Entidade[], curaPorTurno: number): Entidade[] {
  return entidades
    .filter((e) => e.vidaAtual > 0) // só quem está vivo regenera
    .map((e) => ({
      ...e,
      vidaAtual: Math.min(e.vidaAtual + curaPorTurno, e.vidaMaxima),
    }));
}
```

## 11. Próximos passos sugeridos (não implementados aqui, de propósito)

- Escolher: seus Components vão ser interfaces + objetos simples, ou
  classes? Qual a diferença prática pro seu caso?
- Decidir onde a "lista de entidades" vive — um array simples no módulo,
  ou algo mais estruturado (Map por id)?
- Pensar em como um System vai *encontrar* as entidades que tem os
  componentes que ele precisa (ex.: só quem tem "Health" pro sistema de
  regeneração) — isso é o coração de um ECS de verdade.
