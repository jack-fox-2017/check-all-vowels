'use stric'

function checkVowels(huruf) {
  var temp = [];
  for(var i = 0; i < huruf.length; i++) {
    if (huruf[i] === 'a' || huruf[i] === 'i' || huruf[i] === 'u' || huruf[i] === 'e' || huruf[i] === 'o') {
      temp.push(huruf[i])
    }
  }
  if (temp.join('') === huruf) {
    return true
  } else {
    return false
  }
}


console.log(checkVowels('adam'));
console.log(checkVowels('aiueo'));
