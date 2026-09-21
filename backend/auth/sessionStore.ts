// ==========================================================
// SESSION STORE: guarda sessões de login no SQLite, não em memória
// ==========================================================
// express-session por padrão guarda sessão em memória (MemoryStore) — some
// tudo se o servidor reiniciar. Aqui implementamos a interface Store dele
// (get/set/destroy) usando a mesma conexão better-sqlite3 de db/connection.ts,
// sem depender de um pacote de terceiros só pra isso (a interface é pequena
// e ligar direto evita mais uma dependência não auditada).

import session from "express-session";
import { db } from "../db/connection";

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    sess TEXT NOT NULL,
    expires INTEGER NOT NULL
  );
`);

const selectStmt = db.prepare("SELECT sess, expires FROM sessions WHERE sid = ?");
const upsertStmt = db.prepare(
  "INSERT INTO sessions (sid, sess, expires) VALUES (?, ?, ?) " +
    "ON CONFLICT(sid) DO UPDATE SET sess = excluded.sess, expires = excluded.expires"
);
const deleteStmt = db.prepare("DELETE FROM sessions WHERE sid = ?");
const deleteExpiredStmt = db.prepare("DELETE FROM sessions WHERE expires < ?");

export class SqliteSessionStore extends session.Store {
  get(sid: string, callback: (err: unknown, session?: session.SessionData | null) => void): void {
    try {
      deleteExpiredStmt.run(Date.now());
      const row = selectStmt.get(sid) as { sess: string; expires: number } | undefined;
      if (!row) return callback(null, null);
      callback(null, JSON.parse(row.sess));
    } catch (err) {
      callback(err);
    }
  }

  set(sid: string, sessionData: session.SessionData, callback?: (err?: unknown) => void): void {
    try {
      const expires = sessionData.cookie.expires
        ? new Date(sessionData.cookie.expires).getTime()
        : Date.now() + 24 * 60 * 60 * 1000; // sem expiração explícita: 24h
      upsertStmt.run(sid, JSON.stringify(sessionData), expires);
      callback?.();
    } catch (err) {
      callback?.(err);
    }
  }

  destroy(sid: string, callback?: (err?: unknown) => void): void {
    try {
      deleteStmt.run(sid);
      callback?.();
    } catch (err) {
      callback?.(err);
    }
  }
}
