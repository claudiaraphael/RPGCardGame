// ==========================================================
// MIDDLEWARE: valida req.body contra um schema Zod
// ==========================================================
// Se falhar, responde 400 com os detalhes do erro; se passar, segue
// em frente e substitui req.body pelos dados já validados (e tipados).

import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validateBody(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: z.flattenError(result.error) });
    }
    req.body = result.data;
    next();
  };
}
