function checkAllVowels(str){

  let result = '';

   for(let i=0;i<str.length;i++){
     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
       result = true;
     }
     else{
       result =  false;
       break;
     }
   }
  return result;
}

console.log(checkAllVowels('oooo'));
console.log(checkAllVowels('axiueo'));
console.log(checkAllVowels('oueib'));
console.log(checkAllVowels('eeeeee'));
