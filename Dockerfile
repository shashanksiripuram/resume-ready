FROM node:18

WORKDIR /app

# Install dependencies (without upgrading npm)
RUN npm install --legacy-peer-deps

COPY package*.json ./
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
