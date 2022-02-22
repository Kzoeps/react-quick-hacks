export type GenericFunction = (...args: unknown[]) => unknown;

export interface BasicOption<T> {
  label: string;
  value: T;
}
