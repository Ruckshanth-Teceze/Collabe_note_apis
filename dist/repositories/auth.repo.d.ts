import { NewUser, User } from "../schema/index.js";
export declare class AuthRepository {
    create(userData: NewUser): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(userId: string): Promise<User | null>;
}
export declare const authRepository: AuthRepository;
//# sourceMappingURL=auth.repo.d.ts.map