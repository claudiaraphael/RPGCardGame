Resumo do que mudou:

  - Zod substitui o swagger-jsdoc: cada schema (CardSchema, CreateCardSchema,
    UpdateCardSchema) é definido uma única vez e serve para três coisas — validar o
    req.body, gerar o tipo TypeScript (z.infer) e gerar a documentação OpenAPI.
    Nada duplicado.
  - Projeto migrado para TypeScript (server.ts + tsconfig.json), com express, zod e
    @asteasolutions/zod-to-openapi tipados.
  - Scripts do package.json:
    - npm run dev → nodemon + ts-node, roda o .ts direto e reinicia sozinho
    - npm run build → compila para dist/
    - npm start → roda a versão compilada (uso "produção")
  - POST e PUT agora validam o corpo da requisição automaticamente via
    validateBody(schema) — se você mandar um campo errado (ex: attack como texto),
    a API responde 400 com o detalhe do erro, sem você escrever if manual.