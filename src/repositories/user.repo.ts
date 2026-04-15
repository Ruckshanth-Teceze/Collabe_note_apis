import { and, eq } from "drizzle-orm";
import { db } from "../db.config.js";
import {
  NewPermission,
  NewUser,
  Permission,
  permissions,
  Role,
  User,
  users,
} from "../schema/index.js";

export class UserRepository {
  async createPermission(permissionData: NewPermission): Promise<Permission> {
    const [permission] = await db
      .insert(permissions)
      .values(permissionData)
      .returning();
    return permission;
  }

  async getPermission(
    noteId: string,
    userId: string,
  ): Promise<Permission | null> {
    const [permission] = await db
      .select()
      .from(permissions)
      .where(
        and(eq(permissions.noteId, noteId), eq(permissions.userId, userId)),
      );
    return permission || null;
  }

  // async getNotePermissions(
  //   noteId: string,
  // ): Promise<Array<{ permission: Permission; user: User }>> {
  //   return db
  //     .select({
  //       permission: permissions,
  //       user: users,
  //     })
  //     .from(permissions)
  //     .innerJoin(users, eq(permissions.userId, users.id))
  //     .where(eq(permissions.noteId, noteId));
  // }

  async updatePermissionRole(
    noteId: string,
    userId: string,
    role: Role,
  ): Promise<Permission | null> {
    const [updated] = await db
      .update(permissions)
      .set({ role, updatedAt: new Date() })
      .where(
        and(eq(permissions.noteId, noteId), eq(permissions.userId, userId)),
      )
      .returning();
    return updated || null;
  }

  async deletePermission(noteId: string, userId: string): Promise<boolean> {
    const [result] = await db
      .delete(permissions)
      .where(
        and(eq(permissions.noteId, noteId), eq(permissions.userId, userId)),
      )
      .returning();
    return !!result;
  }

  async getPermissionsByUserId(userId: string): Promise<Permission[]> {
    const userPermissions = await db
      .select()
      .from(permissions)
      .where(eq(permissions.userId, userId));
    return userPermissions;
  }
}

export const userRepository = new UserRepository();
