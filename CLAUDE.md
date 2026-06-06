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

**Route structure:**
```
app/
  layout.tsx           # root layout — Geist + Kanit fonts, html/body wrapper
  globals.css          # Tailwind v4 + brand CSS classes
  (public)/
    layout.tsx         # wraps all public pages with <Navbar> + <Footer>
    page.tsx           # home (composes components/home/* sections)
    products/page.tsx
    why-invest/page.tsx
    portfolio/page.tsx
    blog/page.tsx
    careers/page.tsx
    promotions/page.tsx
components/
  layout/              # Navbar, Footer (shared chrome)
  home/                # one component per home page section
  products/            # one component per products page section
  why-invest/          # ... same pattern for all other pages
  portfolio/
  blog/
  careers/
  promotions/
  ui/                  # shadcn components (currently: button.tsx)
lib/
  site-config.ts       # NAV_LINKS, FOOTER_PRODUCTS, CONTACT — single source of truth for nav/footer data
  utils.ts             # cn() helper (clsx + tailwind-merge)
```

**Page composition pattern:** Each page is a Server Component that composes section-level components from `components/<page>/`. Each section component is self-contained (data is hardcoded; no shared state or props between sections). Add new pages by creating `app/(public)/<name>/page.tsx` — the `(public)` layout automatically adds Navbar/Footer.

## Styling

**CSS classes from `globals.css` are the primary styling mechanism** — not Tailwind utility classes. The file defines a full design system of reusable CSS classes:

- Layout: `.safe-container` (max 1180px centered), `.section` / `.section-sm` (vertical padding)
- Typography: `.eyebrow`, `.section-title`, `.section-desc`
- Buttons: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-line`
- Cards: `.stat-card`, `.card`, `.feature-card`, `.product-card`
- Page-specific prefixed classes: `.safe-products-page .products-hero`, etc.

Brand tokens (in `:root`): `--brand-primary` (#0ea5e9), `--primary-dark`, `--primary-deep`, `--blue`, `--brand-muted`, `--brand-border`, `--brand-radius`.

Use these CSS classes when building new sections. Tailwind utilities supplement where no class exists. The `cn()` helper from `@/lib/utils` merges class strings.

**shadcn** is configured with the `base-nova` style and `@base-ui/react` primitives (not Radix). Add components via `npx shadcn add <component>`. Icon library: `lucide-react`.

**Fonts:** Kanit (Thai/Latin, weights 300–800) is the default `--font-sans` and `--font-heading`. Geist Mono is the monospace font. Both are loaded in `app/layout.tsx`.

**Remote images:** Only `images.unsplash.com` is whitelisted in `next.config.ts`. All current visuals are CSS-rendered (no real product images).

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
