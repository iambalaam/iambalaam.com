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
    <meta name="viewport" content="width=device-width, initial-scale=1", maximum-scale=1, minimum-scale=1">
    <script>window.BUILD_COMMIT='${BUILD_COMMIT}';</script>

    <!-- Font faces -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet">

    <!-- Static Resources -->
    <link rel="stylesheet" type="text/css" href="/static/${BUILD_COMMIT}/dist/main.css">
    <script type="text/javascript" src="/static/${BUILD_COMMIT}/dist/hydration.js" defer></script>
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