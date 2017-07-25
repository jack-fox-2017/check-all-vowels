function checkVowel(str) {
  var str = str.toLowerCase();
  var countV = 0;
    for (var i = 0; i < str.length; i++) {
      if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
        countV++
      }
    }
    if(countV === str.length) {
      return true
    }
    else {return false}
}

console.log(checkVowel('EkeeeeeeeaiiuuuuuaaaaooAAAAooooooooo'));
