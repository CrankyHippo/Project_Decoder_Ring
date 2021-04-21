// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const repeat = function (str) {
    for (let i in str) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false;
      }
    }
    return true;
  };

  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  normalAlphabet = normalAlphabet.split("");

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !repeat(alphabet)) {
      return false;
    }

    // helper function to encode the string
    const encodeString = function (input, alphabet) {
      // convert to lowercase
      input = input.toLowerCase().split("");
      let result = "";

      // loop through the input
      for (char in input) {
        const character = input[char];
        let indexOfChar = normalAlphabet.indexOf(character); // index letter in the normal alphabet
        let encodedLetter = alphabet[indexOfChar]; // index letter in the encoded alphabet
        
        if (character === " ") {
          result += character;
        } else {
          result += encodedLetter;
        }
      }
      return result;
    };

    // helper function for decoding a string
    const decodeString = function (input, alphabet) {
      // convert string to lowercase
      input = input.toLowerCase().split("");
      let result = "";
      // loop through the input
      for (char in input) {
        const character = input[char];
        let indexOfChar = alphabet.indexOf(character); // normal alphabet
        let encodedLetter = normalAlphabet[indexOfChar]; // encoded alphabet

        if (character === " ") {
          result += character;
        } else {
          result += encodedLetter;
        }
      }
      return result;
    };

    // encode if result equals true
    if (encode) {
      return encodeString(input, alphabet);
    } else if (!encode) {
      return decodeString(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
