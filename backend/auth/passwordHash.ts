import argon from "argon2";

export async function hashPassword(password: string) {
    return argon2.hash(password);
}

