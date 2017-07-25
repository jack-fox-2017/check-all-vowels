'use strict'


function cekVoc(str) {
var tampung = []
  for (var i = 0; i < str.length; i++) {
    if (str[i]=== 'a' || str[i]=== 'i' || str[i]=== 'u' || str[i]=== 'e' || str[i]=== 'o' ){
      tampung.push(str[i])
    }
  }
      if (tampung.join("") === str) {
        return true;
  }       else {
      return false;
  }
}

console.log(cekVoc('aku'));
console.log(cekVoc('auio'));
console.log(cekVoc('aiueo'));
