# Use Node 18 (required for React 19)
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (ignore peer conflicts)
RUN npm install -g npm@latest && \
    npm install --legacy-peer-deps

# Install Sharp for Next.js image optimization
RUN npm install sharp

# Copy the rest of the app
COPY . .

# Set build-time env vars (if needed)
ENV NODE_ENV=production

# Run the build
RUN npm run build

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]
