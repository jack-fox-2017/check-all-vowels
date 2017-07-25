
function cekVowell(cek){
  var a = cek.split('')
  var ind = 0;

  for(i = 0;i < a.length; i++){
    if(a[i]=='a'||a[i]=='i'||a[i]=='u'||a[i]=='e'||a[i]=='o'){
      ind += 0
    }
    else{ind += 1}

  }
if(ind>0){
  return false
}
else{return true}
return ind
}

console.log(cekVowell('mcca'))
console.log(cekVowell('aiueoaui'))
