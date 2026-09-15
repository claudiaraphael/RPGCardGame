// ==========================================================
// ROUTES: mapeia URL + método HTTP para um controller
// ==========================================================
// Sem lógica aqui — só "quando bater em X, chama a função Y",
// aplicando o middleware de validação onde for preciso.

import { Router } from "express";
import * as cardController from "../controllers/card.controller";
import { validateBody } from "../middlewares/validateBody";
import { CreateCardSchema, UpdateCardSchema } from "../schemas/card.schema";

const router = Router();

router.get("/", cardController.listCards);
router.get("/:id", cardController.getCard);
router.post("/", validateBody(CreateCardSchema), cardController.createCard);
router.put("/:id", validateBody(UpdateCardSchema), cardController.updateCard);
router.delete("/:id", cardController.deleteCard);

export default router;
