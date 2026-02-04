declare module 'react' {
  export type ReactNode = any;
  export type CSSProperties = Record<string, string | number>;
  export type ComponentType<P = Record<string, unknown>> = (props: P & {children?: ReactNode}) => any;
}

declare namespace JSX {
  type Element = any;
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module '@theme/Heading' {
  const Heading: any;
  export default Heading;
}

declare module '@theme/Layout' {
  interface Props {
    title?: string;
    description?: string;
  }
}

declare module '@theme/CodeBlock' {
  const CodeBlock: any;
  export default CodeBlock;
}
