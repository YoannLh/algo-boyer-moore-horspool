
let t = "Bonjour Josiane comment allez vous ?"

let s = "comment"

const badCharTable = function(word) {
	const table = {}
	for(let i = 0; i < word.length - 1; i++) {
		table[word[i]] = word.length - i - 1
	}
	return table
}

const moore = function(needle, haystack) {
	const table = badCharTable(needle)
	let skip = 0
	while(haystack.length - skip >= needle.length) {
		let i = needle.length - 1
		while(haystack[skip + i] == needle[i]) {
			if(i == 0) {
				return skip
			}
			i--
		}
		skip += (table[haystack[skip + needle.length - 1]] || needle.length)
	}
	return -1
}

console.time('moore')
console.log(moore(s, t))
console.timeEnd('moore')