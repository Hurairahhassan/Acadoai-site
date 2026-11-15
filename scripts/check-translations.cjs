// Lists text that is missing or untranslated in each locale, and placeholders ({name}) that a translation dropped.
// Run with: npm run check:i18n
const { getContent } = require("../.i18n-check/pages.js");
const { locales } = require("../.i18n-check/i18n.js");

// Strings that may stay identical to English: brand and product names everywhere, plus words a language spells the same way.
const sameOk = new Set(["AcadoAI", "Ask Your Data", "NoteBookLM", " GB", "FAQ"]);
const sameOkFor = { es: new Set(["Admin", "Roles", "Error 404"]) };
const en = getContent("en");
let problems = 0;

function walk(base, other, path, lang) {
  if (typeof base === "string") {
    const holders = base.match(/\{\w+\}/g) || [];
    for (const h of holders) if (!other.includes(h)) report(lang, path, `missing placeholder ${h}`);
    if (other === base && /[A-Za-z]{2}/.test(base) && !sameOk.has(base) && !sameOkFor[lang]?.has(base)) report(lang, path, `not translated: "${base.slice(0, 70)}"`);
    return;
  }
  if (Array.isArray(base)) return base.forEach((v, i) => walk(v, other[i], `${path}[${i}]`, lang));
  if (base && typeof base === "object")
    for (const k of Object.keys(base)) {
      if (["slug", "icon", "mock", "screen", "href", "id", "value", "features"].includes(k)) continue;
      walk(base[k], other[k], path ? `${path}.${k}` : k, lang);
    }
}
function report(lang, path, msg) {
  problems++;
  console.log(`${lang}  ${path}  ${msg}`);
}

for (const lang of locales) if (lang !== "en") walk(en, getContent(lang), "", lang);
console.log(problems ? `\n${problems} problem(s)` : "All locales fully translated.");
process.exit(problems ? 1 : 0);
