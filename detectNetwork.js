// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function (number) {

  var cardLength = number.length;

  var cardPrefix1 = number.slice(0, 1);
  var cardPrefix2 = number.slice(0, 2);
  var cardPrefix3 = number.slice(0, 3);
  var cardPrefix4 = number.slice(0, 4);
  var cardPrefix5 = number.slice(0, 5);
  var cardPrefix6 = number.slice(0, 6);

  var bank;


  if (cardLength === 14 &&
    (cardPrefix2 === "38" || cardPrefix2 === "39")
  ) {
    bank = "Diner's Club";
  } else if (
    cardLength === 15 &&
    (cardPrefix2 === "34" || cardPrefix2 === "37")
  ) {
    bank = "American Express";
  } else if (
    cardLength === 16 &&
    (parseInt(cardPrefix2) >= 51 && parseInt(cardPrefix2) <= 55)
  ) {
    bank = "MasterCard";
  } else if (
    (cardLength === 16 ||
      cardLength === 19) &&
    (cardPrefix4 === "6011") ||
    (parseInt(cardPrefix3) >= 644 && parseInt(cardPrefix3) <= 649) ||
    cardPrefix2 === "65"
  ) {
    bank = "Discover";
  }
  else if (
    (cardLength >= 12 && cardLength <= 19) &&
    ((cardPrefix4 === "5018") ||
      (cardPrefix4 === "5020") ||
      (cardPrefix4 === "5038") ||
      (cardPrefix4 === "6304"))
  ) {
    bank = "Maestro";
  } else if (
    (cardLength >= 16 && cardLength <= 19) &&
    (parseInt(cardPrefix6) >= 622126 && parseInt(cardPrefix6) <= 622925) ||
    (parseInt(cardPrefix3) >= 624 && parseInt(cardPrefix3) <= 626) ||
    (parseInt(cardPrefix4) >= 6282 && parseInt(cardPrefix4) <= 6288)
  ) {
    bank = "China UnionPay";
  } else if (
    (cardLength === 16 || cardLength === 18 || cardLength == 19) &&
    ((cardPrefix4 === "4903") ||
      (cardPrefix4 === "4905") ||
      (cardPrefix4 === "4911") ||
      (cardPrefix4 === "4936") ||
      (cardPrefix6 === "564182") ||
      (cardPrefix6 === "633110") ||
      (cardPrefix4 === "6333") ||
      (cardPrefix4 === "6759"))
  ) {
    bank = "Switch";
  } else if (
    (cardLength === 13 ||
      cardLength === 16 ||
      cardLength === 19) &&
    cardPrefix1 === "4"
  ) {
    bank = "Visa";
  }
  else {
    bank = undefined;
  }
  return bank;
};


