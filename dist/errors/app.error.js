export class AppError extends Error {
    message;
    statusCode;
    code;
    constructor(message, statusCode, code) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.code = code;
        this.name = this.constructor.name;
    }
}
export class ConflictError extends AppError {
    constructor(message) {
        super(message, 409, "CONFLICT");
    }
}
export class UnauthorizedError extends AppError {
    constructor(message) {
        super(message, 401, "UNAUTHORIZED");
    }
}
export class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404, "NOT_FOUND");
    }
}
export class ValidationError extends AppError {
    constructor(message) {
        super(message, 422, "VALIDATION_ERROR");
    }
}
//# sourceMappingURL=app.error.js.map