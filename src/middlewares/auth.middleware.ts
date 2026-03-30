import type { Context, Next } from "hono";
import * as jose from "jose";
declare module "hono" {
  interface ContextVariableMap {
    userId: string;
    userEmail: string;
  }
}

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-change-me",
);

export const authMiddleware = async (
  c: Context,
  next: Next,
): Promise<Response | void> => {
  try {
    const authHeader = c.req.header("Authorization");

    if (!authHeader) {
      return c.json({ error: "Authorization header is required" }, 401);
    }

    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return c.json({ error: "Token is required" }, 401);
    }

    const { payload } = await jose.jwtVerify(token, JWT_SECRET);

    if (!payload.sub || !payload.userId) {
      return c.json({ error: "Invalid token payload" }, 401);
    }

    // Set user info in context for downstream use
    c.set("userId", payload.sub as string);
    c.set("userEmail", payload.email as string);

    await next();
  } catch (error) {
    if (error instanceof jose.errors.JWTExpired) {
      return c.json({ error: "Token has expired" }, 401);
    }
    if (error instanceof jose.errors.JWTClaimValidationFailed) {
      return c.json({ error: "Token validation failed" }, 401);
    }
    if (error instanceof jose.errors.JWSSignatureVerificationFailed) {
      return c.json({ error: "Invalid token signature" }, 401);
    }
    return c.json({ error: "Authentication failed" }, 401);
  }
};

export const generateToken = async (
  userId: string,
  email: string,
): Promise<string> => {
  const jwt = await new jose.SignJWT({ userId, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .setSubject(userId)
    .sign(JWT_SECRET);

  return jwt;
};
