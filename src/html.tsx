export interface PageArgs {
    title: string,
    desc: string,
    content: string
}

const head = ({ title, desc }: PageArgs) => `\
<head>
    <meta charset="utf-8">
    <title>${encodeURIComponent(title)}</title>
    <meta name="description" content="${desc}">
    <!-- link rel="shortcut icon" href="favicon.ico" type="image/x-icon" -->
    <!-- meta property="og:image" content="favicon.ico" -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta name="twitter:title" content="${title}">
</head>
`;

const body = ({ content }: PageArgs) => `\
<body>
    <main>
        ${content}
    </main>
</body>
`;

const html = (args: PageArgs) => `\
<!DOCTYPE html>
<html "en-GB">
${head(args)}
${body(args)}
</html>
`;

export default html;