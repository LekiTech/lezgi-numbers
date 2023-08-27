"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToLezgi = void 0;
const constants_1 = require("./constants");
/**
 *
 * @param n number to separate into units
 * @returns array of units
 * @example separateNumberIntoUnits(123) // [100, 20, 3]
 */
function separateNumberIntoUnits(n) {
    if (n == 0)
        return [0];
    const arr = [];
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
    { start: constants_1.nonillion, end: constants_1.octillion },
    { start: constants_1.octillion, end: constants_1.septillion },
    { start: constants_1.septillion, end: constants_1.sextillion },
    { start: constants_1.sextillion, end: constants_1.quintillion },
    { start: constants_1.quadrillion, end: constants_1.quintillion },
    { start: constants_1.trillion, end: constants_1.quadrillion },
    { start: constants_1.billion, end: constants_1.trillion },
    { start: constants_1.million, end: constants_1.billion },
    { start: 1000, end: constants_1.million }, // thousand to million
];
function groupNumberUnitsToLezgiRange(arr) {
    let result = [];
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
function getTenPlusBase(num) {
    if (num < 10 || num >= 20) {
        throw new Error('Invalid number');
    }
    if (num === 10) {
        return constants_1.atomic[10];
    }
    const base10 = constants_1.atomic[10].slice(0, -2);
    if (num === 11 || num === 15 || num === 16) {
        return base10 + 'у';
    }
    else if (num < 15) {
        return base10 + 'и';
    }
    return base10 + 'е';
}
function getTwentyPlusBase(num) {
    return num === 20 ? constants_1.atomic[20] : 'къанни ';
}
function getThirtyPlusBase(num) {
    return getTwentyPlusBase(num) + getTenPlusBase(num - 20);
}
function getFourtyPlusBase(num) {
    return num === 40 ? constants_1.atomic[40] : constants_1.atomic[40] + 'ни ';
}
function getFiftyPlusBase(num) {
    return getFourtyPlusBase(num) + getTenPlusBase(num - 40);
}
function getSixtyPlusBase(num) {
    return num === 60 ? constants_1.atomic[3] + constants_1.atomic[20] : constants_1.atomic[3] + getTwentyPlusBase(num);
}
function getSeventyPlusBase(num) {
    return getSixtyPlusBase(61) + getTenPlusBase(num - 60);
}
function getEightyPlusBase(num) {
    return num === 80 ? constants_1.atomic[4] + constants_1.atomic[20] : constants_1.atomic[4] + getTwentyPlusBase(num);
}
function getNinetyPlusBase(num) {
    return getEightyPlusBase(81) + getTenPlusBase(num - 80);
}
function getHundredPlusBase(num) {
    return num % 100 === 0 ? constants_1.atomic[100] : constants_1.atomic[100] + 'ни ';
}
function getHundredPlusNumCount(numCount) {
    return numCount === 2 ? constants_1.atomic[numCount].slice(0, -1) : constants_1.atomic[numCount];
}
function getBetweenHundredAndThousand(num, followUpNumber) {
    const hundredsCount = num % 100 != 0 ? num - (num % 100) : num / 100;
    const hundredsCountInLezgi = getHundredPlusNumCount(hundredsCount);
    return hundredsCountInLezgi + ' ' + getHundredPlusBase(num + followUpNumber);
}
function getThousandPlusBase(num) {
    return num % 1000 === 0 ? constants_1.atomic[1000] : constants_1.atomic[1000] + 'ни ';
}
function getBetweenThousandAndMillion(num, followUpNumber) {
    const thousandsCount = num % 1000 != 0 ? num - (num % 1000) : num / 1000;
    const thousandsCountInLezgi = getHundredPlusNumCount(thousandsCount) ?? getCompound(thousandsCount);
    return thousandsCountInLezgi + ' ' + getThousandPlusBase(num + followUpNumber);
}
function getMillionPlusBase(num) {
    return num % constants_1.million === 0 ? constants_1.atomic[constants_1.million] : constants_1.atomic[constants_1.million] + 'ни ';
}
function getBetweenMillionAndBillion(num, followUpNumber) {
    const millionsCount = num % constants_1.million != 0 ? num - (num % constants_1.million) : num / constants_1.million;
    const millionsCountInLezgi = getHundredPlusNumCount(millionsCount) ?? getCompound(millionsCount);
    return millionsCountInLezgi + ' ' + getMillionPlusBase(num + followUpNumber);
}
function getBillionPlusBase(num) {
    return num % constants_1.billion === 0 ? constants_1.atomic[constants_1.billion] : constants_1.atomic[constants_1.billion] + 'ни ';
}
function getBetweenBillionAndTrillion(num, followUpNumber) {
    const billionsCount = num % constants_1.billion != 0 ? num - (num % constants_1.billion) : num / constants_1.billion;
    const billionsCountInLezgi = getHundredPlusNumCount(billionsCount) ?? getCompound(billionsCount);
    return billionsCountInLezgi + ' ' + getBillionPlusBase(num + followUpNumber);
}
function getTrillionPlusBase(num) {
    return num % constants_1.trillion === 0 ? constants_1.atomic[constants_1.trillion] : constants_1.atomic[constants_1.trillion] + 'ни ';
}
function getBetweenTrillionAndQuadrillion(num, followUpNumber) {
    const trillionsCount = num % constants_1.trillion != 0 ? num - (num % constants_1.trillion) : num / constants_1.trillion;
    const trillionsCountInLezgi = getHundredPlusNumCount(trillionsCount) ?? getCompound(trillionsCount);
    return trillionsCountInLezgi + ' ' + getTrillionPlusBase(num + followUpNumber);
}
function getQuadrillionPlusBase(num) {
    return num % constants_1.quadrillion === 0 ? constants_1.atomic[constants_1.quadrillion] : constants_1.atomic[constants_1.quadrillion] + 'ни ';
}
function getBetweenQuadrillionAndQuintillion(num, followUpNumber) {
    const quadrillionsCount = num % constants_1.quadrillion != 0 ? num - (num % constants_1.quadrillion) : num / constants_1.quadrillion;
    const quadrillionsCountInLezgi = getHundredPlusNumCount(quadrillionsCount) ?? getCompound(quadrillionsCount);
    return quadrillionsCountInLezgi + ' ' + getQuadrillionPlusBase(num + followUpNumber);
}
function getQuintillionPlusBase(num) {
    return num % constants_1.quintillion === 0 ? constants_1.atomic[constants_1.quintillion] : constants_1.atomic[constants_1.quintillion] + 'ни ';
}
function getBetweenQuintillionAndSextillion(num, followUpNumber) {
    const quintillionsCount = num % constants_1.quintillion != 0 ? num - (num % constants_1.quintillion) : num / constants_1.quintillion;
    const quintillionsCountInLezgi = getHundredPlusNumCount(quintillionsCount) ?? getCompound(quintillionsCount);
    return quintillionsCountInLezgi + ' ' + getQuintillionPlusBase(num + followUpNumber);
}
function getSextillionPlusBase(num) {
    return num % constants_1.sextillion === 0 ? constants_1.atomic[constants_1.sextillion] : constants_1.atomic[constants_1.sextillion] + 'ни ';
}
function getBetweenSextillionAndSeptillion(num, followUpNumber) {
    const sextillionsCount = num % constants_1.sextillion != 0 ? num - (num % constants_1.sextillion) : num / constants_1.sextillion;
    const sextillionsCountInLezgi = getHundredPlusNumCount(sextillionsCount) ?? getCompound(sextillionsCount);
    return sextillionsCountInLezgi + ' ' + getSextillionPlusBase(num + followUpNumber);
}
function getSeptillionPlusBase(num) {
    return num % constants_1.septillion === 0 ? constants_1.atomic[constants_1.septillion] : constants_1.atomic[constants_1.septillion] + 'ни ';
}
function getBetweenSeptillionAndOctillion(num, followUpNumber) {
    const septillionsCount = num % constants_1.septillion != 0 ? num - (num % constants_1.septillion) : num / constants_1.septillion;
    const septillionsCountInLezgi = getHundredPlusNumCount(septillionsCount) ?? getCompound(septillionsCount);
    return septillionsCountInLezgi + ' ' + getSeptillionPlusBase(num + followUpNumber);
}
function getOctillionPlusBase(num) {
    return num % constants_1.octillion === 0 ? constants_1.atomic[constants_1.octillion] : constants_1.atomic[constants_1.octillion] + 'ни ';
}
function getBetweenOctillionAndNonillion(num, followUpNumber) {
    const octillionsCount = num % constants_1.octillion != 0 ? num - (num % constants_1.octillion) : num / constants_1.octillion;
    const octillionsCountInLezgi = getHundredPlusNumCount(octillionsCount) ?? getCompound(octillionsCount);
    return octillionsCountInLezgi + ' ' + getOctillionPlusBase(num + followUpNumber);
}
function getNonillionPlusBase(num) {
    return num % constants_1.nonillion === 0 ? constants_1.atomic[constants_1.nonillion] : constants_1.atomic[constants_1.nonillion] + 'ни ';
}
function getCompound(num) {
    const units = separateNumberIntoUnits(num);
    const result = units.map((unit, i) => {
        if (i > 0 &&
            unit === 7 &&
            (units[i - 1] === 10 ||
                units[i - 1] === 30 ||
                units[i - 1] === 50 ||
                units[i - 1] === 70 ||
                units[i - 1] === 90)) {
            return constants_1.atomic[7].slice(1);
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
        if (unit > 1000 && unit < constants_1.million) {
            return getBetweenThousandAndMillion(unit, followUpNumber);
        }
        if (unit === constants_1.million) {
            return getMillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.million && unit < constants_1.billion) {
            return getBetweenMillionAndBillion(unit, followUpNumber);
        }
        if (unit === constants_1.billion) {
            return getBillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.billion && unit < constants_1.trillion) {
            return getBetweenBillionAndTrillion(unit, followUpNumber);
        }
        if (unit === constants_1.trillion) {
            return getTrillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.trillion && unit < constants_1.quadrillion) {
            return getBetweenTrillionAndQuadrillion(unit, followUpNumber);
        }
        if (unit === constants_1.quadrillion) {
            return getQuadrillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.quadrillion && unit < constants_1.quintillion) {
            return getBetweenQuadrillionAndQuintillion(unit, followUpNumber);
        }
        if (unit === constants_1.quintillion) {
            return getQuintillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.quintillion && unit < constants_1.sextillion) {
            return getBetweenQuintillionAndSextillion(unit, followUpNumber);
        }
        if (unit === constants_1.sextillion) {
            return getSextillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.sextillion && unit < constants_1.septillion) {
            return getBetweenSextillionAndSeptillion(unit, followUpNumber);
        }
        if (unit === constants_1.septillion) {
            return getSeptillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.septillion && unit < constants_1.octillion) {
            return getBetweenSeptillionAndOctillion(unit, followUpNumber);
        }
        if (unit === constants_1.octillion) {
            return getOctillionPlusBase(unit + followUpNumber);
        }
        if (unit > constants_1.octillion && unit < constants_1.nonillion) {
            return getBetweenOctillionAndNonillion(unit, followUpNumber);
        }
        if (unit === constants_1.nonillion) {
            return getNonillionPlusBase(unit + followUpNumber);
        }
        return units.length > 1 && unit === 0 ? '' : constants_1.atomic[unit] + ' ' || unit.toString();
    });
    return result.join('').replaceAll('  ', ' ').trim();
}
function getAtomicOrCompound(num) {
    if (constants_1.atomic[num]) {
        return constants_1.atomic[num];
    }
    else {
        return getCompound(num);
    }
}
/**
 *
 * Function to convert an integer to Lezgi text representation
 *
 * @param num an integer number between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` (`-9007199254740991` and `9007199254740991`)
 * @returns string representation of the provided number in Lezgi language
 * @example numToLezgi(1986) // 'агъзурни кIуьд вишни кьудкъанни ругуд'
 */
function numToLezgi(num) {
    if (isNaN(num)) {
        throw new Error('Provided value is not a number');
    }
    if (!Number.isInteger(num)) {
        throw new Error('Provided number is not an integer. Currently only integers are supported!');
    }
    const isNegative = num < 0;
    num = Math.abs(num);
    const result = getAtomicOrCompound(num);
    return isNegative ? `${constants_1.MINUS} ${result}` : result;
}
exports.numToLezgi = numToLezgi;
