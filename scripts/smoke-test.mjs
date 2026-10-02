import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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

for (const route of [
  '/',
  '/solutions',
  '/solutions/innovation-concept-consulting',
  '/solutions/luminous',
  '/solutions/splat-viewer',
]) {
  checkLocalUrl(route, 'required page')
}

const sitemap = readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
if (sitemapUrls.length === 0) throw new Error('Sitemap has no URLs')
for (const [, url] of sitemapUrls) {
  checkLocalUrl(new URL(url).pathname, 'sitemap.xml')
}

for (const file of htmlFiles) {
  const html = readFileSync(path.join(outDir, file), 'utf8')
  for (const [, url] of html.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)) {
    checkLocalUrl(url, file)
  }
}

console.log(
  `Smoke test passed: ${htmlFiles.length} pages and ${sitemapUrls.length} sitemap URLs checked`,
)
