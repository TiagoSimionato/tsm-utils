import type { CustomSet } from '../classes/CustomSet';

export type CustomSetArray<T> = [ CustomSet<T>, CustomSet<T>, ...CustomSet<T>[]];
