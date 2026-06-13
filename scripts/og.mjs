// Generates public/og.png (1200x630) from an inline SVG.
// Run: node scripts/og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0" stop-color="#8b5cf6"/>
      <stop offset="0.5" stop-color="#c084fc"/>
      <stop offset="1" stop-color="#e879f9"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b0613"/>
  <g stroke="#a855f7" stroke-opacity="0.07">
    ${Array.from({ length: 17 }, (_, i) => `<line x1="${i * 72}" y1="0" x2="${i * 72}" y2="630"/>`).join("")}
    ${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${i * 72}" x2="1200" y2="${i * 72}"/>`).join("")}
  </g>
  <circle cx="1130" cy="60" r="340" fill="#8b5cf6" opacity="0.14"/>
  <circle cx="1130" cy="60" r="190" fill="#e879f9" opacity="0.10"/>
  <rect x="92" y="120" width="56" height="10" fill="#a855f7"/>
  <text x="88" y="266" font-family="Arial, sans-serif" font-size="92" font-weight="900" letter-spacing="-3" fill="#ece7f8">KRISTEPHER REED</text>
  <text x="92" y="334" font-family="Consolas, monospace" font-size="30" fill="url(#g)">FULL-STACK DEVELOPER // GAME SYSTEMS ENGINEER</text>
  <text x="92" y="380" font-family="Consolas, monospace" font-size="30" fill="url(#g)">AI AUTOMATION BUILDER</text>
  <text x="92" y="470" font-family="Arial, sans-serif" font-size="26" fill="#a89bc7">I build production software people pay for — solo, end-to-end, for six years.</text>
  <rect x="92" y="520" width="10" height="10" fill="#a855f7"/>
  <text x="116" y="531" font-family="Consolas, monospace" font-size="22" fill="#a89bc7">github.com/Tkiljoy · Remote · Available immediately</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, "public", "og.png"));
console.log("Wrote public/og.png");
