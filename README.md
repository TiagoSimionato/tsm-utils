# TSM Utils

Npm package with utility code shared across projects

## Functions

### createAPI

```ts
export const api = createAPI('/api');
export const exampleApi = createAPI('https://api.example.com');
```

## Classes

### CustomSet

Create sets with support for set operations using any type by providing the equality function

```ts
type User = {
  id: string;
  name: string;
};

export class UserSet extends CustomSet<User> {
  constructor(initialValues?: User[]) {
    const equals = (x: User, y: User): boolean => x.id === y.id;
    super(equals, initialValues);
  }
};
```

## Publishing

1. First clear the output folder

```bash
rm -rf dist
```

2. Transpile source code to js under /dist

```bash
npm run tsc
```

3. Publish the package

```bash
npm publish
```
