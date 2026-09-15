RPGCardGame/
├── backend/                        <-- ambiente Node.js + Express + TypeScript
│   ├── src/
│   │   ├── server.ts               <-- ponto de entrada, só sobe o servidor HTTP
│   │   ├── app.ts                  <-- monta o Express (middlewares, rotas, /docs)
│   │   ├── routes/
│   │   │   └── card.routes.ts      <-- mapeia URL + método HTTP -> controller
│   │   ├── controllers/
│   │   │   └── card.controller.ts  <-- req/res, sem regra de negócio
│   │   ├── services/
│   │   │   └── card.service.ts     <-- regra de negócio das cartas
│   │   ├── repositories/
│   │   │   └── card.repository.ts  <-- acesso aos dados (hoje: array em memória)
│   │   ├── schemas/
│   │   │   └── card.schema.ts      <-- Zod: validação + tipos + base p/ OpenAPI
│   │   ├── middlewares/
│   │   │   └── validateBody.ts     <-- valida req.body contra um schema Zod
│   │   └── docs/
│   │       └── openapi.ts          <-- registra as rotas no OpenAPI (Swagger)
│   ├── seed.ts                     <-- (vazio) reservado p/ popular um banco de dados
│   ├── database.db                 <-- (vazio) reservado p/ futura persistência SQLite
│   ├── app.py                      <-- script Python de exemplo, consulta a D&D 5e API
│   ├── bin/dnd_race_search.sh      <-- script bash interativo p/ buscar raças na API
│   ├── tsconfig.json
│   ├── package.json
│   └── Documentation/
│       ├── documentation.md
│       ├── quickstart.md
│       └── dnd_api_requests.json
└── frontend/                       <-- ambiente React + Vite
    └── src/
        ├── App.jsx                 <-- ainda não consome a API do backend
        └── components/
            └── MonsterSearch.tsx   <-- chama a D&D 5e API direto do navegador
