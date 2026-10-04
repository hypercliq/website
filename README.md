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

Production builds require network access to Google Fonts for the configured Inter font.

Use `npm run start` after a build to preview the exported site locally.

## Content

Standard case studies live in `src/app/data/projects.ts`. Adding one there creates its card, detail route, and sitemap entry. Bespoke projects have their own pages and explicit sitemap entries. Company contact details live in `src/app/data/company.ts`.

The social share image source is `design/share-preview.svg`. Its logo paths mirror `src/app/components/LogoSVG.tsx`. After editing it, render a 1200 × 630 PNG with `rsvg-convert` to `src/app/opengraph-image.png`, then copy that PNG to `src/app/twitter-image.png`.

The LUMINOUS and Splat Viewer pages use silent, click-to-play videos in `public/luminous/` and `public/splat-viewer/`; their poster and video paths are in `src/app/data/media.ts`. Each video has a text description. The compressed MP4s and posters are part of the static export.

## Shared styles

UX01–UX08 should reuse the roles in `src/app/globals.css` and these helpers rather than adding local link decorations or focus rules. Keep positioning, widths, margins, and intentional one-off type scales local.

- `ContentLink` (`@/app/components/ContentLink`) accepts a string `href`, normal anchor props (including `target`, `rel`, `aria-*`, and handlers), `className`, `children`, `variant`, and `tone`. Internal paths use Next.js Link; external URLs, `mailto:`, `tel:`, and fragment-only hrefs use native anchors. Opening behavior is supplied by the caller.
- `variant="inline"` (default): accent, inherited weight, persistent native underline at **1px / 0.2em**, including wrapped lines, with native descender ink skipping. The shared `--link-inline-thickness` and `--link-inline-offset` tokens centralize these metrics. Internal prose has no arrow; external web URLs get **↗**. `variant="action"`: semibold, always underlined at **2px / 0.5em**, with **→** for internal destinations and **↗** for external web destinations. Contact URLs never get arrows; action contact links inherit weight, so retain contextual `font-semibold` and size classes where appropriate.
- `variant="back"`: smaller action with a leading **←** and no trailing marker. `variant="primary"`: filled accent background and contrasting text, no underline; retain contextual padding. `variant="nav"`: inherited subdued color; hover changes the text to accent without an underline. It has no internal arrow and uses **↗** for external social links. Header Next Links use `nav-link` and `nav-link-active`; the active indicator stays **2px / 0.5rem** and remains visible on hover.
- Write labels without arrows. The helper hides decorative markers from assistive technology and keeps a trailing marker attached to the last word. Use `tone="on-accent"` on accent surfaces for contrasting text and focus. Whole cards remain one Next Link with `project-card` and `project-card-title` (title underlined on hover and keyboard focus); their “View project” marker is decorative **→**.
- Links, summaries (Menu and video descriptions), and theme selects share a **2px focus-visible outline / 4px offset** using the theme foreground. `on-accent` uses the contrasting accent foreground; `media-panel` uses the fixed media foreground. Keep outlines clear of ancestor clipping and leave native video controls intact. Hover treatments do not move or animate content.
- `site-container` preserves the 80rem maximum width and 1.5rem horizontal padding (2rem from 768px). `section-standard` is 4rem vertically (6rem from 768px); `section-generous` is 5rem (7rem from 768px). Do not substitute one for the other. Footer and closing CTA spacing remain local.
- Typography: `eyebrow`, `eyebrow-compact`, and `eyebrow-brand` preserve 0.18em, 0.16em, and 0.2em tracking. `heading-page`, `heading-project`, `heading-section`, `heading-section-compact`, `heading-subsection`, and `heading-item` preserve the existing responsive type scales. `type-intro` is 1.25rem/2rem, `type-body` is 1.125rem/2rem, and `type-prose` supplies 1.75rem line-height. These classes omit widths, margins, and foreground colors; compose those locally. Keep special hero and card heading treatments where they differ.
- Border colors: `border-frame` (10%), `border-divider` (15%), `border-boundary` (20%), and `border-control` (25%) retain the existing foreground-opacity hierarchy. Supply actual border sides/widths locally; never use borders to imitate link underlines. ProjectVideo uses the fixed `--media-background`, `--media-foreground`, `--media-muted`, and `--media-divider` tokens via media classes in both themes.
- `ContactCTA` (`@/app/components/ContactCTA`) renders the original CaseStudy closing wording and `/contact` action. Use `<ContactCTA />` at existing closing placements. Its optional `secondaryAction={{ href: '/work', children: 'Browse all projects' }}` renders a second action within the same layout; UX0 does not supply it or add new closing placements.

Standalone actions reserve 0.375rem beyond their line-height to retain the former underline-border/padding hit area without an underline border or padding. Action underline thicknesses and offsets are centralized as `--link-*` tokens. Reuse them for new roles rather than adding page-specific exceptions. The em offsets scale with Inter, wrapped labels, and large Contact details.
