// ==========================================================
// APP EXPRESS: monta middlewares globais e rotas
// ==========================================================
// Reconstrução do esqueleto que existia antes da faxina (ver
// to-do/documentation/codigo-referencia-antigo.md) — mesmo padrão
// app/server separados, mas sem o CRUD de /cards em memória: as rotas
// agora servem dados reais da D&D API, já validados pelos schemas Zod
// de entidades-dnd/schemas/. SQLite (S3) ainda não existe, então cada
// chamada bate direto na D&D API por trás.

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import entityRoutes from "./routes";

const app = express();

// Origem explícita (regra do CLAUDE.md: nunca "origin: true"/"*" numa API
// que vai ganhar POST/PUT/DELETE). O front (RPGCardGame-frontend) roda em
// dev pela extensão Live Server do VS Code, que serve em 127.0.0.1:5500 ou
// localhost:5500 dependendo de como o VS Code está configurado.
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  })
);

app.use(express.json({ limit: "100kb" }));

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
