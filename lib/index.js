/**
 * Given a Romanian string, finds characters used to represent diacritics in Romanian but which are 
 * not considered official and replaces them with the correct counter-part.
 * 
 * One such example would be replacing "ş" (S with cedilla) to the correct "ș" (S with comma).
 * 
 * @param {text} text a Romanian text for which to normalize the diacritics
 * @returns the given text with corrected diacritics (if any)
 */
function normalize(text) {
  return text
    .replace(/Ş/g, "Ș").replace(/ş/g, "ș")
    .replace(/Ţ/g, "Ț").replace(/ţ/g, "ț")
    .replace(/Ã/g, "Ă").replace(/ã/g, "ă");
}

module.exports = {
  normalize
};