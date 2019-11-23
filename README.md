# `js-ro-diacritics`

Functions for manipulating diacritics within a Romanian text (converting bad characters, stripping diacritics)

## Usage

### Normalizing diacritics
The `normalize` function takes a string as an argument and replaces all of its incorrect Romanian diacritics with their corresponding counterpart.

```javascript
const diacritics = require("js-ro-diacritics");
diacritics.normalize("Aştept să vină primăvara şi vremea bună.");
  // Output: Aștept să vină primăvara și vremea bună.
```

### Stripping diacritics
The `strip` function takes a string as an argument and replaces all the Romanian diacritics (the official character set, as well as incorrect representations of them) with their accentless counterpart.

```javascript
const diacritics = require("js-ro-diacritics");
diacritics.strip("Aştept să vină primăvara şi vremea bună.");
  // Output: Astept sa vina primavara si vremea buna.
```

## Character set
These Unicode characters are the correct representations of Romanian diacritics:

| Character | Unicode value | Unicode name                            |
| --------- | ------------- | --------------------------------------- |
| Ă         | U+0102        | LATIN CAPITAL LETTER A WITH BREVE       |
| ă         | U+0103        | LATIN SMALL LETTER A WITH BREVE         |
| Â         | U+00C2        | LATIN CAPITAL LETTER A WITH CIRCUMFLEX  |
| â         | U+00E2        | LATIN SMALL LETTER A WITH CIRCUMFLEX    |
| Ș         | U+0218        | LATIN CAPITAL LETTER S WITH COMMA BELOW |
| ș         | U+0219        | LATIN SMALL LETTER S WITH COMMA BELOW   |
| Ț         | U+021A        | LATIN CAPITAL LETTER T WITH COMMA BELOW |
| ț         | U+021B        | LATIN SMALL LETTER T WITH COMMA BELOW   |