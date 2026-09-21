// ==========================================================
// APP EXPRESS: monta middlewares globais e rotas
// ==========================================================
// Reconstrução do esqueleto que existia antes da faxina (ver
// to-do/documentation/codigo-referencia-antigo.md) — mesmo padrão
// app/server separados, mas sem o CRUD de /cards em memória: as rotas
// agora servem dados reais da D&D API, já validados pelos schemas Zod
// de entidades-dnd/schemas/. Autenticação é por JWT (auth/authRoutes.ts),
// não por sessão — o cliente manda "Authorization: Bearer <token>" em
// cada request, não tem cookie de sessão envolvido.

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import entityRoutes from "./routes";
import authRoutes from "../auth/authRoutes";

const app = express();

// Origem explícita (regra do CLAUDE.md: nunca "origin: true"/"*" numa API
// que vai ganhar POST/PUT/DELETE). O front (RPGCardGame-frontend) roda em
// dev pela extensão Live Server do VS Code, que serve em 127.0.0.1:5500 ou
// localhost:5500 dependendo de como o VS Code está configurado. Sem
// "credentials: true" porque JWT não usa cookie — o token vai no header
// Authorization, então não precisa (nem faz sentido) CORS com credenciais.
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  })
);

app.use(express.json({ limit: "100kb" }));

app.use("/auth", authRoutes);
app.use(entityRoutes);

// Rota não mapeada.
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

// Error handler central: nunca expõe stack trace ao cliente (regra do CLAUDE.md).
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Erro interno do servidor" });
});

export default app;
