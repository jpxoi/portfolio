# Jean Paul Fernandez — Portfolio

Personal portfolio site for [jpxoi.com](https://jpxoi.com). Static site built with Astro, styled with Tailwind CSS, and deployed as pre-rendered HTML.

## Stack

- [Astro](https://astro.build) 6
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript
- [Boxicons](https://boxicons.com) via `@boxicons/react` (SSR icons)

## Project structure

```text
/
├── public/              Static assets (favicons, manifest, robots.txt)
├── src/
│   ├── components/      Astro UI components
│   ├── data/            Content (projects, skills, services, etc.)
│   ├── layouts/         Page shell (Layout.astro)
│   ├── lib/             Client-side helpers (theme, header, hero, skills)
│   ├── pages/           Routes (index, 404, privacy)
│   ├── styles/          Global CSS (Tailwind + custom styles)
│   └── types/           Shared TypeScript types
└── astro.config.mjs
```

## Commands

| Command          | Action                         |
| :--------------- | :----------------------------- |
| `pnpm install`   | Install dependencies           |
| `pnpm dev`       | Dev server at `localhost:4321` |
| `pnpm build`     | Production build to `./dist/`  |
| `pnpm preview`   | Preview the production build   |
| `pnpm typecheck` | Run TypeScript                 |
| `pnpm lint`      | ESLint + Prettier check        |
| `pnpm format`    | Format with Prettier           |
