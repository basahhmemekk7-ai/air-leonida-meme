// Minimal 1080x1080 screenshot renderer (own script for the /tmp build).
// Usage: NODE_PATH=<playwright node_modules> node render.mjs [out.png]
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] ? path.resolve(process.argv[2]) : path.join(here, 'meme.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(here, 'index.html'), { waitUntil: 'load' });
await page.waitForTimeout(250);
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
