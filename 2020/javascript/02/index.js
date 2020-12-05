const fs = require("fs");
const PasswordPhilosophy = require("./src/PasswordPhilosophy");

const entries = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((s) => s.trimEnd());

const passwordPhilosophy = new PasswordPhilosophy(entries);

console.log(
  `Valid passwords per sled rental shop policy: ${passwordPhilosophy.countValidSledRentalShopPasswords()}`
);
console.log(
  `Valid passwords per toboggan corporate policy: ${passwordPhilosophy.countValidTobogganCorporatePasswords()}`
);
