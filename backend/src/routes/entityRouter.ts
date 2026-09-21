// ==========================================================
// FÁBRICA DE ROTAS: GET / e GET /:index pra qualquer entidade da D&D API
// ==========================================================
// As 24 entidades em entidades-dnd/schemas/ seguem sempre o mesmo par de
// funções (getXList / getXByIndex, ambas assíncronas — ver routes/index.ts
// pro porquê). Em vez de repetir o mesmo roteador 24 vezes, essa fábrica
// monta um Router genérico a partir dessas duas funções.

import { Router, Request, Response } from "express";

type ListFn<TSummary> = () => Promise<TSummary[]>;
type ByIndexFn<TItem> = (index: string) => Promise<TItem>;

export function makeEntityRouter<TSummary, TItem>(
  getList: ListFn<TSummary>,
  getByIndex: ByIndexFn<TItem>
): Router {
  const router = Router();

  router.get("/", async (_req: Request, res: Response) => {
    try {
      const items = await getList();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(502).json({ error: "Falha ao consultar a D&D API" });
    }
  });

  router.get("/:index", async (req: Request, res: Response) => {
    try {
      // encodeURIComponent: o :index vem de fora (URL do cliente), nunca
      // deve ser interpolado cru num caminho de outra requisição HTTP.
      const index = encodeURIComponent(String(req.params.index));
      const item = await getByIndex(index);
      res.json(item);
    } catch (error) {
      res.status(404).json({ error: "Recurso não encontrado" });
    }
  });

  return router;
}
