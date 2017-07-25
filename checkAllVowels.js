
function checkAllVowels(str){
  //let vowels = ['a','i','u','e','o']
  let strsplit = str.toLowerCase().split('');

  for (let i =0 ; i < strsplit.length ; i++)
  {
    if (strsplit[i] !=='a'&&
         strsplit[i] !=='i'&&
         strsplit[i] !=='u'&&
         strsplit[i] !=='e'&&
         strsplit[i] !=='o')
        {
          return false;
        }
  }
return true;
}
console.log(checkAllVowels('ooiaaoeueue'))
