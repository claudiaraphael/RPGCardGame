# to-do.md — Frontend (RPGCardGame)

Checklist montada a partir do `CLAUDE.md`. O front vive em `frontend/` (este repo; Live Server em `localhost:5500`).
Entrega da landing page: **27/set 00h**.

## Estado atual (conferido no disco)

- `index.html`: só uma tela de "Character Selection" com 3 imagens (`ch1/2/3.png`) apontando para `character1.html`… (páginas que não existem).
- `style.css`: 1 KB, estilo básico.
- `script.js`: **vazio** (0 bytes).
- `Dockerfile` + `.dockerignore` existem (255 bytes), ainda sem teste.
- Remote `origin` aponta para a string `main` (misconfigurado).

## 1. Landing page: índice de monstros (prioridade, entrega 27/set)

Consome o backend: `GET http://localhost:3000/monsters` e `GET /monsters/:index`
(que por sua vez batem na D&D API externa, sem cache). Não há rota nova.

- [ ] Decidir o layout da landing (título + grade de monstros; o que fica da tela de seleção de personagem atual?)
- [ ] `index.html`: container da lista, campo de busca/filtro, área de mensagem (carregando / erro)
- [ ] `script.js`: `fetch` de `/monsters` ao carregar a página
  - [ ] tratar estados: carregando, erro de rede, resposta vazia
  - [ ] renderizar um card por monstro (nome no mínimo)
  - [ ] usar `textContent`/`createElement` (não `innerHTML` com dado externo)
- [ ] Detalhe do monstro: ao clicar, `fetch` de `/monsters/:index` e mostrar (modal ou seção)
  - [ ] ver o shape real em `backend/to-do/documentation/dnd-full-data.json` antes de escolher campos (CR, tipo, HP, AC, imagem…)
- [ ] Busca/filtro no cliente (por nome; talvez por tipo/CR)
- [ ] `style.css`: grade responsiva dos cards, estados de hover/foco, layout mobile
- [ ] Acessibilidade básica: `alt` nas imagens, foco visível, `lang` correto (`pt-BR`, hoje está `en`)
- [ ] Definir a URL base da API em **um** lugar só (constante no topo do `script.js`) para trocar entre dev e Docker

## 2. Alinhamento com o backend

- [ ] Confirmar que o CORS em `backend/src/app.ts` inclui `localhost:5500` e `127.0.0.1:5500`
- [ ] Ver o que `GET /monsters` realmente devolve (lista de `index`/`name`/`url` ou objeto completo?) e combinar com o backend se precisar normalizar o shape (Claude cuida disso no backend, só quando o front pedir)
- [ ] Testar o front contra o backend rodando (`npm run dev` em `backend/`)

## 3. Docker do front

- [ ] Revisar o `Dockerfile` atual (`nginx:alpine` servindo os estáticos)
- [ ] `docker build` + `docker run -p 8080:80` e abrir no navegador
- [ ] Confirmar o CORS entre os dois containers (a origem muda de `:5500` para a porta do nginx → adicionar no `origin` do backend)
- [ ] Decidir a URL do backend vista pelo navegador (`localhost:3000`, já que o fetch roda no navegador, não no container)
- [ ] Opcional: `docker compose` subindo front + back juntos

## 4. Git / entrega (com a autora)

- [ ] Corrigir o remote `origin` (hoje é `main`) e publicar em repositório público (exigência do requerimento)
- [ ] Commits e push: sempre feitos pela autora
- [ ] Conferir que `node_modules` e `.env` não vão pro git
- [ ] Atualizar o `CLAUDE.md` do front quando a landing estiver pronta (hoje ele é cópia do do backend)

## 5. Depois da landing (fora do escopo de 27/set)

- [ ] Telas de login/registro (JWT no header `Authorization: Bearer <token>`, backend já pronto)
- [ ] Seleção de personagem de verdade (substituir os `character1..3.html` inexistentes)
- [ ] Geração/visualização de cartas (depende da modelagem em `auth/User.ts` e `Systems/`, trabalho da autora)
- [ ] Documentação interativa/vídeo de entrega

## Lembretes

- Regra da disciplina: **≥ 50% do código é da autora**. Este arquivo é só o mapa; a implementação do HTML/CSS/JS da landing fica com ela, e Claude revisa/explica.
- Comentários de código em português, com o *porquê* das escolhas.
