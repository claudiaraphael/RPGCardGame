# TODO — RPGCardGame (Roadmap Scrum)

**Prazo:** entrega até 27/set às 00h. Início em 18/set. Trabalho solo.
**Regra:** pelo menos 50% do código feito à mão. Marcação: 🖐 = você, 🤖 = Claude, 🤝 = dividido.
**Referência dos requisitos:** `Requerimento_MVP.pdf` (mesma pasta).

## Arquitetura (Cenário 1 do PDF)

- **Interface** (módulo principal): HTML/CSS/JS, repo `RPGCardGame-frontend`.
- **API secundária**: Node/TS + SQLite, este repo. O PDF exige Python só para a API *principal*.
- **API externa**: D&D 5e API. Gratuita, sem cadastro. O back consome e grava no SQLite; o front nunca chama a API externa.

## Requisitos do PDF que guiam tudo

- Front chama 4+ rotas, com **GET, POST, PUT e DELETE** (−0,5 pt por método ausente).
- API com 4+ rotas REST.
- **Dockerfile** em cada componente (−1,0 no front, −0,5 na API se faltar). Compose, se houver, na raiz do repo do front.
- **README** de cada módulo, com instalação e **fluxograma da arquitetura** (imagem).
- Documentar a API externa: licença, cadastro e rotas usadas.
- Repos **públicos e separados**, com nomes em boas práticas.
- Criatividade (1 pt): filtros, ordenação, paginação e feedback visual.
- **Vídeo de até 6 min** com 5 blocos: objetivo, arquitetura, API externa, API secundária via Docker, front via Docker. −2,0 se não entregar; até −0,4 por bloco ausente.

## Decisão sobre o código de referência

Código antigo em `.to-do/documentation/codigo-referencia-antigo.md`.

| Fica | Sai |
| --- | --- |
| Esqueleto Express (app, server, error handler) | CRUD de `/cards` em memória |
| Padrão Zod (schema + `z.infer`) | Postgres e Docker Compose com Postgres |
| Cliente axios e schemas da D&D API | Dependências não usadas |
| **Swagger** (o vídeo pede interação com todas as rotas) | |

## Backlog (≈64 pts, ≈6 pts/dia)

| # | Tarefa | Pts | Quem | Por quê |
| --- | --- | --- | --- | --- |
| S0 | Escopo das cartas: tipos, campos, o que fica de fora | 2 | 🤝 Claude levanta, você decide | Decisão de design é sua |
| S1 | Estados das entidades (Personagem, Monstro, Carta, Deck, Mão, Combate) com schemas Zod | 5 | 🖐 você desenha, Claude revisa | Modelagem é o aprendizado central e destrava o resto |
| S2 | Servidor Express a partir do código de referência | 3 | 🤖 | Boilerplate já conhecido |
| S3 | SQLite (better-sqlite3): conexão e tabelas | 3 | 🤝 Claude faz a conexão, você escreve as tabelas | As tabelas seguem seus estados de S1 |
| S4 | Seed: D&D API → SQLite (spells, monsters, classes, equipment) | 5 | 🤝 Claude faz paginação e retry, você faz `spells` de ponta a ponta | Você aprende o padrão, o resto copia |
| S5 | Rotas: personagem, monstro, cartas, `deck/draw`, `dado/rolar`, PUT e DELETE | 6 | 🤝 você faz `draw`, `dado`, PUT e DELETE; Claude faz as leituras | Lógica de jogo é sua, leitura é repetitiva |
| S6 | Gerador de cartas: templates que puxam atributos do JSON | 8 | 🖐 você faz templates e gerador, Claude faz fixtures | É o coração do jogo |
| S7 | Front: container do jogo, menu do personagem (stats e deck), deck com compra por clique | 5 | 🤝 você faz a lógica, Claude faz o CSS | CSS não ensina nada novo |
| S8 | Fetch layer e botão de comprar carta | 3 | 🖐 | Raciocínio assíncrono |
| S9 | Botão de rolar o dado e interface do resultado | 2 | 🖐 | Tarefa pequena, boa para ganhar ritmo |
| S10 | Primeira mão e combate: zerar o HP do monstro (vitória e derrota) | 8 | 🖐 você faz a lógica, Claude caça bugs | Gerenciamento de estado |
| S11 | Teste manual contra o checklist do PDF e ajustes finais | 3 | 🤖 | Você só confere |
| S12 | Dockerfile do backend e do frontend, testados via `docker run` | 3 | 🤖 | Infra sem aprendizado central |
| S13 | READMEs, fluxograma da arquitetura, seção da API externa | 3 | 🤖 escreve, 🖐 revisa | Exigência do PDF |
| S14 | Roteiro, gravação e edição do vídeo (≤6 min) | 5 | 🖐 grava, 🤖 faz o roteiro | Você precisa explicar o próprio código |

## Cronograma

| Dia | Foco | Tarefas |
| --- | --- | --- |
| 18/set | Fundamentos | S0, início de S1 |
| 19/set | Estados e servidor | fim de S1, S2 |
| 20/set | Dados e Docker | S3, início de S4, Dockerfile do backend (parte de S12) |
| 21/set | Dados | fim de S4, S5 |
| 22/set | Cartas | S6 (início) |
| 23/set | Cartas e front | fim de S6, início de S7 |
| 24/set | Front | fim de S7, S8, S9 |
| 25/set | Combate e Docker | S10, Dockerfile do front, tudo rodando em Docker |
| 26/set | Entrega | S11, S13, S14, **gravação do vídeo e envio** |
| 27/set | Folga | só correções, sem funcionalidade nova. Prazo: meia-noite. |

## Depois do MVP (só se sobrar tempo)

- Mais tipos de carta, raridade e efeitos de status.
- Vários monstros ou uma dungeon com salas.
- Animações, sons e uso do dado na resolução dos ataques.
- Testes automatizados básicos para o backend.

---

## Checklist de aprendizado (skills que IA não substitui)

Estas decisões devem ser suas e justificadas por escrito. Cada bloco aponta para a tarefa do backlog onde ele é resolvido.

**Estados do jogo** (S1, S10): gerenciamento de estado + raciocínio assíncrono
- [ ] Mapear todos os estados de uma partida (turno do jogador, turno do monstro, seleção de carta, resolução de ataque, fim de jogo) antes de escrever qualquer store
- [ ] Decidir a fonte da verdade: HP, mão e turno vivem no front ou são espelhados do back a cada ação?
- [ ] Identificar onde uma ação assíncrona pode chegar fora de ordem e como o estado se protege disso
- [ ] Justificar por escrito o gerenciador de estado escolhido (trade-off, não default)

**Base de dados** (S3, S4): modelagem de dados
- [ ] Definir o schema relacional (cartas, decks, personagens, partidas) antes de escrever as tabelas
- [ ] Decidir o que é cache da API externa e o que é dado próprio (HP atual de uma carta em jogo ≠ HP base do monstro na API)
- [ ] Documentar por que o schema é próprio e não um pronto de terceiros (exigência do MVP)

**Gerador de cartas** (S6): modelagem de dados + design de fronteiras
- [ ] Definir a transformação: dado bruto da API → objeto "carta" tipado
- [ ] Decidir onde ela acontece (só no back, nunca exposta crua ao front)
- [ ] Tratar dado incompleto ou ausente vindo da API (nem todo monstro tem imagem)

**O jogo em si** (S7 a S10): depuração sistemática + design de fronteiras
- [ ] Regras (quem joga o quê, cálculo de dano) implementadas e testadas isoladamente da UI
- [ ] Documentar pelo menos um bug real resolvido por bisseção/hipótese
- [ ] Fronteira clara: a UI só dispara ações e renderiza estado, nunca decide regra de jogo

**Texto explicativo (para colar no README):**

> Este projeto foi construído com o objetivo explícito de praticar skills que ferramentas de IA generativa não substituem: modelagem de dados, gerenciamento de estado, depuração sistemática, design de fronteiras arquiteturais e raciocínio sobre execução assíncrona. Cada decisão de design (schema do banco, escolha de gerenciador de estado, separação entre front e back) foi tomada e justificada pelo desenvolvedor antes da implementação, com uso de IA restrito a apoio pontual — nunca à decisão em si.

---

## Nota sobre o `seed.ts` (S4)

- [ ] Ler `DND_BASE_URL` do `.env` (já feito com `process.loadEnvFile`)
- [ ] Tratar erros: falha de rede/timeout e respostas 4xx/5xx
- [ ] Validar a resposta com Zod (padrão dos schemas em `entidades-dnd/schemas/`)
- [ ] Gravar no SQLite em vez de só imprimir no console
- [ ] Usar `encodeURIComponent` ao montar caminhos com entrada de usuário
