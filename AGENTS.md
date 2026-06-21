# AGENTS.md

## Setup Commands

- Install dependencies: `pnpm install`
- Start development server: `pnpm dev`
- Build project: `pnpm build`
- Start production server: `pnpm start`

## Project Structure

- All source code lives under `src/`
- Next.js App Router files live under `src/app`
- Shared UI components live under `src/components`
- Shared utilities live under `src/lib`
- Organize domain-specific code into modules under `src/modules`

Example module structure:

```txt
modules/
└── users/
    ├── components/
    ├── users.actions.ts
    ├── users.service.ts
    ├── users.types.ts
    └── users.repository.ts
```

## Architecture Guidelines

- Prefer Server Actions over API Routes when possible.
- Components should call Server Actions, not repositories directly.
- Server Actions should call services.
- Services contain business logic.
- Repositories contain data-access logic.
- Keep business logic out of React components.

Preferred flow:

```txt
Component
    ↓
Server Action
    ↓
Service
    ↓
Repository
    ↓
Database
```

## Code Style

- Use TypeScript.
- Prefer explicit types for public interfaces.
- Keep files focused on a single responsibility.
- Prefer composition over inheritance.
- Avoid premature abstraction.
- Optimize for simplicity and readability.

## ShipIt Scope

This project is an MVP.

Favor simple solutions over scalable solutions.

Do not introduce:

- Microservices
- Message queues
- Complex dependency injection frameworks
- Premature optimization

Choose the simplest implementation that solves the problem.
