#!/usr/bin/env node
// Gate for the city rename (26 Nov 2026): counts bare "Aurangabad"/"AURANGABAD" (not preceded by "Sambhajinagar (" or "Sambhajinagar(")
// in content sources. Lowercase (slugs, ids, keys) is ignored; lines tagged RENAME-KEEP are skipped.
// Usage: node scripts/check-bare-aurangabad.js <file|dir> ...   Exit 1 if any bare hit.
const fs = require('fs');
const path = require('path');
const BARE = /(?<!sambhajinagar\s?\()(?<![\w\/@.-])aurangabad(?![\w-])/gi;
let hits = 0, files = 0;
function walk(p) {
  const st = fs.statSync(p);
  if (st.isDirectory()) { for (const f of fs.readdirSync(p)) walk(path.join(p, f)); return; }
  files++;
  fs.readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
    if (/RENAME-KEEP/.test(line)) return;
    BARE.lastIndex = 0;
    let m;
    while ((m = BARE.exec(line))) {
      if (m[0] !== 'Aurangabad' && m[0] !== 'AURANGABAD') continue; // lowercase = slug/id/key
      hits++;
      console.log(p + ':' + (i + 1) + ': ' + line.slice(Math.max(0, m.index - 40), m.index + 40));
    }
  });
}
process.argv.slice(2).forEach(walk);
console.log('files scanned: ' + files + ', bare hits: ' + hits);
process.exit(hits ? 1 : 0);
