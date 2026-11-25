// u-rama-melon-make-the-ai-judge-laugh-302d0825 — one office joke, one line.
// Gate: /output/entry.txt must be 1–200 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My boss calls it 'wearing many hats' because 'doing three jobs for one salary' didn't fit on the poster.";
const MAX_CHARS = 200;

if (!LINE.trim() || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1–${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
