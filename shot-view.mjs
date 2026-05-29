import puppeteer from 'puppeteer'
import { mkdirSync } from 'fs'

const url = process.argv[2] || 'http://localhost:3000'
const out = process.argv[3] || 'view'
const scrollY = Number(process.argv[4] || 0)
const width = Number(process.argv[5] || 1440)

mkdirSync('./temporary screenshots', { recursive: true })
const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width, height: 900, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
await page.evaluate((y) => window.scrollTo(0, y), scrollY)
await page.evaluate(() => {
  document.querySelectorAll('[style*="opacity"]').forEach((el) => {
    el.style.opacity = '1'
    el.style.transform = 'none'
  })
})
await new Promise((r) => setTimeout(r, 600))
await page.screenshot({ path: `./temporary screenshots/${out}.png` })
await browser.close()
console.log(`saved ${out}.png @ y=${scrollY} w=${width}`)
