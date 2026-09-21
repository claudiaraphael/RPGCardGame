# Notas pra quando os testes entrarem

Ainda não existe nenhum teste automatizado neste projeto (`npm test` só
imprime um erro proposital). Esta pasta guarda anotações pra revisar quando
chegar a hora de configurar testes de verdade — não tem código de teste
aqui ainda.

## Por que `app.ts` e `server.ts` são arquivos separados

- **`app.ts`** define o *comportamento* do servidor: monta os middlewares
  (CORS, `express.json`), registra as rotas e o error handler. Ele exporta
  o `app` do Express como um objeto comum — **nunca chama `.listen()`**.
- **`server.ts`** define *onde/como ele roda*: só importa esse `app` e o
  liga numa porta (`app.listen(PORT, ...)`).

Essa separação existe por três motivos:

1. **Testes sem porta.** Com uma lib como `supertest`, dá pra importar
   `app` direto e simular requisições HTTP contra ele sem precisar abrir
   um servidor de verdade. Sem isso, cada teste teria que subir e derrubar
   um processo numa porta real — lento e sujeito a conflito de porta
   quando os testes rodam em paralelo.
2. **Reuso.** Se um dia for preciso rodar o mesmo `app` em outro contexto
   (função serverless, script interno que só quer bater numa rota), dá
   pra importar só o `app`, sem carregar a lógica de "subir servidor".
3. **Responsabilidade única.** Cada arquivo muda por um motivo diferente:
   trocar a porta ou adicionar HTTPS mexe em `server.ts`; adicionar rota
   ou middleware mexe em `app.ts`. Eles não se pisam.

Esse padrão já existia no código de referência antigo (ver
`backend/to-do/documentation/codigo-referencia-antigo.md`, comentário de
`app.ts`: *"Separado do server.ts para o app poder ser testado/importado
sem precisar necessariamente subir um servidor HTTP"*) — foi mantido ao
reconstruir o esqueleto em `backend/src/`.

## Quando for configurar os testes

O caminho natural pra aproveitar essa separação é:

```ts
import request from "supertest";
import app from "../src/app"; // importa o app, sem subir servidor

test("GET /spells responde 200", async () => {
  const res = await request(app).get("/spells");
  expect(res.status).toBe(200);
});
```

Isso ainda não foi instalado nem decidido (framework de teste, se vai ser
Jest/Vitest, etc.) — fica pra quando essa etapa for priorizada no
`to-do/todo.md`.
