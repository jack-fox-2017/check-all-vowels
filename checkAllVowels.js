function vowels(input)
{
  let vocal = ['a','i','u','e','o']
  let array = [];
  let joins ;
  let huruf = input.toString()
  let string = huruf.toLowerCase()
  let convert_input = string.split('');
  //console.log(convert_input);

  for(let i=0; i<convert_input.length; i++)
  {

    if(convert_input[i]==vocal[0] || convert_input[i] == vocal[1] || convert_input[i]==vocal[2] || convert_input[i]==vocal[3] || convert_input[i]==vocal[4])
    {
      array.push(convert_input[i]);
      joins = array.join('');
    }

  }

  //console.log(joins);

  if(joins == string)
  {
    return true
  }

  return false

}

console.log(vowels("AIUEO"));
console.log(vowels("Hari"));
