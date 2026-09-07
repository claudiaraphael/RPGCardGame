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
- **`backend/`** — API em Express + TypeScript com CRUD de cartas, validado e
  documentado automaticamente via Zod (tem até Swagger!).
- Alguns scripts avulsos (`app.py`, `dnd_race_search.sh`) que são exemplos de
  como consultar a D&D 5e API fora do navegador.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado 20+) e `npm`
- Opcional: Python 3 (só se quiser rodar `backend/app.py`)

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
