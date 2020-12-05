const fs = require("fs");
const ReportRepair = require("./src/ReportRepair");

const expenses = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map(Number)
  .filter((n) => n > 0);

const reportRepair = new ReportRepair({ expenses, target: 2020 });

console.log(
  `Product of two entries that sum to 2020: ${reportRepair.pairProduct()}`
);
console.log(
  `Product of three entries that sum to 2020: ${reportRepair.tripleProduct()}`
);
