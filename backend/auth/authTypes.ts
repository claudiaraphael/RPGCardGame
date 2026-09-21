import type { UserRole } from "./User";

export interface AccessTokenPayload {
    sub: string; // User id
    role: UserRole;
    type: "access";    
}