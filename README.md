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

`npm run build` writes a static export to `out/`. The smoke test checks that sitemap routes and local links and assets in the export resolve. Pull requests and releases run formatting, lint, typecheck, build, and smoke checks. On pushes to `main`, a lightweight API check reuses successful PR validation when the pushed commit is the PR's merge commit and the latest PR check run for its exact head commit succeeded. Direct pushes, missing or unsuccessful PR checks, and API failures run the full checks. This supports merge, squash, and rebase merges without relying on commit messages. Keep the required `check` status and up-to-date PR requirement enabled in branch protection; admins can bypass protection for emergency direct pushes.

The release workflow deploys `out/` when a GitHub release is published or the workflow is run manually. Merging a pull request does not publish the site.

Production builds require network access to Google Fonts for the configured Inter font.

Use `npm run start` after a build to preview the exported site locally.

## Dependency upgrades

Use the [official Next.js upgrade command](https://nextjs.org/docs/app/getting-started/upgrading) to update Next.js, React, and the Next.js ESLint configuration:

```sh
npx next upgrade --revision latest
```

Then update other dependencies and run all checks above. Keep `@types/node` on the Node 24 major used by development and CI. TypeScript 6 is the newest major supported by the current TypeScript ESLint parser; Next's React, import, and accessibility ESLint plugins still require ESLint 9. Recheck their peer dependencies before upgrading either major.

The scoped `serve` override updates its pinned `compression` dependency to the security-patched 1.8.2 or later. Remove it when `serve` includes that fix. The remaining `minimatch` audit advisory affects development tooling; its fix requires a major version outside current upstream ranges.

## Shared styles

Reuse `ContentLink`, shared layout and typography tokens, and existing components. Preserve accessible focus states and native media controls.
