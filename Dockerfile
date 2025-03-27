FROM node:16
WORKDIR /app
COPY package*.json .
RUN npm install --legacy-peer-deeps
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
