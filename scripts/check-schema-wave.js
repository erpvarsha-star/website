// Local gate for schema-payloads/*.json: parse, required props, DNP/rejected-claim scan, size limits.
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'schema-payloads');
const REQ = { Organization: ['name', 'legalName', 'url', 'hasCredential', 'location'], Person: ['name', 'jobTitle', 'worksFor'], Product: ['name', 'manufacturer', 'additionalProperty'], BreadcrumbList: ['itemListElement'] };
const BAD = [/CQI-?9/i, /ARAI/i, /\bsolar\b/i, /\benergy\b/i, /\bCIN\b/, /\bU\d{5}[A-Z]{2}\d{4}/, /\b\d+\s*(CNC|VMC|HMC)\b/i, /(CNC|VMC|HMC)\s*[x×]\s*\d/i, /RDSO/i, /0\.5.{0,6}50 ?kg/, /±0\.01/];
let fail = 0;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) {
  const p = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const s = p.tags.find((t) => t.type === 'script');
  const ld = JSON.parse(s.children);
  const nodes = ld['@graph'];
  const errs = [];
  for (const n of nodes) {
    const types = [].concat(n['@type']);
    for (const ty of types) for (const k of (REQ[ty] || [])) if (n[k] === undefined) errs.push(ty + ' missing ' + k);
    if (types.includes('Organization') && n.hasCredential) {
      const names = n.hasCredential.map((c) => c.name).join('|');
      if (names !== 'IATF 16949|ISO 9001:2015|ISO 45001:2018|ISO 14001:2015') errs.push('credentials not the four: ' + names);
      if (!(types.length === 2 && types[0] === 'Organization' && types[1] === 'Manufacturer')) errs.push('type not [Organization,Manufacturer]');
      if (n.location.length !== 2) errs.push('need 2 plants');
    }
  }
  for (const re of BAD) if (re.test(s.children)) errs.push('banned pattern ' + re);
  const bytes = Buffer.byteLength(s.children), chars = JSON.stringify(p.tags).length;
  if (bytes >= 4096) errs.push('LD bytes ' + bytes);
  if (chars > 3600) errs.push('tag set chars ' + chars);
  console.log(f, nodes.map((n) => [].concat(n['@type']).join('+')).join(','), 'ldBytes=' + bytes, 'tagSetChars=' + chars, errs.length ? 'FAIL ' + errs.join('; ') : 'OK');
  fail += errs.length;
}
process.exit(fail ? 1 : 0);
