function isVowel(input) {
  // let state = false;
  let inputs = input.toLowerCase()
  let arr = []
  let arrSplit = inputs.split("")
  console.log(arrSplit);
  console.log(inputs);
  for(let i = 0; i < arrSplit.length; i++){
    if(arrSplit[i] === "a" || arrSplit[i] === "e" || arrSplit[i] === "i" || arrSplit[i] === "o" || arrSplit[i] === "u"){
      arr.push(arrSplit[i])
    }
  }
  // return arr
  if(arr.join("") == inputs){
    return true
  }
  return false
}
console.log(isVowel("AEI"));
console.log(isVowel("aei"));
console.log(isVowel("ganang"));
