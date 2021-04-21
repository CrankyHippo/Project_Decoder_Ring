// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");

  function caesar(input, shift, encode = true) {
    // early return of false if shift is not present
    // equal to 0
    // less than -25 or above 25
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // declare variable for the result
    let result = "";

    // declare a function for encode
    const encodeString = function (input, shift, encode = true) {
      const wordArray = input.toLowerCase().split("");
      // loop through the input
      wordArray.forEach((character) => {
        // if character is in alphabet
        if (alphabet.includes(character)) {
          const index = alphabet.indexOf(character);
          let newIndex;
          // if index plus shift is greater than 26
          if (index + shift >= 26) {
            // set new index to index plus shift minus 26
            newIndex = index + shift - 26;
            // else if index plus shift is less than 0
          } else if (index + shift < 0) {
            // set ne index to index plus shift plus 26
            newIndex = index + shift + 26;
            // else set new index to index plus shift
          } else {
            newIndex = index + shift;
          }
          // start processing the encoding
          const encodedLetter = alphabet[newIndex]; // this is the new letter based on the amount of shift
          result += encodedLetter;
          // else add character to result
        } else {
          result += character;
        }
      });
      return result;
    };

    // declare a function for decode
    const decodeString = function (input, shift, encode = false) {
      shift *= -1;

      const wordArray = input.toLowerCase().split("");
      // loop through input
      wordArray.forEach((character) => {
        // if character is in alphabet
        if (alphabet.includes(character)) {
          const index = alphabet.indexOf(character);
          let newIndex = index + shift;
          // if new index is less than zero
          if (newIndex < 0) {
            //add 26 to the new index
            newIndex += 26;
            // if new index is greater than 26
          } else if (newIndex >= 26) {
            // subtract 26 from new index
            newIndex -= 26;
          }

          // start processing the decoding
          const decodedLetter = alphabet[newIndex];
          result += decodedLetter;
          // else add character to result
        } else {
          result += character;
        }
      });
      return result;
    };

    // if encode is true
    if (encode) {
      return encodeString(input, shift, (encode = true));
      //else run decode string
    } else {
      return decodeString(input, shift, (encode = false));
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
