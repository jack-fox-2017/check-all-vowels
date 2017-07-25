function checkAllVowels(arr) {

  arr = arr.split('').map(function(x){return x.toLowerCase()}).filter(function(x){ if(x!=='a'&&x!=='i'&&x!=='u'&&x!=='e'&&x!=='o'){return x}}).join('');

  return arr===''?true:false;
}


console.log(checkAllVowels('aaAaaaaaa')); // false
console.log(checkAllVowels('aaaaabaaa')); // true
console.log(checkAllVowels('AiuEo')); // true
console.log(checkAllVowels('AiuEozwd')); //false
console.log(checkAllVowels('Aid21313')); //false
