const assert = require("assert");
const normalizeDiacritics = require("../lib/index").normalize;
const stripDiacritics = require("../lib/index").strip;

describe("js-ro-diacritics", () => {
  describe("#normalize", () => {
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

  describe("#strip", () => {
    it("should strip lower-case official diacritics", () => {
      assert.equal(
        stripDiacritics("înainte, să, țintă, șarpe, cânepă"),
        "inainte, sa, tinta, sarpe, canepa");
    });

    it("should strip upper-case official diacritics", () => {
      assert.equal(
        stripDiacritics("Înainte, Ăla, Ținta, Șarpe, CÂNEPĂ"),
        "Inainte, Ala, Tinta, Sarpe, CANEPA");
    });

    it("should strip S and T with cedilla", () => {
      assert.equal(
        stripDiacritics("Şarpe, şarpe, ŢARA, ţara"),
        "Sarpe, sarpe, TARA, tara");
    });

    it("should strip A with tilde", () => {
      assert.equal(
        stripDiacritics("MÃR, mãr"),
        "MAR, mar");
    });
  });
});