// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const actual = "25511331432351";
    const expected = polybius("welcome");
    expect(actual).to.eql(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "424212";
    const actual = polybius("jif");
    expect(actual).to.eql(expected);
  });

  it("should leave spaces as is", () => {
    const expected = "3251131343 12244251334134";
    const actual = polybius("hello friends");
    expect(actual).to.eql(expected);
  });

  it("should decode a message by translating each pair of numbers into a letter", () => {
    const expected = "understand";
    const actual = polybius("54334151243444113341", (encode = false));
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    const expected = "(i/j)(i/j)f";
    const actual = polybius("424212", (encode = false));
    expect(actual).to.eql(expected);
  });

  it("should leave spaces as is", () => {
    const expected = "hello fr(i/j)ends";
    const actual = polybius("3251131343 12244251334134", (encode = false));
    expect(actual).to.eql(expected);
  });

  it("should return false is length of all numbers is odd", () => {
    const actual = polybius("2111416", (encode = false));
    expect(actual).to.be.false;
  });
});
