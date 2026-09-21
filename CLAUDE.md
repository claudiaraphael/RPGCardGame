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

- **Há um servidor Express mínimo rodando** em `backend/src/` (`app.ts` +
  `server.ts` + `routes/`). Ele expõe `GET /<entidade>` e `GET /<entidade>/:index`
  para as 24 categorias da D&D API modeladas em `entidades-dnd/schemas/`,
  validando cada resposta com o schema Zod correspondente antes de devolver.
  `npm run dev`/`npm start` já funcionam.
- **Ainda não há banco de dados.** Cada requisição às rotas acima bate direto
  na D&D API por trás — não tem cache nem persistência ainda. O plano
  (SQLite, não mais Postgres) está em `backend/to-do/todo.md`.
- **O frontend saiu deste repositório** e vive em repo próprio
  (`RPGCardGame-frontend`, HTML/CSS/JS puro, sem bundler, servido em dev pela
  extensão Live Server do VS Code em `localhost:5500`/`127.0.0.1:5500`). A
  pasta `frontend/` aqui contém só um `node_modules` residual; ignore-a.
- O código de CRUD antigo (`/cards` em memória com Zod + Swagger) está
  arquivado como referência de consulta em
  `backend/to-do/documentation/codigo-referencia-antigo.md` — não é código
  vivo, mas foi a base pra reconstruir o esqueleto Express em `src/`.

## Estrutura

```
RPGCardGame/
├── package.json / package-lock.json   # dependência raiz "card-factory" (a confirmar a origem)
├── backend/
│   ├── src/
│   │   ├── app.ts             # Express: CORS, body limit, rotas, error handler (não sobe servidor)
│   │   ├── server.ts          # só importa app.ts e liga na porta 3000
│   │   └── routes/
│   │       ├── entityRouter.ts  # fábrica genérica: GET / e GET /:index pra qualquer entidade
│   │       └── index.ts         # registra as 24 entidades nessa fábrica
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
│   │   └── auth.js            # esboço não funcional (sintaxe mista JS/Python) — não confirmar com autora
│   ├── to-do/
│   │   ├── todo.md            # checklist de próximos passos
│   │   ├── Requerimento_MVP.pdf
│   │   └── documentation/     # mapas da API, quickstart, código de referência antigo
│   ├── .env                   # DND_BASE_URL (URL pública, sem segredos)
│   ├── tsconfig.json          # rootDir "." e include "**/*.ts" (sem pasta src/ única — src/ é só o servidor)
│   └── package.json
```

## Stack

- **Backend**: Node.js + TypeScript (strict), `express` 5, `cors`, `axios`,
  `zod` 4. Dependências de Swagger e `zod-to-openapi` continuam no
  `package.json`, mas hoje nada as usa (sobra do código arquivado; reservadas
  para quando a documentação interativa entrar, provavelmente perto da
  entrega/vídeo).
- **Frontend**: fora deste repo.
- **D&D API**: REST sem autenticação, base `DND_BASE_URL` + `/api/2014/...`.

## Comandos

Dentro de `backend/`:

```bash
npx tsc --noEmit   # checa os tipos sem gerar arquivos
npm run build      # tsc -> dist/
npm run dev        # nodemon + ts-node src/server.ts -> http://localhost:3000
npm start          # node dist/server.js (rodar depois de npm run build)
```

Para rodar um arquivo isolado (ex: `seed.ts`, que não faz parte do servidor —
é um script avulso, ver seção "Convenções"), use `npx ts-node <arquivo>`.

## Variáveis de ambiente e segurança

- `backend/.env` define só `DND_BASE_URL` (URL pública da D&D API). É lido com
  `process.loadEnvFile()` em `seed.ts` e `entidades-dnd/dnd-api-client.ts`.
- **Não adicione variáveis novas ao `.env` sem pedido explícito.** Quando a etapa
  do SQLite chegar, credenciais/caminho de banco não podem ir para o git sem
  confirmar antes.
- `.env` está no `.gitignore`, mas **já foi commitado** antes disso, então
  continua rastreado. Enquanto não for removido do índice
  (`git rm --cached backend/.env`), qualquer edição nele vai parar no
  histórico. Nunca coloque segredos reais nele.
- Nunca imprima, cole em documentação ou commite valores de `.env`, tokens,
  senhas ou strings de conexão. Em docs, use placeholders.
- Valide com Zod tudo que vem de fora (respostas da D&D API, `req.body`) antes de
  usar. Não interpole entrada de usuário em caminhos de URL sem
  `encodeURIComponent` — em `seed.ts`, `getSpellByName`/`getSpellByIndex` montam
  a URL com o valor cru (ainda não corrigido ali; as rotas em
  `src/routes/entityRouter.ts` já aplicam `encodeURIComponent` no `:index`
  antes de repassar pro cliente axios, porque são elas que expõem esse valor
  publicamente por HTTP).
- CORS em `src/app.ts` usa `origin` explícito (lista fixa com as URLs do Live
  Server) — nunca `origin: "*"`/`true`. Se a URL do front mudar, atualize essa
  lista.
- Ao adicionar dependências, confira nome e origem do pacote (risco de
  typosquatting) e rode `npm audit`.
- O error handler central em `src/app.ts` nunca expõe stack trace ao cliente
  (responde só `{ error: "Erro interno do servidor" }` e loga o resto no
  console do servidor).

## Convenções e pontos de atenção

- **Zod como fonte única de verdade**: um schema Zod define validação e tipo
  TypeScript (`z.infer`). Os schemas em `entidades-dnd/schemas/` seguem isso,
  e cada um exporta o mesmo par de funções assíncronas (`getXList`,
  `getXByIndex`) — é esse padrão uniforme que permite a fábrica genérica em
  `src/routes/entityRouter.ts` (uma implementação só, reaproveitada pelas 24
  entidades, em vez de 24 arquivos de rota quase idênticos).
- **`app.ts` e `server.ts` ficam separados de propósito**: `app.ts` monta o
  Express (middlewares, rotas, error handler) e exporta o `app` sem chamar
  `.listen()`; `server.ts` só importa esse `app` e liga na porta. Isso permite
  testar/importar `app` (ex: com `supertest`) sem subir um servidor de
  verdade — ver `backend/testes/README.md`.
- **`seed.ts` não é parte do servidor**: é um script de execução única/sob
  demanda (`npx ts-node seed.ts`), não algo que fica rodando. Quando o SQLite
  entrar, ele vira o script que popula o banco a partir da D&D API; o
  servidor passa a ler do banco em vez de bater na API a cada request. Não
  confundir com `dist/seed.js`, que é só o `seed.ts` compilado (saída de
  `npm run build`, não é código-fonte separado).
- **Estruturas por domínio**, na raiz do backend (`dado/`, `personagem/`,
  `entidades-dnd/`), fora de `src/`, que é reservado só pro servidor HTTP.
- **Vários pontos são esboços intencionais**: `criarPersonagem` lança
  "Implementar criação do personagem", `seed.ts` tem `todo`s de modelagem e
  ainda não valida com Zod nem grava em banco, `getSpellByName` e
  `getSpellByIndex` em `seed.ts` hoje fazem a mesma requisição, `auth/auth.js`
  é um esboço não funcional. Confirme com a autora antes de "corrigir".
- **Sem testes automatizados.** `npm test` só imprime um erro proposital.
  `backend/testes/README.md` guarda a justificativa de design pra quando isso
  entrar, mas não tem teste de verdade escrito ainda.
- Arquivos ainda não totalmente integrados: `auth/auth.js` (esboço solto, sem
  rota conectada a ele) e `seed.ts` (funções soltas, não usadas pelas rotas de
  `src/routes/` — essas leem direto de `entidades-dnd/schemas/`).

## Ao usar Claude Code neste repo

- Mudanças pequenas, coerentes com o estágio de aprendizado; nada de abstrações
  "de produção" (DI, camadas extras) sem pedido. A fábrica de rotas em
  `entityRouter.ts` é a exceção justificada: 24 entidades com o mesmo formato
  exato, não uma abstração especulativa.
- Respeite a regra dos 50% de código próprio (ver acima).
- Ao mexer no backend, rode `npx tsc --noEmit` em `backend/`.
- Não há suíte de testes: no resumo final, descreva o que foi verificado
  manualmente (ex: subir o servidor com `ts-node` e testar rotas com `curl`)
  em vez de assumir sucesso.
- Antes de commitar, confira `git status`/`git diff` para não incluir `.env`,
  `node_modules` ou `dist`.
