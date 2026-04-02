# Risiko — Classic Risk Game

A full recreation of the classic Risk board game, supporting singleplayer (vs bots) and multiplayer.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Frontend | **Angular 21** (OnPush + Signals, standalone components) |
| Backend | **NestJS 11** |
| Multiplayer | **Azure PlayFab** (turn-based sessions, matchmaking, PubSub) |
| Database | **Azure Cosmos DB** |
| Monorepo | **npm workspaces** (no build tool) |

---

## Structure

```
risiko/
├── api/          # NestJS app
├── site/         # Angular app
├── lib/          # Shared TypeScript library (@risiko/lib)
│   └── src/
│       └── index.ts   # Barrel export
├── package.json  # Root — npm workspaces
└── README.md
```

`lib/` is a plain TypeScript package. Both `api` and `site` import from it as `@risiko/lib`, resolved via npm workspace symlink + tsconfig path alias.

---

## Setup

```bash
npm install        # installs everything, hoisted to root node_modules
```

---

## Running

```bash
npm run start:site   # Angular dev server (ng serve)
npm run start:api    # NestJS dev server (nest start --watch)
```

Or directly inside each folder:

```bash
cd site && npm run start
cd api && npm run start:dev
```

---

## Adding shared code

Put models, interfaces, game engine logic etc. in `lib/src/` and export from `lib/src/index.ts`.

Import in any app:

```typescript
import { SomeModel } from '@risiko/lib';
```

---

## Setup Progress

- [x] Agreed on tech stack
- [x] Angular app scaffolded (`site/`)
- [x] NestJS app scaffolded (`api/`)
- [x] Shared lib created (`lib/` → `@risiko/lib`)
- [x] npm workspaces configured (single `npm install` at root)
- [x] `@risiko/lib` path alias in `site/tsconfig.json` and `api/tsconfig.json`
- [ ] Set up Azure PlayFab project
- [ ] Set up Azure Cosmos DB
- [ ] Implement game engine in `lib/`
