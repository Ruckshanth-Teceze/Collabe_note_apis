import { userRepository } from "../repositories/user.repo.js";
export class UserServices {
    async permissionCreate(permissionData) {
        const permission = await userRepository.createPermission(permissionData);
        return permission;
    }
    async permissionGet(noteId, userId) {
        const permission = await userRepository.getPermission(noteId, userId);
        return permission;
    }
    // async notePermissionGet(noteId: string) {
    //   const notePermission = await userRepository.getNotePermissions(noteId);
    //   return notePermission;
    // }
    async updatePermissionRole(noteId, userId, role) {
        const updatePermission = await userRepository.updatePermissionRole(noteId, userId, role);
        return updatePermission;
    }
    async deletePermission(noteId, userId) {
        const deletePermission = await userRepository.deletePermission(noteId, userId);
        return deletePermission;
    }
}
export const userServices = new UserServices();
//# sourceMappingURL=user.service.js.map