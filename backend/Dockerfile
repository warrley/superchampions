FROM node:22-alpine AS dev
WORKDIR /app

COPY package.json package-lock.json* ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/

RUN npm ci

COPY backend/ ./backend/

WORKDIR /app/backend
RUN npx prisma generate

CMD ["npx", "tsx", "watch", "src/index.ts"]

