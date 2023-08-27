import { lezgiToNum } from '../src/lezgiToNum';

const correctValues: [string, number][] = [
  ['агъзурни кIуьд вишни кьудкъанни ругуд', 1986],
  ['агъзурни кIуьд вишни цIерид', 1917],
  ['агъзурни кIуьд вишни къанни цIерид', 1937],
  [
    'кьуд миллиардни вишни цIипуд миллионни кьве вишни пудкъанни ирид агъзурни вад вишни яхцIурни цIерид',
    4113267557,
  ],
  ['кьве агъзурни къанни кьуд', 2024],
  ['виш агъзур', 100000],
  ['кьве миллион', 2000000],
  ['кьве миллионни сад', 2000001],
  ['ирид виш', 700],
  ['агъзурни сад', 1001],
  ['вишни кьвед', 102],
  ['вишни яхцIурни цIерид агъзур', 157000],
  [
    'кIуьд квадриллионни ирид триллионни вишни кьудкъанни цIекIуьд миллиардни кьве вишни яхцIурни цIикьуд миллионни ирид вишни яхцIур агъзурни кIуьд вишни кьудкъанни цIусад',
    9007199254740991,
  ],
  ['минус вишни кьвед', -102],
  [
    'минус кIуьд квадриллионни ирид триллионни вишни кьудкъанни цIекIуьд миллиардни кьве вишни яхцIурни цIикьуд миллионни ирид вишни яхцIур агъзурни кIуьд вишни кьудкъанни цIусад',
    -9007199254740991,
  ],
  ['цIуд агъзурни вишни къанни сад', 10121],
  ['кьве вишни къанни сад', 221],
];

test.each(correctValues)('convert (%j) should equal "%s"', (input, expected) => {
  expect(lezgiToNum(input)).toEqual(expected);
});

const missingNextValue = [
  ['кьве', "Provided value 'кьве' requires a next value e.g. 'виш'"],
  ['вишни', "Provided value 'вишни' requires a next value e.g. 'сад'"],
];
test.each(missingNextValue)('(%j) should throw an error', (input, expected) => {
  expect(() => lezgiToNum(input)).toThrow(new Error(expected));
});

const incorrectNextValue = [
  [
    'кьве сад',
    "In the provided value 'кьве сад' should be a number between '100' and 'Infinity' after 'кьве',but 'сад' was provided which equals to '1'",
  ],
  [
    'агъзурни миллион',
    "In the provided value 'агъзурни миллион' should be a number between '1' and '1000' after 'агъзурни',but 'миллион' was provided which equals to '1000000'",
  ],
];
test.each(incorrectNextValue)('(%j) should throw an error', (input, expected) => {
  expect(() => lezgiToNum(input)).toThrow(new Error(expected));
});
