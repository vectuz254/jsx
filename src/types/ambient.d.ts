declare namespace React {
  export type ReactNode = any;
  export type Key = string | number | bigint;
  export type CSSProperties = Record<string, any>;
  export type FC<P = {}> = (props: P & { key?: Key; children?: any }) => any;
  export function useRef<T>(initialValue?: T | null): { current: T | null };
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useMemo<T>(factory: () => T, deps: readonly any[] | undefined): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly any[]): T;
  export const StrictMode: (props: { children?: any }) => any;
}

declare module 'react' {
  export = React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export interface Root {
    render(children: any): void;
    unmount(): void;
  }
  export function createRoot(container: Element | DocumentFragment): Root;
}

declare module 'framer-motion' {
  export interface MotionValue<T = any> {
    get(): T;
    set(v: T): void;
    on(event: string, callback: (v: T) => void): () => void;
  }

  export function useScroll(options?: any): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
  };

  export function useTransform<I, O>(
    value: MotionValue<I>,
    inputRange: I[],
    outputRange: O[],
    options?: any
  ): MotionValue<O>;

  export const motion: {
    [key: string]: any;
    create: (component: any) => any;
  };
}

declare module 'lucide-react' {
  export const ArrowUpRight: (props: any) => any;
  export const ArrowRight: (props: any) => any;
  export const ExternalLink: (props: any) => any;
  export const Mail: (props: any) => any;
  export const Layers: (props: any) => any;
  export const Box: (props: any) => any;
  export const Sparkles: (props: any) => any;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
