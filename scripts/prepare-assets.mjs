// One-off: convert source PNGs to webp and build src/data/plants.js from the original app.js
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import sharp from "sharp";

const src = fs.readFileSync(process.argv[2], "utf8");
const arr = src.slice(src.indexOf("const plantsData"), src.indexOf("];") + 2);
const plantsData = vm.runInNewContext(arr.replace("const plantsData =", "(") .replace(/\];$/, "])"));
const slug = (f) => f.replace(/ /g, "_").replace(/\.png$/, ".webp");

const plants = plantsData.map((p) => ({
  id: p.id, name: p.name, image: `/plants/${slug(p.image)}`, origin: p.origin, type: p.type, tag: p.tag, desc: p.desc,
}));
fs.writeFileSync("src/data/plants.js", `export const plants = ${JSON.stringify(plants, null, 1)};\n`);

for (const [dir, w] of [["public/plants", 800], ["public/assets", 1600]]) {
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".png"))) {
    const out = path.join(dir, f.replace(/\.png$/, ".webp"));
    await sharp(path.join(dir, f)).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    fs.unlinkSync(path.join(dir, f));
  }
}
console.log(plants.length, "plants");
