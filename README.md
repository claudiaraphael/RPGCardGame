# 🐉 RPG Card Game

Um projeto de estudo para praticar **React** no frontend e **Node.js + TypeScript
+ Express** no backend, construindo aos poucos um jogo de cartas de RPG
inspirado em D&D 5e — com direito a busca de monstros na [D&D 5e
API](https://www.dnd5eapi.co/) de verdade.

Se você chegou aqui, este guia te coloca rodando o projeto localmente em
poucos minutos. Bora lá!

## O que tem aqui dentro

- **`frontend/`** — interface em React (Vite), com busca de monstros, cartão
  de perfil e as primeiras peças de UI do jogo.
- **`backend/`** — API em Express + TypeScript com CRUD de cartas, organizada
  em **arquitetura em camadas** (padrão de mercado para APIs Express),
  validada e documentada automaticamente via Zod (tem até Swagger!).
- Alguns scripts avulsos (`app.py`, `dnd_race_search.sh`) que são exemplos de
  como consultar a D&D 5e API fora do navegador.

## Mapa de arquitetura (backend)

O backend segue o padrão **layered architecture** (camadas) mais comum em
APIs Express/Node — cada camada só conhece a camada logo abaixo dela, o que
facilita testar, trocar peças (ex: trocar o array em memória por um banco de
verdade) e entender "onde mexer" quando for adicionar algo novo.

```
                         ┌───────────────────────┐
  requisição HTTP  ────▶ │   routes/*.routes.ts    │  define os endpoints
                         └───────────┬───────────┘
                                     │
                         ┌───────────▼───────────┐
                         │ controllers/*.controller│  traduz HTTP (req/res)
                         │          .ts            │  chama o service certo
                         └───────────┬───────────┘
                                     │
                         ┌───────────▼───────────┐
                         │  services/*.service.ts  │  regra de negócio
                         └───────────┬───────────┘
                                     │
                         ┌───────────▼───────────┐
                         │repositories/*.repository│  acesso aos dados
                         │          .ts            │  (hoje: array em memória)
                         └───────────┬───────────┘
                                     │
                              [ dados / futuro DB ]

        transversal a todas as camadas:
        ├── schemas/*.schema.ts   → Zod: validação + tipos + base OpenAPI
        ├── middlewares/*.ts      → ex: validateBody (roda antes do controller)
        └── docs/openapi.ts       → gera a doc Swagger a partir dos schemas
```

Fluxo de uma requisição, por exemplo `POST /cards`:

1. `routes/card.routes.ts` recebe a chamada e aplica `validateBody(CreateCardSchema)`
2. `controllers/card.controller.ts` lê `req.body` (já validado) e chama o service
3. `services/card.service.ts` aplica a regra de negócio (hoje é direto)
4. `repositories/card.repository.ts` grava a nova carta (hoje: no array em memória)
5. a resposta volta camada a camada até o controller, que devolve o JSON

Mapa completo de pastas em [`backend/architecture.md`](backend/architecture.md).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado 20+) e `npm`
- Opcional: Python 3 (só se quiser rodar `backend/app.py`)

## 🌟 Happy path — do zero até tudo funcionando

Se é a sua primeira vez aqui, siga esta sequência na ordem e em ~5 minutos
você vê o projeto inteiro de pé. Cada passo tem um jeito de confirmar que deu
certo antes de seguir pro próximo.

1. **Instale as dependências do backend**
   ```bash
   cd backend
   npm install
   ```
2. **Suba a API**
   ```bash
   npm run dev
   ```
   ✅ Confirma que deu certo: o terminal mostra
   `Servidor rodando em http://localhost:3000`.
3. **Veja a API viva no Swagger** — abra
   [http://localhost:3000/docs](http://localhost:3000/docs) no navegador.
   ✅ Confirma: a página lista as rotas `GET/POST/PUT/DELETE /cards`.
4. **Liste as cartas que já existem** (em outro terminal, deixe o backend rodando)
   ```bash
   curl http://localhost:3000/cards
   ```
   ✅ Confirma: retorna um JSON com "Dragão de Fogo" e "Cura Menor".
5. **Crie a sua primeira carta**
   ```bash
   curl -X POST http://localhost:3000/cards \
     -H "Content-Type: application/json" \
     -d '{"name": "Fênix Sombria", "type": "Monstro", "attack": 75}'
   ```
   ✅ Confirma: volta a carta criada com um `id` novo (status 201).
6. **Instale e suba o frontend** (em um terceiro terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   ✅ Confirma: abra [http://localhost:5173](http://localhost:5173) e a
   interface carrega, com o campo de busca de monstros visível.
7. **Busque um monstro de verdade** — no campo de busca, digite `goblin` (em
   inglês) e clique em "Search".
   ✅ Confirma: os dados do goblin aparecem na tela, vindos direto da D&D 5e API.

Chegou até aqui? 🎉 Você tem o backend, a documentação interativa, o CRUD de
cartas e o frontend rodando ao mesmo tempo. Os próximos passos naturais são
explorar `/docs` para testar as outras rotas (`GET /cards/:id`, `PUT`,
`DELETE`) e dar uma olhada no [mapa de arquitetura](#mapa-de-arquitetura-backend)
acima para entender onde cada peça mora.

## Colocando pra rodar

O projeto tem duas partes independentes — vale a pena abrir **dois
terminais**, um para cada uma.

### 1. Backend (a API)

```bash
cd backend
npm install
npm run dev
```

Isso sobe a API em **http://localhost:3000** com reload automático a cada
alteração. Dois endereços valem a visita:

- `http://localhost:3000/cards` — a API de cartas (CRUD)
- `http://localhost:3000/docs` — documentação interativa (Swagger UI), onde
  dá pra testar cada rota direto do navegador

### 2. Frontend (a interface)

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abra **http://localhost:5173** e pronto — a interface já sobe com hot reload.

> 💡 Hoje o frontend e o backend ainda não conversam entre si: a busca de
> monstros na tela consulta a D&D 5e API diretamente do navegador, e o CRUD
> de cartas do backend ainda não aparece na interface. Isso é esperado no
> estágio atual do projeto — é uma das próximas peças a encaixar!

## Experimentando a API de cartas

Com o backend rodando, você pode brincar com o CRUD direto pelo terminal:

```bash
# listar todas as cartas
curl http://localhost:3000/cards

# criar uma carta nova
curl -X POST http://localhost:3000/cards \
  -H "Content-Type: application/json" \
  -d '{"name": "Fênix Sombria", "type": "Monstro", "attack": 75}'

# buscar uma carta específica
curl http://localhost:3000/cards/1
```

Ou, mais fácil ainda, use a página `/docs` para testar tudo visualmente.

> As cartas ficam guardadas em memória — se você reiniciar o servidor
> (`npm run dev`), a lista volta ao estado inicial. Persistência em banco de
> dados é um dos próximos passos do projeto.

## Buscando um monstro

Na tela inicial do frontend há um campo de busca de monstros: digite um nome
(em inglês, como na D&D 5e API — ex: `goblin`, `adult-red-dragon`) e clique em
"Search" para ver os dados vindos direto da API pública.

Se preferir testar pelo terminal, tem um script pronto:

```bash
cd backend
./bin/dnd_race_search.sh
```

Ele pergunta o nome de uma raça de D&D e mostra a resposta da API.

## Scripts disponíveis

**Backend** (`backend/`):

| Comando | O que faz |
| --- | --- |
| `npm run dev` | roda a API com reload automático (nodemon + ts-node) |
| `npm run build` | compila o TypeScript para `dist/` |
| `npm start` | roda a versão já compilada (uso "produção") |

**Frontend** (`frontend/`):

| Comando | O que faz |
| --- | --- |
| `npm run dev` | sobe o servidor de desenvolvimento do Vite |
| `npm run build` | gera o build de produção |
| `npm run lint` | roda o ESLint |
| `npm run preview` | serve localmente o build de produção |

## Documentação extra

Tem mais detalhes espalhados pelo repositório, caso queira se aprofundar:

- `backend/architecture.md` — mapa de pastas da arquitetura em camadas do backend
- `backend/Documentation/quickstart.md` — outro guia rápido de como rodar tudo
- `backend/Documentation/documentation.md` — notas sobre a migração da API
  para Zod + TypeScript
- `frontend/documentation/D&D5e_docs.md` — anotações sobre os endpoints da
  D&D 5e API

## Onde o projeto está e para onde vai

Este é um projeto vivo de aprendizado, então tem partes ainda em construção
de propósito:

- alguns componentes do frontend (`Header`, `MonsterCard`, `Button`) ainda
  têm conteúdo fixo/placeholder;
- o backend ainda guarda os dados em memória — `seed.ts` e `database.db`
  estão reservados para quando a persistência entrar em cena;
- frontend e backend ainda não estão ligados um ao outro.

Se você quiser contribuir ou continuar o projeto, esses são ótimos pontos de
partida. Bom código! ✨
