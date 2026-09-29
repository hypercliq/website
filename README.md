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

Standard case studies live in `src/app/data/projects.ts`. Adding one there creates its card, detail route, and sitemap entry. Bespoke projects have their own pages and explicit sitemap entries. Company contact details live in `src/app/data/company.ts`.

The social share image source is `design/share-preview.svg`. Its logo paths mirror `src/app/components/LogoSVG.tsx`. After editing it, render a 1200 × 630 PNG with `rsvg-convert` to `src/app/opengraph-image.png`, then copy that PNG to `src/app/twitter-image.png`.

The LUMINOUS and Splat Viewer pages use silent, click-to-play videos in `public/luminous/` and `public/splat-viewer/`; their poster and video paths are in `src/app/data/media.ts`. Each video has a text description. The renovation clip edits together separate viewer recordings, with each scan loaded individually. The compressed MP4s and posters are part of the static export.

The Splat Viewer object recognition clips are excerpts from `gsplat_backpack_bottle_demo.mp4` (2:15–3:17) and `gsplat_pipe_detection_demo_improved.mp4` (2:15–3:11). They show the YOLO-World segment only; the full source recordings are not included in the site.

The Splat Viewer feature walkthrough ends before its Ricoh E57 segment. That footage appears in the shorter LUMINOUS video instead.
