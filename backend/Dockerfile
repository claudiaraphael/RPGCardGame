# ==========================================================
# BACKEND — build em 2 estágios
# ==========================================================
# Estágio 1 compila o TypeScript (precisa das devDependencies: tsc, @types/*).
# Estágio 2 leva só o JS compilado + dependências de produção, pra imagem
# final ficar menor e sem ferramentas de build.
# Base "slim" (Debian/glibc) e não "alpine": better-sqlite3 e argon2 são
# módulos nativos e trazem binários pré-compilados pra glibc.
# Node 24: o código usa process.loadEnvFile() (Node >= 20.12).

FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-bookworm-slim
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
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
