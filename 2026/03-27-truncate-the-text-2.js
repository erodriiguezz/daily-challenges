// Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

// Each character has a specific width:

// Letters	                        Width
// "ilI"	                        1
// "fjrt"	                        2
// "abcdeghkmnopqrstuvwxyzJL"	    3
// "ABCDEFGHKMNOPQRSTUVWXYZ"	    4

// The table above includes all upper and lower case letters. Additionally:

// Spaces (" ") have a width of 2

// Periods (".") have a width of 1

// If the given string is 50 units or less, return the string as-is, otherwise

// Truncate the string and add three periods at the end ("...") so it's total width, including the three periods, is as close as possible to 60 units without going over.

// Tests:
// 1. truncateText("The quick brown fox") should return "The quick brown f...".
// 2. truncateText("The silky smooth sloth") should return "The silky smooth s...".
// 3. truncateText("THE LOUD BRIGHT BIRD") should return "THE LOUD BRIG...".
// 4. truncateText("The fast striped zebra") should return "The fast striped z...".
// 5. truncateText("The big black bear") should return "The big black bear".

function getCharWidth(char) {
  if (char === " ") return 2;
  if (char === ".") return 1;
  if ("ilI".includes(char)) return 1;
  if ("fjrt".includes(char)) return 2;
  if ("abcdeghkmnopqrstuvwxyzJL".includes(char)) return 3;
  if ("ABCDEFGHKMNOPQRSTUVWXYZ".includes(char)) return 4;
  return 0;
}

function truncateText(str) {
  let totalWidth = 0;

  for (let char of str) {
    totalWidth += getCharWidth(char);
  }

  if (totalWidth <= 50) return str;

  let width = 0;
  let result = "";

  for (let char of str) {
    const charWidth = getCharWidth(char);

    if (width + charWidth > 47) break;

    width += charWidth;
    result += char;
  }

  return result + "...";
}
