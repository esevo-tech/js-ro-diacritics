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