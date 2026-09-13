<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

This repository is the canonical greenfield engineering substrate for landing pages. It standardizes implementation defaults without pre-solving product strategy, copy, brand, composition, art direction, or visual style.

This file governs engineering mechanics and invariants. The task or landing-page skill governs product/marketing decisions, creative direction, composition, and experience quality.

## Operating defaults

- Keep Next.js App Router, TypeScript, Tailwind CSS, and pnpm unless the task explicitly requires another architecture.
- Prefer Server Components. Add `"use client"` only at the smallest boundary that needs browser state, effects, events, or a client-only API.
- Keep public marketing content server-rendered/static when practical. Do not move content fetching or rendering to the client without a concrete reason.
- Prefer semantic HTML, CSS, and native browser behavior before adding abstractions or JavaScript.
- Use shadcn/ui as editable primitives, not as a visual language or page structure. Add only the primitives the page actually needs.
- Treat the starter theme, tokens, radius, and neutral colors as replaceable scaffolding, not an existing brand or design system. In greenfield work, adapt or replace them deliberately to match the chosen direction.
- Treat Aceternity and other registries as implementation sources after the creative direction is known. Never choose the direction by browsing a component catalog. Read and adapt imported code; demo styling is not design authority.
- Do not add a dependency when the current stack can express the behavior cleanly. Every dependency must solve a concrete capability need.
- Do not add abstractions, generic wrappers, utilities, or future-facing surfaces without a current consumer. Two clear similar implementations are better than a premature abstraction; extract only when repeated semantics in the current project justify it.
- Do not perform unrelated refactors or architecture cleanup while implementing a page.

## Motion and expressive effects

Use the smallest mechanism that delivers the intended effect:

1. CSS and browser APIs for simple transitions, reveals, hover/focus states, and straightforward scroll behavior.
2. Motion when coordinated React animation, gestures, layout animation, springs, presence, or scroll-linked behavior materially benefits the experience.
3. GSAP or another specialist tool only for a concrete requirement such as complex timelines, pinning, or choreography that the simpler layers do not handle cleanly.
4. Canvas, WebGL, Three.js/R3F, Spline, smooth-scroll libraries, and similar heavy mechanisms only when the creative direction specifically requires them.

Do not install motion or effects libraries speculatively. Respect `prefers-reduced-motion`; essential content and actions must remain usable without animation.

## Performance

- Keep client boundaries small and avoid page-wide client wrappers.
- Make the likely LCP asset discoverable early. Do not lazy-load above-the-fold primary media.
- Use `next/image` for raster images when appropriate, with correct intrinsic dimensions and responsive `sizes`. Prevent layout shifts by reserving media space.
- Use `next/font` or an equivalently controlled font-loading path. Load only the families, styles, and weights the design actually uses.
- Lazy-load below-the-fold heavy media and code when it materially reduces initial work.
- Avoid continuous main-thread work, unnecessary scroll listeners, and animation that runs while off-screen.
- Add third-party scripts only for an explicit product requirement and load them with an appropriate strategy.

## Accessibility and document quality

- Use correct landmarks, heading structure, native controls, labels, and meaningful link/button semantics.
- Preserve keyboard operation and visible focus behavior for interactive UI.
- Do not make hover, animation, canvas, video, or WebGL the only way to access essential information or actions.
- Keep primary marketing content present in the rendered document; do not require JavaScript merely to reveal core copy.
- Replace the starter's `lang="und"` sentinel with the page's real primary language before handoff.
- Add page metadata and social metadata appropriate to the project before handoff. Add canonical, robots, sitemap, or structured data only when the project context requires them.

## Responsive implementation

Treat mobile and desktop as intentional compositions, not one layout at different widths. Prevent horizontal overflow, preserve readable measure and tap targets, and verify that media, type, and interaction behavior remain deliberate at narrow viewports.

## Scope boundaries

Do not add auth, databases, CMS, analytics, state managers, form backends, deployment-specific infrastructure, WebGL, or other system capabilities unless the page has a concrete requirement for them. When a requirement has blast radius beyond the page, preserve the page contract and make the smallest system-level change necessary.

## Verification and evidence

Before handoff, run:

```bash
pnpm check
```

`check` is the mechanical floor: lint, typecheck, and production build. Also inspect the rendered page at representative mobile and desktop widths and check the browser for runtime errors, broken assets, clipping, horizontal overflow, keyboard/focus defects, and obvious motion/reduced-motion failures.

Never report a check, browser inspection, performance result, accessibility result, or runtime behavior as verified unless it was actually observed against the current project state. If a required capability is unavailable, report `NOT RUN — <reason>` and keep the claim unresolved rather than replacing evidence with inference. A green build does not substitute for browser inspection, and browser inspection does not substitute for measured performance or accessibility evidence.

## Current implementation sources

For Next.js APIs and conventions, follow the version-matched documentation named in the managed block above. For other tools, use current first-party documentation when installation or API details matter:

- React: https://react.dev/llms.txt
- shadcn/ui: https://ui.shadcn.com/llms.txt
- Base UI: https://base-ui.com/llms.txt
- Aceternity UI: https://ui.aceternity.com/llms.txt
- Motion: https://motion.dev/llms.txt
- Lucide: https://lucide.dev/llms.txt
