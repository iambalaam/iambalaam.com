declare module '*.module.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.scss' {
    export { };
}

declare module '*.xhtml.js' {
    const content: { html: string }
    export = content;
}

declare const BUILD_COMMIT: string;