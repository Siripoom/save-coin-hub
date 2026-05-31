# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server (Turbopack, localhost:3000)
npm run build    # production build (Turbopack)
npm start        # serve production build
npm run lint     # ESLint v9 flat config
npx next typegen # generate PageProps / LayoutProps / RouteContext type helpers
```

> There is no test runner configured yet.

## Architecture

Next.js 16 + React 19.2 + TypeScript (strict) + Tailwind CSS v4, App Router only.

```
app/
  layout.tsx     # root layout — Geist fonts, Tailwind base classes
  page.tsx       # home page (Server Component by default)
  globals.css    # Tailwind v4 imports
public/          # static assets served at /
next.config.ts   # NextConfig — currently empty
```

Path alias: `@/*` → project root (e.g. `import foo from '@/lib/foo'`).

ESLint is configured with `eslint/config` flat config in `eslint.config.mjs` (not `.eslintrc`). Run via `eslint`, not `next lint`.

## Next.js 16 breaking changes vs older versions

Before adding any feature, read `node_modules/next/dist/docs/` (AGENTS.md requirement). Key breaks from v15:

**Async Request APIs (fully removed sync access)**
`cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are all Promises now — they must be awaited.

```tsx
// pages / layouts / route handlers
export default async function Page({ params, searchParams }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const query = await searchParams
}
```

Run `npx next typegen` to generate `PageProps<'/path'>` / `LayoutProps` / `RouteContext` helpers.

**Proxy (was `middleware`)**
`middleware.ts` → `proxy.ts`; named export `middleware` → `proxy`. The proxy runtime is Node.js only; `edge` runtime requires keeping the old `middleware.ts` filename. Config flag `skipMiddlewareUrlNormalize` → `skipProxyUrlNormalize`.

**Turbopack is now the default**
`next dev` and `next build` both use Turbopack. Custom `webpack` config in `next.config.ts` will break the build — migrate or pass `--webpack` flag to opt out.

`turbopack` config moved from `experimental.turbopack` to top-level:
```ts
const nextConfig: NextConfig = { turbopack: { /* options */ } }
```

**Cache APIs**
- `revalidateTag` requires a second `cacheLife` profile argument: `revalidateTag('posts', 'max')`
- `unstable_cacheLife` / `unstable_cacheTag` → `cacheLife` / `cacheTag`
- New: `updateTag` (Server Actions only, immediate cache expiry + refresh); `refresh()` (refresh client router from a Server Action)
- PPR replaced by `cacheComponents: true` in `next.config.ts`

**`next/image` — local images with query strings**
Require explicit `images.localPatterns[].search` config or the build will reject them.

**React 19.2 features available**
`ViewTransition`, `useEffectEvent`, `Activity`. React Compiler stable opt-in: `reactCompiler: true` in `next.config.ts`.
