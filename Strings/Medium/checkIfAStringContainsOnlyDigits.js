function isOnlyDigits(str) {
  if (str.length === 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      return false;
    }
  }

  return true;
}

console.log(isOnlyDigits("12345")); // true
console.log(isOnlyDigits("123a5")); // false
console.log(isOnlyDigits("12.5")); // false
console.log(isOnlyDigits("-123")); // false
console.log(isOnlyDigits("mayur")); // false
console.log(isOnlyDigits("2345")); // true
