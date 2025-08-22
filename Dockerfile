FROM oven/bun:1

WORKDIR /app

# Ensure git is available to clone the repository
RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

# Clone the public repository
RUN git clone https://github.com/ljis120301/svb-web.git .

# Install dependencies using Bun (uses bun.lock if present)
RUN bun install --frozen-lockfile

# Build the Next.js application
RUN bun run build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Run the production server
CMD ["bun", "run", "start"]


