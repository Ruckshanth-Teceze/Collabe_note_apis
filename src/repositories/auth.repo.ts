import { eq } from "drizzle-orm";
import { db } from "../db.config.js";
import { NewUser, User, users } from "../schema/index.js";

export class AuthRepository {
  async create(userData: NewUser): Promise<User> {
    const [user] = await db.insert(users).values(userData).returning();
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || null;
  }

  async findById(userId: string): Promise<User | null> {
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    return user || null;
  }

  async findAll(): Promise<User[] | null> {
    const user = await db.select().from(users);
    return user || [];
  }
}

export const authRepository = new AuthRepository();
