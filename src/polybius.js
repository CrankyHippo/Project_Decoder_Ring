// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let polyCode = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {

    // helper function for encoding to a string
    const encodeString = function (input, polyCode) {
      let alphabet = "abcdefghklmnopqrstuvwxyz";
      alphabet = alphabet.split("");

      const letters = Object.values(polyCode);
      const numbers = Object.keys(polyCode);

      input = input.toLowerCase().split("");
      let result = "";

      for (char in input) {
        const letter = input[char];

        if (alphabet.includes(letter)) {
          // find the index of the letter in polyCode

          const letterIndex = letters.indexOf(letter); // index of the letter from encodeInput
          const encodedNumber = numbers[letterIndex]; // number based on the position of the letter from key

          result += encodedNumber;
        } else if (!alphabet.includes(letter)) {
          // if letter is i or j then just put 42 in the result
          if (letter === "i" || letter === "j") {
            result += "42";
          } else {
            // result for spaces or other non characters
            result += letter;
          }
        }
      }
      return result;
    };

    // helper function for decoding a string
    const decodeString = function (input, polyCode) {
      let result = "";

      const letters = Object.values(polyCode);
      const numbers = Object.keys(polyCode);

      // check input for odd number without the spaces
      if (input.replace(/ /g, "").length % 2 !== 0) {
        return false;
      } else {
        input = input.split("");

        // loop through the input
        for (let i = 0; i < input.length; i += 2) {
          // check to see if the input at i index is a space
          if (input[i] === " ") {
            // add a space to the result string
            result += " ";
            i--;
          } else if (input[i] + input[i + 1] === "42") {
            // if it's 42 then add i/j to the result string
            result += "(i/j)";
          } else {
            // compare the numbers to the polyCode
            const numberIndex = numbers.indexOf(input[i] + input[i + 1]);
            const decodedLetter = letters[numberIndex];

            result += decodedLetter;
          }
        }
      }
      return result;
    };

    // process input
    if (encode) {
      // if encode is true, encode input into numbers
      return encodeString(input, polyCode);
    } else {
      // decode input into a string
      return decodeString(input, polyCode);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
