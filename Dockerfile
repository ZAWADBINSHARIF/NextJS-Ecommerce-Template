# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install build dependencies required for native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc \
    libc6-compat

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with npm
# Using --legacy-peer-deps to avoid peer dependency conflicts
# Using --maxsockets=1 to prevent memory issues on Alpine Linux
RUN npm ci \
    --legacy-peer-deps \
    --maxsockets=1 || npm install \
    --legacy-peer-deps


# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    gcc \
    libc6-compat

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application code
COPY . .

# Build Next.js application
RUN npm run build

# Remove development dependencies
RUN npm prune --production


# Stage 3: Runtime
FROM node:20-alpine AS runner
WORKDIR /app

# Install only runtime dependencies
RUN apk add --no-cache \
    dumb-init \
    ca-certificates \
    tzdata \
    libc6-compat

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy only necessary files from builder
# COPY --from=builder --chown=nextjs:nodejs /public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production \
    PORT=3000 \
    NODE_OPTIONS="--max-old-space-size=512"

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start application
CMD ["node", "server.js"]