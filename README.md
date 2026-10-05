# Hypercliq website

The Hypercliq company site is a statically exported Next.js App Router project. It uses React, Tailwind CSS, and a small theme switcher. It is published to GitHub Pages.

## Local development

Use Node 24 LTS (`nvm use` reads `.nvmrc`), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run smoke
npm audit
```

`npm run build` writes a static export to `out/`. The smoke test checks that sitemap routes and local links and assets in the export resolve. Pull requests and releases run formatting, lint, typecheck, build, and smoke checks. The release workflow deploys `out/` when a GitHub release is published or the workflow is run manually. Merging a pull request does not publish the site.

Production builds require network access to Google Fonts for the configured Inter font.

Use `npm run start` after a build to preview the exported site locally.

## Shared styles

Reuse `ContentLink`, shared layout and typography tokens, and existing components. Preserve accessible focus states and native media controls.
