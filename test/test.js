const assert = require("assert");
const normalizeDiacritics = require("../lib/index");

describe("js-ro-normalize-diacritics", () => {
  describe("#normalize-diacritics", () => {
    it("should convert lower case 't' with cedilla to comma", () => {
      assert.equal(normalizeDiacritics("ţara"), "țara");
    });
  });
});