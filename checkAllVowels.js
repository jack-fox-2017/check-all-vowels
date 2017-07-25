var vowel = [
  'a','i','u','e','o','A','I','U','E','O'
]

function cv(sent) {
  for(x=0 ; x<vowel.length; x++) {
    if (sent == vowel[x]) {
      return true;
    }
  }
  return false;
}

function checkVowel(st) {
	var str =st.split('');
  var i=0;
  while(i<str.length) {
    if (cv(str[i]) == true)
    {
      i++;
    } else {return false;}
  }
  return true;
}

console.log(checkVowel('aaa')); //true
console.log(checkVowel('aaooo')); //true
console.log(checkVowel('aiueo')); //true
console.log(checkVowel('oioiuea')); //true
console.log(checkVowel('aiuodoe')); //false

// function checkVowel(st) {
// 	var str =st.split('');
//   // console.log(str);
//   var i=0;
//   while(i<str.length) {
//     // console.log(str[i]);
//     if(str[i] == 'a' ||str[i] == 'i' || str[i] == 'u' || str[i] == 'e' ||str[i] == 'o' ||
//     str[i] == 'A' ||str[i] == 'I' || str[i] == 'U' || str[i] == 'E' || str[i] == 'O')
//     {
//       i++;
//     } else {return false;}
//   }
//   return true;
// }
//
// console.log(checkVowel('aaa')); //true
// // console.log(checkVowel('aaooo')); //true
// // console.log(checkVowel('aiueo')); //true
// // console.log(checkVowel('oioiuea')); //true
// console.log(checkVowel('aiuodoe')); //false
