import { generateToken } from "../middlewares/auth.middleware.js";
import bcrypt from "bcrypt";
import { authRepository } from "../repositories/auth.repo.js";
export class AuthServices {
    async userRegister(validUser) {
        const existUser = await authRepository.findByEmail(validUser.email);
        if (existUser) {
            throw new Error("User already exists");
        }
        const passwordHash = await bcrypt.hash(validUser.password, 10);
        const user = await authRepository.create({
            email: validUser.email,
            passwordHash,
            name: validUser.name,
        });
        const token = await generateToken(user.id, user.email);
        return {
            user: {
                userId: user.id,
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
    async userLogin(validUser) {
        const user = await authRepository.findByEmail(validUser.email);
        const isValidPassword = await bcrypt.compare(validUser.password, user?.passwordHash || "");
        if (!user) {
            throw new Error("Invalid email or password");
        }
        if (!isValidPassword) {
            throw new Error("Invalid email or password");
        }
        const token = await generateToken(user.id, user.email);
        return {
            user: {
                userId: user.id,
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
    async getuserData(userId) {
        const user = await authRepository.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return {
            user: {
                userId: user.id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
            },
        };
    }
}
export const authServices = new AuthServices();
//# sourceMappingURL=auth.service.js.map