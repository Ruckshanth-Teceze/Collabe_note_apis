import type { Context, Next } from "hono";
declare module "hono" {
    interface ContextVariableMap {
        userId: string;
        userEmail: string;
    }
}
export declare const authMiddleware: (c: Context, next: Next) => Promise<Response | void>;
export declare const generateToken: (userId: string, email: string) => Promise<string>;
//# sourceMappingURL=auth.middleware.d.ts.map