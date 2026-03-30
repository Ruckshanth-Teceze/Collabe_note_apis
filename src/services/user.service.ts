import { NewPermission, Permission, Role, User } from "../schema/index.js";
import { userRepository } from "../repositories/user.repo.js";

export class UserServices {
  async permissionCreate(permissionData: NewPermission) {
    const permission = await userRepository.createPermission(permissionData);
    return permission;
  }

  async permissionGet(noteId: string, userId: string) {
    const permission = await userRepository.getPermission(noteId, userId);
    return permission;
  }

  // async notePermissionGet(noteId: string) {
  //   const notePermission = await userRepository.getNotePermissions(noteId);
  //   return notePermission;
  // }

  async updatePermissionRole(noteId: string, userId: string, role: Role) {
    const updatePermission = await userRepository.updatePermissionRole(
      noteId,
      userId,
      role,
    );
    return updatePermission;
  }

  async deletePermission(noteId: string, userId: string) {
    const deletePermission = await userRepository.deletePermission(
      noteId,
      userId,
    );
    return deletePermission;
  }
}
export const userServices = new UserServices();
