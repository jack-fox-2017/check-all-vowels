function check(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var split = char.split('')
  // console.log(split.includes(!vowels));
  if (split.every(isVowel) == true) {
    return true
  }
  return false
}

function isVowel(element, index, array) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  return element.includes('a') + element.includes('i') + element.includes('e') + element.includes('u') + element.includes('o')
}


console.log(check('aeiuaioeuaioeuaioueaioueae'));
console.log(check('mobil'));
console.log(check('rhythm'));


////////////////////////RABU///////////////////////


function dimension(input) {
  arr = []
  firstSplit = input.split(',')
  for (var i = 0; i < firstSplit.length; i++) {
    secondSplit = firstSplit[i].split('')
    arr.push(secondSplit)
  }
  return arr
}

console.log(dimension('aselo,aselo,losed'));
