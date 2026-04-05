# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Style

- **Indentation:** tabs only, never spaces
- **SCSS class naming:** no `__` (double underscore); nest child classes with `&` instead of BEM `block__element`
- **Object alignment:** spaces after `:` are allowed to vertically align values in plain object literals only — **not** in Angular decorator metadata or class property declarations:
  ```typescript
  const obj = {
  	reallylongPropertyA: '',
  	propB:               '',
  	pC:                  '',
  };
  ```

## Commands

All commands run from the repo root unless noted.

```bash
# Install all dependencies (hoisted via npm workspaces)
npm install

# Dev servers
npm run start:site        # Angular (ng serve) → http://localhost:4200
npm run start:api         # NestJS (nest start --watch) → http://localhost:3000

# Production builds
npm run build:site        # ng build
npm run build:api         # nest build → api/dist/

# Lint
cd api && npm run lint     # eslint on api/src/
cd site && npm run lint    # not configured yet

# Format
cd api && npm run format
cd site && npx prettier --write "src/**/*.ts"
```

No tests are configured in this project.

## Architecture

npm workspaces monorepo with three packages:

- **`lib/`** (`@risiko/lib`) — pure TypeScript, no framework. All shared game logic goes here: models/DTOs, game engine, playfab client wrapper. Both `site` and `api` depend on it.
- **`site/`** — Angular 21 frontend. Standalone components, OnPush change detection, Signals for state. Routing is configured in `app.routes.ts`.
- **`api/`** — NestJS 11 backend. Serves on port 3000 (or `$PORT`). NestJS module/controller/service pattern.

### Shared code (`lib/`)

`lib/src/index.ts` is the single barrel export. Import in either app as:
```typescript
import { Something } from '@risiko/lib';
```
This resolves via npm workspace symlink (`node_modules/@risiko/lib → lib/`) and the tsconfig path alias `"@risiko/lib": ["../lib/src/index.ts"]` defined in both `site/tsconfig.json` and `api/tsconfig.json`. **No build step is needed for `lib/`** — both apps import the TypeScript source directly.

### Angular (`site/`)

- Entry: `site/src/main.ts` → bootstraps `AppComponent` with `appConfig`
- App config: `site/src/app/app.config.ts` (providers for router, etc.)
- Routes: `site/src/app/app.routes.ts`
- Styles: global SCSS at `site/src/styles.scss`

### NestJS (`api/`)

- Entry: `api/src/main.ts`
- Root module: `api/src/app.module.ts`
- NestJS CLI config: `api/nest-cli.json`
- Build output: `api/dist/`
- Module resolution is `nodenext`; tsconfig-paths is installed and used by NestJS CLI to resolve `@risiko/lib` at runtime during `nest start`.

## Planned features (not yet implemented)

- Azure PlayFab integration for multiplayer (turn-based sessions, matchmaking, PubSub)
- Azure Cosmos DB for persistence
- Game engine logic in `lib/`
