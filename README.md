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
npm run smoke
npm audit
```

`npm run build` writes a static export to `out/`. The smoke test checks that sitemap routes and local links and assets in the export resolve. Pull requests and releases run formatting, lint, typecheck, build, and smoke checks. The release workflow deploys `out/` when a GitHub release is published or the workflow is run manually. Merging a pull request does not publish the site.

Use `npm run start` after a build to preview the exported site locally.

## Content

Standard case studies live in `src/app/data/projects.ts`. Adding one there creates its card, detail route, and sitemap entry. Bespoke projects need an explicit page and a summary record in the same data file; add them to the sitemap when they are ready to be indexed. Company contact details live in `src/app/data/company.ts`.

The LUMINOUS and Splat Viewer pages use silent, click-to-play videos in `public/luminous/` and `public/splat-viewer/`; their poster and video paths are in `src/app/data/media.ts`. The renovation clip edits together separate viewer recordings, with each scan loaded individually. Keep only delivery-ready MP4s and posters in `public/`, and check that labels inside new videos remain readable at normal playback size after compression. Videos are versioned in Git and copied into every static export, so review their file sizes before adding more. The pages are set to `noindex` while they are reviewed locally. Remove that setting and add them to the sitemap when their content is approved for publication. Review company facts and legal text before publishing a release.
