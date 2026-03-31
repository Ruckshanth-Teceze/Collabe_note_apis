import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference, Scalar } from "@scalar/hono-api-reference";
import "dotenv/config";

import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";
import fileRouter from "./routes/file.route.js";

const app = new OpenAPIHono();
const PORT = parseInt(process.env.PORT || "4000");

// ✅ Middleware
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  }),
);

// ✅ Basic routes
app.get("/health-check", (c) =>
  c.json({ success: true, message: "Server is healthy" }),
);
app.get("/", (c) => c.text("Hello Hono!"));
app.route("/api/v1/auth", authRouter);
app.route("/api/v1/notes", noteRouter);
app.route("/api/v1/files", fileRouter);

app.openAPIRegistry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
});

// 1. Setup the OpenAPI JSON endpoint
app.doc("api/reference/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "Basic Crud Apis",
    version: "1.0.0",
    description: "Modern API documentation using Scalar",
  },
  security: [{ bearerAuth: [] }],
});

// 2. Setup the Scalar UI (Modern alternative to Swagger)
app.get(
  "/api/reference",
  apiReference({
    spec: {
      url: "/api/reference/openapi.json",
    },
    authentication: {
      preferredSecurityScheme: "bearerAuth",
    },
  } as any),
);

// ✅ Error handling
app.notFound((c) =>
  c.json({ success: false, message: "Route not found" }, 404),
);

app.onError((error, c) => {
  console.error("🔥 Error:", error);
  return c.json({ success: false, message: "Internal server error" }, 500);
});

// ✅ Start server
async function startserver() {
  try {
    serve({ fetch: app.fetch, port: PORT });
    console.log(`✅ Server: http://localhost:${PORT}`);
    console.log(`✨ Scalar Docs: http://localhost:${PORT}/api/reference`);
  } catch (error) {
    console.error(`❌ Failed to start: ${error}`);
    process.exit(1);
  }
}

startserver();
