# @js-types-runtime/string

Lightweight string type checker. Zero dependencies.

## Installation

```bash
npm install @js-types-runtime/string
```

## Usage

```js
import { string } from '@js-types-runtime/string';

string('hello'); // true
string(''); // true

string(42); // false
string(null); // false
```

## API

### `string(value)`

Checks if a value is a string.

- **value**: `unknown`
- **returns**: `boolean`

## TypeScript

This package includes type definitions with a type predicate:

```ts
const string: (v: unknown) => v is string;
```

So you get type narrowing:

```ts
const x: unknown = 'hello';

if (string(x)) {
  x.toUpperCase(); // ✅ x is string
}
```

## License

MIT
