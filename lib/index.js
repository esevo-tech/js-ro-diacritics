function normalizeDiacritics(text) {
  return text
    .replace("Ş", "Ș")
    .replace("ş", "ș")
    .replace("Ţ", "Ț")
    .replace("ţ", "ț")
}

module.exports = normalizeDiacritics;