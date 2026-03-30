import { NewPermission, Permission, Role } from "../schema/index.js";
export declare class UserRepository {
    createPermission(permissionData: NewPermission): Promise<Permission>;
    getPermission(noteId: string, userId: string): Promise<Permission | null>;
    updatePermissionRole(noteId: string, userId: string, role: Role): Promise<Permission | null>;
    deletePermission(noteId: string, userId: string): Promise<boolean>;
}
export declare const userRepository: UserRepository;
//# sourceMappingURL=user.repo.d.ts.map