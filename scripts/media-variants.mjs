// scripts/media-variants.mjs
// Writes an 800px "-800.webp" version next to every photo in public/media (used by Media.astro's srcset)
// and keeps the route map at least 2048px wide so it stays sharp on desktop.
// Run with: node scripts/media-variants.mjs
import { readdir } from "node:fs/promises";
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const dir = "public/media";
for (const name of await readdir(dir)) {
  if (!name.endsWith(".webp") || name.endsWith("-800.webp") || name.endsWith("-poster.webp") || name === "giuppi.webp") continue;
  const out = `${dir}/${name.replace(/\.webp$/, "-800.webp")}`;
  const info = await sharp(`${dir}/${name}`).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 60 }).toFile(out);
  console.log(out, info.width, info.size);
}

// Only the route map is shown wide enough on desktop to look soft at its original 1012px.
for (const name of ["map-ink.webp", "map-paper.webp"]) {
  const file = `${dir}/deco/${name}`;
  const input = await readFile(file);
  const { width } = await sharp(input).metadata();
  if (width >= 2048) continue;
  await writeFile(file, await sharp(input).resize({ width: 2048 }).webp({ quality: 50 }).toBuffer());
  console.log(file, "upscaled from", width);
}
