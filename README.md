# (Deprecated) TypeScript isKind functions

## Deprecation
Since TypeScript 2.6 you can use TypeScript is* functions from ts namespace:

```ts
import * as ts from 'typescript' 

ts.isPropertyAssignment // ...
```

## Example

```ts
import * as kinds from 'ts-is-kind';

if (kinds.isPropertyAssignment(someTypeScriptASTNode)) {
    // someTypeScriptASTNode is type ts.PropertyAssignment
}
```

## License
MIT
