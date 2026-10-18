// pseudocodo
// loop through string
// if character is number && not string.length -4
// return *
// if empty character or - return just that

function mask(card) {
  const mask = card.slice(0, -4);
  return mask.replace(/\d/g, "*") + card.slice(-4);
}
