import type { CustomSetArray } from 'types';

export class CustomSet<T> extends Set<T> {
  private equals: (x: T, y: T) => boolean;

  constructor(equals: (x: T, y: T) => boolean, initialValues?: T[]) {
    super();
    this.equals = equals;

    if (initialValues) {
      for (const value of initialValues) {
        this.add(value);
      }
    }
  }

  has(element: T): boolean {
    return [...this].some(v => this.equals(v, element));
  }

  add(v: T): this {
    if (!this.has(v))
      super.add(v);
    return this;
  }

  delete(value: T): boolean {
    const target = [...this].find(obj => this.equals(value, obj));
    if (target) {
      return super.delete(target);
    }
    return false;
  }

  static intersection<T>(x: CustomSet<T>, y: CustomSet<T>): CustomSet<T>;
  static intersection<T>(x: CustomSetArray<T>, y?: undefined): CustomSet<T>;
  static intersection<T>(x: CustomSet<T> | CustomSetArray<T>, y?: CustomSet<T>): CustomSet<T> {
    if (Array.isArray(x)) {
      return CustomSet.arrayIntersection(x);
    }
    if (y) {
      return CustomSet.elemIntersection(x, y);
    }
    throw new TypeError('Invalid Parameters');
  }

  private static arrayIntersection<T>(sets: CustomSetArray<T>): CustomSet<T> {
    const firstSet = sets[0];
    return sets.slice(1).reduce(
      (acc, cur) => CustomSet.elemIntersection(acc, cur),
      firstSet,
    );
  }

  private static elemIntersection<T>(x: CustomSet<T>, y: CustomSet<T>): CustomSet<T> {
    return new CustomSet(
      x.equals,
      [...x].filter(value => y.has(value)),
    );
  }

  static union<T>(x: CustomSet<T>, y: CustomSet<T>): CustomSet<T>;
  static union<T>(x: CustomSetArray<T>, y?: undefined): CustomSet<T>;
  static union<T>(
    x: CustomSet<T> | CustomSetArray<T>,
    y: CustomSet<T> | undefined = undefined,
  ): CustomSet<T> {
    if (Array.isArray(x)) {
      return CustomSet.arrayUnion(x);
    }
    if (y) {
      return CustomSet.elemUnion(x, y);
    }
    throw new TypeError('Invalid Parameters');
  }

  private static arrayUnion<T>(sets: CustomSetArray<T>): CustomSet<T> {
    return sets.reduce(
      (acc, cur) => new CustomSet(sets[0].equals, [...acc, ...cur]),
      new CustomSet(sets[0].equals),
    );
  }

  private static elemUnion<T>(x: CustomSet<T>, y: CustomSet<T>): CustomSet<T> {
    return new CustomSet<T>(x.equals, [...x, ...y]);
  }
}
