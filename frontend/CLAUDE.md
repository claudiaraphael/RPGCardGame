# CLAUDE.md (frontend)

Guia de contexto só do front. O contexto geral do projeto (regras da
disciplina, backend, D&D API, Docker do backend) está em `../CLAUDE.md`.

## O que é

Front do **RPGCardGame** (MVP de disciplina, jogo de cartas de RPG inspirado
em D&D 5e). HTML/CSS/JS puro, **sem bundler**, servido em dev pela extensão
Live Server do VS Code em `localhost:5500`/`127.0.0.1:5500`. Consome o backend
em `http://localhost:3000`.

**Regra da disciplina: pelo menos 50% do código é da autora.** Prefira
explicar, revisar e apontar caminhos em vez de entregar HTML/CSS/JS prontos,
a menos que ela peça explicitamente. Comentários em português, com o *porquê*
de cada escolha.

## Estado atual

- `index.html`: tela de "Character Selection" com 3 imagens (`ch1/2/3.png`)
  ligadas a `character1..3.html`, que não existem — ainda a base, vai ser
  substituída pela nova UI que a autora está gerando.
- `style.css` / `script.js` (vazio): da tela acima.
- **Índice de monstros: implementado**, em duas versões — `monstros.html`/
  `.js`/`.css` (tabela simples + busca) e `indexMonstros/monster-index.html`
  + `monster-api.js` (versão completa: busca, filtros, statblock inteiro).
  Ambas consomem `GET /monsters`/`GET /monsters/:index` do backend
  (`http://localhost:3000`), que batem na D&D API externa a cada request —
  não há chamada direta do front pra D&D API em nenhum lugar.
- **Login/tickets: em construção** (pedido da autora) — `login.html`+
  `login.js` (formulário simples, guarda o JWT em `localStorage`) e
  `tickets.html`+`tickets.js` (criar/ver os próprios tickets), consumindo
  `/auth/login`, `/auth/register` e `/tickets` do backend.
- `Dockerfile` (`nginx:alpine` copiando os estáticos) + `.dockerignore`:
  ainda não testados — hoje só copia os arquivos antigos
  (`index.html`/`script.js`/`style.css`/`ch1-3.png`), precisa ser
  atualizado quando a nova UI estiver pronta pra incluir as páginas novas.
- `node_modules/` aqui dentro é residual — ignore.
- Checklist de próximos passos: `to-do.md`.

## Nova UI (em andamento pela autora)

A autora está gerando uma nova UI pro front, que vai substituir/absorver as
páginas atuais. Quando ela chegar: atualizar esta seção, o `Dockerfile`
(hoje só lista arquivos que não vão existir mais) e a whitelist de CORS em
`../backend/src/app.ts` se a origem/porta mudar.

## Convenções e segurança

- URL base da API em **uma** constante no topo do `script.js`.
- Dado vindo da API vai pro DOM com `textContent`/`createElement`, nunca
  `innerHTML`.
- Autenticação (fase futura): JWT no header `Authorization: Bearer <token>`,
  não em cookie.
- O CORS do backend usa lista fixa de origens; se o front mudar de origem
  (ex: container nginx), a origem nova precisa entrar em `../backend/src/app.ts`.
- Não commite `.env`, tokens ou senhas.

## Docker

```bash
docker build -t rpgcardgame-frontend .
docker run -p 8080:80 rpgcardgame-frontend
```

Lembrete: o `fetch` roda no navegador, então a URL do backend é
`localhost:3000` mesmo com o front em container.

## Ao usar Claude Code aqui

- Mudanças pequenas, sem framework, bundler ou abstrações "de produção".
- Sem testes automatizados: descreva no resumo o que foi verificado
  manualmente (ex: abrir no Live Server com o backend rodando).
- **Git (commit e push) é com a autora.** Nunca rode `git push` sem pedido
  explícito na mesma conversa.
