const fs = require("fs");

const rules = fs.readFileSync("./input.txt", "utf-8").split("\n");

function buildBagMap(rules) {
  const outerBagRegex = RegExp(/^([a-z]+ [a-z]+) bags/);
  const innerBagRegex = RegExp(/(\d) ([a-z]+ [a-z]+) bags?/g);
  const bags = {};

  for (const rule of rules) {
    const outerBagMatch = outerBagRegex.exec(rule);

    if (!outerBagMatch) continue;

    const [, type] = outerBagMatch;
    const innerBags = {};

    bags[type] = innerBags;

    let innerBagMatch = innerBagRegex.exec(rule);

    while (innerBagMatch) {
      const [, count, type] = innerBagMatch;

      innerBags[type] = Number(count);

      innerBagMatch = innerBagRegex.exec(rule);
    }
  }

  return bags;
}

function getInnerBagCount(bags, type) {
  let total = 0;
  const innerBags = bags[type];

  for (const [type, count] of Object.entries(innerBags)) {
    total += count;
    total += getInnerBagCount(bags, type) * count;
  }

  return total;
}

const bags = buildBagMap(rules);
console.log(getInnerBagCount(bags, "shiny gold"));
