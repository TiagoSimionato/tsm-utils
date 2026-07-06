export const handlePromise = <A, T>(foo: ((args: A) => Promise<T>), handler?: (error: Error) => void) => async (args: A) => {
  const result = await foo(args).catch((error) => {
    handler?.(error);
    return undefined;
  });
  return result;
};
