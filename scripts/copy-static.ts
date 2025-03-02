import { walk } from "jsr:@std/fs/walk";

await Deno.mkdir("dist/static", { recursive: true });

for await (const file of walk("static")) {
  if (file.isFile) {
    await Deno.copyFile(file.path, `dist/${file.path}`);
  }
}
