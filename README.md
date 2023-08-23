# Lezgi Numbers

This TypeScript library provides a function for converting numbers to Lezgi numerals.

**Note**: _Currently only integers are supported._

It can be used in both Node.js and browser environments.

- `lib` directory contains the compiled JavaScript code with the type definitions.
- `dist` directory contains the compiled minified JavaScript file ready for use in browser environments.

## Installation

### Node.js

```sh
npm i lezgi-numbers
```

### Browser

```html
<script src="https://unpkg.com/lezgi-numbers@1.0.2/dist/lezgi-numbers.js"></script>
```

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
<script src="https://unpkg.com/lezgi-numbers@1.0.2/dist/lezgi-numbers.js"></script>
<script>
  alert(LezgiNumbers.numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
</script>
```
