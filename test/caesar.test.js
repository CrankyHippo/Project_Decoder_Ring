// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("test1", () => {
    const actual = caesar("thinkful", 3); //> 'wklqnixo'
    const expected = "wklqnixo";
    expect(actual).to.eql(expected);
  });

  it("test2", () => {
    const actual = caesar("thinkful", -3); //> 'qefkhcri'
    const expected = "qefkhcri";
    expect(actual).to.eql(expected);
  });

  it("test3", () => {
    const actual = caesar("wklqnixo", 3, (encode = false)); //> 'thinkful'
    const expected = "thinkful";
    expect(actual).to.eql(expected);
  });

  it("test4", () => {
    const actual = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected);
  });

  it("test5", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, (encode = false)); //> 'this is a secret message!'
    const expected = "this is a secret message!";
    expect(actual).to.eql(expected);
  });

  it("test6", () => {
    const actual = caesar("thinkful"); //> false
    expect(actual).to.be.false;
  });

  it("test7", () => {
    const actual = caesar("thinkful", 99); //> false
    expect(actual).to.be.false;
  });

  it("test8", () => {
    const actual = caesar("thinkful", -26); //> false
    expect(actual).to.be.false;
  });

  it("should return false if shift is greater than 25 or less than -25", () => {
    const greater25 = caesar("Hello guys", 27);
    const less25 = caesar("welcome", -41);
    expect(greater25).to.be.false && expect(less25).to.be.false;
  });

  it("should return false is shift is not present", () => {
    const actual = caesar("extra");
    expect(actual).to.be.false;
  });

  it("ignores capital letters", () => {
    const expected = "apple";
    const actual = caesar("Dssoh", 3, (encode = false));
    expect(actual).to.eql(expected);
  });

  it("adjust shift past the alphabet", () => {
    const expected = "xqffo";
    const actual = caesar("happy", 16);
    expect(actual).to.eql(expected);
  });

  it("maintains spaces and non alphabetical characters", () => {
    const expected = "l'p vr kdssb!";
    const actual = caesar("I'm so happy!", 3);
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift is 0", () => {
    const actual = caesar("function", 0);
    expect(actual).to.be.false;
  });
});