# TODO — RPGCardGame

Lista de tarefas combinadas em conversa, pra guiar os próximos passos do projeto.

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
