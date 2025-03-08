import type { CustomSet } from 'classes';

export type CustomSetArray<T> = [ CustomSet<T>, CustomSet<T>, ...CustomSet<T>[]];
