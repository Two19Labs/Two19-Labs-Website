// Static prerender: build SPA first (vite build), then this script boots a tiny
// SPA-fallback server over ./dist, visits each route in a headless browser, and
// writes the fully-rendered HTML back to dist/<route>/index.html. Crawlers and the
// first paint now get real content + per-route <head>; the client hydrates on top.
import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFile, mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { extname, join, normalize, dirname } from 'path'
import { services } from '../src/data/content.js'

const DIST = join(process.cwd(), 'dist')
const PORT = 4178

const routes = ['/', ...services.map((s) => `/services/${s.slug}`)]

const types = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.json': 'application/json', '.woff': 'font/woff', '.woff2': 'font/woff2',
}

// Serve real files from dist; fall back to index.html for unknown paths (SPA routing).
const server = createServer(async (req, res) => {
  try {
    let url = decodeURIComponent(req.url.split('?')[0])
    let file = normalize(join(DIST, url))
    if (!file.startsWith(DIST)) { res.writeHead(403).end('Forbidden'); return }
    if (!existsSync(file) || !extname(file)) file = join(DIST, 'index.html')
    const data = await readFile(file)
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'text/html' })
    res.end(data)
  } catch {
    res.writeHead(404).end('Not found')
  }
})

await new Promise((r) => server.listen(PORT, r))
console.log(`prerender server on :${PORT}`)

const browser = await puppeteer.launch({ headless: 'new' })

for (const route of routes) {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 60000 })
  // Wait until React has painted real content into #root.
  await page.waitForFunction(() => document.querySelector('#root')?.children.length > 0, { timeout: 15000 })
  const html = await page.content()
  const outPath = route === '/'
    ? join(DIST, 'index.html')
    : join(DIST, route.replace(/^\//, ''), 'index.html')
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, html, 'utf8')
  console.log(`prerendered ${route} -> ${outPath.replace(process.cwd(), '.')}`)
  await page.close()
}

await browser.close()
server.close()
console.log('prerender done')
