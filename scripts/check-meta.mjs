import { readFileSync } from 'fs'
import { join } from 'path'
import { services } from '../src/data/content.js'

const routes = [
  { path: 'index.html', label: '/' },
  ...services.map((s) => ({ path: join('services', s.slug, 'index.html'), label: `/services/${s.slug}` })),
]

const pick = (html, re) => (html.match(re)?.[1] ?? 'MISSING').trim().replace(/\s+/g, ' ')

for (const r of routes) {
  const h = readFileSync(join('dist', r.path), 'utf8')
  const bodyText = (h.split('<body>')[1] || '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  console.log(`\n=== ${r.label} ===`)
  console.log('body text chars :', bodyText.length)
  console.log('title           :', pick(h, /<title[^>]*>([^<]*)<\/title>/))
  console.log('description     :', pick(h, /name="description"[^>]*content="([^"]*)"/).slice(0, 90))
  console.log('canonical       :', pick(h, /rel="canonical"[^>]*href="([^"]*)"/))
  console.log('og:title        :', pick(h, /property="og:title"[^>]*content="([^"]*)"/))
  console.log('og:url          :', pick(h, /property="og:url"[^>]*content="([^"]*)"/))
  console.log('og:image        :', pick(h, /property="og:image"[^>]*content="([^"]*)"/))
  console.log('og:type         :', pick(h, /property="og:type"[^>]*content="([^"]*)"/))
  console.log('twitter:card    :', pick(h, /name="twitter:card"[^>]*content="([^"]*)"/))
  // duplicate description guard
  const descCount = (h.match(/name="description"/g) || []).length
  console.log('description tags :', descCount, descCount === 1 ? 'OK' : 'DUPLICATE!')
}
