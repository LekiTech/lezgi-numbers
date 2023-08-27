import { MINUS, numerals } from './constants';

/**
 * Converts a number written in Lezgi language to an integer
 *
 * @param lezgiNum text representation of a number in Lezgi language
 * @returns an integer number
 * @example lezgiToNum('кьве агъзурни къанни кьуд') // 2024
 */
export function lezgiToNum(lezgiNum: string): number {
  if (typeof lezgiNum !== 'string') {
    throw new TypeError('Provided value is not a string');
  }
  const isNegative = lezgiNum.startsWith(MINUS);
  if (isNegative) {
    lezgiNum = lezgiNum.replace(MINUS, '');
  }
  const lezgiNumeralArray = lezgiNum.trim().split(' ');
  if (lezgiNumeralArray.length === 1) {
    // Handle simple mapped numbers e.g. 'виш', 'кьвед' etc.
    if (numerals[lezgiNum]) {
      if (numerals[lezgiNum].requiresNext) {
        throw new Error(
          `Provided value '${lezgiNum}' requires a next value e.g. '${
            numerals[lezgiNum].allowedNext ? numerals[lezgiNum].allowedNext.minStr : 'сад'
          }'`,
        );
      }
      return isNegative ? numerals[lezgiNum].value * -1 : numerals[lezgiNum].value;
    } else {
      throw new Error(`Provided value is not a valid Lezgi numeral: '${lezgiNum}'`);
    }
  } else {
    // Handle multi numeral numbers e.g. 'вишни кьвед', 'кьве миллионни сад' etc.
    const mappedNumeralArray = lezgiNumeralArray.map((lezgiNumeral) => {
      if (numerals[lezgiNumeral]) {
        return numerals[lezgiNumeral];
      } else {
        throw new Error(`Provided value is not a valid Lezgi numeral: '${lezgiNumeral}'`);
      }
    });
    const mappedNumeralsChunks: number[] = [mappedNumeralArray[0].value];
    if (mappedNumeralArray.length > 1) {
      for (let i = 1; i < mappedNumeralArray.length; i++) {
        const previous = mappedNumeralArray[i - 1];
        const curr = mappedNumeralArray[i];
        if (
          previous.allowedNext &&
          (curr.value < previous.allowedNext.min || curr.value > previous.allowedNext.max)
        ) {
          throw new Error(
            `In the provided value '${lezgiNum}' should be a number between '${
              previous.allowedNext.min
            }' and '${previous.allowedNext.max}' after '${lezgiNumeralArray[i - 1]}',` +
              `but '${lezgiNumeralArray[i]}' was provided which equals to '${curr.value}'`,
          );
        }
        if (curr.requiresNext && i === mappedNumeralArray.length - 1) {
          throw new Error(
            `Provided value '${lezgiNum}' requires a next value, but none was provided`,
          );
        }
        if (previous.value > curr.value) {
          if (mappedNumeralsChunks.at(-1) < 1000) {
            // Starting from 1000, before every atomic number there could be a combination like [100, 40, 17, 1000]
            // So to get the correct result of 157.000 we need to combine 100 + 40 + 17 = 157 first
            mappedNumeralsChunks.push(mappedNumeralsChunks.pop() + curr.value);
          } else {
            // Everything above 1000 is not allowed to be combined with the next number
            // Because 1.000.000 + 40 + 17 + 1000 will result in 1.001.057 while it should be 1.057.000 according to the Lezgi language
            mappedNumeralsChunks.push(curr.value);
          }
          continue;
        } else if (previous.value < curr.value) {
          // e.g. 10 and 1000 => 10000
          mappedNumeralsChunks.push(mappedNumeralsChunks.pop() * curr.value);
          continue;
        }
      }
    }
    const result = mappedNumeralsChunks.reduce((acc, curr) => acc + curr, 0);
    return isNegative ? result * -1 : result;
  }
}

// console.log(lezgiToNum('кьве')); // Provided value 'кьве' requires a next value e.g. 'виш'
// console.log(lezgiToNum('кьве сад')); // In the provided value 'кьве сад' should be a number between '100' and 'Infinity' after 'кьве',but 'сад' was provided which equals to '1'
// console.log(lezgiToNum('агъзурни миллион')); // In the provided value 'агъзурни миллион' should be a number between '1' and '1000' after 'агъзурни',but 'миллион' was provided which equals to '1000000'
