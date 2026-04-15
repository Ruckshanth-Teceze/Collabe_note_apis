import { authRepository } from "../repositories/auth.repo.js";
import { noteRepositories } from "../repositories/note.repo.js";
import { userRepository } from "../repositories/user.repo.js";
import { userServices } from "./user.service.js";
import { fileService } from "./file.service.js";
export class NoteServices {
    async noteCreate(userId, noteInput) {
        const noteData = {
            title: noteInput.title || "Untitled",
            content: noteInput.content,
            ownerId: userId,
            currentVersion: 1,
            isDeleted: false,
        };
        const existUser = await authRepository.findById(userId);
        if (!existUser) {
            throw new Error("User not found");
        }
        const existNote = await noteRepositories.findByName(noteData.title ?? "");
        if (existNote) {
            throw new Error("Note already exist");
        }
        const note = await noteRepositories.create(noteData);
        if (!note) {
            throw new Error("Note Create failed");
        }
        await userServices.permissionCreate({
            noteId: note.id,
            userId,
            role: "OWNER",
        });
        return {
            ...note,
            userRole: "OWNER",
        };
    }
    async shareCreate(noteId, userIds) {
        const existNote = await noteRepositories.findById(noteId);
        if (!existNote) {
            throw new Error("Note doesn't exist");
        }
        const sharedResults = await Promise.all(userIds.map(async (userId) => {
            const permission = await userServices.permissionCreate({
                noteId: existNote.id,
                userId,
                role: "EDITOR",
            });
            return {
                ...existNote,
                userRole: "EDITOR",
                permissionId: permission?.id,
            };
        }));
        return sharedResults;
    }
    async getSharedNotes(userId) {
        const userPermissions = await userRepository.getPermissionsByUserId(userId);
        const noteIds = userPermissions
            .filter((p) => p.noteId)
            .map((p) => p.noteId);
        const sharedNotes = await Promise.all(noteIds.map(async (noteId) => {
            const note = await noteRepositories.findById(noteId);
            return note;
        }));
        const notesWithRole = userPermissions.map((perm, index) => ({
            ...sharedNotes[index],
            userRole: perm.role,
        }));
        return notesWithRole.filter(Boolean);
    }
    async noteUpdate(userId, noteId, noteInput) {
        const permission = await userServices.permissionGet(noteId, userId);
        if (!permission) {
            throw new Error("User permission failed");
        }
        else if (permission?.role === "VIEWER") {
            throw new Error("Owner and Editor can update the note");
        }
        const currentNote = await noteRepositories.findById(noteId);
        if (!currentNote) {
            throw new Error("Note doesn't exist");
        }
        await noteRepositories.createversion({
            noteId: currentNote.id,
            title: currentNote.title,
            version: currentNote.currentVersion,
            content: currentNote.content,
            createdBy: userId,
        });
        const newNote = {
            title: noteInput.title,
            content: noteInput.content,
            ownerId: currentNote.ownerId,
        };
        const updateNote = await noteRepositories.update(noteId, newNote);
        if (!updateNote) {
            throw new Error("Note Update failed");
        }
        if (updateNote) {
            await noteRepositories.incrementVersion(noteId);
        }
        return {
            ...updateNote,
            userRole: "OWNER",
        };
    }
    async noteGetById(userId, noteId) {
        const userPermission = await userRepository.getPermission(noteId, userId);
        if (!userPermission) {
            throw Error("User permission failed");
        }
        const note = await noteRepositories.findById(noteId);
        const files = await fileService.getFilesByNoteId(userId, noteId);
        return {
            ...note,
            userRole: userPermission.role,
            files,
        };
    }
    async noteGets(userId) {
        const notes = await noteRepositories.findByOwnerId(userId);
        const notesWithAttachments = await Promise.all(notes.map(async (note) => {
            const attachments = await fileService.getFilesByNoteId(userId, note.id);
            return {
                ...note,
                attachments,
            };
        }));
        return notesWithAttachments;
    }
    async noteDelete(userId, noteId) {
        const userPermission = await userRepository.getPermission(noteId, userId);
        if (!userPermission) {
            throw Error("User permission failed");
        }
        if (userPermission.role === "OWNER") {
            await noteRepositories.softDelete(noteId);
        }
        else
            throw Error("Owner only delete the note");
        return {
            message: "Notes Deleted Successfully",
            userRole: userPermission.role,
        };
    }
}
export const noteServices = new NoteServices();
//# sourceMappingURL=note.service.js.map