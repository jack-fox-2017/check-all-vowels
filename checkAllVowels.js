function checkAllVowels(str){
  let vow = 'a i u e o'.split(' ');
  let countVow = 0;
  for(let i=0; i<vow.length; i++){
      for(let j=0; j<str.length; j++){
        if(str[j] == vow[i]){
          countVow++;
        }
      }
  }
  if(countVow != str.length){
    return false;
  }
  return true;
}

console.log(checkAllVowels('aaaaaaaa'));
console.log(checkAllVowels('aaabiueo'));
