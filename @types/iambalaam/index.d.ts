declare module '*.module.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.scss' {
    export { };
}

declare module "*.gif" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module '*.xhtml.js' {
    const content: { html: string }
    export = content;
}

declare const BUILD_COMMIT: string;