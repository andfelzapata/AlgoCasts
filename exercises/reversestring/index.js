// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strToArray = Array.from(str)
  const length = strToArray.length
  let reversed = []
  for(currentIndex in strToArray) {
    const newIndex = length - currentIndex - 1;
    reversed.push(strToArray[newIndex])
  }
  return reversed.join("")
}

const reverseES6 = str => {
  const strToArray = Array.from(str)
  return strToArray.reverse().join("")
}

module.exports = {
  reverse,
  reverseES6
}
