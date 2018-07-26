 // --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if(n === 0)
    return n
  const toStringArray = n.toString().split('')
  if(toStringArray.includes('-')) {
    toStringArray.shift()
    return parseInt(toStringArray.reverse().join('')) * -1
  }
  return parseInt(toStringArray.reverse().join(''))
}

function reverseIntV2(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = {
  reverseInt,
  reverseIntV2
};
