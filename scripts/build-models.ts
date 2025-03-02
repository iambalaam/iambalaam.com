import { renderCSSTriangles, requiredCSSRules } from "dae2css";
import { resolve } from "@std/path";

const MODEL_DIR = resolve("./models");

for await (const file of Deno.readDir(MODEL_DIR)) {
  if (!file.isFile) continue;
  const [name, ext] = file.name.split(".");
  if (ext !== "dae") continue;

  // Hack
  // Investigate where URI encoding is coming from
  const html = decodeURIComponent(
    await renderCSSTriangles(
      `${MODEL_DIR}/${file.name}`,
      200,
      `triangle ${name}`,
    ),
  );

  const destinationFile = `${MODEL_DIR}/${name}.xhtml.ts`;
  const encoder = new TextEncoder();
  const text = encoder.encode(`export const html = \`${html}\`;`);
  Deno.writeFile(destinationFile, text);
}

const encoder = new TextEncoder();
await Deno.writeFile(
  `${MODEL_DIR}/required.css`,
  encoder.encode(`.triangle {${requiredCSSRules}}`),
);
