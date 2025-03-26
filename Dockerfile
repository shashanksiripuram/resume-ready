


FROM node:18  # ⚠️ Must use Node 18+ for React 19

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (ignore peer conflicts)
RUN npm install -g npm@latest && \
    npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Install Sharp for Next.js image optimization (critical for build)
RUN npm install sharp

# Set any required env vars (example)
ENV NEXT_TELEMETRY_DISABLED=1

# Run the build
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
