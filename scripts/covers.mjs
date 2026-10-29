// Makes the WebP versions of every project cover in public/projects:
// name-640.webp for the cards and name.webp for large screens (the site picks one with srcset).
// Run after adding or replacing a cover JPEG: npm run covers
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const dir = new URL('../public/projects/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const kb = (file) => Math.round(statSync(file).size / 1024)

for (const file of readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
  const base = join(dir, file.replace(/\.jpg$/, ''))
  await sharp(join(dir, file)).resize({ width: 640 }).webp({ quality: 78 }).toFile(`${base}-640.webp`)
  await sharp(join(dir, file)).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${base}.webp`)
  console.log(`${file}: ${kb(join(dir, file))} KB -> ${kb(`${base}-640.webp`)} KB (cards), ${kb(`${base}.webp`)} KB (large)`)
}
