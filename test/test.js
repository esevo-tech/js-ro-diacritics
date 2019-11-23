const assert = require("assert");
const normalizeDiacritics = require("../lib/index");

describe("js-ro-normalize-diacritics", () => {
  describe("#normalize-diacritics", () => {
    it("should convert lower case 't' with cedilla to comma", () => {
      assert.equal(normalizeDiacritics("ţara"), "țara");
    });

    it("should convert upper case 'T' with cedilla to comma", () => {
      assert.equal(normalizeDiacritics("Ţara"), "Țara");
    });

    it("should convert lower case 's' with cedilla to comma", () => {
      assert.equal(normalizeDiacritics("peştera"), "peștera");
    });

    it("should convert upper case 's' with cedilla to comma", () => {
      assert.equal(normalizeDiacritics("Şarpe"), "Șarpe");
    });

    it("should convert lower case 'a' with tilde to breve", () => {
      assert.equal(normalizeDiacritics("apã"), "apă");
    });

    it("should convert upper case 'A' with tilde to breve", () => {
      assert.equal(normalizeDiacritics("Ãsta"), "Ăsta")
    });

    it("should not affect correct diacritics", () => {
      const text = "Atept să vină primăvara.";
      assert.equal(normalizeDiacritics(text), text);
    });

    it("should convert multiple diacritics", () => {
      assert.equal(normalizeDiacritics("Aştept să vină primăvara şi vremea bună."), "Aștept să vină primăvara și vremea bună.");
    });

    it("should support empty strings", () => {
      assert.equal(normalizeDiacritics(""), "");
    });
  });
});