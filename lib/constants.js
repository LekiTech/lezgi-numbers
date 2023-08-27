"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numerals = exports.MINUS = exports.atomic = exports.nonillion = exports.octillion = exports.septillion = exports.sextillion = exports.quintillion = exports.quadrillion = exports.trillion = exports.billion = exports.million = void 0;
exports.million = 1e6; // 10^6;
exports.billion = 1e9; // 10^9;
exports.trillion = 1e12; // 10^12;
exports.quadrillion = 1e15; // 10^15;
exports.quintillion = 1e18; // 10^18;
exports.sextillion = 1e21; // 10^21;
exports.septillion = 1e24; // 10^24;
exports.octillion = 1e27; // 10^27;
exports.nonillion = 1e30; // 10^30;
exports.atomic = {
    0: 'нул',
    1: 'сад',
    2: 'кьвед',
    3: 'пуд',
    4: 'кьуд',
    5: 'вад',
    6: 'ругуд',
    7: 'ирид',
    8: 'муьжуьд',
    9: 'кIуьд',
    10: 'цIуд',
    20: 'къад',
    40: 'яхцIур',
    // 10^2
    100: 'виш',
    // 10^3
    1000: 'агъзур',
    // 10^6
    [exports.million]: 'миллион',
    // 10^9
    [exports.billion]: 'миллиард',
    // 10^12
    [exports.trillion]: 'триллион',
    // 10^15
    [exports.quadrillion]: 'квадриллион',
    // 10^18
    [exports.quintillion]: 'квинтиллион',
    // 10^21
    [exports.sextillion]: 'секстиллион',
    // 10^24
    [exports.septillion]: 'септиллион',
    // 10^27
    [exports.octillion]: 'октиллион',
    // 10^30
    [exports.nonillion]: 'нониллион',
};
exports.MINUS = 'минус';
const allowedFromHundred = { minStr: 'виш', min: 100, max: Infinity };
const allowedFromThousand = { minStr: 'агъзур', min: 1000, max: Infinity };
exports.numerals = {
    нул: { value: 0, requiresNext: false },
    сад: { value: 1, requiresNext: false },
    кьвед: { value: 2, requiresNext: false },
    кьве: { value: 2, requiresNext: true, allowedNext: allowedFromHundred },
    пуд: { value: 3, requiresNext: false, allowedNext: allowedFromHundred },
    кьуд: { value: 4, requiresNext: false, allowedNext: allowedFromHundred },
    вад: { value: 5, requiresNext: false, allowedNext: allowedFromHundred },
    ругуд: { value: 6, requiresNext: false, allowedNext: allowedFromHundred },
    ирид: { value: 7, requiresNext: false, allowedNext: allowedFromHundred },
    муьжуьд: { value: 8, requiresNext: false, allowedNext: allowedFromHundred },
    кIуьд: { value: 9, requiresNext: false, allowedNext: allowedFromHundred },
    цIуд: { value: 10, requiresNext: false, allowedNext: allowedFromThousand },
    цIусад: { value: 11, requiresNext: false, allowedNext: allowedFromThousand },
    цIикьвед: { value: 12, requiresNext: false, allowedNext: allowedFromThousand },
    цIипуд: { value: 13, requiresNext: false, allowedNext: allowedFromThousand },
    цIикьуд: { value: 14, requiresNext: false, allowedNext: allowedFromThousand },
    цIувад: { value: 15, requiresNext: false, allowedNext: allowedFromThousand },
    цIуругуд: { value: 16, requiresNext: false, allowedNext: allowedFromThousand },
    цIерид: { value: 17, requiresNext: false, allowedNext: allowedFromThousand },
    цIемуьжуьд: { value: 18, requiresNext: false, allowedNext: allowedFromThousand },
    цIекIуьд: { value: 19, requiresNext: false, allowedNext: allowedFromThousand },
    къад: { value: 20, requiresNext: false, allowedNext: allowedFromThousand },
    къанни: { value: 20, requiresNext: true, allowedNext: { minStr: 'сад', min: 1, max: 19 } },
    яхцIур: { value: 40, requiresNext: false, allowedNext: allowedFromThousand },
    яхцIурни: { value: 40, requiresNext: true, allowedNext: { minStr: 'сад', min: 1, max: 19 } },
    пудкъад: { value: 60, requiresNext: false, allowedNext: allowedFromThousand },
    пудкъанни: { value: 60, requiresNext: true, allowedNext: { minStr: 'сад', min: 1, max: 19 } },
    кьудкъад: { value: 80, requiresNext: false, allowedNext: allowedFromThousand },
    кьудкъанни: { value: 80, requiresNext: true, allowedNext: { minStr: 'сад', min: 1, max: 19 } },
    виш: { value: 100, requiresNext: false, allowedNext: allowedFromThousand },
    вишни: { value: 100, requiresNext: true, allowedNext: { minStr: 'сад', min: 1, max: 99 } },
    агъзур: { value: 1000, requiresNext: false },
    агъзурни: {
        value: 1000,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: 1000 },
    },
    миллион: { value: exports.million, requiresNext: false },
    миллионни: {
        value: exports.million,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.million },
    },
    миллиард: { value: exports.billion, requiresNext: false },
    миллиардни: {
        value: exports.billion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.billion },
    },
    триллион: { value: exports.trillion, requiresNext: false },
    триллионни: {
        value: exports.trillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.trillion },
    },
    квадриллион: { value: exports.quadrillion, requiresNext: false },
    квадриллионни: {
        value: exports.quadrillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.quadrillion },
    },
    квинтиллион: { value: exports.quintillion, requiresNext: false },
    квинтиллионни: {
        value: exports.quintillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.quintillion },
    },
    секстиллион: { value: exports.sextillion, requiresNext: false },
    секстиллионни: {
        value: exports.sextillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.sextillion },
    },
    септиллион: { value: exports.septillion, requiresNext: false },
    септиллионни: {
        value: exports.septillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.septillion },
    },
    октиллион: { value: exports.octillion, requiresNext: false },
    октиллионни: {
        value: exports.octillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.octillion },
    },
    нониллион: { value: exports.nonillion, requiresNext: false },
    нониллионни: {
        value: exports.nonillion,
        requiresNext: true,
        allowedNext: { minStr: 'сад', min: 1, max: exports.nonillion },
    },
};
