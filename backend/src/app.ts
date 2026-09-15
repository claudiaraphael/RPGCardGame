// ==========================================================
// APP EXPRESS: monta middlewares globais, rotas e documentação
// ==========================================================
// Separado do server.ts para o app poder ser testado/importado sem
// precisar necessariamente subir um servidor HTTP.

import express from "express";
import swaggerUi from "swagger-ui-express";
import cardRoutes from "./routes/card.routes";
import { generateOpenApiDocument } from "./docs/openapi";

const app = express();

app.use(express.json());

// Página de documentação interativa, equivalente ao /docs do FastAPI.
app.use("/docs", swaggerUi.serve, swaggerUi.setup(generateOpenApiDocument()));

app.use("/cards", cardRoutes);

export default app;
