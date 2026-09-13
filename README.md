# Landing Page Starter

Neutral greenfield substrate for high-end landing pages.

It standardizes the engineering floor without standardizing the design: Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui configuration, Aceternity available on demand, and a small verification contract.

## Start

```bash
pnpm install
pnpm dev
```

The root page is intentionally blank. The neutral shadcn theme is replaceable scaffolding, not design direction; set the real page language and metadata as part of the implementation.

## Components

Add shadcn/ui primitives only when needed:

```bash
pnpm dlx shadcn@latest add button
```

Add Aceternity components only when the creative direction earns them:

```bash
pnpm dlx shadcn@latest add @aceternity/spotlight
```

## Verify

```bash
pnpm check
```

The starter intentionally contains no landing-page sections, brand typography, opinionated palette, animation system, auth, database, CMS, analytics, or deployment-specific infrastructure. `AGENTS.md` owns the engineering contract for agent-driven work.
