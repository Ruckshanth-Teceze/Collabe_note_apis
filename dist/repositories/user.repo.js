import { and, eq } from "drizzle-orm";
import { db } from "../db.config.js";
import { permissions, } from "../schema/index.js";
export class UserRepository {
    async createPermission(permissionData) {
        const [permission] = await db
            .insert(permissions)
            .values(permissionData)
            .returning();
        return permission;
    }
    async getPermission(noteId, userId) {
        const [permission] = await db
            .select()
            .from(permissions)
            .where(and(eq(permissions.noteId, noteId), eq(permissions.userId, userId)));
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
    async updatePermissionRole(noteId, userId, role) {
        const [updated] = await db
            .update(permissions)
            .set({ role, updatedAt: new Date() })
            .where(and(eq(permissions.noteId, noteId), eq(permissions.userId, userId)))
            .returning();
        return updated || null;
    }
    async deletePermission(noteId, userId) {
        const [result] = await db
            .delete(permissions)
            .where(and(eq(permissions.noteId, noteId), eq(permissions.userId, userId)))
            .returning();
        return !!result;
    }
}
export const userRepository = new UserRepository();
//# sourceMappingURL=user.repo.js.map