// Renders meme/index.html to a 1080x1080 PNG with Playwright.
// Usage: NODE_PATH=<path to node_modules with playwright> node meme/render.mjs [out.png]
//   (default output: meme.png in the repo root)
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const out = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'meme.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(here, 'index.html'), { waitUntil: 'load' });
await page.waitForTimeout(250); // let fonts settle
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
