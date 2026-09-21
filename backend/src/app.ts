// ==========================================================
// APP EXPRESS: monta middlewares globais e rotas
// ==========================================================
// Reconstrução do esqueleto que existia antes da faxina (ver
// to-do/documentation/codigo-referencia-antigo.md) — mesmo padrão
// app/server separados, mas sem o CRUD de /cards em memória: as rotas
// agora servem dados reais da D&D API, já validados pelos schemas Zod
// de entidades-dnd/schemas/, e a sessão de login persiste no SQLite via
// auth/sessionStore.ts (ver esse arquivo pro porquê de não usar o
// MemoryStore padrão do express-session).

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import session from "express-session";
import entityRoutes from "./routes";
import { SqliteSessionStore } from "../auth/sessionStore";

process.loadEnvFile();
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET) {
  throw new Error("SESSION_SECRET não está definida (ver backend/.env)");
}

const app = express();

// Origem explícita (regra do CLAUDE.md: nunca "origin: true"/"*" numa API
// que vai ganhar POST/PUT/DELETE). O front (RPGCardGame-frontend) roda em
// dev pela extensão Live Server do VS Code, que serve em 127.0.0.1:5500 ou
// localhost:5500 dependendo de como o VS Code está configurado.
// credentials: true é obrigatório pra sessão por cookie funcionar entre
// origens diferentes (front na 5500, API na 3000) — junto com isso, o CORS
// não pode usar "*", só a lista explícita acima (já era o caso).
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    credentials: true,
  })
);

app.use(express.json({ limit: "100kb" }));

app.use(
  session({
    store: new SqliteSessionStore(),
    secret: SESSION_SECRET,
    resave: false,
    // saveUninitialized: false -> só grava sessão no banco quando algo é
    // escrito nela (ex: login bem-sucedido), não numa visita qualquer.
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      // "lax" funciona aqui porque localhost:5500 e localhost:3000 são
      // origens diferentes mas o mesmo "site" (mesmo domínio registrável,
      // só porta diferente) — não precisa de "none"/secure (que exigiria
      // HTTPS) pra esse cenário de dev local.
      sameSite: "lax",
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, // 24h
    },
  })
);

app.use(entityRoutes);

// Rota não mapeada.
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

// Error handler central: nunca expõe stack trace pro cliente (regra do CLAUDE.md).
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Erro interno do servidor" });
});

export default app;
