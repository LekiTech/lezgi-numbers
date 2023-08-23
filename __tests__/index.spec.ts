import { numToLezgi } from '../src/index';

const correctValues: [number, string][] = [
  [1986, 'агъзурни кIуьд вишни кьудкъанни ругуд'],
  [1917, 'агъзурни кIуьд вишни цIерид'],
  [1937, 'агъзурни кIуьд вишни къанни цIерид'],
  [
    4113267557,
    'кьуд миллиардни вишни цIипуд миллионни кьве вишни пудкъанни ирид агъзурни вад вишни яхцIурни цIерид',
  ],
  [2024, 'кьве агъзурни къанни кьуд'],
  [100000, 'виш агъзур'],
  [2000000, 'кьве миллион'],
  [2000001, 'кьве миллионни сад'],
  [700, 'ирид виш'],
  [1001, 'агъзурни сад'],
  [102, 'вишни кьвед'],
  [-102, 'минус вишни кьвед'],
];

test.each(correctValues)('convert (%j) should equal "%s"', (input, expected) => {
  expect(numToLezgi(input)).toEqual(expected);
});

const nanValues = [NaN, Infinity, -Infinity, undefined, null, 'random string', {}, []];
test.each(nanValues)('(%j) should throw an error', (input: any) => {
  expect(() => numToLezgi(input)).toThrow();
});

const floatValues = [1.1, 1.5, 1.9, 1.00000000000001, 1.99999999999999];
test.each(floatValues)('(%j) should throw an error', (input: any) => {
  expect(() => numToLezgi(input)).toThrow();
});
