class PasswordPhilosophy {
  constructor(entries) {
    this.entries = entries;
  }

  countValidSledRentalShopPasswords() {
    return this.entries.filter(this.validPerSledRentalShopPolicy).length;
  }

  countValidTobogganCorporatePasswords() {
    return this.entries.filter(this.validPerTobogganCorporatePolicy).length;
  }

  validPerSledRentalShopPolicy(entry) {
    const [range, target, password] = entry.split(" ");
    const [min, max] = range.split("-");
    const targetChar = target.slice(0, 1);
    const passwordChars = [...password];
    const occurrences = passwordChars.filter((pc) => pc === targetChar).length;

    return occurrences >= Number(min) && occurrences <= Number(max);
  }

  validPerTobogganCorporatePolicy(entry) {
    const [indices, target, password] = entry.split(" ");
    const [firstIndex, secondIndex] = indices.split("-");
    const targetChar = target.slice(0, 1);
    const passwordChars = [...password];

    return (
      (passwordChars[firstIndex - 1] === targetChar) ^
      (passwordChars[secondIndex - 1] === targetChar)
    );
  }
}

module.exports = PasswordPhilosophy;
