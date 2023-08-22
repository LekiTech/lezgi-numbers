# Lezgi Numbers

This TypeScript library provides a function for converting numbers to Lezgi numerals.

It can be used in both Node.js and browser environments.

- `lib` directory contains the compiled JavaScript code with the type definitions.
- `dist` directory contains the compiled minified JavaScript file ready for use in browser environments.

## Usage

### Node.js

```js
const { numToLezgi } = require('lezgi-numbers');

console.log(numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
```

```ts
import { numToLezgi } from 'lezgi-numbers';

console.log(numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
```

### Browser

```html
<script src="lezgi-numbers.js"></script>
<script>
  console.log(LezgiNumbers.numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
</script>
```
