// Source - LeetCode, Algorithms, No. 9 - Number Palindrome

// Conditions:
// 1) input - x (type: number)
// 2) output - boolean (true if palindrome, false if not)
// Try to avoid convertation of X to string type

const isPalindrome = function (x) {
  if (x < 0) {
    return false
  } else if (x < 10) {
    return true
  }

  let reversedInt = 0
  let indicationInt = x

  while (indicationInt > 0) {
    reversedInt = reversedInt * 10 + (indicationInt % 10)
    indicationInt = Math.trunc(indicationInt / 10)
  }

  if (x === reversedInt) {
    return true
  } else {
    return false
  }
}