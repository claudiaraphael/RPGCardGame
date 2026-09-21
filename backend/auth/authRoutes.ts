import { Router, type Request, type Response } from "express";
import { z } from "zod";

import { hashPassword } from "./passwordHash";
import { login } from "./authService";
import { requireAuth } from "./requireAuth";
import type { User, UserRole } from "./User";
import { userRepository } from "./userRepository";

const router = Router();

/**
 * Schemas de validação
 */
const registerSchema = z.object({
  email: z.string().email().transform((email) => email.toLowerCase().trim()),
  username: z.string().min(3).max(30).trim(),
  password: z.string().min(8).max(128),
});

const loginSchema = z.object({
  email: z.string().email().transform((email) => email.toLowerCase().trim()),
  password: z.string().min(1),
});

type PublicUser = Omit<User, "passwordHash">;

function publicUser(user: User): PublicUser {
  const { passwordHash: _passwordHash, ...safeUser } = user;
  return safeUser;
}

/**
 * POST /auth/register
 *
 * Cria um novo usuário.
 */
router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        message: "Dados inválidos",
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { email, username, password } = result.data;

    const existingEmail = await userRepository.findByEmail(email);

    if (existingEmail) {
      res.status(409).json({
        message: "Não foi possível criar o usuário",
      });
      return;
    }

    const existingUsername = await userRepository.findByUsername(username);

    if (existingUsername) {
      res.status(409).json({
        message: "Não foi possível criar o usuário",
      });
      return;
    }

    const passwordHash = await hashPassword(password);

    const user = await userRepository.create({
      email,
      username,
      passwordHash,
      role: "user" as UserRole,
      isEmailVerified: false,
    });

    res.status(201).json({
      user: publicUser(user),
    });
  } catch (error) {
    console.error("Register error:", error);

    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
});

/**
 * POST /auth/login
 *
 * Autentica um usuário e retorna os tokens JWT.
 */
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        message: "E-mail ou senha inválidos",
      });
      return;
    }

    const { email, password } = result.data;

    const user = await userRepository.findByEmail(email);

    // Mesma mensagem genérica tanto pra "e-mail não existe" quanto pra
    // "senha errada" (abaixo) — não dá pra descobrir se um e-mail está
    // cadastrado só tentando logar com ele.
    if (!user) {
      res.status(401).json({
        message: "E-mail ou senha inválidos",
      });
      return;
    }

    try {
      const tokens = await login(user, password);
      res.status(200).json({
        user: publicUser(user),
        ...tokens,
      });
    } catch {
      res.status(401).json({
        message: "E-mail ou senha inválidos",
      });
    }
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
});

/**
 * GET /auth/me
 *
 * Retorna os dados do usuário autenticado.
 */
router.get(
  "/me",
  requireAuth,
  async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.auth) {
        res.status(401).json({
          message: "Não autenticado",
        });
        return;
      }

      const user = await userRepository.findById(req.auth.sub);

      if (!user) {
        res.status(404).json({
          message: "Usuário não encontrado",
        });
        return;
      }

      res.status(200).json({
        user: publicUser(user),
      });
    } catch (error) {
      console.error("Get authenticated user error:", error);

      res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  },
);

export default router;