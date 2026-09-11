FROM node:22-alpine AS dev
WORKDIR /app

COPY package.json package-lock.json* ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/

RUN npm ci

COPY frontend/ ./frontend/

WORKDIR /app/frontend
CMD ["npx", "next", "dev"]

