// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strToArray = str.split("")
  const length = strToArray.length
  let reversed = []
  for (currentIndex in strToArray) {
    const newIndex = length - currentIndex - 1
    reversed.push(strToArray[newIndex])
  }
  return reversed.join("")
}

const reverseV2 = str =>
  str
    .split("")
    .reverse()
    .join("")

const reverseV3 = str => {
  let reversed = ""
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}

const reverseV4 = str => str.split("").reduce((reve, char) => char + reve, "")

module.exports = {
  reverse,
  reverseV2,
  reverseV3,
  reverseV4
}
