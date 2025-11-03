const { mergeTimeRanges } = require('./my-module.js');

const testCases = [
  {
    name: "Example 1",
    ranges: [
      [1000, 2000],
      [2500, 4000],
      [3900, 4100],
      [8000, 9000],
      [9050, 9500]
    ],
    threshold: 200
  },
  {
    name: "Example 2",
    ranges: [
      [0, 10],
      [15, 20],
      [25, 30]
    ],
    threshold: 4
  },
  {
    name: "Example 3",
    ranges: [
      [0, 10],
      [12, 15],
      [17, 25],
      [27, 35]
    ],
    threshold: 3
  }
];

for (const test of testCases) {
  console.log(`\n--- ${test.name} ---`);
  console.log(mergeTimeRanges(test.ranges, test.threshold));
}
