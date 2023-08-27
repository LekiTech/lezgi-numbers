export const million = 1e6; // 10^6;
export const billion = 1e9; // 10^9;
export const trillion = 1e12; // 10^12;
export const quadrillion = 1e15; // 10^15;
export const quintillion = 1e18; // 10^18;
export const sextillion = 1e21; // 10^21;
export const septillion = 1e24; // 10^24;
export const octillion = 1e27; // 10^27;
export const nonillion = 1e30; // 10^30;

export const atomic = {
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
  [million]: 'миллион',
  // 10^9
  [billion]: 'миллиард',
  // 10^12
  [trillion]: 'триллион',
  // 10^15
  [quadrillion]: 'квадриллион',
  // 10^18
  [quintillion]: 'квинтиллион',
  // 10^21
  [sextillion]: 'секстиллион',
  // 10^24
  [septillion]: 'септиллион',
  // 10^27
  [octillion]: 'октиллион',
  // 10^30
  [nonillion]: 'нониллион',
};

export const MINUS = 'минус';

const allowedFromHundred = { minStr: 'виш', min: 100, max: Infinity };
const allowedFromThousand = { minStr: 'агъзур', min: 1000, max: Infinity };

export const numerals: Record<
  string,
  {
    value: number;
    requiresNext?: boolean;
    allowedNext?: { minStr: string; min: number; max: number };
  }
> = {
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
  миллион: { value: million, requiresNext: false },
  миллионни: {
    value: million,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: million },
  },
  миллиард: { value: billion, requiresNext: false },
  миллиардни: {
    value: billion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: billion },
  },
  триллион: { value: trillion, requiresNext: false },
  триллионни: {
    value: trillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: trillion },
  },
  квадриллион: { value: quadrillion, requiresNext: false },
  квадриллионни: {
    value: quadrillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: quadrillion },
  },
  квинтиллион: { value: quintillion, requiresNext: false },
  квинтиллионни: {
    value: quintillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: quintillion },
  },
  секстиллион: { value: sextillion, requiresNext: false },
  секстиллионни: {
    value: sextillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: sextillion },
  },
  септиллион: { value: septillion, requiresNext: false },
  септиллионни: {
    value: septillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: septillion },
  },
  октиллион: { value: octillion, requiresNext: false },
  октиллионни: {
    value: octillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: octillion },
  },
  нониллион: { value: nonillion, requiresNext: false },
  нониллионни: {
    value: nonillion,
    requiresNext: true,
    allowedNext: { minStr: 'сад', min: 1, max: nonillion },
  },
};
