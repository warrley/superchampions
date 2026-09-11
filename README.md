# Super Champions

> Sports management platform for Capoeira competitions, athletes, and events. Designed for the web and ready to be packaged for desktop.

---

## Tech Stack

- **Monorepo**: Native npm workspaces (no extra monorepo tool overhead)
- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TailwindCSS v4](https://tailwindcss.com/), TypeScript
- **Backend**: [Express](https://expressjs.com/), [Prisma ORM](https://www.prisma.io/), [PostgreSQL 16](https://www.postgresql.org/), TypeScript
- **DevOps**: Docker, Docker Compose, GitHub Actions CI

---

## Prerequisites

Make sure you have installed:

- **Node.js**: `v22.x` (LTS recommended) or `v20.x+` (for local development)
- **npm**: `v10.x` or `v11.x` (for local development)
- **Docker & Docker Compose**

---

## Quick Start

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/warrley/superchampions
cd superchampions
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

The default values are pre-configured to work out of the box with Docker:

- `DATABASE_URL`: `postgresql://superchampions:superchampions@localhost:5432/superchampions`
- `PORT`: `7182`
- `NEXT_PUBLIC_API_URL`: `http://localhost:7182/api`

### 3. Generate Prisma Client

Generate the database types for your local machine:

```bash
npm run db:generate -w backend
```

---

## Running the Project

### Option A: Local Development

Starts PostgreSQL via Docker, and runs frontend & backend locally:

```bash
# 1. Start PostgreSQL
docker compose up -d postgres

# 2. Run both frontend and backend concurrently
npm run dev
```

Or run services individually:

```bash
npm run dev -w frontend   # Starts Next.js on http://localhost:3000
npm run dev -w backend    # Starts Express API on http://localhost:7182
```

### Option B: Full Docker Stack

Runs everything (PostgreSQL, Backend API, and Frontend) inside isolated containers:

```bash
docker compose up --build
```

To stop all containers:

```bash
docker compose down
```

---

## Service URLs & Ports

| Service          | Local URL                                                            | Docker URL                                                           | Description             |
| ---------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------- |
| **Frontend**     | [http://localhost:3000](http://localhost:3000)                       | [http://localhost:3001](http://localhost:3001)                       | Next.js web application |
| **Backend API**  | [http://localhost:7182](http://localhost:7182)                       | [http://localhost:7182](http://localhost:7182)                       | Express REST API        |
| **Health Check** | [http://localhost:7182/api/health](http://localhost:7182/api/health) | [http://localhost:7182/api/health](http://localhost:7182/api/health) | Server status check     |
| **PostgreSQL**   | `localhost:5432`                                                     | `postgres:5432` (internal)                                           | PostgreSQL database     |

---

## Available Scripts

All scripts can be run from the root directory:

| Script                           | Description                                          |
| -------------------------------- | ---------------------------------------------------- |
| `npm run dev`                    | Starts frontend and backend concurrently in dev mode |
| `npm run build`                  | Builds both frontend (Next.js) and backend (tsc)     |
| `npm run lint`                   | Runs ESLint across all workspaces                    |
| `npm run format`                 | Formats all code with Prettier                       |
| `npm run format:check`           | Verifies code formatting with Prettier               |
| `npm run db:generate -w backend` | Generates Prisma client types from schema            |
| `npm run db:push -w backend`     | Pushes schema changes directly to the database       |
| `npm run db:migrate -w backend`  | Creates and runs Prisma migrations                   |
| `npm run db:studio -w backend`   | Opens visual Prisma Studio database GUI              |

---

## Project Structure

```text
superchampions/
├── backend/                   # Express REST API
│   ├── prisma/
│   │   └── schema.prisma      # Database schema & models
│   ├── src/
│   │   ├── lib/prisma.ts      # Prisma client singleton
│   │   ├── routes/health.ts   # Health check route
│   │   └── index.ts           # Server entry point
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                  # Next.js web app (desktop-ready)
│   ├── src/
│   │   └── app/               # App Router pages & layout
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── .github/workflows/ci.yml   # Continuous Integration (lint & build)
├── docker-compose.yml         # Container orchestration
├── package.json               # Monorepo workspaces definition
└── .env.example               # Environment variables template
```

