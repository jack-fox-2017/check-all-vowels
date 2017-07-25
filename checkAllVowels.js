function checkVowell(str) {
  let temp = []
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o'){
      temp.push(str[i])
    }
  }
  return temp.join('') === str ? true : false;
}


console.log(checkVowell('makan'));
console.log(checkVowell('aiueo'));
