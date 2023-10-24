FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
EXPOSE 4000
CMD ["node","server.js"]