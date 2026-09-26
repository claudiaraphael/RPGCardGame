# Decisão arquitetural: separar "o quê" de "onde/como roda" (e o que isso significa pro `Systems.ts`)

## 1. O padrão em `app.ts` / `server.ts`

- **`app.ts`** define o *comportamento*: middlewares (CORS, `express.json`),
  rotas, error handler. Exporta o `app` do Express como objeto comum —
  **nunca chama `.listen()`**.
- **`server.ts`** define *onde/como ele roda*: só importa esse `app` e
  liga numa porta (`app.listen(PORT, ...)`, `backend/src/server.ts:9`,
  `PORT` fixo em `backend/src/server.ts:7`).

Três motivos concretos pra essa separação (documentados em
`backend/testes/README.md:16-28`):

1. **Testes sem porta real.** Com `supertest`, dá pra importar `app`
   direto e simular requisição HTTP sem abrir processo numa porta —
   mais rápido, sem risco de conflito de porta em testes paralelos.
2. **Reuso.** Se um dia `app` precisar rodar noutro contexto (função
   serverless, script interno), importa só ele, sem herdar "subir
   servidor".
3. **Responsabilidade única.** Trocar porta/HTTPS mexe em `server.ts`;
   trocar rota/middleware mexe em `app.ts`. Motivos de mudança
   diferentes, arquivos diferentes.

O princípio geral por trás: **separar a definição do comportamento da
orquestração de quando/como ele é executado**. `PORT` fixo (`3000`) em
vez de env var é decisão consistente com a regra do `CLAUDE.md` de não
criar variável de ambiente nova sem necessidade concreta — não tem hoje
motivo real pra porta ser configurável, então não virou complexidade
adiantada.

## 2. O mesmo princípio aplicado ao `Systems.ts`

Isso não é receita pronta — é o mesmo raciocínio, pra você decidir como
aplicar no seu ECS. A pergunta equivalente a "app vs. server" pro seu
caso é:

> **O que processa o estado** (a lógica de cada Sistema) é uma coisa.
> **O que decide quando/em que ordem cada Sistema roda** é outra coisa.

Hoje, o `Systems.js` que você está escrevendo mistura pseudocódigo de
ambas as ideias no mesmo arquivo (`let STATES = [...]`, funções soltas
tipo `pause()`/`save()`, uma tentativa de `class Game`) — normal pra fase
de exploração, mas é o tipo de coisa que a separação abaixo resolveria
quando for hora de organizar:

- **Sistemas (comportamento puro)**: cada Sistema é uma função (ou
  classe, se preferir agrupar estado próprio) que recebe entidades/
  componentes e devolve o novo estado. Não sabe nada sobre "quando" ele
  roda — só sabe processar o que recebe. Exemplo do guia
  [[fundamentos-js-ts]], seção 10 (`sistemaDeRegeneracao`): recebe
  `Entidade[]`, devolve `Entidade[]`, sem se preocupar com loop de jogo,
  turno ou I/O.
- **Engine/loop (orquestração)**: o equivalente ao `server.ts` — decide
  *quando* cada Sistema roda, em que ordem, e o que fazer com o
  resultado (persistir? emitir evento? repassar pro próximo turno?). É
  aqui que fica algo como a ideia dos `STATES` (`"START"`, "`PAUSE`"
  etc.) e a lógica de `save`/`load` — não porque "processam regra de
  jogo", mas porque decidem *o fluxo de execução*, não a regra em si.

A vantagem é a mesma dos três motivos do `app.ts`/`server.ts`:

1. **Testar um Sistema sozinho** sem precisar montar o loop de jogo
   inteiro — chama a função com uma lista de entidades de teste e
   confere o resultado, igual o exemplo de `supertest` do
   `testes/README.md`.
2. **Reuso**: se um dia quiser rodar os Sistemas fora do loop principal
   (ex.: simular um combate pra debug, sem UI nem I/O), importa só os
   Sistemas.
3. **Responsabilidade única**: mudar a regra de regeneração de vida mexe
   no Sistema; mudar quando/quantas vezes por turno ele roda mexe no
   loop. Hoje, misturados no mesmo arquivo, uma mudança de regra e uma
   mudança de fluxo de execução disputam o mesmo lugar.

Isso não significa "crie `systems.ts` + `engine.ts` agora" — é só o
raciocínio; a decisão de like nomear/organizar os arquivos é sua (é
literalmente a parte que conta pros 50% do trabalho, ver `CLAUDE.md`).

## 3. Checagem das pastas: `dist`, `config`, `src`

Olhei a árvore de `backend/` de verdade pra responder isso, não por
memória:

- **`dist/`** — existe, é o output compilado (`tsconfig.json`:
  `outDir: "./dist"`). Está **desatualizado** (só tem `dado/`,
  `entidades-dnd/`, `personagem/` compilados — falta `src/`, `auth/`,
  `db/`) porque não foi rodado `npm run build` recentemente. Isso é
  **normal e esperado**: `dist/` é artefato gerado, está no
  `.gitignore` da raiz (`dist` listado lá), não é pra editar nem manter
  sincronizado manualmente — só rodar `npm run build` quando precisar
  dele atualizado (ex.: antes de `npm start` ou de buildar a imagem
  Docker).
- **`config/`** — **não existe em lugar nenhum do projeto.** Busquei por
  qualquer pasta/arquivo com "config" no nome e só apareceu
  `tsconfig.json` (configuração do compilador TS, não um padrão de
  "pasta config" de aplicação). O projeto hoje lê configuração direto de
  `.env` via `process.loadEnvFile()` (mencionado no `CLAUDE.md`, seção
  Docker) — não tem uma camada `config/` centralizando isso. Não é
  pasta "faltando" no sentido de erro — só não existe esse padrão aqui
  ainda. Se você achar que faz sentido ter uma (ex.: centralizar leitura
  de env vars com validação Zod), é uma decisão nova, não uma correção
  de algo quebrado.
- **`src/`** — existe e contém `app.ts`, `server.ts`, `routes/`, **e
  também `Systems/`** (`backend/src/Systems/Systems.js` +
  `backend/src/Systems/inventario/`, essa última vazia). Aqui tem uma
  **divergência com o `CLAUDE.md`**: a documentação do projeto descreve
  a estrutura como `backend/Systems/Systems.js` (pasta `Systems/` na
  raiz do backend, irmã de `src/`, `auth/`, `db/`) — mas o arquivo real
  está *dentro* de `src/`. Não sei se foi um `mv` intencional recente
  (o `git status` que vi mostra `Systems.js` como modificado, não
  movido) ou se o `CLAUDE.md` só ficou desatualizado nesse ponto. Vale
  você confirmar: se a intenção é `Systems/` ficar junto de `auth/`/`db/`
  (fora de `src/`, que hoje é só "servidor HTTP" — `app.ts`/`server.ts`/
  `routes/`), o arquivo está no lugar "errado" hoje; se a intenção é
  Systems ser parte do runtime do servidor, está no lugar certo e quem
  precisa de ajuste é o `CLAUDE.md`.

## 4. Estamos alinhados?

No raciocínio de fundo, sim: os três guias que já escrevi
([[json-boas-praticas]], [[fundamentos-js-ts]],
[[gerencia-de-estado-com-classes]]) e essa separação comportamento vs.
orquestração seguem a mesma linha — estado bem isolado, mudança de
estado só através de porta controlada (método/Sistema), execução/fluxo
separado da regra em si.

Onde você está agora (`Systems.js` como pseudocódigo — `STATES` como
array solto, uma tentativa de `class Game` com sintaxe inválida
(`const class Game`, que não compila), funções `start`/`pause`/`save`
soltas fora de qualquer estrutura fechando direito) é esperado pra fase
de exploração — não mexi nele nem sugiro correção agora, é
propositalmente exploratório (ver nota do `CLAUDE.md` sobre não avançar
esse arquivo sem pedido explícito). A decisão real que falta tomar — e
que só você deve tomar — é exatamente a da seção 2: separar "Sistema
como função pura de processamento" de "loop/engine que decide quando
rodar cada um". Quando estiver pronta pra isso, é o próximo passo natural
de aplicar o mesmo princípio do `app.ts`/`server.ts` ao seu ECS.
