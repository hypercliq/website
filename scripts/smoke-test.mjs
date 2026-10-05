import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import assert from 'node:assert/strict'

const outDir = fileURLToPath(new URL('../out/', import.meta.url))

function isFile(file) {
  try {
    return statSync(file).isFile()
  } catch {
    return false
  }
}

function checkLocalUrl(url, source) {
  if (!url.startsWith('/') || url.startsWith('//')) return

  const pathname = new URL(url, 'https://hypercliq.com').pathname
  const relative = decodeURIComponent(pathname).replace(/^\/+|\/+$/g, '')
  const candidates = relative
    ? [relative, `${relative}.html`, path.join(relative, 'index.html')]
    : ['index.html']

  if (!candidates.some((candidate) => isFile(path.join(outDir, candidate)))) {
    throw new Error(`Missing export for ${url} (referenced by ${source})`)
  }
}

const htmlFiles = readdirSync(outDir, { recursive: true }).filter((file) =>
  file.endsWith('.html'),
)
if (htmlFiles.length === 0)
  throw new Error('No exported HTML found; run npm run build first')

const projectSource = readFileSync(
  new URL('../src/app/data/projects.ts', import.meta.url),
  'utf8',
)
const projectSlugs = [
  'luminous',
  'splat-viewer',
  ...[...projectSource.matchAll(/slug: '([^']+)'/g)].map(([, slug]) => slug),
]
assert.equal(projectSlugs.length, 8, 'Check every existing project')

const bridges = [
  ['/solutions', '/work'],
  ['/domains', '/fields'],
  ...projectSlugs.map((slug) => [`/solutions/${slug}`, `/work/${slug}`]),
  [
    '/solutions/innovation-concept-consulting',
    '/work/sustainable-design-data-management-platform',
  ],
]

function readPage(route) {
  return readFileSync(path.join(outDir, `${route.slice(1)}.html`), 'utf8')
}

for (const route of [
  '/',
  '/work',
  '/fields',
  ...projectSlugs.map((slug) => `/work/${slug}`),
  ...bridges.map(([route]) => route),
]) {
  checkLocalUrl(route, 'required page')
}

const sitemap = readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
if (sitemapUrls.length === 0) throw new Error('Sitemap has no URLs')
for (const [, url] of sitemapUrls) {
  const route = new URL(url).pathname
  checkLocalUrl(route, 'sitemap.xml')
  assert(!/^\/(solutions|domains)(\/|$)/.test(route), 'No legacy sitemap URLs')
}

for (const route of [
  '/work',
  '/fields',
  ...projectSlugs.map((slug) => `/work/${slug}`),
]) {
  assert(
    sitemapUrls.some(([, url]) => new URL(url).pathname === route),
    `${route} in sitemap`,
  )
  const html = readPage(route)
  assert(
    html.includes(`rel="canonical" href="https://hypercliq.com${route}"`),
    `${route} canonical`,
  )
  assert(!html.includes('noindex'), `${route} is indexable`)
  const section = route.startsWith('/work/') ? '/work' : route
  const current = route.startsWith('/work/') ? 'location' : 'page'
  assert(
    [...html.matchAll(/<a\b[^>]*>/g)].filter(
      ([tag]) =>
        tag.includes(`href="${section}"`) &&
        tag.includes(`aria-current="${current}"`),
    ).length === 2,
    `${route} active navigation`,
  )
}

for (const [route, destination] of bridges) {
  const html = readPage(route)
  assert(
    html.includes(`rel="canonical" href="https://hypercliq.com${destination}"`),
    `${route} canonical`,
  )
  assert(html.includes('content="noindex, follow"'), `${route} noindex`)
  assert(html.includes(`href="${destination}"`), `${route} direct destination`)
  assert(
    !/<(?:video|img)\b/.test(html),
    `${route} has no duplicated project media`,
  )
}

for (const file of htmlFiles) {
  const html = readFileSync(path.join(outDir, file), 'utf8')
  if (!file.endsWith('404.html')) {
    assert(html.includes('href="#main-content"'), `${file} skip link`)
    assert(
      html.includes('id="main-content" tabindex="-1"'),
      `${file} skip target`,
    )
  }
  for (const [, url] of html.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)) {
    checkLocalUrl(url, file)
    assert(
      !/^\/(solutions|domains)(\/|$)/.test(url),
      `${file} links directly to new routes`,
    )
  }
}

console.log(
  `Smoke test passed: ${htmlFiles.length} pages and ${sitemapUrls.length} sitemap URLs checked`,
)
