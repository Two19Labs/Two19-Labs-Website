// One-off generator for the default social share image (public/og-image.png).
// Renders an on-brand 1200x630 card and screenshots it. Re-run if branding changes.
import puppeteer from 'puppeteer'

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500&display=swap');
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#08080B;color:#fff;
  font-family:'Space Grotesk',sans-serif;display:flex;flex-direction:column;
  justify-content:center;padding:90px;position:relative;overflow:hidden}
.glow{position:absolute;top:-220px;right:-120px;width:560px;height:560px;
  background:radial-gradient(circle,#2540FF 0%,transparent 65%);opacity:.55;filter:blur(20px)}
.kic{font-family:'JetBrains Mono',monospace;font-size:22px;letter-spacing:.18em;
  text-transform:uppercase;color:#8aa0ff;margin-bottom:34px}
h1{font-size:96px;font-weight:700;line-height:1.02;letter-spacing:-.03em;max-width:980px}
h1 b{color:#2540FF}
p{margin-top:30px;font-size:30px;font-weight:500;color:#b8b8c4;max-width:820px;line-height:1.35}
.brand{position:absolute;bottom:70px;left:90px;font-size:26px;font-weight:700;letter-spacing:-.01em}
.brand span{color:#2540FF}
</style></head>
<body>
  <div class="glow"></div>
  <div class="kic">Custom Software · AI Automation</div>
  <h1>Build smarter.<br><b>Scale faster.</b></h1>
  <p>Custom software, AI workflows & automation systems — built from scratch. No templates.</p>
  <div class="brand">Two19<span> Labs</span></div>
</body></html>`

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 400))
await page.screenshot({ path: './public/og-image.png' })
await browser.close()
console.log('wrote public/og-image.png')
