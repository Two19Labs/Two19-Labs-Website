import { createServer } from 'http'
import { readFile } from 'fs/promises'
import { extname, join, normalize } from 'path'

const root = process.cwd()
const port = Number(process.argv[2] || 3000)
const types = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json',
}

createServer(async (req, res) => {
  try {
    let url = decodeURIComponent(req.url.split('?')[0])
    if (url === '/') url = '/index1.html'
    const file = normalize(join(root, url))
    if (!file.startsWith(root)) { res.writeHead(403).end('Forbidden'); return }
    const data = await readFile(file)
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' })
    res.end(data)
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found')
  }
}).listen(port, () => console.log(`serving ${root} at http://localhost:${port}`))
