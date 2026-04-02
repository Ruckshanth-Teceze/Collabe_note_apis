import { eq } from "drizzle-orm";
import { db } from "../db.config.js";
import { users } from "../schema/index.js";
export class AuthRepository {
    async create(userData) {
        const [user] = await db.insert(users).values(userData).returning();
        return user;
    }
    async findByEmail(email) {
        const [user] = await db.select().from(users).where(eq(users.email, email));
        return user || null;
    }
    async findById(userId) {
        const [user] = await db.select().from(users).where(eq(users.id, userId));
        return user || null;
    }
}
export const authRepository = new AuthRepository();
//# sourceMappingURL=auth.repo.js.map