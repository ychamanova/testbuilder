// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function (number) {
  var re = new RegExp("^4");
  if ((number.match(re) != null) &&
    number.length === 13 | 16 | 19)
    return "Visa";

  re = new RegExp("^5[1-5]");
  if ((number.match(re) != null) &&
    number.length === 16)
    return "MasterCard";

  re = new RegExp("^[38|39]");
  if ((number.match(re) != null) && number.length === 14)
    return "Diner's Club";

  re = new RegExp("^(34|37)");
  if ((number.match(re) != null) && number.length === 15)
    return "American Express";

  re = new RegExp("^6011|[644-649]|65");
  if ((number.match(re) != null) &&
    number.length === 16 | 19)
    return "Discover";

  re = new RegExp("^5018|5020|5038|6304");
  if ((number.match(re) != null) &&
    number.length === 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19)
    return "Maestro";

  re = new RegExp("^[622126-622925]|[624-626]|[6282-6288]");
  if ((number.match(re) != null) &&
    number.length === 16 | 17 | 18 | 19)
    return "China UnionPay";

  re = new RegExp("^4903|4905|4911|4936|564182|633110|6333|6759");
  if ((number.match(re) != null) &&
    number.length === 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19)
    return "Switch";



  return ""


};






/*

  if (
    cardNumber.length === 14 &&
    (cardNumber.startsWith("38") || cardNumber.startsWith("39"))
  ) {
    return "Diner's Club";
  } else if (
    cardNumber.length === 15 &&
    (cardNumber.startsWith("34") || cardNumber.startsWith("37"))
  ) {
    return "American Express";
  } else if (
    (cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19) &&
    cardNumber.startsWith("4")
  ) {
    return "Visa";
  } else if (
    cardNumber.length === 16 &&
    (cardNumber.startsWith("51") ||
      cardNumber.startsWith("52") ||
      cardNumber.startsWith("53") ||
      cardNumber.startsWith("54") ||
      cardNumber.startsWith("55"))
  ) {
    return "MasterCard";
  } else if (
    (cardNumber.length === 16 ||
      cardNumber.length === 19) &&
    (cardNumber.startsWith("6011") ||
      cardNumber.startsWith("644") ||
      cardNumber.startsWith("645") ||
      cardNumber.startsWith("646") ||
      cardNumber.startsWith("647") ||
      cardNumber.startsWith("648") ||
      cardNumber.startsWith("649") ||
      cardNumber.startsWith("65"))
  ) {
    return "Discover";
  }
  else if (
    (cardNumber.length === 12 ||
      cardNumber.length === 13 ||
      cardNumber.length === 14 ||
      cardNumber.length === 15 ||
      cardNumber.length === 16 ||
      cardNumber.length === 17 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19) &&
    (cardNumber.startsWith("5018") ||
      cardNumber.startsWith("5020") ||
      cardNumber.startsWith("5038") ||
      cardNumber.startsWith("6304"))
  ) {
    return "Maestro";
  }
*/





  // Once you've read this, go ahead and try to implement this function, then return to the console.

