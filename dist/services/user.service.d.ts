import { NewPermission, Role } from "../schema/index.js";
export declare class UserServices {
    permissionCreate(permissionData: NewPermission): Promise<{
        role: "OWNER" | "EDITOR" | "VIEWER";
        id: string;
        createdAt: Date;
        updatedAt: Date;
        noteId: string;
        userId: string;
    }>;
    permissionGet(noteId: string, userId: string): Promise<{
        role: "OWNER" | "EDITOR" | "VIEWER";
        id: string;
        createdAt: Date;
        updatedAt: Date;
        noteId: string;
        userId: string;
    } | null>;
    updatePermissionRole(noteId: string, userId: string, role: Role): Promise<{
        role: "OWNER" | "EDITOR" | "VIEWER";
        id: string;
        createdAt: Date;
        updatedAt: Date;
        noteId: string;
        userId: string;
    } | null>;
    deletePermission(noteId: string, userId: string): Promise<boolean>;
}
export declare const userServices: UserServices;
//# sourceMappingURL=user.service.d.ts.map