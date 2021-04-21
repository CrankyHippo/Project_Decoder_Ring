// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const actual = substitution("message");
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const actual = substitution("party", "poiuytrewqlkjhgfdsamnxvcb");
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet does not contain unique/duplicate characters", () => {
    const actual = substitution("message", "mnbvcxzlkjhgfdsapoiuytreww");
    expect(actual).to.be.false;
  });

  it("should encode a message by using the given substitution alphabet", () => {
    const actual = substitution("message", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "nvhhztv";
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("MeSSage", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "nvhhztv";
    expect(actual).to.eql(expected);
  });

  it("should preserve spaces", () => {
    const actual = substitution("my message", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "nb nvhhztv";
    expect(actual).to.eql(expected);
  });

  it("should decode a message by using the given substitution alphabet", () => {
    const actual = substitution(
      "nvhhztv",
      "zyxwvutsrqponmlkjihgfedcba",
      (encode = false)
    );
    const expected = "message";
    expect(actual).to.eql(expected);
  });

  it("should preserve spaces when decoding", () => {
    const actual = substitution(
      "nb nvhhztv",
      "zyxwvutsrqponmlkjihgfedcba",
      (encode = false)
    );
    const expected = "my message";
    expect(actual).to.eql(expected);
  });
});
