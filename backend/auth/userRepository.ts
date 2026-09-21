import { randomUUID } from "node:crypto";
import { db } from "../db/connection";
import type { User, UserRole } from "./User";

type UserRow = {
  id: string;
  email: string;
  username: string;
  password_hash: string;
  role: UserRole;
  is_email_verified: number;
  created_at: string;
  updated_at: string;
};

export interface CreateUserInput {
  email: string;
  username: string;
  passwordHash: string;
  role?: UserRole;
  isEmailVerified?: boolean;
}

export interface UpdateUserInput {
  email?: string;
  username?: string;
  passwordHash?: string;
  role?: UserRole;
  isEmailVerified?: boolean;
}

function mapRowToUser(row: UserRow): User {
  return {
    id: row.id,
    email: row.email,
    username: row.username,
    passwordHash: row.password_hash,
    role: row.role,
    isEmailVerified: Boolean(row.is_email_verified),
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('user', 'admin')),
    is_email_verified INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

export const userRepository = {
  findAll(): User[] {
    const rows = db
      .prepare(`
        SELECT *
        FROM users
        ORDER BY created_at DESC
      `)
      .all() as UserRow[];

    return rows.map(mapRowToUser);
  },

  findById(id: string): User | null {
    const row = db
      .prepare(`
        SELECT *
        FROM users
        WHERE id = ?
      `)
      .get(id) as UserRow | undefined;

    return row ? mapRowToUser(row) : null;
  },

  findByEmail(email: string): User | null {
    const row = db
      .prepare(`
        SELECT *
        FROM users
        WHERE email = ?
      `)
      .get(email.toLowerCase().trim()) as UserRow | undefined;

    return row ? mapRowToUser(row) : null;
  },

  findByUsername(username: string): User | null {
    const row = db
      .prepare(`
        SELECT *
        FROM users
        WHERE username = ?
      `)
      .get(username.trim()) as UserRow | undefined;

    return row ? mapRowToUser(row) : null;
  },

  create(input: CreateUserInput): User {
    const id = randomUUID();
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO users (
        id,
        email,
        username,
        password_hash,
        role,
        is_email_verified,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      input.email.toLowerCase().trim(),
      input.username.trim(),
      input.passwordHash,
      input.role ?? "user",
      input.isEmailVerified ? 1 : 0,
      now,
      now,
    );

    const created = this.findById(id);

    if (!created) {
      throw new Error("Failed to create user");
    }

    return created;
  },

  update(id: string, input: UpdateUserInput): User | null {
    const existing = this.findById(id);

    if (!existing) {
      return null;
    }

    const nextEmail = input.email?.toLowerCase().trim() ?? existing.email;
    const nextUsername = input.username?.trim() ?? existing.username;
    const nextPasswordHash =
      input.passwordHash ?? existing.passwordHash;
    const nextRole = input.role ?? existing.role;
    const nextIsEmailVerified =
      input.isEmailVerified ?? existing.isEmailVerified;

    const now = new Date().toISOString();

    db.prepare(`
      UPDATE users
      SET
        email = ?,
        username = ?,
        password_hash = ?,
        role = ?,
        is_email_verified = ?,
        updated_at = ?
      WHERE id = ?
    `).run(
      nextEmail,
      nextUsername,
      nextPasswordHash,
      nextRole,
      nextIsEmailVerified ? 1 : 0,
      now,
      id,
    );

    return this.findById(id);
  },

  delete(id: string): boolean {
    const result = db
      .prepare(`
        DELETE FROM users
        WHERE id = ?
      `)
      .run(id);

    return result.changes > 0;
  },

  count(): number {
    const result = db
      .prepare(`
        SELECT COUNT(*) as count
        FROM users
      `)
      .get() as { count: number };

    return result.count;
  },
};