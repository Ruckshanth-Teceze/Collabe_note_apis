import { loginDto, registerDto } from "../dto/auth.dto.js";
interface authResponse {
    user: {
        userId: string;
        name: string | null;
        email: string;
        createdAt?: Date;
    };
    token?: string;
}
export declare class AuthServices {
    userRegister(validUser: registerDto): Promise<authResponse>;
    userLogin(validUser: loginDto): Promise<authResponse | null>;
    getuserData(userId: string): Promise<authResponse | null>;
}
export declare const authServices: AuthServices;
export {};
//# sourceMappingURL=auth.service.d.ts.map