# src/Dockerfile
FROM node:20-alpine

# Install dependencies for TypeScript support
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TypeScript (if you have a build step)
RUN npm run build || echo "No build step"

# Expose port
EXPOSE 3000

# ✅ Critical: Bind to 0.0.0.0 so external requests (coworker) work
ENV HOST=0.0.0.0
ENV PORT=3000

# Start command (adjust based on your start script)
CMD ["npm", "run","start"]