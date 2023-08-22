import { numToLezgi } from '../src/index';

const tests = [
  { input: 1986, expected: 'агъзурни кIуьд вишни кьудкъанни ругуд' },
  { input: 1917, expected: 'агъзурни кIуьд вишни цIерид' },
  { input: 1937, expected: 'агъзурни кIуьд вишни къанни цIерид' },
  {
    input: 4113267557,
    expected:
      'кьуд миллиардни вишни цIипуд миллионни кьве вишни пудкъанни ирид агъзурни вад вишни яхцIурни цIерид',
  },
  { input: 2024, expected: 'кьве агъзурни къанни кьуд' },
  { input: 100000, expected: 'виш агъзур' },
  { input: 2000000, expected: 'кьве миллион' },
  { input: 2000001, expected: 'кьве миллионни сад' },
  { input: 700, expected: 'ирид виш' },
  { input: 1001, expected: 'агъзурни сад' },
  { input: 102, expected: 'вишни кьвед' },
];

test.each(tests)('add(%j) should equal %d', ({ input, expected }) => {
  expect(numToLezgi(input)).toEqual(expected);
});
