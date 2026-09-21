# CLAUDE.md

Guia de contexto para quem (humano ou Claude Code) for trabalhar neste repositório.

## O que é este projeto

**RPGCardGame** é um projeto de estudo (MVP de uma disciplina): um jogo de cartas
de RPG inspirado em D&D 5e. O objetivo é praticar modelagem de dados, gerenciamento
de estado, depuração, design de fronteiras e raciocínio assíncrono, consumindo a API
pública [D&D 5e API](https://www.dnd5eapi.co/). O requerimento oficial está em
`backend/to-do/documentation/Requerimento_MVP.pdf`.

**Regra da disciplina: pelo menos 50% do código precisa ser escrito pela própria
autora.** Por isso o repositório passou por uma faxina (commit `796594d`) que
removeu a arquitetura em camadas que já estava montada. Ao ajudar aqui, prefira
explicar, revisar e apontar caminhos em vez de entregar implementações completas
— a menos que seja pedido explicitamente.

Os comentários do código são em português e têm propósito didático (explicam
*por que* de cada escolha). Preserve esse tom ao editar.

## Estado atual do repositório

- **Servidor Express rodando** em `backend/src/` (`app.ts` + `server.ts` +
  `routes/`), expondo `GET /<entidade>` e `GET /<entidade>/:index` para as
  24 categorias da D&D API modeladas em `entidades-dnd/schemas/`. `npm run
  dev`/`npm start` funcionam.
- **SQLite já conectado** (`backend/db/connection.ts`, `better-sqlite3`,
  síncrono — ver comentário do arquivo pro porquê disso não ser um
  problema aqui). Duas coisas já persistem nele:
  - **Sessão de login**: `backend/auth/sessionStore.ts` implementa a
    interface `Store` do `express-session` direto sobre o SQLite (sem
    depender de mais um pacote de terceiros). Testado manualmente:
    requisições sucessivas com o mesmo cookie mantêm estado, e o dado
    sobrevive olhando a tabela `sessions` direto no arquivo `.sqlite`.
  - **Cache das 24 entidades da D&D API** (`backend/db/schema.ts`, tabela
    `dnd_cache`): uma linha por item (`entity_type`, `idx`, `data` como
    JSON, `updated_at`) — não é modelagem de jogo, é só espelho local da
    API externa pra não bater na rede a cada request. Hoje só `spells`
    está ligada de fato ao banco (`db/runSeed.ts`); as outras 23 ainda
    não foram semeadas pro SQLite (mas já foram todas *validadas* — ver
    próximo item).
- **As 24 entidades foram validadas contra dado real da API, de ponta a
  ponta** (2.027 itens, 0 falhas na última rodada). O resultado completo
  está versionado em `backend/to-do/documentation/dnd-full-data.json` —
  é a melhor fonte pra consultar o shape real de qualquer entidade antes
  de desenhar uma tabela ou um gerador de carta em cima dela. Esse
  processo já pegou e corrigiu dois bugs reais de schema (ver "Bugs já
  encontrados e corrigidos" abaixo).
- **Autenticação/estado de jogo em construção pela autora, à mão**, em
  `backend/auth/user.js` e `backend/Systems/Systems.js` (explorando um
  desenho tipo ECS — Entities/Components/Systems). Não são esboços
  descartáveis como o antigo `auth/auth.js`: são trabalho ativo, em
  Python-ish/JS misturado por enquanto porque a autora está iterando —
  **não "corrija" a sintaxe nem prossiga esses arquivos sem pedido
  explícito**, é exatamente a parte que conta pros 50% dela.
- **O frontend saiu deste repositório** e vive em repo próprio
  (`RPGCardGame-frontend`, HTML/CSS/JS puro, sem bundler, servido em dev
  pela extensão Live Server do VS Code em `localhost:5500`/`127.0.0.1:5500`).
  A pasta `frontend/` aqui contém só um `node_modules` residual; ignore-a.
  **Atenção**: a cópia local desse repo (fora deste diretório) tem o
  remote `origin` misconfigurado (aponta pra string `"main"`, não uma URL
  real) — nunca foi de fato publicado no GitHub até onde foi checado.
  Confirmar com a autora antes de assumir que ele está num repositório
  público de verdade (exigência do requerimento).

## Bugs já encontrados e corrigidos (via validação contra dado real)

Vale registrar como exemplo de depuração sistemática (skill central do
projeto, ver `to-do/todo.md`):

1. **`dc` de spell** (`entidades-dnd/schemas/spells.schema.ts`): o
   `DcSchema` compartilhado tem o formato de monstro (`dc_value` +
   `success_type`). Spell usa `dc_success` e não tem `dc_value` nenhum —
   só foi pego rodando o seed contra as 319 spells de verdade, porque o
   exemplo original (`acid-arrow`) não tinha campo `dc`. Fix: schema
   próprio `SpellDcSchema` só pra spell.
2. **`option_type: "multiple"`** (`entidades-dnd/schemas/shared.schema.ts`,
   `OptionSchema`): faltava essa variante (uma opção de equipamento que é
   combo de dois itens juntos, ex: "besta leve + 20 virotes"). Sem ela, 6
   das 12 classes falhavam a validação (`cleric`, `fighter`, `paladin`,
   `rogue`, `sorcerer`, `warlock`). Também achado nesse processo: o campo
   `prerequisites` (pré-requisito de proficiência pra escolher um item)
   era descartado em silêncio pelo modo "strip" padrão do Zod — agora é
   modelado explicitamente.

## Estrutura

```
RPGCardGame/
├── package.json / package-lock.json   # dependência raiz "card-factory" (a confirmar a origem)
├── backend/
│   ├── src/
│   │   ├── app.ts             # Express: CORS+credentials, sessão, rotas, error handler
│   │   ├── server.ts          # só importa app.ts e liga na porta 3000
│   │   └── routes/
│   │       ├── entityRouter.ts  # fábrica genérica: GET / e GET /:index pra qualquer entidade
│   │       └── index.ts         # registra as 24 entidades nessa fábrica
│   ├── db/
│   │   ├── connection.ts      # abre o SQLite (better-sqlite3), WAL + foreign_keys ligados
│   │   ├── schema.ts          # CREATE TABLE dnd_cache (cache da API externa)
│   │   ├── seedDndCache.ts    # seedEntity() genérica + retry, popula dnd_cache
│   │   └── runSeed.ts         # roda o seed pra spells (única entidade ligada ao banco até agora)
│   ├── testes/
│   │   └── README.md          # notas sobre testabilidade (app.ts/server.ts), sem testes de verdade ainda
│   ├── seed.ts                # funções axios que consultam a D&D API (spells) + todos de modelagem
│   ├── dado/
│   │   └── d20.ts             # rolagem de d20
│   ├── personagem/
│   │   └── interface_personagem.ts   # interface Personagem (esboço)
│   ├── entidades-dnd/
│   │   ├── dnd-api-client.ts  # fetchFromDndApi<T>(path): cliente axios genérico
│   │   └── schemas/*.schema.ts # um schema Zod por categoria da D&D API (spells, monsters, classes...)
│   ├── auth/
│   │   ├── auth.js            # esboço antigo, não funcional — não confundir com o resto de auth/
│   │   ├── sessionStore.ts    # Store do express-session sobre SQLite (funcional, testado)
│   │   └── user.js            # modelagem de User/Character/Party em construção pela autora — não tocar
│   ├── Systems/
│   │   └── Systems.js         # exploração de arquitetura ECS pra estado do jogo — trabalho da autora
│   ├── to-do/
│   │   ├── todo.md            # checklist de próximos passos
│   │   ├── Requerimento_MVP.pdf
│   │   └── documentation/
│   │       ├── dnd-full-data.json   # dump completo e validado das 24 entidades (2.027 itens) — fonte de referência rica pro shape real de qualquer entidade
│   │       └── ...             # mapas da API, quickstart, código de referência antigo
│   ├── .env                   # DND_BASE_URL + SESSION_SECRET (URL pública + segredo local, sem valor real no git)
│   ├── tsconfig.json          # rootDir "." e include "**/*.ts" (sem pasta src/ única — src/ é só o servidor)
│   └── package.json
```

## Stack

- **Backend**: Node.js + TypeScript (strict), `express` 5, `cors`,
  `express-session`, `better-sqlite3`, `bcrypt`, `axios`, `zod` 4.
  Dependências de Swagger e `zod-to-openapi` continuam no `package.json`,
  mas hoje nada as usa (sobra do código arquivado; reservadas para quando
  a documentação interativa entrar, provavelmente perto da entrega/vídeo).
- **Frontend**: fora deste repo (ver alerta sobre o remote acima).
- **D&D API**: REST sem autenticação, base `DND_BASE_URL` + `/api/2014/...`.

## Comandos

Dentro de `backend/`:

```bash
npx tsc --noEmit          # checa os tipos sem gerar arquivos
npm run build              # tsc -> dist/
npm run dev                 # nodemon + ts-node src/server.ts -> http://localhost:3000
npm start                    # node dist/server.js (rodar depois de npm run build)
npx ts-node db/runSeed.ts     # popula dnd_cache (spells) a partir da D&D API
```

Para rodar um arquivo isolado (ex: `seed.ts`, que não faz parte do servidor —
é um script avulso), use `npx ts-node <arquivo>`.

## Variáveis de ambiente e segurança

- `backend/.env` define `DND_BASE_URL` (URL pública da D&D API) e
  `SESSION_SECRET` (assina o cookie de sessão — gerado localmente,
  nenhum valor real deve ir pro git ou pra docs).
- **`.env` não é mais rastreado pelo git** (`git rm --cached` rodado em
  `e56598a`). Continua existindo no disco normalmente — `npm run dev`,
  seed etc. seguem funcionando. O `.env` que ficou nos commits antigos
  (`e28ffe0`/`3b3565a`) só tinha `DND_BASE_URL`, sem segredo — decisão
  consciente de não reescrever histórico pra isso (custo alto: mexeria
  em 5 branches; ver conversa/commit pra contexto se precisar revisitar).
- **Não adicione variáveis novas ao `.env` sem pedido explícito.**
- Nunca imprima, cole em documentação ou commite valores de `.env`, tokens,
  senhas ou strings de conexão. Em docs, use placeholders.
- Valide com Zod tudo que vem de fora (respostas da D&D API, `req.body`) antes de
  usar. Não interpole entrada de usuário em caminhos de URL sem
  `encodeURIComponent` — em `seed.ts`, `getSpellByName`/`getSpellByIndex` montam
  a URL com o valor cru (ainda não corrigido ali; as rotas em
  `src/routes/entityRouter.ts` já aplicam `encodeURIComponent` no `:index`).
- CORS em `src/app.ts` usa `origin` explícito (lista fixa com as URLs do Live
  Server) + `credentials: true` (necessário pro cookie de sessão cross-origin)
  — nunca `origin: "*"`/`true` (aliás incompatível com `credentials: true`).
- Cookie de sessão: `httpOnly: true`, `sameSite: "lax"` (funciona porque
  `localhost:5500` e `localhost:3000` são o mesmo "site", só portas
  diferentes), `secure: false` (dev local sem HTTPS).
- Ao adicionar dependências, confira nome e origem do pacote (risco de
  typosquatting) e rode `npm audit`.
- O error handler central em `src/app.ts` nunca expõe stack trace ao cliente.

## Convenções e pontos de atenção

- **Zod como fonte única de verdade**: um schema Zod define validação e tipo
  TypeScript (`z.infer`). Os schemas em `entidades-dnd/schemas/` seguem isso,
  e cada um exporta o mesmo par de funções assíncronas (`getXList`,
  `getXByIndex`) — é esse padrão uniforme que permite tanto a fábrica de
  rotas (`entityRouter.ts`) quanto o `seedEntity()` genérico em
  `db/seedDndCache.ts`.
- **`app.ts` e `server.ts` ficam separados de propósito** — ver
  `backend/testes/README.md`.
- **`seed.ts` (raiz) não é parte do servidor**: script avulso, ainda sem
  Zod nem gravação em banco. Diferente de `db/seedDndCache.ts` +
  `db/runSeed.ts`, que já gravam de verdade em `dnd_cache` (só spells por
  enquanto). Não confundir nenhum dos dois com `dist/seed.js`, que é só
  compilado.
- **`dnd_cache` é cache, não modelagem de jogo**: as tabelas de
  personagem/carta/deck/mão/combate são modelagem original da autora
  (ver `auth/user.js`, `Systems/Systems.js`) e ainda não têm tabela no
  SQLite — só o cache da API externa tem, até agora.
- **Vários pontos são esboços intencionais**: `criarPersonagem` lança
  "Implementar criação do personagem", `seed.ts` (raiz) tem `todo`s de
  modelagem, `getSpellByName`/`getSpellByIndex` em `seed.ts` fazem a
  mesma requisição, `auth/auth.js` é esboço antigo não funcional.
  `auth/user.js` e `Systems/Systems.js` são trabalho ativo da autora, não
  esboços descartáveis — não "corrigir" sem pedido explícito.
- **Sem testes automatizados.** `npm test` só imprime um erro proposital.

## Ao usar Claude Code neste repo

- Mudanças pequenas, coerentes com o estágio de aprendizado; nada de abstrações
  "de produção" (DI, camadas extras) sem pedido. A fábrica de rotas e o
  `seedEntity()` genérico são exceções justificadas: mesmo formato exato
  repetido 24 vezes, não abstração especulativa.
- Respeite a regra dos 50% de código próprio — em especial, não avance
  `auth/user.js`/`Systems/Systems.js` sem pedido explícito, é trabalho
  ativo da autora.
- Ao mexer no backend, rode `npx tsc --noEmit` em `backend/`.
- Não há suíte de testes: no resumo final, descreva o que foi verificado
  manualmente (ex: subir o servidor com `ts-node` e testar rotas com `curl`)
  em vez de assumir sucesso.
- Antes de commitar, confira `git status`/`git diff` para não incluir `.env`,
  `node_modules`, `dist` ou o `database.sqlite` gerado localmente.
- **Nunca rode `git push` sem pedido explícito nessa mesma conversa** — a
  autora prefere fazer o push ela mesma. Commits locais são normais.
