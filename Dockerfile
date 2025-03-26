FROM node:18

WORKDIR /app

# Install a compatible npm version (for Node 18)
RUN npm install -g npm@10.8.2 && \
    npm install --legacy-peer-deps

COPY package*.json ./
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
