function checkAllVowl(str) {
  let strSplit = str.split('')
  // console.log(strSplit);

  for(var x = 0; x < strSplit.length; x++){
    if (strSplit[x] === "a" || strSplit[x] === "i" ||
        strSplit[x] === "u" || strSplit[x] === "e" || strSplit[x] === "o" ) {
      return true
    } else {
      return false
    }
  }
}

console.log(checkAllVowl("matahari"));
console.log("=======================");
console.log(checkAllVowl("ao"));
