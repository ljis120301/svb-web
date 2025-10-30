FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable pnpm

# Copy the source code, .env, and dev.db into the image
COPY . .

# Install dependencies using pnpm
RUN pnpm install

# Generate Prisma client (uses DATABASE_URL from .env)
RUN pnpm exec prisma generate

# Build the Next.js application
RUN pnpm run build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Run the production server
CMD ["pnpm", "run", "start"]
