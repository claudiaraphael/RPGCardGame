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
  ligadas a `character1..3.html`, que não existem.
- `style.css`: estilo básico.
- `script.js`: vazio.
- `Dockerfile` (`nginx:alpine` copiando os estáticos) + `.dockerignore`:
  ainda não testados.
- `node_modules/` aqui dentro é residual — ignore.
- Checklist de próximos passos: `to-do.md`.

## Prioridade: landing page com índice de monstros (entrega 27/set 00h)

- Consome `GET /monsters` e `GET /monsters/:index` do backend, que batem na
  D&D API externa a cada request (não leem do SQLite). **Não há rota nova.**
- Shape real dos dados: `../backend/to-do/documentation/dnd-full-data.json`.
- Se o shape precisar ser normalizado, isso é feito no backend (nas rotas),
  não no front.

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
