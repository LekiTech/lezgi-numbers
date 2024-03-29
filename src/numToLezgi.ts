import {
  atomic,
  million,
  billion,
  trillion,
  quadrillion,
  quintillion,
  sextillion,
  septillion,
  octillion,
  nonillion,
  MINUS,
} from './constants';

/**
 *
 * @param n number to separate into units
 * @returns array of units
 * @example separateNumberIntoUnits(123) // [100, 20, 3]
 */
function separateNumberIntoUnits(n: number): number[] {
  if (n == 0) return [0];
  const arr: number[] = [];
  let i = 1;
  while (n > 0) {
    arr.unshift((n % 10) * i);
    n = Math.floor(n / 10);
    i *= 10;
  }
  const result = groupNumberUnitsToLezgiRange(arr);
  return result;
}

const ranges = [
  { start: nonillion, end: octillion }, // nonillion to octillion
  { start: octillion, end: septillion }, // octillion to septillion
  { start: septillion, end: sextillion }, // septillion to sextillion
  { start: sextillion, end: quintillion }, // sextillion to quintillion
  { start: quadrillion, end: quintillion }, // quadrillion to quintillion
  { start: trillion, end: quadrillion }, // trillion to quadrillion
  { start: billion, end: trillion }, // billion to trillion
  { start: million, end: billion }, // million to billion
  { start: 1000, end: million }, // thousand to million
];

function groupNumberUnitsToLezgiRange(arr: number[]): number[] {
  let result: number[] = [];
  for (let range of ranges) {
    let sum = arr.reduce((acc, num) => {
      if (num >= range.start && num < range.end) {
        return acc + num;
      }
      return acc;
    }, 0);

    if (sum !== 0) {
      result.push(sum);
    }
    // Filter out the numbers that were added to sum
    arr = arr.filter((num) => num < range.start || num >= range.end);
  }
  // Concatenate the remaining numbers to the result
  result = result.concat(arr);
  return result;
}

function getTenPlusBase(num: number): string[] {
  if (num < 10 || num >= 20) {
    throw new Error('Invalid number');
  }
  if (num === 10) {
    return [atomic[10]];
  }
  const base10 = atomic[10].slice(0, -2);
  if (num === 11 || num === 15 || num === 16) {
    return [base10 + 'у'];
  } else if (num < 15) {
    return [base10 + 'и'];
  }
  return [base10 + 'е'];
}

function getTwentyPlusBase(num: number): string[] {
  return num === 20 ? [atomic[20]] : ['къанни'];
}

function getThirtyPlusBase(num: number): string[] {
  return [...getTwentyPlusBase(num), ...getTenPlusBase(num - 20)];
}

function getFourtyPlusBase(num: number): string[] {
  return num === 40 ? [atomic[40]] : [atomic[40], 'ни'];
}

function getFiftyPlusBase(num: number): string[] {
  return [...getFourtyPlusBase(num), ...getTenPlusBase(num - 40)];
}

function getSixtyPlusBase(num: number): string[] {
  return num === 60 ? [atomic[3], atomic[20]] : [atomic[3], ...getTwentyPlusBase(num)];
}

function getSeventyPlusBase(num: number): string[] {
  return [...getSixtyPlusBase(61), ...getTenPlusBase(num - 60)];
}

function getEightyPlusBase(num: number): string[] {
  return num === 80 ? [atomic[4], atomic[20]] : [atomic[4], ...getTwentyPlusBase(num)];
}

function getNinetyPlusBase(num: number): string[] {
  return [...getEightyPlusBase(81), ...getTenPlusBase(num - 80)];
}

function getHundredPlusBase(num: number): string[] {
  return num % 100 === 0 ? [atomic[100]] : [atomic[100], 'ни'];
}

function getHundredPlusNumCount(numCount: number): string[] {
  if (atomic[numCount] !== undefined) {
    return numCount === 2 ? [atomic[numCount].slice(0, -1)] : [atomic[numCount]];
  }
  return undefined;
}

function getBetweenHundredAndThousand(num: number, followUpNumber: number): string[] {
  const hundredsCount = num % 100 != 0 ? num - (num % 100) : num / 100;
  const hundredsCountInLezgi = getHundredPlusNumCount(hundredsCount);
  return [...hundredsCountInLezgi, ' ', ...getHundredPlusBase(num + followUpNumber)];
}

function getThousandPlusBase(num: number): string[] {
  return num % 1000 === 0 ? [atomic[1000]] : [atomic[1000], 'ни'];
}

function getBetweenThousandAndMillion(num: number, followUpNumber: number): string[] {
  const thousandsCount = num % 1000 != 0 ? num - (num % 1000) : num / 1000;
  const thousandsCountInLezgi =
    getHundredPlusNumCount(thousandsCount) ?? getCompound(thousandsCount);
  return [...thousandsCountInLezgi, ' ', ...getThousandPlusBase(num + followUpNumber)];
}

function getMillionPlusBase(num: number): string[] {
  return num % million === 0 ? [atomic[million]] : [atomic[million], 'ни'];
}

function getBetweenMillionAndBillion(num: number, followUpNumber: number): string[] {
  const millionsCount = num % million != 0 ? num - (num % million) : num / million;
  const millionsCountInLezgi = getHundredPlusNumCount(millionsCount) ?? getCompound(millionsCount);
  return [...millionsCountInLezgi, ' ', ...getMillionPlusBase(num + followUpNumber)];
}

function getBillionPlusBase(num: number): string[] {
  return num % billion === 0 ? [atomic[billion]] : [atomic[billion], 'ни'];
}

function getBetweenBillionAndTrillion(num: number, followUpNumber: number): string[] {
  const billionsCount = num % billion != 0 ? num - (num % billion) : num / billion;
  const billionsCountInLezgi = getHundredPlusNumCount(billionsCount) ?? getCompound(billionsCount);
  return [...billionsCountInLezgi, ' ', ...getBillionPlusBase(num + followUpNumber)];
}

function getTrillionPlusBase(num: number): string[] {
  return num % trillion === 0 ? [atomic[trillion]] : [atomic[trillion], 'ни'];
}

function getBetweenTrillionAndQuadrillion(num: number, followUpNumber: number): string[] {
  const trillionsCount = num % trillion != 0 ? num - (num % trillion) : num / trillion;
  const trillionsCountInLezgi =
    getHundredPlusNumCount(trillionsCount) ?? getCompound(trillionsCount);
  return [...trillionsCountInLezgi, ' ', ...getTrillionPlusBase(num + followUpNumber)];
}

function getQuadrillionPlusBase(num: number): string[] {
  return num % quadrillion === 0 ? [atomic[quadrillion]] : [atomic[quadrillion], 'ни'];
}

function getBetweenQuadrillionAndQuintillion(num: number, followUpNumber: number): string[] {
  const quadrillionsCount = num % quadrillion != 0 ? num - (num % quadrillion) : num / quadrillion;
  const quadrillionsCountInLezgi =
    getHundredPlusNumCount(quadrillionsCount) ?? getCompound(quadrillionsCount);
  return [...quadrillionsCountInLezgi, ' ', ...getQuadrillionPlusBase(num + followUpNumber)];
}

function getQuintillionPlusBase(num: number): string[] {
  return num % quintillion === 0 ? [atomic[quintillion]] : [atomic[quintillion], 'ни'];
}

function getBetweenQuintillionAndSextillion(num: number, followUpNumber: number): string[] {
  const quintillionsCount = num % quintillion != 0 ? num - (num % quintillion) : num / quintillion;
  const quintillionsCountInLezgi =
    getHundredPlusNumCount(quintillionsCount) ?? getCompound(quintillionsCount);
  return [...quintillionsCountInLezgi, ' ', ...getQuintillionPlusBase(num + followUpNumber)];
}

function getSextillionPlusBase(num: number): string[] {
  return num % sextillion === 0 ? [atomic[sextillion]] : [atomic[sextillion], 'ни'];
}

function getBetweenSextillionAndSeptillion(num: number, followUpNumber: number): string[] {
  const sextillionsCount = num % sextillion != 0 ? num - (num % sextillion) : num / sextillion;
  const sextillionsCountInLezgi =
    getHundredPlusNumCount(sextillionsCount) ?? getCompound(sextillionsCount);
  return [...sextillionsCountInLezgi, ' ', ...getSextillionPlusBase(num + followUpNumber)];
}

function getSeptillionPlusBase(num: number): string[] {
  return num % septillion === 0 ? [atomic[septillion]] : [atomic[septillion], 'ни'];
}

function getBetweenSeptillionAndOctillion(num: number, followUpNumber: number): string[] {
  const septillionsCount = num % septillion != 0 ? num - (num % septillion) : num / septillion;
  const septillionsCountInLezgi =
    getHundredPlusNumCount(septillionsCount) ?? getCompound(septillionsCount);
  return [...septillionsCountInLezgi, ' ', ...getSeptillionPlusBase(num + followUpNumber)];
}

function getOctillionPlusBase(num: number): string[] {
  return num % octillion === 0 ? [atomic[octillion]] : [atomic[octillion], 'ни'];
}

function getBetweenOctillionAndNonillion(num: number, followUpNumber: number): string[] {
  const octillionsCount = num % octillion != 0 ? num - (num % octillion) : num / octillion;
  const octillionsCountInLezgi =
    getHundredPlusNumCount(octillionsCount) ?? getCompound(octillionsCount);
  return [...octillionsCountInLezgi, ' ', ...getOctillionPlusBase(num + followUpNumber)];
}

function getNonillionPlusBase(num: number): string[] {
  return num % nonillion === 0 ? [atomic[nonillion]] : [atomic[nonillion], 'ни'];
}

function getCompound(num: number): string[] {
  const units = separateNumberIntoUnits(num);
  const result = units.map((unit, i) => {
    if (
      i > 0 &&
      unit === 7 &&
      (units[i - 1] === 10 ||
        units[i - 1] === 30 ||
        units[i - 1] === 50 ||
        units[i - 1] === 70 ||
        units[i - 1] === 90)
    ) {
      return [atomic[7].slice(1)];
    }
    const followUpNumber = units.slice(i + 1).reduce((acc, num) => acc + num, 0);
    if (unit === 10) {
      return getTenPlusBase(unit + followUpNumber);
    }
    if (unit === 20) {
      return getTwentyPlusBase(unit + followUpNumber);
    }
    if (unit === 30) {
      return getThirtyPlusBase(unit + followUpNumber);
    }
    if (unit === 40) {
      return getFourtyPlusBase(unit + followUpNumber);
    }
    if (unit === 50) {
      return getFiftyPlusBase(unit + followUpNumber);
    }
    if (unit === 60) {
      return getSixtyPlusBase(unit + followUpNumber);
    }
    if (unit === 70) {
      return getSeventyPlusBase(unit + followUpNumber);
    }
    if (unit === 80) {
      return getEightyPlusBase(unit + followUpNumber);
    }
    if (unit === 90) {
      return getNinetyPlusBase(unit + followUpNumber);
    }
    if (unit === 100) {
      return getHundredPlusBase(unit + followUpNumber);
    }
    if (unit > 100 && unit < 1000) {
      return getBetweenHundredAndThousand(unit, followUpNumber);
    }
    if (unit === 1000) {
      return getThousandPlusBase(unit + followUpNumber);
    }
    if (unit > 1000 && unit < million) {
      return getBetweenThousandAndMillion(unit, followUpNumber);
    }
    if (unit === million) {
      return getMillionPlusBase(unit + followUpNumber);
    }
    if (unit > million && unit < billion) {
      return getBetweenMillionAndBillion(unit, followUpNumber);
    }
    if (unit === billion) {
      return getBillionPlusBase(unit + followUpNumber);
    }
    if (unit > billion && unit < trillion) {
      return getBetweenBillionAndTrillion(unit, followUpNumber);
    }
    if (unit === trillion) {
      return getTrillionPlusBase(unit + followUpNumber);
    }
    if (unit > trillion && unit < quadrillion) {
      return getBetweenTrillionAndQuadrillion(unit, followUpNumber);
    }
    if (unit === quadrillion) {
      return getQuadrillionPlusBase(unit + followUpNumber);
    }
    if (unit > quadrillion && unit < quintillion) {
      return getBetweenQuadrillionAndQuintillion(unit, followUpNumber);
    }
    if (unit === quintillion) {
      return getQuintillionPlusBase(unit + followUpNumber);
    }
    if (unit > quintillion && unit < sextillion) {
      return getBetweenQuintillionAndSextillion(unit, followUpNumber);
    }
    if (unit === sextillion) {
      return getSextillionPlusBase(unit + followUpNumber);
    }
    if (unit > sextillion && unit < septillion) {
      return getBetweenSextillionAndSeptillion(unit, followUpNumber);
    }
    if (unit === septillion) {
      return getSeptillionPlusBase(unit + followUpNumber);
    }
    if (unit > septillion && unit < octillion) {
      return getBetweenSeptillionAndOctillion(unit, followUpNumber);
    }
    if (unit === octillion) {
      return getOctillionPlusBase(unit + followUpNumber);
    }
    if (unit > octillion && unit < nonillion) {
      return getBetweenOctillionAndNonillion(unit, followUpNumber);
    }
    if (unit === nonillion) {
      return getNonillionPlusBase(unit + followUpNumber);
    }
    return units.length > 1 && unit === 0 ? [''] : [atomic[unit] || unit.toString()];
  });
  return result.flat(); //.join('').replaceAll('  ', ' ').trim();
}

function getAtomicOrCompound(num: number): string[] {
  if (atomic[num]) {
    return [atomic[num]];
  } else {
    return getCompound(num);
  }
}

/**
 *
 * Function to convert an integer to Lezgi text representation as an array of strings
 *
 * @param num an integer number between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` (`-9007199254740991` and `9007199254740991`)
 * @returns string representation of the provided number in Lezgi language
 * @example numToLezgi(1986) // 'агъзурни кIуьд вишни кьудкъанни ругуд'
 */
export function numToLezgiArray(num: number): string[] {
  if (isNaN(num)) {
    throw new Error('Provided value is not a number');
  }
  if (!Number.isInteger(num)) {
    throw new Error('Provided number is not an integer. Currently only integers are supported!');
  }
  const isNegative = num < 0;
  num = Math.abs(num);
  const result = getAtomicOrCompound(num)
    .filter((word) => word !== '')
    .map((word) => (word.endsWith('ни') ? [word, ' '] : word))
    .flat();
  return isNegative ? [MINUS, ' ', ...result] : result;
}

/**
 *
 * Function to convert an integer to Lezgi text representation
 *
 * @param num an integer number between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` (`-9007199254740991` and `9007199254740991`)
 * @returns string representation of the provided number in Lezgi language
 * @example numToLezgi(1986) // 'агъзурни кIуьд вишни кьудкъанни ругуд'
 */
export function numToLezgi(num: number): string {
  const resultArray = numToLezgiArray(num);
  return (
    resultArray
      // .map((word) => (word.endsWith('ни') || word === MINUS ? word + ' ' : word))
      .join('')
      .replaceAll('  ', ' ')
      .trim()
  );
}
