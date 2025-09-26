FROM oven/bun:1-alpine

WORKDIR /app

# Copy the source code directly instead of cloning
COPY . .

# Install dependencies using Bun (allow lockfile updates if needed)
RUN bun install

# Generate Prisma client
RUN bunx prisma generate

# Build the Next.js application
RUN bun run build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Run the production server
CMD ["bun", "run", "start"]
