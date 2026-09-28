# Hypercliq website

The Hypercliq company site is a statically exported Next.js App Router project. It uses React, Tailwind CSS, and a small theme switcher. It is published to GitHub Pages.

## Local development

Use Node 24 LTS (`nvm use` reads `.nvmrc`), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The site content lives in `src/app`; the case study data is in `src/app/data/projects.ts`.

## Checks

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm audit
```

`npm run build` writes a static export to `out/`. Pull requests run formatting, lint, typecheck, and build checks. The release workflow builds and deploys `out/` when a GitHub release is published or the workflow is run manually. Merging a pull request does not publish the site.

## Content

The current project text describes work already represented in this repository. The LUMINOUS and Splat Viewer pages use silent, click-to-play videos in `public/luminous/` and `public/splat-viewer/`; their poster and video paths are in `src/app/data/media.ts`. The renovation clip edits together separate viewer recordings, with each scan loaded individually. The pages are set to `noindex` while they are reviewed locally. Remove that setting when the content is approved for publication. Review company facts and legal text before publishing a release.
