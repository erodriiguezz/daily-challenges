// Given a string, determine if it has no repeating characters.

// A string has no repeats if it does not have the same character two or more times in a row.

// Tests:
// 1. hasNoRepeats("hi world") should return true.
// 2. hasNoRepeats("hello world") should return false.
// 3. hasNoRepeats("abcdefghijklmnopqrstuvwxyz") should return true.
// 4. hasNoRepeats("freeCodeCamp") should return false.
// 5. hasNoRepeats("The quick brown fox jumped over the lazy dog.") should return true.
// 6. hasNoRepeats("Mississippi") should return false.

function hasNoRepeats(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }

  return true;
}
