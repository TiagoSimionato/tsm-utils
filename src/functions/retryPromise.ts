export const retryPromise = <A, T>(foo: ((args: A) => Promise<T>), retryTimes: number = 5) => async (args: A) => {
  for (let i = 0; i < retryTimes; i++) {
    try {
      return await foo(args);
    }
    catch {}
  }
  return undefined;
};
