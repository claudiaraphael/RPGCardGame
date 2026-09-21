# 🐉 RPG Card Game

Um projeto de estudo (MVP de disciplina) para construir, aos poucos, um jogo de
cartas de RPG inspirado em D&D 5e, usando **Node.js + TypeScript** no backend e
os dados da [D&D 5e API](https://www.dnd5eapi.co/).

> Este projeto foi feito para praticar habilidades que ferramentas de IA não
> substituem: modelagem de dados, gerenciamento de estado, depuração
> sistemática, design de fronteiras arquiteturais e raciocínio assíncrono.

## Onde o projeto está hoje

O repositório está em fase de **reconstrução**. A primeira versão (API Express
com CRUD de cartas, Zod e Swagger) foi arquivada como referência em
`backend/to-do/documentation/codigo-referencia-antigo.md`, e serviu de base
para reescrever o esqueleto do servidor à mão. Por isso:

- ✅ já existe um **servidor Express mínimo** (`backend/src/`), com uma rota
  `GET /<entidade>` e `GET /<entidade>/:index` para cada uma das 24 categorias
  da D&D API já modeladas (spells, monsters, classes, races, equipment...);
- ❌ ainda **não há banco de dados** (o plano agora é SQLite, não mais
  Postgres) — cada requisição bate direto na D&D API por trás, sem cache;
- ➡️ o **frontend** mudou para um repositório próprio, `RPGCardGame-frontend`
  (HTML/CSS/JS puro, sem bundler, servido em dev pela extensão Live Server do
  VS Code);
- ✅ já existem o cliente genérico da D&D API, um schema Zod por categoria de
  entidade, o dado d20 e o esboço do personagem.

## O que tem aqui dentro

```
backend/
├── src/
│   ├── app.ts               # Express: CORS, body limit, rotas, error handler
│   ├── server.ts            # liga o app.ts na porta 3000
│   └── routes/
│       ├── entityRouter.ts  # fábrica genérica: GET / e GET /:index por entidade
│       └── index.ts         # registra as 24 entidades da D&D API nessa fábrica
├── testes/                  # notas de design pra quando testes automatizados entrarem
├── seed.ts                  # funções que consultam a D&D API (spells etc.) — script avulso
├── dado/d20.ts               # rolagem de d20
├── personagem/               # interface Personagem (esboço)
├── entidades-dnd/
│   ├── dnd-api-client.ts    # cliente axios genérico para a D&D API
│   └── schemas/             # um schema Zod por categoria (spells, monsters, classes...)
├── auth/                     # esboço não funcional, ainda não conectado a nenhuma rota
└── to-do/                    # checklist, requerimento do MVP e documentação
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.6+ (necessário para `process.loadEnvFile`) e `npm`

## Como preparar o ambiente

```bash
cd backend
npm install
```

O backend lê a URL base da D&D API do arquivo `backend/.env` (variável
`DND_BASE_URL`, que já existe no projeto). É uma URL pública, sem segredos.

## Rodando o servidor

```bash
cd backend
npm run dev
```

Sobe em `http://localhost:3000`. Rotas disponíveis (uma por entidade da D&D
API, todas em `src/routes/index.ts`):

```
ability-scores, alignments, backgrounds, classes, conditions, damage-types,
equipment, equipment-categories, feats, features, languages, magic-items,
magic-schools, monsters, proficiencies, races, rule-sections, rules, skills,
spells, subclasses, subraces, traits, weapon-properties
```

Cada uma dessas expõe `GET /<entidade>` (lista resumida) e
`GET /<entidade>/:index` (item completo) — ex: `GET /monsters/aboleth`,
`GET /spells/acid-arrow`.

Cada resposta já passa pelo schema Zod correspondente antes de sair — se o
formato vindo da D&D API não bater com o schema, a rota responde com erro em
vez de devolver dado não validado.

O CORS em `src/app.ts` só libera `http://localhost:5500` e
`http://127.0.0.1:5500` (onde o Live Server do front roda em dev). Se você
rodar o front noutra porta, precisa atualizar essa lista.

Para conferir se os tipos estão corretos:

```bash
npx tsc --noEmit
```

Para rodar um script isolado (ex: `seed.ts`, que **não** faz parte do
servidor — é um script avulso de popular dados, não algo que fica no ar):

```bash
npx ts-node seed.ts
```

## Scripts do backend

| Comando | Situação |
| --- | --- |
| `npx tsc --noEmit` | ✅ checa os tipos |
| `npm run build` | ✅ compila para `dist/` |
| `npm run dev` | ✅ nodemon + ts-node `src/server.ts` → `http://localhost:3000` |
| `npm start` | ✅ `node dist/server.js` (rodar depois de `npm run build`) |

## Próximos passos

O checklist completo está em [`backend/to-do/todo.md`](backend/to-do/todo.md).
Em resumo:

1. terminar o `seed.ts` (tratamento de erros e validação com Zod, hoje só as
   rotas em `src/routes/` fazem essa validação);
2. subir SQLite e ligar o backend a ele, pra parar de bater na D&D API a cada
   requisição;
3. modelar personagem, build, cartas e decks;
4. gerador de cartas a partir dos dados da D&D API;
5. integrar de verdade com o frontend (fetch, botões, estado do jogo).

## Segurança

- Nunca commite segredos: senhas, tokens ou strings de conexão de banco devem
  ficar fora do git.
- O `.env` está no `.gitignore` e hoje só guarda a URL pública da D&D API.
- Os dados vindos da API externa são validados com Zod antes de serem
  devolvidos pelas rotas.
- CORS com origem explícita (nunca `*`), limite de tamanho de body
  (`express.json({ limit: "100kb" })`) e error handler que nunca expõe stack
  trace ao cliente.

## Documentação extra

Em `backend/to-do/documentation/`:

- `Mapa dos Dados de D&D5e.md` — shape das respostas de cada categoria da API
- `dnd5e-api-mapping.md` e `dnd_api_requests.json` — notas e exemplos de requisições
- `quickstart.md` e `documentation.md` — guias da versão anterior (podem estar defasados)
- `codigo-referencia-antigo.md` — código arquivado do CRUD de `/cards`, base pro esqueleto atual de `src/`

Em `backend/testes/README.md`: nota sobre por que `app.ts`/`server.ts` são
separados e como isso vai ser usado quando testes automatizados entrarem.
