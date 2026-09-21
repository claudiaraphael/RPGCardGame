import jwt from "jsonwebtoken";
import { verifyPassword } from "./passwordHash";
import type { User } from "./User";

// Mesmo padrão de seed.ts/entidades-dnd/dnd-api-client.ts: cada módulo que
// lê process.env carrega o .env no próprio topo, em vez de depender da
// ordem de import de quem importa este arquivo.
process.loadEnvFile();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}
// Reatribuído a uma const já tipada como string: o TS não propaga a
// checagem acima pra dentro de createToken() (closure definida abaixo),
// então sem isso JWT_SECRET continuaria "string | undefined" ali dentro.
const jwtSecret: string = JWT_SECRET;

export interface AuthTokens {
  accessToken: string;
}

export function createTokens(user: User): AuthTokens {
  const accessToken = jwt.sign(
    {
      sub: user.id,
      role: user.role,
      type: "access",
    },
    jwtSecret,
    {
      expiresIn: "15m",
      issuer: "rpgcardgame-api",
      audience: "rpgcardgame-frontend",
    },
  );

  return { accessToken };
}

export async function login(
  user: User | null,
  password: string,
): Promise<AuthTokens> {
  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const validPassword = await verifyPassword(user.passwordHash, password);

  if (!validPassword) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return createTokens(user);
}
