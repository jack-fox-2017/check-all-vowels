var input = 'aqrst,ukeai,ffooo'

function dimensi() {
  var newInput= input.split(',')
  var result = [];
  for (i=0; i<newInput.length; i++) {
    var indiv = newInput[i].split('');
    result.push(indiv);
  }
return result;
}

console.log(dimensi(input));
