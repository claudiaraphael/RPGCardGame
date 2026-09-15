# CLAUDE.md

Guia de contexto para quem (humano ou Claude Code) for trabalhar neste repositório.

## O que é este projeto

**RPGCardGame** é um projeto de estudo: um jogo de cartas de RPG inspirado em D&D 5e.
O objetivo principal é aprender, na prática, React + Vite no frontend e Node.js +
TypeScript + Express no backend, além de consumir a API pública [D&D 5e API](https://www.dnd5eapi.co/).

Por ser um projeto de aprendizado, o código tem comentários explicativos (em
português) sobre *por que* certas escolhas foram feitas — isso é intencional e
deve ser preservado/seguido ao editar esses arquivos.

## Estrutura do repositório

O backend segue a **arquitetura em camadas (layered architecture)** padrão de
mercado para APIs Express: `routes → controllers → services → repositories`,
com `schemas` (Zod) como fonte única de verdade e `docs` para a geração do
OpenAPI/Swagger. Ver o mapa completo em [`backend/architecture.md`](backend/architecture.md).

```
RPGCardGame/
├── backend/
│   ├── src/
│   │   ├── server.ts                # ponto de entrada, só sobe o servidor HTTP
│   │   ├── app.ts                   # monta o Express (middlewares, rotas, /docs)
│   │   ├── routes/
│   │   │   └── card.routes.ts       # mapeia URL + método HTTP -> controller
│   │   ├── controllers/
│   │   │   └── card.controller.ts   # req/res, sem regra de negócio
│   │   ├── services/
│   │   │   └── card.service.ts      # regra de negócio das cartas
│   │   ├── repositories/
│   │   │   └── card.repository.ts   # acesso a dados (hoje: array em memória)
│   │   ├── schemas/
│   │   │   └── card.schema.ts       # Zod: validação + tipos + base p/ OpenAPI
│   │   ├── middlewares/
│   │   │   └── validateBody.ts      # valida req.body contra um schema Zod
│   │   └── docs/
│   │       └── openapi.ts           # registra as rotas no OpenAPI a partir dos schemas Zod
│   ├── seed.ts                 # (vazio) reservado para popular um banco de dados
│   ├── app.py                  # script Python de exemplo, consulta a D&D 5e API
│   ├── database.db             # (vazio) reservado para uma futura persistência em SQLite
│   ├── bin/dnd_race_search.sh  # script bash interativo p/ buscar raças na D&D 5e API
│   ├── .env                    # DND_BASE_URL
│   ├── architecture.md         # mapa de arquitetura em camadas do backend
│   ├── tsconfig.json
│   ├── package.json
│   └── Documentation/
│       ├── documentation.md   # changelog/notas da migração para Zod + TS
│       ├── quickstart.md      # como rodar frontend + backend em paralelo
│       └── dnd_api_requests.json
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    ├── package.json
    ├── documentation/D&D5e_docs.md   # notas sobre os endpoints da D&D 5e API
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── assets/pfp.jpg
        └── components/
            ├── Header.jsx          # navbar estática (links ainda são "#")
            ├── Footer.jsx
            ├── Button.jsx          # botão de exemplo, não usado no App ainda
            ├── Profile.tsx         # cartão de perfil estático
            ├── MonsterCard.jsx     # cartão de monstro estático (placeholder)
            └── MonsterSearch.tsx   # busca de monstro, chama a D&D 5e API direto
```

## Stack

**Frontend**: React 19 + Vite 8, ESLint. Sem TypeScript "puro" ainda — mistura
`.jsx` e `.tsx` (migração em andamento). Sem roteador nem gerenciador de estado
global.

**Backend**: Express 5 + TypeScript, organizado em arquitetura em camadas
(`routes` → `controllers` → `services` → `repositories`), com validação e
documentação via [Zod](https://zod.dev/) + `@asteasolutions/zod-to-openapi`
(gera OpenAPI a partir dos mesmos schemas Zod — ver `backend/src/schemas/` e
`backend/src/docs/openapi.ts`), Swagger UI em `/docs`. Os dados de `cards`
hoje vivem só em memória (`backend/src/repositories/card.repository.ts`); não
há banco de dados conectado ainda, embora `database.db` e `seed.ts` existam
como placeholders para isso.

**Scripts auxiliares**: `backend/app.py` (Python + `requests` + `dotenv`) e
`backend/bin/dnd_race_search.sh` (bash + `curl`) são exemplos avulsos de como
consultar a D&D 5e API, não fazem parte do fluxo do servidor Express.

## Comandos

```bash
# Backend (dentro de backend/)
npm run dev     # nodemon + ts-node, roda src/server.ts com reload automático
npm run build   # compila src/ para dist/ (tsc)
npm start       # roda a versão compilada (dist/server.js)

# Frontend (dentro de frontend/)
npm run dev      # vite dev server, http://localhost:5173
npm run build    # build de produção
npm run lint     # eslint
npm run preview  # preview do build
```

Para desenvolver os dois lados juntos, use dois terminais (um em `backend/`,
outro em `frontend/`) — ver `backend/Documentation/quickstart.md`.

O backend expõe a API CRUD de cartas em `http://localhost:3000/cards` e a
documentação interativa (Swagger) em `http://localhost:3000/docs`.

## Variáveis de ambiente

`backend/.env` define `DND_BASE_URL` (usada por `app.py`). Não contém
segredos — é só a URL base pública da D&D 5e API. Ainda assim, trate `.env`
como configuração local: não adicione segredos reais nele sem atualizar
`.gitignore` primeiro.

## Convenções e pontos de atenção

- **Comentários em português, com propósito didático**: mantenha esse tom ao
  editar os arquivos em `backend/src/`, `app.py` e os arquivos em
  `Documentation/`. Não são "ruído" a remover — fazem parte do propósito do
  projeto.
- **Zod como fonte única de verdade** no backend: um schema Zod (em
  `backend/src/schemas/`) define validação, tipo TypeScript (`z.infer`) e
  documentação OpenAPI ao mesmo tempo. Ao adicionar uma rota nova, siga o
  fluxo em camadas já estabelecido — `schema → repository → service →
  controller → route → registro em docs/openapi.ts` — em vez de duplicar
  validação manual ou misturar responsabilidades num único arquivo.
- **Frontend e backend ainda não estão integrados**: `MonsterSearch.tsx`
  chama a D&D 5e API diretamente do navegador; o CRUD de `/cards` do backend
  não é consumido pelo frontend ainda. Isso é esperado no estado atual do
  projeto — não assuma que existe uma ligação entre eles a menos que seja
  isso que está sendo implementado.
- **Vários pontos são placeholders intencionais**: `Header.jsx` tem links
  `href="#"`, `MonsterCard.jsx` tem conteúdo fixo ("Monster Name"),
  `Button.jsx` não é usado em `App.jsx`, `seed.ts` e `database.db` estão
  vazios. Antes de "corrigir" algo assim, confirme se não é só uma etapa
  futura ainda não implementada.
- **Sem testes automatizados** hoje (`npm test` no backend só imprime um
  erro proposital). Se adicionar lógica não trivial, vale propor testes, mas
  não é um padrão já estabelecido no projeto.

## Ao usar Claude Code neste repo

- Prefira mudanças pequenas e coerentes com o estágio de aprendizado do
  projeto — evite introduzir abstrações "de produção" (DI containers, camadas
  extras, etc.) sem que isso tenha sido pedido.
- Ao mexer no backend, rode `npm run build` (tsc) em `backend/` para
  confirmar que os tipos continuam batendo.
- Ao mexer no frontend, rode `npm run lint` em `frontend/`.
- Este repositório não tem suíte de testes para validar comportamento — ao
  fazer mudanças, descreva no resumo final o que foi testado manualmente
  (ex: rodou `npm run dev` e checou no navegador) em vez de assumir sucesso.
