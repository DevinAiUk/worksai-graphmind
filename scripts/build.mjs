#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const stylesCss = fs.readFileSync(path.join(rootDir, 'src/ui/styles.css'), 'utf8');
const appJs = fs.readFileSync(path.join(rootDir, 'src/ui/app.js'), 'utf8');
const indexHtml = fs.readFileSync(path.join(rootDir, 'public/index.html'), 'utf8');
const serverTemplate = fs.readFileSync(path.join(rootDir, 'src/server.mjs'), 'utf8');

const compiled = serverTemplate
  .replace('__INJECT_STYLES_CSS__', () => JSON.stringify(stylesCss))
  .replace('__INJECT_APP_JS__', () => JSON.stringify(appJs))
  .replace('__INJECT_INDEX_HTML__', () => JSON.stringify(indexHtml));

fs.mkdirSync(path.join(rootDir, 'dist'), { recursive: true });
fs.writeFileSync(path.join(rootDir, 'dist/worker.mjs'), compiled, 'utf8');
fs.writeFileSync(path.join(rootDir, 'src/worker.mjs'), compiled, 'utf8');

console.log(`Built dist/worker.mjs (${Buffer.byteLength(compiled)} bytes)`);
