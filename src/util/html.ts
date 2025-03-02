const BUILD_COMMIT = Deno.env.get("BUILD_COMMIT") ?? "Unknown";

export interface PageArgs {
  title: string;
  desc: string;
  content: string;
  head?: string;
}

const head = ({ title, desc, head }: PageArgs) =>
  `\
<head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <!-- link rel="shortcut icon" href="favicon.ico" type="image/x-icon" -->
    <!-- meta property="og:image" content="favicon.ico" -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 shrink-to-fit=no">

    <!-- Socials -->
    <meta name="theme-color" content="#252526">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta name="twitter:title" content="${title}">
    <script>window.BUILD_COMMIT='${BUILD_COMMIT}';</script>

    <!-- Font faces -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet">

    <!-- Static Resources -->
    ${head || ""}
</head>
`;

const body = ({ content }: PageArgs) =>
  `\
<body>
    <div id="root">
        ${content}
    </div>
</body>
`;

const html = (args: PageArgs) =>
  `\
<!DOCTYPE html>
<html lang="en">
${head(args)}
${body(args)}
</html>
`;

export default html;
