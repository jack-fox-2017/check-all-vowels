function checkAllVowels(str){
  let vow = 'aiueo';
  let countVow = 0;
  for(let i=0; i<str.length; i++){
    //console.log(vow.indexOf(str[i]));
    if(vow.indexOf(str[i]) != -1){
      countVow++;
    }
  }
  console.log(countVow);
  if(countVow != str.length){
    return false;
  }
  return true
}

console.log(checkAllVowels('aaaaaaaa'));
console.log(checkAllVowels('aaabiueo'));
