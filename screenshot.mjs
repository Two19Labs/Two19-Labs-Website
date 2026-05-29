import puppeteer from 'puppeteer'
import { mkdirSync } from 'fs'

const url = process.argv[2] || 'http://localhost:3000'
const out = process.argv[3] || 'full'
const width = Number(process.argv[4] || 1440)

mkdirSync('./temporary screenshots', { recursive: true })

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
// trigger reveal animations + lazy content by scrolling through
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0
    const step = () => {
      window.scrollBy(0, 600)
      y += 600
      if (y < document.body.scrollHeight) setTimeout(step, 60)
      else { window.scrollTo(0, 0); setTimeout(res, 400) }
    }
    step()
  })
})
// Force any not-yet-revealed elements visible so the capture reflects final layout
await page.evaluate(() => {
  document.querySelectorAll('[style*="opacity"]').forEach((el) => {
    el.style.opacity = '1'
    el.style.transform = 'none'
  })
})
await new Promise((r) => setTimeout(r, 500))
await page.screenshot({ path: `./temporary screenshots/${out}.png`, fullPage: true })
await browser.close()
console.log(`saved ./temporary screenshots/${out}.png @ ${width}px`)
