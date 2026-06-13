// Generates public/og.png (1200x630) from an inline SVG.
// Run: node scripts/og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0a08"/>
  <circle cx="1120" cy="80" r="340" fill="#ff5a2d" opacity="0.10"/>
  <circle cx="1120" cy="80" r="200" fill="#ff5a2d" opacity="0.08"/>
  <rect x="92" y="120" width="56" height="10" fill="#ff5a2d"/>
  <text x="88" y="266" font-family="Arial, sans-serif" font-size="92" font-weight="900" letter-spacing="-3" fill="#ece8e1">Kristepher Reed</text>
  <text x="92" y="334" font-family="Consolas, monospace" font-size="30" fill="#ff5a2d">Full-Stack Developer · Game Systems Engineer</text>
  <text x="92" y="380" font-family="Consolas, monospace" font-size="30" fill="#ff5a2d">AI Automation Builder</text>
  <text x="92" y="470" font-family="Arial, sans-serif" font-size="26" fill="#a29a8e">I build production software people pay for — solo, end-to-end, for six years.</text>
  <rect x="92" y="520" width="10" height="10" fill="#ff5a2d"/>
  <text x="116" y="531" font-family="Consolas, monospace" font-size="22" fill="#6f675c">github.com/Tkiljoy · Remote · Available immediately</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, "public", "og.png"));
console.log("Wrote public/og.png");
