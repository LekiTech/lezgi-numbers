# Lezgi Numbers

This TypeScript library provides a function for converting numbers to Lezgi numerals.

**Note**: _Currently only integers are supported._

It can be used in both Node.js and browser environments.

For the best results, choose the numbers between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` which are equal to `-9007199254740991` and `9007199254740991` respectively.

- `lib` directory contains the compiled JavaScript code with the type definitions.
- `dist` directory contains the compiled minified JavaScript file ready for use in browser environments.

## Installation

### Node.js

```sh
npm i lezgi-numbers
```

### Browser

```html
<script src="https://unpkg.com/lezgi-numbers@1.0.3/dist/lezgi-numbers.js"></script>
```

## Usage

### Node.js

Import package like:

```js
const { numToLezgi, lezgiToNum } = require('lezgi-numbers');
```

Or

```ts
import { numToLezgi, lezgiToNum } from 'lezgi-numbers';
```

And then use it:

```js
console.log(numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
console.log(lezgiToNum('кьве агъзурни къанни кьуд')); // 2024
```

### Browser

```html
<script src="https://unpkg.com/lezgi-numbers@1.0.3/dist/lezgi-numbers.js"></script>
<script>
  try {
    // Convert numbers to Lezgi numerals
    alert(LezgiNumbers.numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
    // Convert Lezgi numerals to numbers
    alert(LezgiNumbers.lezgiToNum('кьве агъзурни къанни кьуд')); // 2024
  } catch (e) {
    alert(e.message);
  }
</script>
```
