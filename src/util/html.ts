export interface PageArgs {
    title: string,
    desc: string,
    content: string,
    head?: string
}

const head = ({ title, desc, head }: PageArgs) => `\
<head>
    <meta charset="utf-8">
    <title>${encodeURIComponent(title)}</title>
    <meta name="description" content="${desc}">
    <!-- link rel="shortcut icon" href="favicon.ico" type="image/x-icon" -->
    <!-- meta property="og:image" content="favicon.ico" -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta name="twitter:title" content="${title}">
    <link rel="stylesheet" type="text/css" href="/static/dist/main.css">
    <script type="text/javascript" src="/static/dist/hydration.js" defer></script>
    ${head || ''}
</head>
`;

const body = ({ content }: PageArgs) => `\
<body>
    <div id="root">
        ${content}
    </div>
</body>
`;

const html = (args: PageArgs) => `\
<!DOCTYPE html>
<html lang="en">
${head(args)}
${body(args)}
</html>
`;

export default html;