function normalizeDiacritics(text) {
  return text
    .replace(/Ş/g, "Ș").replace(/ş/g, "ș")
    .replace(/Ţ/g, "Ț").replace(/ţ/g, "ț")
    .replace(/Ã/g, "Ă").replace(/ã/g, "ă");
}

module.exports = normalizeDiacritics;