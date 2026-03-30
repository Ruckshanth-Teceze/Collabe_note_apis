export declare class AppError extends Error {
    message: string;
    statusCode: number;
    code: string;
    constructor(message: string, statusCode: number, code: string);
}
export declare class ConflictError extends AppError {
    constructor(message: string);
}
export declare class UnauthorizedError extends AppError {
    constructor(message: string);
}
export declare class NotFoundError extends AppError {
    constructor(message: string);
}
export declare class ValidationError extends AppError {
    constructor(message: string);
}
//# sourceMappingURL=app.error.d.ts.map