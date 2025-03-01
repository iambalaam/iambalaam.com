import * as sass from "sass";
import { walk } from "jsr:@std/fs/walk";

let styles = "";
for await (const file of walk("src")) {
  if (file.name.endsWith(".scss")) {
    const result = await sass.compileAsync(file.path);
    styles += result.css;
  }
}

styles = styles.replace(/\s+/g, " ");
