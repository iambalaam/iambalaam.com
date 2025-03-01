import { parseArgs } from "jsr:@std/cli/parse-args";
const args = parseArgs(Deno.args, { string: "outDir" });

if (!("outDir" in args)) throw new Error("missing argument --outDir");
const OUT_DIR = args.outDir;
if (!OUT_DIR) throw new Error("Empty argument --outDir");
try {
  await Deno.readDirSync(OUT_DIR);
} catch (e) {
  await Deno.mkdir(OUT_DIR, { recursive: true });
}

import * as sass from "sass";
import { walk } from "jsr:@std/fs/walk";
import { createHash } from "node:crypto";

function hashString(s: string) {
  const hash = createHash("sha256");
  hash.update(s);
  return hash.digest("hex").slice(0, 16);
}

let styles = "";
for await (const file of walk("src")) {
  if (file.name.endsWith(".scss")) {
    const result = await sass.compileAsync(file.path);
    styles += result.css;
  }
}

styles = styles.replace(/\s+/g, " ");
const hash = hashString(styles);

await Deno.writeFile(
  `${args.outDir}/${hash}.css`,
  new TextEncoder().encode(styles),
);
