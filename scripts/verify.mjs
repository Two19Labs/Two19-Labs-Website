// Serve the prerendered dist (correct MIME + SPA fallback), then for every route:
//  - load it, collect console errors / page errors (hydration check)
//  - screenshot to ./temporary screenshots/after-<name>.png (pixel-match check)
import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import { extname, join, normalize } from 'path'
import { services } from '../src/data/content.js'

const DIST = join(process.cwd(), 'dist')
const PORT = 4180
const types = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
}

const server = createServer(async (req, res) => {
  try {
    let url = decodeURIComponent(req.url.split('?')[0])
    let file = normalize(join(DIST, url))
    if (!file.startsWith(DIST)) { res.writeHead(403).end(); return }
    if (!existsSync(file) || !extname(file)) {
      const idx = join(file, 'index.html')
      file = existsSync(idx) ? idx : join(DIST, 'index.html')
    }
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'text/html' })
    res.end(await readFile(file))
  } catch { res.writeHead(404).end() }
})
await new Promise((r) => server.listen(PORT, r))

const routes = [
  { name: 'home', path: '/' },
  { name: 'custom-software-development', path: '/services/custom-software-development' },
  { name: 'cto', path: '/services/cto-as-a-service' },
  { name: 'ai', path: '/services/ai-automation' },
  { name: 'web', path: '/services/web-development' },
  { name: 'integrations', path: '/services/system-integrations' },
  { name: 'support', path: '/services/support-maintenance' },
]

const browser = await puppeteer.launch({ headless: 'new' })
let totalErrors = 0
let totalHydration = 0

for (const r of routes) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
  const errs = []
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()) })
  page.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message))
  await page.goto(`http://localhost:${PORT}${r.path}`, { waitUntil: 'networkidle0', timeout: 60000 })
  await new Promise((res) => setTimeout(res, 1200))
  // scroll to trigger reveals, then force final state for a stable capture
  await page.evaluate(async () => {
    await new Promise((res) => { let y = 0; const s = () => { window.scrollBy(0, 600); y += 600; if (y < document.body.scrollHeight) setTimeout(s, 50); else { window.scrollTo(0, 0); setTimeout(res, 300) } }; s() })
  })
  await page.evaluate(() => document.querySelectorAll('[style*="opacity"], .reveal').forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none' }))
  await new Promise((res) => setTimeout(res, 400))
  await page.screenshot({ path: `./temporary screenshots/after-${r.name}.png`, fullPage: true })
  const hyd = errs.filter((e) => /hydrat|did not match|mismatch/i.test(e))
  totalErrors += errs.length
  totalHydration += hyd.length
  console.log(`${r.path.padEnd(42)} console-errors:${errs.length}  hydration:${hyd.length}`)
  errs.slice(0, 3).forEach((e) => console.log('     · ' + e.slice(0, 150)))
  await page.close()
}

await browser.close()
server.close()
console.log(`\nTOTAL console errors: ${totalErrors} | hydration mismatches: ${totalHydration}`)
