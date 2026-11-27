// Builds INTERNATIONAL-PLAN.md A10 schema-expansion payloads (repo files only; NEVER writes to Wix).
// Base tags come from the VflWebsite 2026-11-26 rename backup (the same source gen-seo-override.js uses).
// Every factual value below is copied from FACTS.md. Usage:
//   node scripts/gen-schema-wave.js [path-to-rename-csn-backup-apply-*.json]
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const BACKUP = process.argv[2] || '/home/user/vflwebsite/ops/results/rename-csn-backup-apply-2026-11-26T12-11-00-412Z.json';
const backup = JSON.parse(fs.readFileSync(BACKUP, 'utf8'));
const SITE = 'https://www.varshaforgings.com';
const ORG_ID = SITE + '/#organization';
const CITY = 'Chhatrapati Sambhajinagar (Aurangabad)'; // FACTS "City name"
const PHONE = '+91 8411000551';
const WRITE_LIMIT = 3600, LD_LIMIT = 4096;

const org = {
  '@type': ['Organization', 'Manufacturer'], '@id': ORG_ID,
  name: 'Varsha Forgings', legalName: 'Varsha Forgings Private Limited', url: SITE, foundingDate: '1989',
  email: 'marketing@varshaforgings.com', telephone: PHONE,
  description: 'India-based manufacturer of closed-die forgings, precision machining and assembly components.',
  sameAs: ['https://www.linkedin.com/company/varsha-forgings-private-limited/'],
  location: [
    { '@type': 'Place', name: 'Varsha Forgings Plant 1 (Forging), ' + CITY,
      address: { '@type': 'PostalAddress', streetAddress: 'Plot No. B-7, MIDC Waluj', addressLocality: CITY, addressRegion: 'Maharashtra', postalCode: '431136', addressCountry: 'IN' } },
    { '@type': 'Place', name: 'Varsha Forgings Plant 2 (Assembly), Pune',
      address: { '@type': 'PostalAddress', streetAddress: 'Gut No. 161, Mauje-Markal, Tal-Khed', addressLocality: 'Pune', addressRegion: 'Maharashtra', postalCode: '412105', addressCountry: 'IN' } }
  ],
  // FACTS Certifications: these four only. No issuing body, no expiry (FACTS).
  hasCredential: ['IATF 16949', 'ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015'].map((n) => ({ '@type': 'EducationalOccupationalCredential', name: n, credentialCategory: 'certification' }))
};
const person = {
  '@type': 'Person', name: 'Yash J. Munot', jobTitle: ['CEO & Director', 'President, AIFI'],
  description: 'CEO & Director of Varsha Forgings Private Limited; youngest president of AIFI.',
  worksFor: { '@id': ORG_ID }, affiliation: { '@type': 'Organization', name: 'AIFI' }
};
const prop = (name, value, extra) => Object.assign({ '@type': 'PropertyValue', name, value }, extra || {});
const product = {
  '@type': 'Product', name: 'Forged steering and powertrain components', manufacturer: { '@id': ORG_ID },
  description: 'Hot closed-die forged and machined steering and powertrain components in alloy steel.',
  additionalProperty: [
    prop('Forged component weight', '1 kg - 25 kg'),
    prop('Forging tolerance', '±0.5 mm'),
    prop('Machining tolerance', '±0.02 mm'),
    prop('Forging press tonnage', '800 T - 2,500 T')
  ]
};
const crumbs = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + u })) });

// page id -> nodes to ADD (existing FAQPage nodes are kept; existing Organization node is replaced on the homepage)
const PAGES = {
  plew4: { path: '/', add: [org] },
  l95rc: { path: '/about-1', add: [person, crumbs([['Home', '/'], ['About', '/about-1']])] },
  tfegr: { path: '/automotive-steering-powertrain', add: [product, crumbs([['Home', '/'], ['Automotive Steering & Powertrain', '/automotive-steering-powertrain']])] }
};

const outDir = path.join(root, 'schema-payloads');
const report = {};
for (const id of Object.keys(PAGES)) {
  const base = backup.seo[id].tags;
  let graph = [];
  const tags = [];
  for (const t of base) {
    if (t.type === 'script') {
      const j = JSON.parse(t.children);
      graph = j['@graph'] ? j['@graph'] : [Object.assign({}, j, { '@context': undefined })];
      graph = graph.map((n) => { const c = Object.assign({}, n); delete c['@context']; return c; });
    } else tags.push(t);
  }
  if (id === 'plew4') graph = graph.filter((n) => n['@type'] !== 'Organization'); // replaced by expanded node
  graph = PAGES[id].add.concat(graph);
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  const out = tags.slice(0, 2).concat([{ type: 'script', props: { type: 'application/ld+json' }, children: ld }], tags.slice(2));
  const chars = JSON.stringify(out).length;
  report[id] = { ldBytes: Buffer.byteLength(ld), tagSetChars: chars };
  fs.writeFileSync(path.join(outDir, id + '.json'), JSON.stringify({ pageId: id, path: PAGES[id].path, source: 'scripts/gen-schema-wave.js (INTERNATIONAL-PLAN A10)', tags: out }, null, 2) + '\n');
}
console.log(JSON.stringify(report, null, 2));
