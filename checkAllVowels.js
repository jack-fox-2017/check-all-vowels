function vowel(str) {
var temp = []

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O' ) {
      temp.push(str[i]);
      // console.log('true');
    }
    // else {
    //   // console.log('false');
    // }
  }
  // console.log(temp);
  if (temp.join('') === str) {
    return true
  }
   return false
}

console.log(vowel('A'));
console.log(vowel('AKU'));
