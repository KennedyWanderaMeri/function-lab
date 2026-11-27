function calculateTax(amount) {
  return amount * 0.10;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(calculateTax(100));            // 10
console.log(convertToUpperCase("hello"));  // "HELLO"
console.log(findMaximum(5, 9));            // 9


function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;}
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

console.log(isPalindrome("racecar"));              // true
console.log(isPalindrome("hello"));                // false
console.log(calculateDiscountedPrice(100, 20));    // 80





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };