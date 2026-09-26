# ==========================================================
# BACKEND — build em 2 estágios
# ==========================================================
# Estágio 1 compila o TypeScript (precisa das devDependencies: tsc, @types/*).
# Estágio 2 leva só o JS compilado + dependências de produção, pra imagem
# final ficar menor e sem ferramentas de build.
# Base "slim" (Debian/glibc) e não "alpine": better-sqlite3 e argon2 são
# módulos nativos e trazem binários pré-compilados pra glibc.
# Node 24: o código usa process.loadEnvFile() (Node >= 20.12).
#
# Build + run (rodar dentro de backend/, com o .env já preenchido):
#   docker build -t rpgcardgame-backend .
#   docker run --env-file .env -p 3000:3000 -v rpg-data:/data rpgcardgame-backend

FROM node:24-bookworm-slim AS build
WORKDIR /app

# better-sqlite3 e argon2 são módulos nativos: o npm ci abaixo compila eles
# na hora (node-gyp), e o node:24-bookworm-slim não vem com Python/toolchain
# de build por padrão — sem isso o node-gyp falha procurando "python3".
RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-bookworm-slim
ENV NODE_ENV=production
WORKDIR /app

# Este estágio roda seu próprio "npm ci --omit=dev" (não reaproveita o
# node_modules do estágio "build" porque lá tem devDependencies junto) —
# então precisa do mesmo toolchain de compilação nativa, só que descartado
# logo depois (apt-get purge) pra não engordar a imagem final.
RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci --omit=dev \
 && apt-get purge -y --auto-remove python3 make g++

COPY --from=build /app/dist ./dist

# process.loadEnvFile() (auth/, entidades-dnd/) lança erro se o arquivo .env
# não existir. Um .env vazio resolve: as variáveis reais (JWT_SECRET,
# DND_BASE_URL) entram pelo ambiente do container (--env-file / compose) e
# loadEnvFile não sobrescreve variável que já existe.
RUN touch .env

# db/connection.ts grava em dist/database.sqlite (caminho relativo ao
# __dirname). O link simbólico aponta pra /data, que vira volume — assim o
# banco sobrevive a recriar o container sem esconder o código compilado.
RUN mkdir /data && chown node:node /data /app/dist \
 && ln -s /data/database.sqlite /app/dist/database.sqlite
VOLUME /data

USER node
EXPOSE 3000
CMD ["node", "dist/src/server.js"]
