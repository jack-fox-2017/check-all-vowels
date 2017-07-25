'use strict'

function cekVowel(kata){
  let simpan = [];
  let join = ''
  for (var i = 0; i < kata.length; i++) {
    if( kata[i] == 'a' || kata[i] === 'i'|| kata[i] === 'u'|| kata[i] === 'e'|| kata[i] === 'o'){
      simpan.push(kata[i])
    }
  }
  if(simpan.join("") === kata){
    return true
  }else {
    return false
  }
}
//
// let join = ['a','i','e'].join("")
//
// console.log(join);

console.log(cekVowel("aiueoaiueoaiueoaieuo"));
console.log(cekVowel("tes"));
console.log(cekVowel("a"));
console.log(cekVowel("aaaaaaiiiiioooo"));







//
// let kata = "vokal";
//
//
// for(let i=0; i<kata2.length; i++){
//   if( kata[i] == 'a') //kata[i] === 'i'|| kata[i] === 'u'|| kata[i] === 'e'|| kata[i] === 'o'){
//   {  nilai = false
//   } else {
//     nilai = true
//   }
// }
// console.log(kata2);
// //console.log(nilai);
