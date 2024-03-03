# Lezgi Numbers

This TypeScript library provides functions for:

- converting numbers to Lezgi numerals (`numToLezgi`)
- converting Lezgi numerals to numbers (`lezgiToNum`)
- generate basic TTS (Text-to-Speech) in Lezgi language for the given number
  - `lezgiNumberTtsToFile` for Node.js - it saves the audio file to the provided path
  - `playLezgiNumberTts` for browser - it plays the audio in the browser

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
<script src="https://unpkg.com/lezgi-numbers@1.1.0/dist/lezgi-numbers.js"></script>
```

## Usage

### Node.js

Import package like:

```js
const { numToLezgi, lezgiToNum, playLezgiNumberTts } = require('lezgi-numbers');
```

Or

```ts
import { numToLezgi, lezgiToNum, playLezgiNumberTts } from 'lezgi-numbers';
```

And then use it:

```js
console.log(numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
console.log(lezgiToNum('кьве агъзурни къанни кьуд')); // 2024
// Function below will work only if run in browser.
// So it should be used either in SPA or if in SSR, it should be used in the client side.
playLezgiNumberTts(1986, '<path/to/mp3/files>'); // Audio of pronounced 'агъзурни кIуьд вишни кьудкъанни ругуд'
```

### Browser

```html
<script src="https://unpkg.com/lezgi-numbers@1.1.0/dist/lezgi-numbers.js"></script>
<script>
  try {
    // Convert numbers to Lezgi numerals
    alert(LezgiNumbers.numToLezgi(1986)); // 'агъзурни кIуьд вишни кьудкъанни ругуд'
    // Convert Lezgi numerals to numbers
    alert(LezgiNumbers.lezgiToNum('кьве агъзурни къанни кьуд')); // 2024
    // Play the audio of pronounced Lezgi numerals
    LezgiNumbers.playLezgiNumberTts(1986, '<path/to/mp3/files>'); // Audio of pronounced 'агъзурни кIуьд вишни кьудкъанни ругуд' will be played
  } catch (e) {
    alert(e.message);
  }
</script>
```

### Path to mp3 files

You can provide the path to the mp3 files for the TTS. The mp3 files are located in the `mp3` directory in the root of the package. If you want to use your own mp3 files, you can provide the path to your mp3 files.

Here is the structure of the `mp3` directory:

```
mp3
├── ' .mp3'
├── 'цIе.mp3'
├── 'цIу.mp3'
├── 'цIи.mp3'
├── 'ни.mp3'
├── 'рид.mp3'
├── 'къанни.mp3'
├── 'кьве.mp3'
├── 'минус.mp3'
├── 'нул.mp3'
├── 'сад.mp3'
├── 'кьвед.mp3'
├── 'пуд.mp3'
├── 'кьуд.mp3'
├── 'вад.mp3'
├── 'ругуд.mp3'
├── 'ирид.mp3'
├── 'муьжуьд.mp3'
├── 'кIуьд.mp3'
├── 'цIуд.mp3'
├── 'къад.mp3'
├── 'яхцIур.mp3'
├── 'виш.mp3'
├── 'агъзур.mp3'
├── 'миллион.mp3'
├── 'миллиард.mp3'
├── 'триллион.mp3'
├── 'квадриллион.mp3'
├── 'квинтиллион.mp3'
├── 'секстиллион.mp3'
├── 'септиллион.mp3'
├── 'октиллион.mp3'
├── 'нониллион.mp3'
```
