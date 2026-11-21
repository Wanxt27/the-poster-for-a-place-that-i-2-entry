// AURELIA — The Poster for a Place That Isn't There
// Writes the travel poster for AURELIA, the floating isles above the
// clouds, to /output/entry.png. The poster is a vintage travel poster:
// golden-hour sky, floating islands with waterfalls pouring into a sea
// of clouds, a glowing crystalline lighthouse, airships and balloons.
// The place name AURELIA is set into the picture in large gold type.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

const size = statSync(source).size;
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`AURELIA poster written to ${target} (${size} bytes)`);
