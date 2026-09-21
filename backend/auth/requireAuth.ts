import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import type { AccessTokenPayload } from "./authTypes";

declare global {
  namespace Express {
    interface Request {
      auth?: AccessTokenPayload;
    }
  }
}

process.loadEnvFile();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}
// Ver authService.ts pro porquê desse passo (TS não narrowing dentro de closure).
const jwtSecret: string = JWT_SECRET;

function isAccessTokenPayload(
  payload: string | JwtPayload,
): payload is JwtPayload & AccessTokenPayload {
  return (
    typeof payload !== "string" &&
    typeof payload.sub === "string" &&
    (payload.role === "user" || payload.role === "admin") &&
    payload.type === "access"
  );
}

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authorization = req.headers.authorization;
  const [scheme, token] = authorization?.split(" ") ?? [];

  if (scheme?.toLowerCase() !== "bearer" || !token) {
    res.status(401).json({
      message: "Token não informado",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    if (!isAccessTokenPayload(decoded)) {
      res.status(401).json({
        message: "Token inválido",
      });
      return;
    }

    req.auth = {
      sub: decoded.sub,
      role: decoded.role,
      type: decoded.type,
    };

    next();
  } catch {
    res.status(401).json({
      message: "Token inválido ou expirado",
    });
  }
}