# Jean Paul Fernandez — Portfolio

Personal portfolio for [jpxoi.com](https://jpxoi.com), with project case studies, skills, and contact information. Built as a static site with Astro.

## Main technologies

- **Application:** [Astro](https://astro.build/) 7, [React](https://react.dev/) 19, and TypeScript.
- **Styles:** [Tailwind CSS](https://tailwindcss.com/) 4.
- **Integrations:** Formcarry for contact submissions, Cal.com for bookings, and external CDNs for media and skill icons.

## Getting started

### Requirements

- Node.js 24.
- pnpm, using the version declared in `packageManager` in [package.json](./package.json). Enable Corepack with `corepack enable` if needed.
- Portless, installed globally with `pnpm add -g portless` ([documentation](https://portless.sh/)).
- ImageMagick 7 with AVIF and WebP write support, only when processing project images.

### Installation

```bash
git clone https://github.com/jpxoi/portfolio.git
cd portfolio
pnpm install
```

### Local development

Portless is the standard local development tool:

```bash
portless run
```

It runs `dev` and serves the site at `https://portfolio.localhost`.

For another device on the same network:

```bash
portless run --lan
```

Open `https://portfolio.local` and configure the device to trust the [Portless local CA](https://portless.sh/https).

To share through ngrok, install and authenticate its CLI, then run:

```bash
portless run --ngrok
```

Use the public URL printed by Portless or listed by `portless list`.

## Development

### Checks

```bash
pnpm lint
pnpm typecheck
```

`lint` runs ESLint and a Prettier check; `typecheck` runs `astro check`. Use `pnpm format` to apply formatting.

### Content and integrations

- [src/data](./src/data): projects, skills, navigation, and contact information.
- [src/pages/projects/[slug].astro](./src/pages/projects/[slug].astro): project case study pages.
- [src/constants.ts](./src/constants.ts): CDN and Cal.com settings.
- [src/lib/contact-form-validation.ts](./src/lib/contact-form-validation.ts): contact form validation and the Formcarry endpoint.
- [src/content/legal/privacy.md](./src/content/legal/privacy.md): privacy policy content.

The site currently does not require environment variables. Contact submissions and bookings use the configured external services.

### Project images

The [image processing script](./scripts/process-project-images.sh) accepts PNG images that are exactly 1920 × 1080 pixels. It preserves relative paths and generates AVIF and WebP variants at 768, 1280, and 1920 pixels wide, alongside PNG copies.

```bash
pnpm images:projects --dry-run raw processed
pnpm images:projects raw processed
```

Replace `raw` and `processed` with the input and output directories. If omitted, the output directory is a sibling of the input named `processed`. `--clean` removes existing generated files after confirmation; `--dry-run` validates and reports actions without changing files. Unexpected output files are rejected rather than deleted.

## Deployment

```bash
pnpm build
pnpm preview
```

Astro generates static output in `dist/`; `preview` serves it locally. Publish `dist/` to the hosting used for `jpxoi.com`.

## Contributing

Create a branch from `main`, use Conventional Commits, and run the checks before opening a pull request. Publishing the repository does not grant permission to reuse the site's code, design, or content.

## Rights and reuse

Copyright (c) 2026 Jean Paul Fernandez. All rights reserved. The project's original source code, design, text, and media may not be copied, modified, distributed, or used commercially without prior written permission. Third-party components and assets remain subject to their respective licenses.
