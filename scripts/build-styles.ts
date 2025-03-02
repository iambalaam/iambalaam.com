import * as sass from "sass";
import { walk } from "jsr:@std/fs/walk";
import { createHash } from "node:crypto";

await Deno.mkdir("dist/static", { recursive: true });

function hashString(s: string) {
  const hash = createHash("sha256");
  hash.update(s);
  return hash.digest("hex").slice(0, 16);
}

async function buildStyles() {
  let styles = "";
  for await (const file of walk("src")) {
    if (file.name.endsWith(".css") || file.name.endsWith(".scss")) {
      const result = await sass.compileAsync(file.path);
      styles += result.css;
    }
  }
  for await (const file of walk("models")) {
    if (file.name.endsWith(".css") || file.name.endsWith(".scss")) {
      const result = await sass.compileAsync(file.path);
      styles += result.css;
    }
  }

  styles = styles.replace(/\s+/g, " ");
  return styles;
}

const styles = (await buildStyles()).replace(/\s+/g, " ");
const hash = hashString(styles);

await Deno.writeFile(
  `dist/static/${hash}.css`,
  new TextEncoder().encode(await buildStyles()),
);
