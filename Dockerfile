FROM node:18  # ⚠️ Use Node 18 instead of 16 (React 19 requires newer Node)
WORKDIR /app
COPY package*.json .
RUN npm install --legacy-peer-deps  # 👈 This ignores peer dependency conflicts
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
