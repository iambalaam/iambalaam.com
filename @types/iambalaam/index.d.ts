declare module '*.module.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.scss' {
    export { };
}

declare const BUILD_COMMIT: string;