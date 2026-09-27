// ==========================================================
// ROTAS: CRUD de personagem (placeholder)
// ==========================================================
// Mesmo padrão de auth/authRoutes.ts. Todas as rotas exigem login
// (requireAuth) e um usuário só acessa os próprios personagens — nunca
// confiamos num "userId" vindo do corpo da requisição, só do token JWT
// (req.auth.sub), senão um usuário poderia ler/editar personagem de outro
// só trocando um campo do body.

import { Router, type Request, type Response } from "express";
import { requireAuth } from "../auth/requireAuth";
import { personagemRepository } from "./personagemRepository";
import { personagemInputSchema, personagemUpdateSchema } from "./personagemSchema";

const router = Router();

router.use(requireAuth);

/**
 * POST /personagens
 */
router.post("/", (req: Request, res: Response): void => {
  const result = personagemInputSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      message: "Dados inválidos",
      errors: result.error.flatten().fieldErrors,
    });
    return;
  }

  const personagem = personagemRepository.create(req.auth!.sub, result.data);
  res.status(201).json({ personagem });
});

/**
 * GET /personagens
 *
 * Lista só os personagens do usuário autenticado.
 */
router.get("/", (req: Request, res: Response): void => {
  const personagens = personagemRepository.findAllByUser(req.auth!.sub);
  res.status(200).json({ personagens });
});

/**
 * GET /personagens/:id
 */
router.get("/:id", (req: Request, res: Response): void => {
  const id = String(req.params.id);
  const personagem = personagemRepository.findById(id);

  if (!personagem || personagem.userId !== req.auth!.sub) {
    res.status(404).json({ message: "Personagem não encontrado" });
    return;
  }

  res.status(200).json({ personagem });
});

/**
 * PUT /personagens/:id
 */
router.put("/:id", (req: Request, res: Response): void => {
  const id = String(req.params.id);
  const existing = personagemRepository.findById(id);

  if (!existing || existing.userId !== req.auth!.sub) {
    res.status(404).json({ message: "Personagem não encontrado" });
    return;
  }

  const result = personagemUpdateSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      message: "Dados inválidos",
      errors: result.error.flatten().fieldErrors,
    });
    return;
  }

  const personagem = personagemRepository.update(id, result.data);
  res.status(200).json({ personagem });
});

/**
 * DELETE /personagens/:id
 */
router.delete("/:id", (req: Request, res: Response): void => {
  const id = String(req.params.id);
  const existing = personagemRepository.findById(id);

  if (!existing || existing.userId !== req.auth!.sub) {
    res.status(404).json({ message: "Personagem não encontrado" });
    return;
  }

  personagemRepository.delete(id);
  res.status(204).send();
});

export default router;
