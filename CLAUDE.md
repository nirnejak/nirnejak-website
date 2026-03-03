# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` — Start dev server (uses webpack)
- `bun run build` — Production build (uses webpack)
- `bun run lint` — Lint with Biome (`biome check .`)
- `bun run lint:fix` — Auto-fix lint issues (`biome check --fix .`)
- `bun run format` — Format with Biome (`biome format --write .`)
- `bun run type-check` — TypeScript type checking (`tsc --pretty --noEmit`)

## Architecture

Next.js 16 portfolio site using App Router. Fully static — no CMS or API data fetching. Deployed on Vercel.

### Key directories

- `app/` — Pages and layouts (App Router file-based routing)
- `components/` — React components; `atoms/` for small primitives (Link, Tabs)
- `hooks/` — Custom React hooks
- `utils/` — Helpers (animation configs, classNames, metadata, photo data)
- `fonts/` — Self-hosted GeneralSans variable font
- `config.ts` — Site-wide config (links, email, keywords)

### Imports

Path alias `@/*` maps to project root (e.g., `import config from "@/config"`).

### Routing

Routes: `/`, `/work/`, `/work/projects/`, `/blogs/`, `/photos/`, `/uses/`, `/contact/`. Trailing slashes are enforced via `trailingSlash: true` in next.config.ts.

### Styling

Tailwind CSS v4 via PostCSS. Custom animations and theme extensions defined in `app/main.css` using `@theme` and `@keyframes`. Custom utility classes (`hover-bg`, `text-gradient-*`) defined in `app/main.css` via `@layer components`. Biome enforces sorted Tailwind classes (`useSortedClasses: error`).

### Key patterns

- React Compiler is enabled — no need for manual `useMemo`/`useCallback`
- View transitions via `next-view-transitions` — use `components/atoms/Link.tsx` instead of `next/link`
- Smooth scrolling via Lenis (ReactLenis in root layout)
- Motion library for component animations; animation presets in `utils/animation.ts`
- PWA enabled via `next-pwa` (disabled in development)
- `"use client"` directive required for components with interactivity
- `utils/classNames.ts` is a custom conditional class joiner (not clsx) — usage: `classNames("foo", condition && "bar")`
- `utils/metadata.ts` exports `getMetadata()` — use for page-level metadata in every `page.tsx`
- Icons from `akar-icons`; UI primitives from Radix UI and `cmdk` (command palette)

## Code Style (Biome)

- Semicolons as needed, double quotes, trailing commas (ES5)
- 2-space indent, 80 char line width, LF line endings
- Tailwind classes must be sorted (Biome `useSortedClasses` rule)
- Pre-commit hook runs `biome check --fix` via lint-staged
