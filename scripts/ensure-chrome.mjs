// Make sure a Chromium build exists before prerendering. Locally it's already
// in puppeteer's cache (no-op). On Vercel's build container it usually isn't,
// so download it here. Keeps `npm run build` self-contained on any host.
import { existsSync } from 'fs'
import { execSync } from 'child_process'
import puppeteer from 'puppeteer'

let path = ''
try { path = puppeteer.executablePath() } catch {}

if (path && existsSync(path)) {
  console.log('Chrome present:', path)
} else {
  console.log('Chrome not found, installing for prerender...')
  execSync('npx --yes puppeteer browsers install chrome', { stdio: 'inherit' })
}
