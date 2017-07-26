function checkAllVowels(str){
  //console.log(str.toLowerCase());
  let result = '';
  let newStr = str.toLowerCase();
   for(let i=0;i<newStr.length;i++){
     if(newStr[i]==='a' || newStr[i]==='e' || newStr[i]==='i' || newStr[i]==='o' || newStr[i]==='u'){
       result = true;
     }
     else{
       result =  false;
       break;
     }
   }
  return result;
}

console.log(checkAllVowels('Oooo'));
console.log(checkAllVowels('axiueo'));
console.log(checkAllVowels('oueib'));
console.log(checkAllVowels('eeeeee'));
