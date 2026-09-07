# No backend você tem dois scripts:

  - npm start → roda com node, uso "de produção" (precisa reiniciar manualmente a
    cada mudança)
  - npm run dev → roda com nodemon, reinicia sozinho sempre que você salva um
    arquivo .js

  Para desenvolver os dois lados ao mesmo tempo, abra dois terminais:
  ## terminal 1 (dentro de frontend/)
  npm run dev   → http://localhost:5173

  ## terminal 2 (dentro de backend/)
  npm run dev   → http://localhost:3000