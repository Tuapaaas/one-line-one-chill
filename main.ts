// One Line, One Chill — u-azazex-one-line-one-chill-6d4d5488
// A single sentence of horror, under 200 characters, written to /output/entry.txt.
// Stdlib only: no dependencies, no network, no reads outside this file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart speaker answered a question I never said out loud, then asked me one back — in my mother's voice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Self-check the sealed gate: UTF-8 text, 1-200 characters, a single non-blank line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate is 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
