// Injects the server-rendered app into dist/index.html so crawlers see the content without running JS.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const indexPath = resolve('dist/index.html')
const template = readFileSync(indexPath, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error('prerender: root marker not found in dist/index.html')

writeFileSync(indexPath, template.replace(marker, `<div id="root">${render()}</div>`))
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('prerender: dist/index.html updated')
