import { Context } from "hono";
export declare class FileController {
    createFile(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: true;
        result: {
            attachment: {
                id: string;
                createdAt: string;
                noteId: string;
                filename: string;
                mimeType: string;
                storageKey: string;
                size: number;
                uploadedBy: string;
            };
            userRole: "OWNER" | "EDITOR" | "VIEWER";
        };
    }, 201, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
}
export declare const fileController: FileController;
//# sourceMappingURL=file.controller.d.ts.map