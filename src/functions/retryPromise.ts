export const retryPromise = <A, T>(foo: ((args: A) => Promise<T>), handler?: (error: Error) => void, retryTimes: number = 5) => async (args: A) => {
  for (let i = 0; i < retryTimes; i++) {
    try {
      return await foo(args);
    }
    catch (error) {
      if (error instanceof Error) {
        handler?.(error);
      }
    }
  }
  return undefined;
};
