import { Context } from "hono";
export declare class NoteController {
    createNote(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: true;
        result: {
            userRole: string;
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
    }, 201, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
    shareNote(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: true;
        result: {
            userRole: string;
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
    }, 201, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
    updateNote(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: true;
        result: {
            userRole: string;
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
    }, 200, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: ({
            readonly code: "invalid_format";
            readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_type";
            readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: {
                [x: string]: import("hono/utils/types").JSONValue;
            } | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[][];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: import("hono/utils/types").JSONValue;
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: (string | number | boolean | null)[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: {
                [x: string]: any;
            } | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        })[];
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
    deleteNote(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: true;
        result: {
            message: string;
            userRole: "OWNER";
        };
    }, 200, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: ({
            readonly code: "invalid_format";
            readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_type";
            readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: {
                [x: string]: import("hono/utils/types").JSONValue;
            } | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[][];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: import("hono/utils/types").JSONValue;
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: (string | number | boolean | null)[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: {
                [x: string]: any;
            } | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        })[];
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
    getNotes(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: true;
        result: {
            attachments: {
                attachmentId: string;
                filename: string;
                url: string;
            }[];
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        }[];
    }, 200, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: ({
            readonly code: "invalid_format";
            readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_type";
            readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: {
                [x: string]: import("hono/utils/types").JSONValue;
            } | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[][];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: import("hono/utils/types").JSONValue;
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: (string | number | boolean | null)[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: {
                [x: string]: any;
            } | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        })[];
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
    getNoteById(c: Context): Promise<(Response & import("hono").TypedResponse<{
        success: true;
        result: {
            userRole: "OWNER" | "EDITOR" | "VIEWER";
            files: {
                attachmentId: string;
                filename: string;
                url: string;
            }[];
            id: string;
            createdAt: string;
            updatedAt: string;
            title: string;
            content: string | null;
            ownerId: string;
            currentVersion: number;
            isDeleted: boolean;
        };
    }, 200, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: ({
            readonly code: "invalid_format";
            readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
            readonly pattern?: string | undefined;
            readonly input?: string | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_type";
            readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_big";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly maximum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "too_small";
            readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
            readonly minimum: number;
            readonly inclusive?: boolean | undefined;
            readonly exact?: boolean | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "not_multiple_of";
            readonly divisor: number;
            readonly input?: number | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "unrecognized_keys";
            readonly keys: string[];
            readonly input?: {
                [x: string]: import("hono/utils/types").JSONValue;
            } | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[][];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive?: true | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_union";
            readonly errors: [];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly discriminator?: string | undefined | undefined;
            readonly inclusive: false;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_key";
            readonly origin: "map" | "record";
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_element";
                    readonly origin: "map" | "set";
                    readonly key: import("hono/utils/types").JSONValue;
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_element";
                readonly origin: "map" | "set";
                readonly key: import("hono/utils/types").JSONValue;
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_element";
            readonly origin: "map" | "set";
            readonly key: import("hono/utils/types").JSONValue;
            readonly issues: ({
                readonly code: "invalid_format";
                readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                readonly pattern?: string | undefined;
                readonly input?: string | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_type";
                readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_big";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly maximum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "too_small";
                readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                readonly minimum: number;
                readonly inclusive?: boolean | undefined;
                readonly exact?: boolean | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "not_multiple_of";
                readonly divisor: number;
                readonly input?: number | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "unrecognized_keys";
                readonly keys: string[];
                readonly input?: {
                    [x: string]: import("hono/utils/types").JSONValue;
                } | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_key";
                    readonly origin: "map" | "record";
                    readonly issues: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[][];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive?: true | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_union";
                readonly errors: [];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly discriminator?: string | undefined | undefined;
                readonly inclusive: false;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "invalid_key";
                readonly origin: "map" | "record";
                readonly issues: ({
                    readonly code: "invalid_format";
                    readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                    readonly pattern?: string | undefined;
                    readonly input?: string | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_type";
                    readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_big";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly maximum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "too_small";
                    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                    readonly minimum: number;
                    readonly inclusive?: boolean | undefined;
                    readonly exact?: boolean | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "not_multiple_of";
                    readonly divisor: number;
                    readonly input?: number | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "unrecognized_keys";
                    readonly keys: string[];
                    readonly input?: {
                        [x: string]: import("hono/utils/types").JSONValue;
                    } | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: ({
                        readonly code: "invalid_format";
                        readonly format: import("zod/v4/core").$ZodStringFormats | (string & {});
                        readonly pattern?: string | undefined;
                        readonly input?: string | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "invalid_type";
                        readonly expected: import("zod/v4/core").$ZodInvalidTypeExpected;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_big";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly maximum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "too_small";
                        readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
                        readonly minimum: number;
                        readonly inclusive?: boolean | undefined;
                        readonly exact?: boolean | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "not_multiple_of";
                        readonly divisor: number;
                        readonly input?: number | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "unrecognized_keys";
                        readonly keys: string[];
                        readonly input?: {
                            [x: string]: import("hono/utils/types").JSONValue;
                        } | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | {
                        readonly code: "invalid_union";
                        readonly errors: [];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly discriminator?: string | undefined | undefined;
                        readonly inclusive: false;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | /*elided*/ any | /*elided*/ any | {
                        readonly code: "invalid_value";
                        readonly values: (string | number | boolean | null)[];
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    } | {
                        readonly code: "custom";
                        readonly params?: {
                            [x: string]: any;
                        } | undefined;
                        readonly input?: import("hono/utils/types").JSONValue | undefined;
                        readonly path: (string | number | null)[];
                        readonly message: string;
                    })[][];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive?: true | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "invalid_union";
                    readonly errors: [];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly discriminator?: string | undefined | undefined;
                    readonly inclusive: false;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | /*elided*/ any | /*elided*/ any | {
                    readonly code: "invalid_value";
                    readonly values: (string | number | boolean | null)[];
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                } | {
                    readonly code: "custom";
                    readonly params?: {
                        [x: string]: any;
                    } | undefined;
                    readonly input?: import("hono/utils/types").JSONValue | undefined;
                    readonly path: (string | number | null)[];
                    readonly message: string;
                })[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | /*elided*/ any | {
                readonly code: "invalid_value";
                readonly values: (string | number | boolean | null)[];
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            } | {
                readonly code: "custom";
                readonly params?: {
                    [x: string]: any;
                } | undefined;
                readonly input?: import("hono/utils/types").JSONValue | undefined;
                readonly path: (string | number | null)[];
                readonly message: string;
            })[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "invalid_value";
            readonly values: (string | number | boolean | null)[];
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        } | {
            readonly code: "custom";
            readonly params?: {
                [x: string]: any;
            } | undefined;
            readonly input?: import("hono/utils/types").JSONValue | undefined;
            readonly path: (string | number | null)[];
            readonly message: string;
        })[];
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 400, "json">) | (Response & import("hono").TypedResponse<{
        success: false;
        message: string;
    }, 500, "json">)>;
}
export declare const noteController: NoteController;
//# sourceMappingURL=note.controller.d.ts.map