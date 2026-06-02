import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFile } from 'fs/promises'
import { existsSync, readFileSync } from 'fs'
import { extname, join, normalize } from 'path'

const DIST = join(process.cwd(), 'dist')
const PORT = 4182
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2' }
const server = createServer(async (req, res) => {
  try { let u = decodeURIComponent(req.url.split('?')[0]); let f = normalize(join(DIST, u)); if (!existsSync(f) || !extname(f)) f = join(DIST, 'index.html'); res.writeHead(200, { 'Content-Type': types[extname(f)] || 'text/html' }); res.end(await readFile(f)) } catch { res.writeHead(404).end() }
})
await new Promise((r) => server.listen(PORT, r))

// Server text-node list, straight from the file (no JS run).
const serverHtml = readFileSync(join(DIST, 'index.html'), 'utf8')
const rootHtml = serverHtml.split('<div id="root">')[1].split('<script')[0]
const decode = (s) => s
  .replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&#x27;/g, "'")
  .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
const serverText = rootHtml.replace(/<[^>]*>/g, '\n').split('\n').map((s) => decode(s.trim())).filter(Boolean)

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
// capture the FIRST client render by snapshotting before hydration reconciles:
// disable IO here too so client initial == server initial is the expectation.
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded' })
await new Promise((r) => setTimeout(r, 1500))
const clientText = await page.evaluate(() => {
  const out = []
  const walk = (n) => { for (const c of n.childNodes) { if (c.nodeType === 3) { const t = c.textContent.trim(); if (t) out.push(t) } else walk(c) } }
  walk(document.getElementById('root'))
  return out
})
await browser.close(); server.close()

const max = Math.max(serverText.length, clientText.length)
let shown = 0
for (let i = 0; i < max && shown < 20; i++) {
  if (serverText[i] !== clientText[i]) {
    console.log(`#${i}\n  server: ${JSON.stringify(serverText[i])}\n  client: ${JSON.stringify(clientText[i])}`)
    shown++
  }
}
if (!shown) console.log('no text-node differences')
console.log(`server nodes: ${serverText.length}, client nodes: ${clientText.length}`)
