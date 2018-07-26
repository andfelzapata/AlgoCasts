// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {}
  let max = 0
  let maxChar = ""
  str.split("").forEach(char => {
    charMap[char] = str.split("").reduce((prev, next) => {
      if (char === next) {
        return prev + 1
      }
      return prev + 0
    }, 0)
  })

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

function maxCharV2(str) {
  let charMap = {}
  let max = 0
  let maxChar = ""

  for(char of str) {
    charMap[char] ? charMap[char] ++ : charMap[char] = 1
  }

  for(char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char]
      charMax = char
    }
  }
  return charMax
}

module.exports = {
  maxChar,
  maxCharV2
}
