meu-projeto-dnd/
├── backend/                  <-- Seu ambiente Node.js
│   ├── dnd_game.db           <-- O banco de dados gerado
│   ├── seed.js               <-- O script separado abaixo 🚀
│   ├── server.js             <-- Sua API Express que serve o React
│   └── package.json
└── frontend/                 <-- Seu ambiente React
    ├── src/
    │   ├── App.tsx           <-- Apenas lê os dados do server.js via fetch()
