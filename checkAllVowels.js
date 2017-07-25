'use strict'

var isVowel = str => {
  let arr = str.split('')
  let count = 0
  for (let i=0; i<arr.length; i++) {
    if (arr[i]=='a' || arr[i]=='i' || arr[i]=='u' || arr[i]=='e' || arr[i]=='o') {
      count++
    }
  }
  if (count==arr.length) {
    return true
  }
  else {
    return false
  }
}

console.log('aiuool', isVowel('aiuool'));
console.log('aeeeaoe', isVowel('aeeeaoe'));
console.log('kuda', isVowel('kuda'));
