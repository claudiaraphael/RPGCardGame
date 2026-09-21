export type UserRole = "user" | "admin";

import Date from 'Date';

const { string } = require("zod");
const id = require("zod/v4/locales/id.cjs");

export interface User {
    id: string;
    email: string;
    passwordHash: string;
    username: string;
    role: UserRole;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}




/*
const Party(Party, Character) {
        char00: "?",
    }

let Character {
        id: "",
        name: string,
        equipment: string,
        hat: string,
        pants: string,
        shoes: string,

    }
*/