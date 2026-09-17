# TODO — RPGCardGame

Lista de tarefas combinadas em conversa, pra guiar os próximos passos do projeto.

Li a doc que você mandou (é só a página de intro) e completei com o restante da documentação pública da API — a estrutura é: 47 endpoints GET sob `/api`, sem autenticação, cobrindo monstros, magias, classes, raças, equipamentos, condições, feats, proficiências e regras gerais; também existe um endpoint GraphQL equivalente. Isso confirma a decisão que já está registrada no projeto: o back consome a API direto (REST), nunca o front, e cada recurso (monstro, magia, item) vira depois um "card" tipado no seu domínio.

Sobre a pergunta de fundo — skills que IA não substitui — gerenciamento de estado é uma. As outras 4 que entram nesse mesmo grupo, no contexto específico do seu projeto:

1. **Modelagem de dados/schema** — decidir que entidades existem, como se relacionam, o que normalizar vs. desnormalizar. A IA gera o `CREATE TABLE` que você pedir, mas não decide *que tabelas fazem sentido* pro seu domínio — isso exige entender o problema, não a sintaxe.
2. **Depuração sistemática** — ler um stack trace, isolar a causa por bisseção, formular hipótese e testar. É a skill que separa "copiar erro no chat" de "saber onde procurar". Fundamental e não terceirizável, porque exige um modelo mental do seu próprio sistema.
3. **Design de fronteiras/arquitetura** — decidir o que é responsabilidade do front vs. back, o que trafega pela API vs. fica local, onde o acoplamento é aceitável e onde não é. É decisão de design, não geração de código.
4. **Raciocínio sobre efeitos colaterais e ordem assíncrona** — em JS isso é crítico (event loop, promises, race conditions entre chamadas à API externa e atualização de estado). Entender *quando* algo pode dar errado por causa de ordem de execução é uma skill de raciocínio, não de sintaxe.

Essas 4 + gerenciamento de estado formam um bloco coerente: todas são sobre *decisão e diagnóstico*, não sobre produção de texto/código — é exatamente onde IA ajuda menos e onde a nota (e o aprendizado real) mora.

---

## Checklist — Skills-que-IA-não-substitui × Pilares do projeto

**1. Estruturação dos ESTADOS do jogo** → gerenciamento de estado + raciocínio assíncrono
- [ ] Mapear todos os estados possíveis de uma partida (turno do jogador, turno do bot, seleção de carta, resolução de ataque, fim de jogo) antes de escrever qualquer store
- [ ] Decidir a fonte da verdade: HP, mão, turno atual — vive no front (Zustand/Context) ou é espelhado do back a cada ação?
- [ ] Identificar pontos onde uma ação assíncrona (chamada ao back, resposta do bot) pode chegar fora de ordem e definir como o estado se protege disso
- [ ] Justificar por escrito por que escolheu Redux, Zustand ou Context (trade-off, não default)

**2. Base de dados com dados da API D&D 5e** → modelagem de dados
- [ ] Definir o schema relacional (cartas, decks, usuários, partidas) antes de codar migrations
- [ ] Decidir o que é cache da API externa vs. dado próprio da aplicação (ex.: HP atual de uma carta em jogo não é o mesmo dado que HP base do monstro na API)
- [ ] Documentar a decisão de não usar o schema pronto de terceiros e por que isso é exigência do MVP

**3. Gerador de cartas** → modelagem de dados + design de fronteiras
- [ ] Definir a transformação: dado bruto da API (monstro/magia) → objeto "carta" tipado da aplicação
- [ ] Decidir onde essa transformação acontece (só no back, nunca exposta crua ao front)
- [ ] Tratar casos de dado incompleto ou ausente vindo da API (nem todo monstro tem imagem, por exemplo)

**4. O jogo em si (UI + lógica)** → depuração sistemática + design de fronteiras
- [ ] Lógica de regras do jogo (quem pode jogar o quê, cálculo de dano) implementada e testada isoladamente da UI
- [ ] Processo de debugging documentado: pelo menos um bug real resolvido por bisseção/hipótese, não por tentativa aleatória
- [ ] Fronteira clara: UI só dispara ações e renderiza estado, nunca decide regra de jogo

---

**Texto explicativo (para colar no README):**

> Este projeto foi construído com o objetivo explícito de praticar skills que ferramentas de IA generativa não substituem: modelagem de dados, gerenciamento de estado, depuração sistemática, design de fronteiras arquiteturais e raciocínio sobre execução assíncrona. Cada decisão de design (schema do banco, escolha de gerenciador de estado, separação entre front e back) foi tomada e justificada pelo desenvolvedor antes da implementação, com uso de IA restrito a apoio pontual — nunca à decisão em si.

## 1. `seed.ts` — conexão com a D&D 5e API em TypeScript

- [ ] Ler `DND_BASE_URL` do `.env` (via `dotenv` ou `process.loadEnvFile`, a decidir)
- [ ] Fazer a requisição HTTP (fetch nativo ou axios, a decidir) equivalente ao `app.py`
- [ ] Tratar erros: falha de rede/timeout e respostas HTTP ruins (4xx/5xx)
- [ ] Validar/tipar a resposta com Zod, seguindo o mesmo padrão usado em `server.ts`
- [ ] Rodar `seed.ts` isolado (ts-node) e conferir o JSON retornado no console

## 2. Docker + PostgreSQL

- [ ] Criar `docker-compose.yml` com serviço do PostgreSQL (volume persistente + variáveis de ambiente)
- [ ] Definir variáveis de conexão no `.env` do backend (host, porta, usuário, senha, nome do banco)
- [ ] Subir o container e validar a conexão manualmente antes de mexer no código

## 3. Backend ↔ PostgreSQL

- [ ] Escolher driver/ORM (`pg` puro vs Prisma vs Drizzle) — discutir prós/contras antes de decidir
- [ ] Criar schema/tabela de `cards`
- [ ] Usar o `seed.ts` pra popular o banco com dados vindos da D&D API
- [ ] Trocar o array em memória (`cards[]`) do `server.ts` pela tabela no Postgres

## 4. Depois (sem pressa)

- [ ] Integrar o frontend com o CRUD `/cards` do backend
- [ ] Pensar em testes automatizados básicos pro backend
