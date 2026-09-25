# Gerência de estado com classes

Esse guia parte de uma dúvida legítima: "o estado fica salvo em JSON? em
banco? como isso funciona de verdade?". Resposta curta: são três coisas
diferentes, que se conectam mas não são a mesma coisa. Esse guia foca na
primeira (estado em memória, com classes) e mostra onde as outras duas
entram.

## 0. As três camadas, sem confundir

```
┌─────────────────────────┐
│  ESTADO EM MEMÓRIA       │  objetos/classes JS vivendo na RAM
│  (Systems.js, instâncias)│  enquanto o processo Node está rodando
└───────────┬───────────────┘
            │ serializar (JSON.stringify) / desserializar (JSON.parse)
            ▼
┌─────────────────────────┐
│  JSON                    │  formato de texto — uma "foto" do estado
│  (texto, sem comportamento)│ num instante. Não faz nada sozinho.
└───────────┬───────────────┘
            │ gravar numa coluna / ler de volta
            ▼
┌─────────────────────────┐
│  SQLite (banco)           │  onde o texto fica de fato guardado
│  (dnd_cache, sessions...) │  entre reinícios do servidor
└─────────────────────────┘
```

No teu projeto hoje:
- `dnd_cache.data`: JSON de cada entidade da D&D API, guardado numa
  coluna de texto do SQLite — é cache, não é *seu* estado de jogo.
- `sessions` (via `sessionStore.ts`): estado de sessão de login,
  persistido do mesmo jeito.
- Personagem/deck/combate: ainda só existe como estado em memória
  (esboço em `auth/user.js`/`Systems.js`) — quando isso precisar
  sobreviver a um restart do servidor, vai passar pelo mesmo caminho
  (classe → JSON → linha de tabela nova no SQLite).

Esse guia é sobre a primeira caixa: como modelar e mudar estado em
memória com classes, de um jeito que não vire bagunça quando crescer.

## 1. Por que classe (e não só objeto solto) pra estado?

Um objeto literal (`{ vida: 30 }`) guarda dado. Uma classe guarda dado
**e** as regras de como esse dado pode mudar — ela pode impedir estado
inválido de existir.

```ts
// objeto solto: nada impede isso
const personagem = { vida: 30, vidaMaxima: 30 };
personagem.vida = 999; // nenhum código de personagem "concordou" com isso
personagem.vida = -50; // idem — estado inválido, ninguém percebe

// classe: o próprio objeto decide como aceita mudança
class Personagem {
  private vida: number;
  readonly vidaMaxima: number;

  constructor(vidaMaxima: number) {
    this.vidaMaxima = vidaMaxima;
    this.vida = vidaMaxima;
  }

  receberDano(quantidade: number): void {
    this.vida = Math.max(0, this.vida - quantidade);
  }

  curar(quantidade: number): void {
    this.vida = Math.min(this.vidaMaxima, this.vida + quantidade);
  }

  get vidaAtual(): number {
    return this.vida; // leitura liberada, escrita direta não
  }
}

const grog = new Personagem(30);
grog.receberDano(999);
grog.vidaAtual; // 0 — nunca fica negativo, a própria classe garantiu isso
```

`private` (e `readonly`) são o mecanismo do TypeScript pra isso: de fora
da classe, ninguém consegue fazer `grog.vida = -50` diretamente — o
compilador barra. Isso é a diferença central entre "objeto que guarda
dado" e "classe que gerencia estado".

## 2. Construtor: garantir que o estado nasce válido

O construtor é o único lugar que roda automaticamente na criação — é ali
que você impede um `Personagem` de existir num estado que não faz
sentido.

```ts
class Personagem {
  nome: string;
  nivel: number;
  private vida: number;
  readonly vidaMaxima: number;

  constructor(nome: string, nivel: number, vidaMaxima: number) {
    if (vidaMaxima <= 0) {
      throw new Error("vidaMaxima precisa ser positiva");
    }
    this.nome = nome;
    this.nivel = nivel;
    this.vidaMaxima = vidaMaxima;
    this.vida = vidaMaxima;
  }
}
```

Sem essa checagem, um `new Personagem("Grog", 3, -10)` criaria estado
quebrado desde o início, e o bug só apareceria muito depois, longe de
onde a causa real está.

## 3. Métodos são a *única* porta de entrada pra mudar o estado

Regra de ouro: se um campo pode ficar inválido, ele não deveria ser
público. Tudo que muda esse campo passa por um método que sabe validar.

```ts
class Inventario {
  private itens: string[] = [];
  private capacidadeMaxima: number;

  constructor(capacidadeMaxima: number) {
    this.capacidadeMaxima = capacidadeMaxima;
  }

  adicionar(item: string): boolean {
    if (this.itens.length >= this.capacidadeMaxima) {
      return false; // cheio — a classe decide o que fazer, quem chama não precisa saber a regra
    }
    this.itens.push(item);
    return true;
  }

  remover(item: string): boolean {
    const indice = this.itens.indexOf(item);
    if (indice === -1) return false;
    this.itens.splice(indice, 1);
    return true;
  }

  listar(): readonly string[] {
    return [...this.itens]; // cópia — quem recebe não pode mutar o array interno
  }
}
```

Note o `[...this.itens]` no `listar()`: se você devolvesse `this.itens`
direto, quem chamou poderia fazer `inventario.listar().push("hack")` e
alterar o estado interno por fora, sem passar por `adicionar()`. Devolver
cópia é o que fecha essa brecha.

## 4. Composição: uma entidade é feita de várias partes de estado

Personagem não precisa (e geralmente não deveria) ser uma classe gigante
com tudo dentro. Composição — uma classe *tem* outras classes — deixa
cada parte do estado isolada e testável sozinha.

```ts
class Personagem {
  nome: string;
  private saude: Saude;
  private inventario: Inventario;

  constructor(nome: string, vidaMaxima: number, capacidadeInventario: number) {
    this.nome = nome;
    this.saude = new Saude(vidaMaxima);
    this.inventario = new Inventario(capacidadeInventario);
  }

  receberDano(quantidade: number): void {
    this.saude.receberDano(quantidade);
  }

  estaVivo(): boolean {
    return this.saude.estaVivo();
  }

  pegarItem(item: string): boolean {
    return this.inventario.adicionar(item);
  }
}

class Saude {
  private vida: number;
  readonly vidaMaxima: number;

  constructor(vidaMaxima: number) {
    this.vidaMaxima = vidaMaxima;
    this.vida = vidaMaxima;
  }

  receberDano(quantidade: number): void {
    this.vida = Math.max(0, this.vida - quantidade);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}
```

Isso é próximo do espírito de um ECS (Component = pedaço de estado
isolado como `Saude`, `Inventario`; Entity = quem agrupa Components).
Não é a única forma de fazer — é só pra você ver a ideia de "estado
grande = várias classes pequenas compostas", que ajuda muito a não deixar
uma classe `Personagem` virar um monstro de 40 campos.

## 5. Mutação direta vs. retornar novo estado

Existem dois estilos pra "mudar" estado, e vale saber os dois porque
você vai ver ambos:

**Mutação direta** (a classe muda a si mesma, como nos exemplos acima):
```ts
grog.receberDano(10); // grog muda "no lugar"
```
Mais direto de ler, mas fica mais fácil perder o rastro de "quem mudou
isso e quando" num sistema grande.

**Estado imutável** (cada mudança gera uma cópia nova, nada muda "no
lugar"):
```ts
class Personagem {
  constructor(readonly nome: string, readonly vida: number, readonly vidaMaxima: number) {}

  receberDano(quantidade: number): Personagem {
    return new Personagem(this.nome, Math.max(0, this.vida - quantidade), this.vidaMaxima);
  }
}

let grog = new Personagem("Grog", 30, 30);
grog = grog.receberDano(10); // grog original é descartado, esse é um novo objeto
```
Mais fácil de rastrear bug (o objeto antigo nunca muda, então dá pra
comparar "antes" e "depois" lado a lado) e é o estilo que combina melhor
com sistemas de histórico/undo ou replay de combate. Custa um pouco mais
de memória (cria objeto novo a cada mudança).

Não existe resposta certa universal — é decisão de design. Pra estado de
jogo com histórico de turnos (o que costuma interessar num RPG por
cartas: "volta pro estado antes dessa jogada"), imutável tende a valer a
pena. Pra estado simples sem necessidade de histórico, mutação direta é
mais simples de escrever.

## 6. Serializar e restaurar: a ponte pro banco

Quando o estado em memória precisar sobreviver a um restart, ele passa
por dois métodos simétricos:

```ts
class Personagem {
  constructor(
    public nome: string,
    public nivel: number,
    private vida: number,
    readonly vidaMaxima: number,
  ) {}

  receberDano(quantidade: number): void {
    this.vida = Math.max(0, this.vida - quantidade);
  }

  // estado -> formato plano, pronto pra JSON.stringify
  toJSON() {
    return {
      nome: this.nome,
      nivel: this.nivel,
      vida: this.vida,
      vidaMaxima: this.vidaMaxima,
    };
  }

  // formato plano (vindo de JSON.parse ou de uma linha do banco) -> instância de novo
  static fromJSON(dado: { nome: string; nivel: number; vida: number; vidaMaxima: number }): Personagem {
    return new Personagem(dado.nome, dado.nivel, dado.vida, dado.vidaMaxima);
  }
}

// salvar
const texto = JSON.stringify(grog.toJSON());
// db.prepare("INSERT INTO personagens (data) VALUES (?)").run(texto);

// carregar de volta
// const linha = db.prepare("SELECT data FROM personagens WHERE id = ?").get(id);
const grogRestaurado = Personagem.fromJSON(JSON.parse(texto));
```

Repare: `JSON.parse` sozinho devolve um objeto *plano* — sem os métodos
da classe (`receberDano` não existiria nele). É por isso que existe o
`fromJSON`/`static`: ele reconstrói a instância de verdade a partir do
dado plano. Esquecer esse passo é uma causa comum de bug tipo "depois
que recarrego do banco, meus métodos somem".

Valide o formato vindo do banco/JSON com Zod antes do `fromJSON`, pelo
mesmo motivo do [[json-boas-praticas]]: nada que vem de fora (nem do seu
próprio banco, se o schema mudou entre uma versão e outra do código) deve
ser confiado sem checagem.

## 7. Onde isso te leva no `Systems.ts`

Perguntas que vale você responder conforme for desenhando (não
implementadas aqui de propósito — é a parte que é sua):

- Quais campos de cada entidade **precisam** ser privados (não podem
  ficar inválidos nunca) vs. quais são só dado solto sem risco?
- O estado do seu jogo vai ser mutável ou você quer poder "voltar um
  turno"? Isso decide entre os estilos da seção 5.
- Quando (se) você for persistir personagem/combate no SQLite, qual vai
  ser o par `toJSON`/`fromJSON` de cada classe, e que tabela nova
  guarda esse JSON (parecido com `dnd_cache`, mas pra dado seu, não
  cache de API externa)?
