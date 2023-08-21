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
  // console.log(JSON.stringify(arr, null, 2));
  const result = groupNumberUnitsToLezgiRange(arr);
  // console.log(JSON.stringify(result, null, 2));
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

function getTenPlusBase(num: number): string {
  if (num < 10 || num >= 20) {
    throw new Error('Invalid number');
  }
  if (num === 10) {
    return atomic[10];
  }
  const base10 = atomic[10].slice(0, -2);
  if (num === 11 || num === 15 || num === 16) {
    return base10 + 'у';
  } else if (num < 15) {
    return base10 + 'и';
  }
  return base10 + 'е';
}

function getTwentyPlusBase(): string {
  // no need in checking if num is 20, because 20 exist in constants
  return 'къанни ';
}

function getThirtyPlusBase(num: number): string {
  return getTwentyPlusBase() + getTenPlusBase(num - 20);
}

function getFourtyPlusBase(): string {
  // no need in checking if num is 40, because 40 exist in constants
  return atomic[40] + 'ни ';
}

function getFiftyPlusBase(num: number): string {
  return getFourtyPlusBase() + getTenPlusBase(num - 40);
}

function getSixtyPlusBase(num: number): string {
  return num === 60 ? atomic[3] + atomic[20] : atomic[3] + getTwentyPlusBase();
}

function getSeventyPlusBase(num: number): string {
  return getSixtyPlusBase(61) + getTenPlusBase(num - 60);
}

function getEightyPlusBase(num: number): string {
  return num === 80 ? atomic[4] + atomic[20] : atomic[4] + getTwentyPlusBase();
}

function getNinetyPlusBase(num: number): string {
  return getEightyPlusBase(81) + getTenPlusBase(num - 80);
}

function getHundredPlusBase(num: number): string {
  return num % 100 === 0 ? atomic[100] : atomic[100] + 'ни ';
}

function getHundredPlusNumCount(numCount: number): string {
  return numCount === 2 ? atomic[numCount].slice(0, -1) : atomic[numCount];
}

function getBetweenHundredAndThousand(num: number, followUpNumber: number): string {
  const hundredsCount = num % 100 != 0 ? num - (num % 100) : num / 100;
  const hundredsCountInLezgi = getHundredPlusNumCount(hundredsCount);
  return hundredsCountInLezgi + ' ' + getHundredPlusBase(num + followUpNumber);
}

function getThousandPlusBase(num: number): string {
  return num % 1000 === 0 ? atomic[1000] : atomic[1000] + 'ни ';
}

function getBetweenThousandAndMillion(num: number, followUpNumber: number): string {
  const thousandsCount = num % 1000 != 0 ? num - (num % 1000) : num / 1000;
  const thousandsCountInLezgi =
    getHundredPlusNumCount(thousandsCount) ?? getCompound(thousandsCount);
  return thousandsCountInLezgi + ' ' + getThousandPlusBase(num + followUpNumber);
}

function getMillionPlusBase(num: number) {
  return num % million === 0 ? atomic[million] : atomic[million] + 'ни ';
}

function getBetweenMillionAndBillion(num: number, followUpNumber: number): string {
  const millionsCount = num % million != 0 ? num - (num % million) : num / million;
  const millionsCountInLezgi = getHundredPlusNumCount(millionsCount) ?? getCompound(millionsCount);
  return millionsCountInLezgi + ' ' + getMillionPlusBase(num + followUpNumber);
}

function getBillionPlusBase(num: number): string {
  return num % billion === 0 ? atomic[billion] : atomic[billion] + 'ни ';
}

function getBetweenBillionAndTrillion(num: number, followUpNumber: number): string {
  const billionsCount = num % billion != 0 ? num - (num % billion) : num / billion;
  const billionsCountInLezgi = getHundredPlusNumCount(billionsCount) ?? getCompound(billionsCount);
  return billionsCountInLezgi + ' ' + getBillionPlusBase(num + followUpNumber);
}

function getTrillionPlusBase(num: number): string {
  return num % trillion === 0 ? atomic[trillion] : atomic[trillion] + 'ни ';
}

function getBetweenTrillionAndQuadrillion(num: number, followUpNumber: number): string {
  const trillionsCount = num % trillion != 0 ? num - (num % trillion) : num / trillion;
  const trillionsCountInLezgi =
    getHundredPlusNumCount(trillionsCount) ?? getCompound(trillionsCount);
  return trillionsCountInLezgi + ' ' + getTrillionPlusBase(num + followUpNumber);
}

function getQuadrillionPlusBase(num: number): string {
  return num % quadrillion === 0 ? atomic[quadrillion] : atomic[quadrillion] + 'ни ';
}

function getBetweenQuadrillionAndQuintillion(num: number, followUpNumber: number): string {
  const quadrillionsCount = num % quadrillion != 0 ? num - (num % quadrillion) : num / quadrillion;
  const quadrillionsCountInLezgi =
    getHundredPlusNumCount(quadrillionsCount) ?? getCompound(quadrillionsCount);
  return quadrillionsCountInLezgi + ' ' + getQuadrillionPlusBase(num + followUpNumber);
}

function getQuintillionPlusBase(num: number): string {
  return num % quintillion === 0 ? atomic[quintillion] : atomic[quintillion] + 'ни ';
}

function getBetweenQuintillionAndSextillion(num: number, followUpNumber: number): string {
  const quintillionsCount = num % quintillion != 0 ? num - (num % quintillion) : num / quintillion;
  const quintillionsCountInLezgi =
    getHundredPlusNumCount(quintillionsCount) ?? getCompound(quintillionsCount);
  return quintillionsCountInLezgi + ' ' + getQuintillionPlusBase(num + followUpNumber);
}

function getSextillionPlusBase(num: number): string {
  return num % sextillion === 0 ? atomic[sextillion] : atomic[sextillion] + 'ни ';
}

function getBetweenSextillionAndSeptillion(num: number, followUpNumber: number): string {
  const sextillionsCount = num % sextillion != 0 ? num - (num % sextillion) : num / sextillion;
  const sextillionsCountInLezgi =
    getHundredPlusNumCount(sextillionsCount) ?? getCompound(sextillionsCount);
  return sextillionsCountInLezgi + ' ' + getSextillionPlusBase(num + followUpNumber);
}

function getSeptillionPlusBase(num: number): string {
  return num % septillion === 0 ? atomic[septillion] : atomic[septillion] + 'ни ';
}

function getBetweenSeptillionAndOctillion(num: number, followUpNumber: number): string {
  const septillionsCount = num % septillion != 0 ? num - (num % septillion) : num / septillion;
  const septillionsCountInLezgi =
    getHundredPlusNumCount(septillionsCount) ?? getCompound(septillionsCount);
  return septillionsCountInLezgi + ' ' + getSeptillionPlusBase(num + followUpNumber);
}

function getOctillionPlusBase(num: number): string {
  return num % octillion === 0 ? atomic[octillion] : atomic[octillion] + 'ни ';
}

function getBetweenOctillionAndNonillion(num: number, followUpNumber: number): string {
  const octillionsCount = num % octillion != 0 ? num - (num % octillion) : num / octillion;
  const octillionsCountInLezgi =
    getHundredPlusNumCount(octillionsCount) ?? getCompound(octillionsCount);
  return octillionsCountInLezgi + ' ' + getOctillionPlusBase(num + followUpNumber);
}

function getNonillionPlusBase(num: number): string {
  return num % nonillion === 0 ? atomic[nonillion] : atomic[nonillion] + 'ни ';
}

function getCompound(num: number): string {
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
      return atomic[7].slice(1);
    }
    const followUpNumber = units.slice(i + 1).reduce((acc, num) => acc + num, 0);
    if (unit === 10) {
      return getTenPlusBase(unit + followUpNumber);
    }
    if (unit === 20) {
      return getTwentyPlusBase();
    }
    if (unit === 30) {
      return getThirtyPlusBase(unit + followUpNumber);
    }
    if (unit === 40) {
      return getFourtyPlusBase();
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
    return units.length > 1 && unit === 0 ? '' : atomic[unit] + ' ' || unit.toString();
  });
  return result.join('').replaceAll('  ', ' ').trim();
}

/**
 *
 * Main method to convert a number to Lezgi
 *
 * @param num number to convert to Lezgi
 * @returns string representation of the provided number in Lezgi language
 */
export function numToLezgi(num: number): string {
  if (atomic[num]) {
    return atomic[num];
  } else {
    return getCompound(num);
  }
}

const tests = [
  { num: 1986, expected: 'агъзурни кIуьд вишни кьудкъанни ругуд' },
  { num: 1917, expected: 'агъзурни кIуьд вишни цIерид' },
  { num: 1937, expected: 'агъзурни кIуьд вишни къанни цIерид' },
  {
    num: 4113267557,
    expected:
      'кьуд миллиардни вишни цIипуд миллионни кьве вишни пудкъанни ирид агъзурни вад вишни яхцIурни цIерид',
  },
  { num: 2024, expected: 'кьве агъзурни къанни кьуд' },
  { num: 100000, expected: 'виш агъзур' },
  { num: 2000000, expected: 'кьве миллион' },
  { num: 2000001, expected: 'кьве миллионни сад' },
  { num: 700, expected: 'ирид виш' },
  { num: 1001, expected: 'агъзурни сад' },
  { num: 102, expected: 'вишни кьвед' },
];

for (const test of tests) {
  const result = numToLezgi(test.num);
  const passed = result === test.expected;
  if (passed) {
    console.log('Test passed: ', test.num, ' = ', result);
  } else {
    console.error("FAILED\n  expected =\t'" + test.expected + "'\n  actual =\t'" + result + "'");
  }
}
