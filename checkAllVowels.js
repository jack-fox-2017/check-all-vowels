function vowel(input){
  input = input.toLowerCase();
  var save =[];
  for (var i = 0; i < input.length; i++) {
    if(input[i] === 'a' || input[i] === 'i' || input[i] === 'u' || input[i] === 'e' || input[i] === 'o' ){
      save.push(input[i])
    }
  }
  if(save.join('') == input){
    return true
  } else{
    return false
  }
}

console.log(vowel('AaO'));
console.log(vowel('unknown'));
console.log(vowel('ajax'));
