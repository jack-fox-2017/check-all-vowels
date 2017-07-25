function cekVokal(str) {
	var obj = {
		'a': true,
		'i': true,
		'u': true,
		'e': true,
		'o': true
	}

	for (var i = 0; i < str.length; i++) {
		if (obj[str[i]] === undefined) return false
	}
	return true
}

console.log(cekVokal('aaa')); //true
console.log(cekVokal('aaooo')); //true
console.log(cekVokal('aiueo')); //true
console.log(cekVokal('oioiuea')); //true
console.log(cekVokal('aiuodoe')); //false